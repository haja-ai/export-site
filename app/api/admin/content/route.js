// Admin API: read + write site-content.js (page-level text editor)
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

function isAdminMode() {
  return process.env.NEXT_PUBLIC_ADMIN_MODE === '1';
}

function contentPath() {
  return path.join(process.cwd(), 'lib', 'site-content.js');
}

function parseContent(source) {
  const match = source.match(/export\s+const\s+siteContent\s*=\s*({[\s\S]*?});\s*\n\s*\/\/\s*便捷读取函数|export\s+const\s+siteContent\s*=\s*({[\s\S]*?})\s*;?\s*\n\s*export\s+function/);
  // Fallback: everything between '= {' and the last '};' before the read function
  if (!match) {
    const start = source.indexOf('siteContent = {');
    const endMarker = source.indexOf('// 便捷读取函数');
    if (start < 0 || endMarker < 0) throw new Error('Cannot locate siteContent object');
    const startBrace = source.indexOf('{', start);
    const literal = source.slice(startBrace, endMarker).replace(/;\s*$/, '');
    return new Function(`"use strict"; return (${literal});`)();
  }
  const literal = match[1];
  return new Function(`"use strict"; return (${literal});`)();
}

// Deep-clone helper to keep plain objects (icons already removed from content)
function serializeContent(obj, indent = 0) {
  const pad = '  '.repeat(indent);
  if (Array.isArray(obj)) {
    return '[\n' + obj.map((v) => pad + '    ' + serializeValue(v, indent + 1)).join(',\n') + '\n' + pad + '  ]';
  }
  if (obj && typeof obj === 'object') {
    const keys = Object.keys(obj);
    const body = keys.map((k) => {
      const v = obj[k];
      if (v === undefined) return null;
      return `${pad}    ${JSON.stringify(k)}: ${serializeValue(v, indent + 1)}`;
    }).filter(Boolean);
    return '{\n' + body.join(',\n') + '\n' + pad + '  }';
  }
  return JSON.stringify(obj);
}

function serializeValue(v, indent) {
  return serializeContent(v, indent);
}

export async function GET() {
  if (!isAdminMode()) return NextResponse.json({ error: 'Admin mode disabled' }, { status: 403 });
  try {
    const src = fs.readFileSync(contentPath(), 'utf-8');
    const content = parseContent(src);
    return NextResponse.json({ ok: true, content });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}

export async function PUT(request) {
  if (!isAdminMode()) return NextResponse.json({ error: 'Admin mode disabled' }, { status: 403 });
  try {
    const body = await request.json();
    const { content } = body;
    if (!content || typeof content !== 'object') {
      return NextResponse.json({ error: 'content must be an object' }, { status: 400 });
    }

    const src = fs.readFileSync(contentPath(), 'utf-8');
    const tailMarker = '// 便捷读取函数';
    const tailIdx = src.indexOf(tailMarker);
    if (tailIdx < 0) throw new Error('Cannot find tail marker');

    const header = src.slice(0, src.indexOf('export const siteContent'));
    const serialized = serializeContent(content, 0);
    const tail = src.slice(tailIdx);

    const newSrc = header + 'export const siteContent = ' + serialized + ';\n\n' + tail;
    fs.writeFileSync(contentPath(), newSrc, 'utf-8');
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
