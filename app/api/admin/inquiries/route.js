import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/adminAuth';
import { listInquiries, updateInquiryStatus } from '@/lib/supabase';

export const dynamic = 'force-dynamic';
const statuses = new Set(['new', 'contacted', 'quoted', 'closed']);

export async function GET(request) {
  if (!requireAdmin(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const inquiries = await listInquiries();
    return NextResponse.json({ ok: true, inquiries });
  } catch (error) {
    console.error('List inquiries error:', error);
    return NextResponse.json({ error: 'Unable to load inquiries.' }, { status: 500 });
  }
}

export async function PATCH(request) {
  if (!requireAdmin(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const { id, status } = await request.json();
    if (!id || !statuses.has(status)) return NextResponse.json({ error: 'Invalid inquiry status.' }, { status: 400 });
    const inquiry = await updateInquiryStatus(id, status);
    return NextResponse.json({ ok: true, inquiry });
  } catch (error) {
    console.error('Update inquiry error:', error);
    return NextResponse.json({ error: 'Unable to update inquiry.' }, { status: 500 });
  }
}
