import crypto from 'crypto';
import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/adminAuth';
import { sendOfficialReply } from '@/lib/sendEmail';
import { uploadInquiryAttachment } from '@/lib/supabase';

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

export async function POST(request) {
  if (!requireAdmin(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const form = await request.formData();
    const to = String(form.get('to') || '').trim().toLowerCase();
    const subject = String(form.get('subject') || '').trim();
    const message = String(form.get('message') || '').trim();
    const files = form.getAll('attachments').filter(file => file instanceof File && file.size > 0);

    if (!emailRegex.test(to)) return NextResponse.json({ error: 'Please enter a valid recipient email.' }, { status: 400 });
    if (!subject || !message) return NextResponse.json({ error: 'Recipient, subject and message are required.' }, { status: 400 });
    if (files.length > maxFiles) return NextResponse.json({ error: `Maximum ${maxFiles} attachments per email.` }, { status: 400 });
    if (files.reduce((total, file) => total + file.size, 0) > maxTotalBytes) return NextResponse.json({ error: 'The combined attachment size cannot exceed 40 MB.' }, { status: 400 });
    for (const file of files) {
      if (!allowedTypes.has(file.type) || file.size > maxFileBytes) return NextResponse.json({ error: 'Use PDF, JPG, PNG, WebP, DOCX or XLSX files up to 25 MB each.' }, { status: 400 });
    }

    const prepared = await Promise.all(files.map(async file => ({
      file,
      filename: safeFilename(file.name),
      bytes: Buffer.from(await file.arrayBuffer()),
    })));
    const mailAttachments = prepared.map(({ filename, bytes, file }) => ({ filename, content: bytes.toString('base64'), type: file.type, size: file.size }));
    const result = await sendOfficialReply({ to, subject: subject.slice(0, 180), message: message.slice(0, 12000), attachments: mailAttachments });
    if (!result.success) return NextResponse.json({ error: 'The official email could not be sent.' }, { status: 502 });

    // Keep private copies for internal reference, without requiring an inquiry record.
    const storedAttachments = await Promise.all(prepared.map(async ({ filename, bytes, file }, index) => {
      const path = `direct-mail/${Date.now()}-${index}-${crypto.randomUUID()}-${filename}`;
      await uploadInquiryAttachment(path, bytes, file.type);
      return { filename, path, contentType: file.type, size: file.size };
    }));

    return NextResponse.json({ ok: true, attachments: storedAttachments.length, message: 'Official email sent.' });
  } catch (error) {
    console.error('Direct official email error:', error);
    return NextResponse.json({ error: 'Failed to send official email.' }, { status: 500 });
  }
}
