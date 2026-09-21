import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/adminAuth';
import { createInquiryReply, getInquiry, listInquiryReplies, updateInquiryStatus } from '@/lib/supabase';
import { sendOfficialReply } from '@/lib/sendEmail';

export const dynamic = 'force-dynamic';
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function GET(request) {
  if (!requireAdmin(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const inquiryId = new URL(request.url).searchParams.get('inquiryId');
  if (!inquiryId) return NextResponse.json({ error: 'inquiryId is required.' }, { status: 400 });
  try {
    return NextResponse.json({ ok: true, replies: await listInquiryReplies(inquiryId) });
  } catch (error) {
    console.error('List replies error:', error);
    return NextResponse.json({ error: 'Unable to load reply history.' }, { status: 500 });
  }
}

export async function POST(request) {
  if (!requireAdmin(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const { inquiryId, subject, message } = await request.json();
    if (!inquiryId || !subject?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'Inquiry, subject and message are required.' }, { status: 400 });
    }
    const inquiry = await getInquiry(inquiryId);
    if (!inquiry || !emailRegex.test(inquiry.email)) return NextResponse.json({ error: 'Inquiry not found.' }, { status: 404 });

    const result = await sendOfficialReply({
      to: inquiry.email,
      subject: subject.trim().slice(0, 180),
      message: message.trim().slice(0, 12000),
    });
    if (!result.success) return NextResponse.json({ error: 'The official email could not be sent.' }, { status: 502 });

    const reply = await createInquiryReply({
      inquiry_id: inquiry.id,
      recipient_email: inquiry.email,
      subject: subject.trim().slice(0, 180),
      message: message.trim().slice(0, 12000),
    });
    if (inquiry.status === 'new') await updateInquiryStatus(inquiry.id, 'contacted');
    return NextResponse.json({ ok: true, reply });
  } catch (error) {
    console.error('Official reply error:', error);
    return NextResponse.json({ error: 'Failed to send official reply.' }, { status: 500 });
  }
}
