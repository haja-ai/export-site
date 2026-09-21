// Admin auth API: verify password, issue HMAC-signed token (stateless, serverless-safe)
import { NextResponse } from 'next/server';
import { createAdminToken } from '@/lib/adminAuth';

export const dynamic = 'force-dynamic';

export async function POST(request) {
  const { password } = await request.json().catch(() => ({}));
  const adminPassword = process.env.ADMIN_PASSWORD || '';
  if (!adminPassword) {
    return NextResponse.json({ ok: false, error: 'ADMIN_PASSWORD not set on server' }, { status: 500 });
  }
  if (password === adminPassword) {
    return NextResponse.json({ ok: true, token: createAdminToken(), expiresIn: 8 * 60 * 60 * 1000 });
  }
  return NextResponse.json({ ok: false, error: 'Wrong password' }, { status: 401 });
}
