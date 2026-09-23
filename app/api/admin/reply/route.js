import crypto from 'crypto';
import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/adminAuth';
import { createInquiryReply, getInquiry, listInquiryReplies, updateInquiryStatus, uploadInquiryAttachment } from '@/lib/supabase';
import { sendOfficialReply } from '@/lib/sendEmail';

export const dynamic = 'force-dynamic';
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const maxFiles = 5;
const maxFileBytes = 25 * 1024 * 1024;
const maxTotalBytes = 40 * 1024 * 1024;
const allowedTypes = new Set([
  'application/pdf', 'image/jpeg', 'image/png', 'image/webp',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
]);

function safeFilename(value) {
  return String(value || 'attachment').replace(/[^a-zA-Z0-9._-]/g, '_').slice(0, 120);
}

export async function GET(request) {
  if (!requireAdmin(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const inquiryId = new URL(request.url).searchParams.get('inquiryId');
  if (!inquiryId) return NextResponse.json({ error: 'inquiryId is required.' }, { status: 400 });
  try { return NextResponse.json({ ok: true, replies: await listInquiryReplies(inquiryId) }); }
  catch (error) { console.error('List replies error:', error); return NextResponse.json({ error: 'Unable to load reply history.' }, { status: 500 }); }
}

export async function POST(request) {
  if (!requireAdmin(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const form = await request.formData();
    const inquiryId = String(form.get('inquiryId') || '');
    const subject = String(form.get('subject') || '').trim();
    const message = String(form.get('message') || '').trim();
    const files = form.getAll('attachments').filter(file => file instanceof File && file.size > 0);
    if (!inquiryId || !subject || !message) return NextResponse.json({ error: 'Inquiry, subject and message are required.' }, { status: 400 });
    if (files.length > maxFiles) return NextResponse.json({ error: `Maximum ${maxFiles} attachments per reply.` }, { status: 400 });
    if (files.reduce((total, file) => total + file.size, 0) > maxTotalBytes) return NextResponse.json({ error: 'The combined attachment size cannot exceed 40 MB.' }, { status: 400 });
    for (const file of files) {
      if (!allowedTypes.has(file.type) || file.size > maxFileBytes) return NextResponse.json({ error: 'Use PDF, JPG, PNG, WebP, DOCX or XLSX files up to 25 MB each.' }, { status: 400 });
    }
    const inquiry = await getInquiry(inquiryId);
    if (!inquiry || !emailRegex.test(inquiry.email)) return NextResponse.json({ error: 'Inquiry not found.' }, { status: 404 });

    const mailAttachments = await Promise.all(files.map(async file => ({
      filename: safeFilename(file.name),
      content: Buffer.from(await file.arrayBuffer()).toString('base64'),
      type: file.type,
      size: file.size,
    })));
    const result = await sendOfficialReply({ to: inquiry.email, subject: subject.slice(0, 180), message: message.slice(0, 12000), attachments: mailAttachments });
    if (!result.success) return NextResponse.json({ error: 'The official email could not be sent.' }, { status: 502 });

    const storedAttachments = await Promise.all(files.map(async (file, index) => {
      const name = safeFilename(file.name);
      const path = `${inquiry.id}/${Date.now()}-${index}-${crypto.randomUUID()}-${name}`;
      await uploadInquiryAttachment(path, Buffer.from(await file.arrayBuffer()), file.type);
      return { filename: name, path, contentType: file.type, size: file.size };
    }));
    const reply = await createInquiryReply({ inquiry_id: inquiry.id, recipient_email: inquiry.email, subject: subject.slice(0, 180), message: message.slice(0, 12000), attachments: storedAttachments });
    if (inquiry.status === 'new') await updateInquiryStatus(inquiry.id, 'contacted');
    return NextResponse.json({ ok: true, reply });
  } catch (error) {
    console.error('Official reply error:', error);
    return NextResponse.json({ error: 'Failed to send official reply.' }, { status: 500 });
  }
}
