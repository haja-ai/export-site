// GitHub storage helper — 让设计器在 Vercel serverless 上也能读写仓库文件
// 通过 GitHub Contents API 读写 lib/products.js / lib/site-content.js / public/images
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '';
const REPO = 'haja-ai/export-site';
const BRANCH = 'master';
const BASE = `https://api.github.com/repos/${REPO}/contents`;

async function gh(url, options = {}, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url, {
        ...options,
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
          Accept: 'application/vnd.github+json',
          'User-Agent': 'semwheelchair-admin',
          ...(options.headers || {}),
        },
      });
      if (!res.ok) {
        const body = await res.text();
        throw new Error(`GitHub ${res.status}: ${body.slice(0, 200)}`);
      }
      return res;
    } catch (e) {
      if (i === retries - 1) throw e;
      await new Promise(r => setTimeout(r, 2000));
    }
  }
  throw new Error('unreachable');
}

export async function readFile(path) {
  const res = await gh(`${BASE}/${path}`);
  const data = await res.json();
  if (data.encoding === 'base64') {
    return { content: Buffer.from(data.content, 'base64').toString('utf-8'), sha: data.sha };
  }
  return { content: null, sha: data.sha };
}

export async function readBinary(path) {
  const res = await gh(`${BASE}/${path}`);
  const data = await res.json();
  if (data.encoding === 'base64') {
    return { buffer: Buffer.from(data.content, 'base64'), sha: data.sha };
  }
  return { buffer: null, sha: data.sha };
}

export async function writeFile(path, content, message, sha) {
  const body = {
    message: message || `admin: update ${path}`,
    content: Buffer.from(content, 'utf-8').toString('base64'),
    branch: BRANCH,
  };
  if (sha) body.sha = sha;
  const res = await gh(`${BASE}/${path}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return res.json();
}

export async function writeBinary(path, buffer, message, sha) {
  const body = {
    message: message || `admin: upload ${path}`,
    content: buffer.toString('base64'),
    branch: BRANCH,
  };
  if (sha) body.sha = sha;
  const res = await gh(`${BASE}/${path}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return res.json();
}

export async function listDir(path) {
  const res = await gh(`${BASE}/${path}`);
  return res.json();
}

export function isConfigured() {
  return Boolean(GITHUB_TOKEN);
}
