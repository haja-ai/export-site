'use client';

// Admin login gate — 密码保护，同事凭密码访问编辑器
// 通过 /api/admin/auth 验证，token 存 localStorage
import { useState, useEffect } from 'react';

export default function AdminGate({ children }) {
  const [authed, setAuthed] = useState(false);
  const [checking, setChecking] = useState(true);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (token) {
      // 简单校验：本地存了 token 就放行（服务端 API 会再次校验 ADMIN_MODE）
      setAuthed(true);
    }
    setChecking(false);
  }, []);

  async function handleLogin(e) {
    e.preventDefault();
    setBusy(true);
    setError('');
    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (data.ok && data.token) {
        localStorage.setItem('admin_token', data.token);
        setAuthed(true);
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (err) {
      setError(String(err));
    } finally {
      setBusy(false);
    }
  }

  if (checking) return <div style={{ padding: 40, fontFamily: 'system-ui' }}>Loading...</div>;

  if (!authed) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f3f4f6', fontFamily: 'system-ui' }}>
        <form onSubmit={handleLogin} style={{ background: '#fff', padding: 40, borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', width: 360, textAlign: 'center' }}>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 6 }}>MiniElephant Designer</div>
          <div style={{ fontSize: 13, color: '#6b7280', marginBottom: 24 }}>Enter the admin password to continue</div>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Admin password"
            style={{ width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: 8, fontSize: 14, marginBottom: 12 }}
            autoFocus
          />
          {error && <div style={{ color: '#dc2626', fontSize: 12, marginBottom: 8 }}>{error}</div>}
          <button type="submit" disabled={busy} style={{ width: '100%', padding: '10px', background: '#047857', color: '#fff', border: 'none', borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>
            {busy ? 'Checking...' : 'Login'}
          </button>
        </form>
      </div>
    );
  }

  return children;
}
