// Admin API: upload product image (local design tool)
// Saves to public/images/ and returns a URL. Only active in admin mode.
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

function isAdminMode() {
  return process.env.NEXT_PUBLIC_ADMIN_MODE === '1';
}

export async function POST(request) {
  if (!isAdminMode()) {
    return NextResponse.json({ error: 'Admin mode disabled' }, { status: 403 });
  }
  try {
    const formData = await request.formData();
    const file = formData.get('file');
    const slug = formData.get('slug') || 'upload';
    if (!file) return NextResponse.json({ error: 'No file' }, { status: 400 });

    // Read file buffer
    const buf = Buffer.from(await file.arrayBuffer());
    const origName = file.name || 'image.png';
    const ext = path.extname(origName).toLowerCase() || '.png';
    const safeExt = ['.png', '.jpg', '.jpeg', '.webp'].includes(ext) ? ext : '.png';

    // Destination: public/images/<slug>-<timestamp><ext>
    const ts = Date.now();
    const fname = `${slug}-${ts}${safeExt}`;
    const destDir = path.join(process.cwd(), 'public', 'images');
    if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
    const dest = path.join(destDir, fname);
    fs.writeFileSync(dest, buf);

    // Optional: compress to webp with ffmpeg if available — skip here, editor handles it.
    const url = `/images/${fname}`;
    return NextResponse.json({ ok: true, url, filename: fname, size: buf.length });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
