// Admin API: upload product image (design tool)
// Local mode: save to public/images. GitHub mode: push to repo via GitHub API.
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import * as gh from '@/lib/github-storage';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

function isAdminMode() {
  return process.env.NEXT_PUBLIC_ADMIN_MODE === '1' || Boolean(process.env.GITHUB_TOKEN);
}

export async function POST(request) {
  if (!isAdminMode()) return NextResponse.json({ error: 'Admin mode disabled' }, { status: 403 });
  try {
    const formData = await request.formData();
    const file = formData.get('file');
    const slug = formData.get('slug') || 'upload';
    if (!file) return NextResponse.json({ error: 'No file' }, { status: 400 });

    const buf = Buffer.from(await file.arrayBuffer());
    const origName = file.name || 'image.png';
    const ext = path.extname(origName).toLowerCase() || '.png';
    const safeExt = ['.png', '.jpg', '.jpeg', '.webp'].includes(ext) ? ext : '.png';

    const ts = Date.now();
    const fname = `${slug}-${ts}${safeExt}`;
    const url = `/images/${fname}`;

    if (gh.isConfigured()) {
      // GitHub mode: push image to repo
      await gh.writeBinary(`public/images/${fname}`, buf, `designer: upload ${fname}`);
      return NextResponse.json({ ok: true, url, filename: fname, size: buf.length, mode: 'github' });
    }

    // Local mode
    const destDir = path.join(process.cwd(), 'public', 'images');
    if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
    fs.writeFileSync(path.join(destDir, fname), buf);
    return NextResponse.json({ ok: true, url, filename: fname, size: buf.length, mode: 'local' });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
