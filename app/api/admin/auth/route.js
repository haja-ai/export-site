// Admin auth API: verify password, issue HMAC-signed token (stateless, serverless-safe)
import { NextResponse } from 'next/server';
import crypto from 'crypto';

export const dynamic = 'force-dynamic';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '';
const SECRET = process.env.ADMIN_SESSION_SECRET || ADMIN_PASSWORD;

function sign(payload) {
  return crypto.createHmac('sha256', SECRET).update(payload).digest('hex');
}

export async function POST(request) {
  const { password } = await request.json().catch(() => ({}));
  if (!ADMIN_PASSWORD) {
    return NextResponse.json({ ok: false, error: 'ADMIN_PASSWORD not set on server' }, { status: 500 });
  }
  if (password === ADMIN_PASSWORD) {
    const ts = Date.now();
    const payload = `admin:${ts}`;
    const token = `${payload}.${sign(payload)}`;
    return NextResponse.json({ ok: true, token, expiresIn: 8 * 60 * 60 * 1000 });
  }
  return NextResponse.json({ ok: false, error: 'Wrong password' }, { status: 401 });
}

// Export a helper for other routes to verify tokens
export function verifyToken(token) {
  if (!token || !SECRET) return false;
  const parts = token.split('.');
  if (parts.length !== 2) return false;
  const [payload, sig] = parts;
  const expected = crypto.createHmac('sha256', SECRET).update(payload).digest('hex');
  // timing-safe compare
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}
