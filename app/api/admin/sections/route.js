// Admin API: read + write site-sections.js (block builder data)
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import * as gh from '@/lib/github-storage';

export const dynamic = 'force-dynamic';

function isAdminMode() {
  return process.env.NEXT_PUBLIC_ADMIN_MODE === '1' || Boolean(process.env.GITHUB_TOKEN);
}

function sectionsPath() {
  return path.join(process.cwd(), 'lib', 'site-sections.js');
}

function parseSections(source) {
  // Extract siteSections object between '= {' and ';' before the marker comment
  const start = source.indexOf('siteSections = {');
  const endMarker = source.indexOf('// ============================================================\n// MiniElephant', start > 0 ? start : 0);
  if (start < 0) throw new Error('Cannot locate siteSections object');
  const startBrace = source.indexOf('{', start);
  // Find the matching closing of the object: scan to the last '};' before "export" or end
  const tail = source.slice(startBrace);
  // The object ends at the last "};" followed by export or EOF — find balance
  let depth = 0;
  let endIdx = -1;
  for (let i = 0; i < tail.length; i++) {
    const ch = tail[i];
    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) { endIdx = i; break; }
    }
  }
  if (endIdx < 0) throw new Error('Cannot find object end');
  const literal = tail.slice(0, endIdx + 1);
  // eslint-disable-next-line no-new-func
  return new Function(`"use strict"; return (${literal});`)();
}

function serializeSections(obj) {
  const out = [];
  out.push('export const siteSections = {');
  for (const [pageKey, sections] of Object.entries(obj)) {
    out.push(`  ${JSON.stringify(pageKey)}: [`);
    for (const s of sections || []) {
      out.push('    {');
      out.push(`      id: ${JSON.stringify(s.id)},`);
      out.push(`      type: ${JSON.stringify(s.type)},`);
      out.push(`      content: ${JSON.stringify(s.content)},`);
      out.push(`      style: ${JSON.stringify(s.style || {})},`);
      out.push('    },');
    }
    out.push('  ],');
  }
  out.push('};');
  return out.join('\n');
}

async function loadSource() {
  if (gh.isConfigured()) {
    const { content, sha } = await gh.readFile('lib/site-sections.js');
    return { source: content, sha, mode: 'github' };
  }
  return { source: fs.readFileSync(sectionsPath(), 'utf-8'), sha: null, mode: 'local' };
}

export async function GET() {
  if (!isAdminMode()) return NextResponse.json({ error: 'Admin mode disabled' }, { status: 403 });
  try {
    const { source } = await loadSource();
    const sections = parseSections(source);
    return NextResponse.json({ ok: true, sections });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}

export async function PUT(request) {
  if (!isAdminMode()) return NextResponse.json({ error: 'Admin mode disabled' }, { status: 403 });
  try {
    const body = await request.json();
    const { sections } = body;
    if (!sections || typeof sections !== 'object') {
      return NextResponse.json({ error: 'sections must be an object' }, { status: 400 });
    }

    const { source, sha, mode } = await loadSource();

    // Keep the SECTION_TYPES export at top (everything BEFORE the siteSections line)
    const headerMatch = source.match(/^([\s\S]*?)\nexport const siteSections = \{/);
    if (!headerMatch) throw new Error('Cannot split site-sections.js');
    // header excludes the 'export const siteSections = {' line; serializer writes it fresh
    const header = headerMatch[1];

    const newSrc = header + '\n' + serializeSections(sections) + '\n';

    if (mode === 'github') {
      await gh.writeFile('lib/site-sections.js', newSrc, 'designer: update page sections', sha);
      return NextResponse.json({ ok: true, mode: 'github' });
    }
    fs.writeFileSync(sectionsPath(), newSrc, 'utf-8');
    return NextResponse.json({ ok: true, mode: 'local' });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
