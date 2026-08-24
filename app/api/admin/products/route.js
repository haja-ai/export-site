// Admin API: read + write products data (local design tool)
// Security: only available when NEXT_PUBLIC_ADMIN_MODE=1 (local dev)
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

function isAdminMode() {
  return process.env.NEXT_PUBLIC_ADMIN_MODE === '1';
}

function productsFilePath() {
  return path.join(process.cwd(), 'lib', 'products.js');
}

// Parse wheelchairs array from products.js source using a minimal JS sandbox.
// We strip the export keyword and eval the remaining array literal with
// safe builtins (Date, etc). Products.js is our own file — safe to eval.
function parseProducts(source) {
  const match = source.match(/export\s+const\s+wheelchairs\s*=\s*([\s\S]*?);\s*\n\s*export\s+const\s+allProducts/);
  if (!match) throw new Error('Cannot locate wheelchairs array in products.js');
  const arrayLiteral = match[1];
  // eslint-disable-next-line no-new-func
  const fn = new Function(`"use strict"; return (${arrayLiteral});`);
  return fn();
}

// Serialize a product object back to JS source format (compact-ish, valid JS)
function serializeProduct(p) {
  const lines = [];
  lines.push('  {');
  lines.push(`    slug: ${JSON.stringify(p.slug)},`);
  lines.push(`    name: ${JSON.stringify(p.name)},`);
  lines.push(`    fullName: ${JSON.stringify(p.fullName)},`);
  lines.push(`    tagline: ${JSON.stringify(p.tagline)},`);
  // description — keep template-safe (no backticks)
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

export async function GET() {
  if (!isAdminMode()) {
    return NextResponse.json({ error: 'Admin mode disabled' }, { status: 403 });
  }
  try {
    const src = fs.readFileSync(productsFilePath(), 'utf-8');
    const products = parseProducts(src);
    return NextResponse.json({ ok: true, products });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}

export async function PUT(request) {
  if (!isAdminMode()) {
    return NextResponse.json({ error: 'Admin mode disabled' }, { status: 403 });
  }
  try {
    const body = await request.json();
    const { products } = body;
    if (!Array.isArray(products)) {
      return NextResponse.json({ error: 'products must be an array' }, { status: 400 });
    }

    const src = fs.readFileSync(productsFilePath(), 'utf-8');
    const existing = parseProducts(src);

    // Replace each product by slug; keep unknown products untouched
    const bySlug = {};
    for (const p of products) bySlug[p.slug] = p;
    const merged = existing.map(p => bySlug[p.slug] ? { ...p, ...bySlug[p.slug] } : p);

    // Split source: [before wheelchairs array] wheelchairs [tail after array]
    const beforeMatch = src.match(/^([\s\S]*?export\s+const\s+wheelchairs\s*=\s*\[)/);
    const tailMatch = src.match(/(\];\s*\n[\s\S]*)$/);
    if (!beforeMatch || !tailMatch) throw new Error('Cannot split products.js');
    const before = beforeMatch[1];
    const tail = tailMatch[1];

    const newSrc = before + '\n' + merged.map(serializeProduct).join('\n') + '\n' + tail;
    fs.writeFileSync(productsFilePath(), newSrc, 'utf-8');
    return NextResponse.json({ ok: true, count: merged.length });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
