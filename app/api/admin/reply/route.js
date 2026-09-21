import { NextResponse } from 'next/server';
import { sendOfficialReply } from '@/lib/sendEmail';

export const dynamic = 'force-dynamic';

function isAdminMode() {
  return process.env.NEXT_PUBLIC_ADMIN_MODE === '1' || Boolean(process.env.GITHUB_TOKEN);
}

export async function POST(request) {
  if (!isAdminMode()) return NextResponse.json({ error: 'Admin mode disabled' }, { status: 403 });

  try {
    const { to, subject, message } = await request.json();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!to || !emailRegex.test(to)) {
      return NextResponse.json({ error: 'Please enter a valid customer email.' }, { status: 400 });
    }
    if (!subject?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'Subject and message are required.' }, { status: 400 });
    }

    const result = await sendOfficialReply({
      to: to.trim(),
      subject: subject.trim().slice(0, 180),
      message: message.trim().slice(0, 12000),
    });

    if (!result.success) {
      return NextResponse.json({ error: 'The official email could not be sent.', method: result.method }, { status: 502 });
    }
    return NextResponse.json({ ok: true, message: 'Reply sent from MiniElephant B2B.' });
  } catch (error) {
    console.error('Official reply error:', error);
    return NextResponse.json({ error: 'Failed to send official reply.' }, { status: 500 });
  }
}
