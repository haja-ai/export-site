// Admin API: commit + push + deploy (local design tool)
// Runs git add/commit/push and vercel deploy. Only active in admin mode.
import { NextResponse } from 'next/server';
import { execSync } from 'child_process';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

function isAdminMode() {
  return process.env.NEXT_PUBLIC_ADMIN_MODE === '1';
}

function run(cmd, cwd) {
  try {
    const out = execSync(cmd, { cwd, encoding: 'utf-8', timeout: 300000, maxBuffer: 10 * 1024 * 1024 });
    return { ok: true, out: out.trim().split('\n').slice(-5).join('\n') };
  } catch (e) {
    return { ok: false, out: String(e.stdout || e.message || e).trim().split('\n').slice(-8).join('\n') };
  }
}

export async function POST(request) {
  if (!isAdminMode()) {
    return NextResponse.json({ error: 'Admin mode disabled' }, { status: 403 });
  }
  const body = await request.json().catch(() => ({}));
  const message = body.message || 'designer: update products';
  const deploy = body.deploy !== false;
  const cwd = process.cwd();

  const steps = [];
  steps.push(['git add -A', run('git add -A', cwd)]);
  steps.push(['git commit', run(`git commit -m "${message.replace(/"/g, '\\"')}"`, cwd)]);
  steps.push(['git push', run('git push origin master', cwd)]);

  let deployResult = { ok: true, out: 'skipped' };
  if (deploy) {
    const vercelToken = process.env.VERCEL_TOKEN;
    if (!vercelToken) {
      deployResult = { ok: false, out: 'VERCEL_TOKEN not set — skipped deploy' };
    } else {
      deployResult = run(
        `npx vercel deploy --prod --yes --token ${vercelToken}`,
        cwd
      );
    }
  }

  return NextResponse.json({ ok: true, steps, deploy: deployResult });
}
