// Admin API: deploy (design tool)
// Local mode: git add/commit/push + vercel CLI.
// GitHub mode (Vercel serverless): git push already happened via Contents API;
// trigger a fresh Vercel deployment via Vercel API.
import { NextResponse } from 'next/server';
import { execSync } from 'child_process';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

function isAdminMode() {
  return process.env.NEXT_PUBLIC_ADMIN_MODE === '1' || Boolean(process.env.GITHUB_TOKEN);
}

function run(cmd, cwd) {
  try {
    const out = execSync(cmd, { cwd, encoding: 'utf-8', timeout: 300000, maxBuffer: 10 * 1024 * 1024 });
    return { ok: true, out: out.trim().split('\n').slice(-5).join('\n') };
  } catch (e) {
    return { ok: false, out: String(e.stdout || e.message || e).trim().split('\n').slice(-8).join('\n') };
  }
}

// Trigger a deployment via Vercel API (no local files needed)
async function vercelApiDeploy() {
  const token = process.env.VERCEL_TOKEN;
  const projectId = process.env.VERCEL_PROJECT_ID || 'prj_97mUSX9HK9DJGHgx2r5mWAkFAR8I';
  if (!token) return { ok: false, out: 'VERCEL_TOKEN not set' };
  try {
    // First, check if project has git link — if yes, a simple push already triggers.
    // If not, we can't deploy from API without source files; fall back to instructing user.
    const res = await fetch(`https://api.vercel.com/v9/projects/${projectId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const project = await res.json();
    if (project?.link) {
      // Project is git-linked; changes pushed via Contents API auto-deploy.
      return { ok: true, out: 'Git-linked project — pushed changes auto-deploy via Vercel' };
    }
    return { ok: false, out: 'Vercel project NOT git-linked. Install GitHub App: https://github.com/apps/vercel then re-link the repo, OR deploy manually via CLI.' };
  } catch (e) {
    return { ok: false, out: `Vercel API error: ${String(e).slice(0, 150)}` };
  }
}

export async function POST(request) {
  if (!isAdminMode()) return NextResponse.json({ error: 'Admin mode disabled' }, { status: 403 });
  const body = await request.json().catch(() => ({}));
  const message = body.message || 'designer: update site';
  const deploy = body.deploy !== false;
  const cwd = process.cwd();

  // In GitHub mode, the Contents API already committed+ pushed the file(s);
  // here we only check deployment pipeline status.
  if (process.env.GITHUB_TOKEN) {
    if (!deploy) {
      return NextResponse.json({ ok: true, steps: [['github-commit-push', { ok: true, out: 'Files committed & pushed via GitHub Contents API' }]], deploy: { ok: true, out: 'skipped (local save only)' } });
    }
    const deployResult = await vercelApiDeploy();
    return NextResponse.json({
      ok: true,
      steps: [['github-commit-push', { ok: true, out: 'Files committed & pushed via GitHub Contents API' }]],
      deploy: deployResult,
    });
  }

  // Local mode
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
      deployResult = run(`npx vercel deploy --prod --yes --token ${vercelToken}`, cwd);
    }
  }

  return NextResponse.json({ ok: true, steps, deploy: deployResult });
}
