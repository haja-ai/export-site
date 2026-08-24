// Admin API: read + write products data (design tool)
// Local mode (NEXT_PUBLIC_ADMIN_MODE=1 + local fs) or GitHub mode (GITHUB_TOKEN set, for Vercel)
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import * as gh from '@/lib/github-storage';

export const dynamic = 'force-dynamic';

function isAdminMode() {
  return process.env.NEXT_PUBLIC_ADMIN_MODE === '1' || Boolean(process.env.GITHUB_TOKEN);
}

function productsFilePath() {
  return path.join(process.cwd(), 'lib', 'products.js');
}

function parseProducts(source) {
  const match = source.match(/export\s+const\s+wheelchairs\s*=\s*([\s\S]*?);\s*\n\s*export\s+const\s+allProducts/);
  if (!match) throw new Error('Cannot locate wheelchairs array in products.js');
  const arrayLiteral = match[1];
  // eslint-disable-next-line no-new-func
  const fn = new Function(`"use strict"; return (${arrayLiteral});`);
  return fn();
}

function serializeProduct(p) {
  const lines = [];
  lines.push('  {');
  lines.push(`    slug: ${JSON.stringify(p.slug)},`);
  lines.push(`    name: ${JSON.stringify(p.name)},`);
  lines.push(`    fullName: ${JSON.stringify(p.fullName)},`);
  lines.push(`    tagline: ${JSON.stringify(p.tagline)},`);
  lines.push(`    description:\n      ${JSON.stringify(p.description || '')},`);
  if (p.b2bPrice) lines.push(`    b2bPrice: ${JSON.stringify(p.b2bPrice)},`);
  lines.push(`    specs: [`);
  for (const s of p.specs || []) {
    lines.push(`      { label: ${JSON.stringify(s.label)}, value: ${JSON.stringify(s.value)} },`);
  }
  lines.push(`    ],`);
  lines.push(`    features: [`);
  for (const f of p.features || []) {
    lines.push(`      ${JSON.stringify(f)},`);
  }
  lines.push(`    ],`);
  lines.push(`    keyDifference: ${JSON.stringify(p.keyDifference || '')},`);
  lines.push(`    category: ${JSON.stringify(p.category || 'MiniRedone Series')},`);
  lines.push(`    images: [${(p.images || []).map(i => JSON.stringify(i)).join(', ')}],`);
  lines.push(`    colorVariant: ${p.colorVariant ? 'true' : 'false'},`);
  lines.push('  },');
  return lines.join('\n');
}

async function loadSource() {
  if (gh.isConfigured()) {
    const { content, sha } = await gh.readFile('lib/products.js');
    return { source: content, sha, mode: 'github' };
  }
  return { source: fs.readFileSync(productsFilePath(), 'utf-8'), sha: null, mode: 'local' };
}

export async function GET() {
  if (!isAdminMode()) return NextResponse.json({ error: 'Admin mode disabled' }, { status: 403 });
  try {
    const { source } = await loadSource();
    const products = parseProducts(source);
    return NextResponse.json({ ok: true, products });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}

export async function PUT(request) {
  if (!isAdminMode()) return NextResponse.json({ error: 'Admin mode disabled' }, { status: 403 });
  try {
    const body = await request.json();
    const { products } = body;
    if (!Array.isArray(products)) return NextResponse.json({ error: 'products must be an array' }, { status: 400 });

    const { source, sha, mode } = await loadSource();
    const existing = parseProducts(source);

    const bySlug = {};
    for (const p of products) bySlug[p.slug] = p;
    const merged = existing.map(p => bySlug[p.slug] ? { ...p, ...bySlug[p.slug] } : p);

    const beforeMatch = source.match(/^([\s\S]*?export\s+const\s+wheelchairs\s*=\s*\[)/);
    const tailMatch = source.match(/(\];\s*\n[\s\S]*)$/);
    if (!beforeMatch || !tailMatch) throw new Error('Cannot split products.js');
    const before = beforeMatch[1];
    const tail = tailMatch[1];

    const newSrc = before + '\n' + merged.map(serializeProduct).join('\n') + '\n' + tail;

    if (mode === 'github') {
      await gh.writeFile('lib/products.js', newSrc, 'designer: update products', sha);
      return NextResponse.json({ ok: true, count: merged.length, mode: 'github' });
    }
    fs.writeFileSync(productsFilePath(), newSrc, 'utf-8');
    return NextResponse.json({ ok: true, count: merged.length, mode: 'local' });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
