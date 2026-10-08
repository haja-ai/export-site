import { NextResponse } from 'next/server';
import { supabaseRequest } from '@/lib/supabase';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

function isAuthorized(request) {
  const secret = process.env.CRON_SECRET;
  const authorization = request.headers.get('authorization');
  return Boolean(secret && authorization === `Bearer ${secret}`);
}

// Vercel Cron invokes this once daily. The lightweight authenticated SELECT
// keeps the Supabase Free project active without reading customer details.
export async function GET(request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const response = await supabaseRequest('inquiries?select=id&limit=1');
    await response.json();
    return NextResponse.json({ ok: true, checkedAt: new Date().toISOString() });
  } catch (error) {
    console.error('Supabase keepalive failed:', error);
    return NextResponse.json({ ok: false, error: 'Supabase keepalive failed.' }, { status: 503 });
  }
}
