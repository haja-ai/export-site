'use client';

import AdminGate from '../../components/AdminGate';
import PageContentPreview from '../../components/PageContentPreview';

import { useEffect, useState, useCallback } from 'react';

// 页面编辑 tab —— 编辑首页/About/FAQ/Contact/News/Products 的文案
const PAGE_TABS = [
  { key: 'home', label: '🏠 Home' },
  { key: 'about', label: '📄 About' },
  { key: 'faq', label: '❓ FAQ' },
  { key: 'contact', label: '📮 Contact' },
  { key: 'news', label: '📰 News' },
  { key: 'productsPage', label: '🛒 Products' },
];

// 简单字段树渲染器：递归展示对象为表单
function FieldTree({ value, onChange, path = [] }) {
  if (Array.isArray(value)) {
    return (
      <div style={{ borderLeft: '2px solid #e5e7eb', paddingLeft: 12, marginLeft: 4 }}>
        <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 6 }}>[{path.join('.')}] — {value.length} items</div>
        {value.map((item, i) => (
          <div key={i} style={{ marginBottom: 8, border: '1px solid #f3f4f6', borderRadius: 8, padding: 8 }}>
            <FieldTree value={item} onChange={(v) => { const arr = [...value]; arr[i] = v; onChange(arr); }} path={[...path, String(i)]} />
          </div>
        ))}
        <button onClick={() => onChange([...value, { label: 'New', value: '', title: '', desc: '', text: '', image: '', category: '', href: '' }])}
          style={{ padding: '4px 10px', fontSize: 12, border: '1px dashed #9ca3af', borderRadius: 6, background: '#f9fafb', cursor: 'pointer' }}>
          + Add item
        </button>
      </div>
    );
  }
  if (value && typeof value === 'object') {
    return (
      <div style={{ borderLeft: '2px solid #e5e7eb', paddingLeft: 12, marginLeft: 4 }}>
        <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 6 }}>{path.join('.') || 'root'}</div>
        {Object.entries(value).map(([k, v]) => (
          <div key={k} style={{ marginBottom: 10 }}>
            {v && typeof v === 'object' ? (
              <FieldTree value={v} onChange={(nv) => onChange({ ...value, [k]: nv })} path={[...path, k]} />
            ) : (
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, color: '#374151', marginBottom: 3 }}>{path.concat(k).join('.')}</div>
                <input
                  value={String(v ?? '')}
                  onChange={(e) => onChange({ ...value, [k]: e.target.value })}
                  style={{ width: '100%', padding: '7px 10px', border: '1px solid #d1d5db', borderRadius: 6, fontSize: 13 }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
  return null;
}

function AdminPagesInner() {
  const [siteContent, setSiteContent] = useState(null);
  const [draft, setDraft] = useState(null);
  const [activePage, setActivePage] = useState('home');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [log, setLog] = useState([]);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/content');
      const data = await res.json();
      if (!data.ok) throw new Error(data.error || 'Failed');
      setSiteContent(data.content);
      setDraft(JSON.parse(JSON.stringify(data.content)));
    } catch (e) {
      setError(String(e));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  function updatePage(newVal) {
    setDraft(prev => ({ ...prev, [activePage]: newVal }));
  }

  async function handleSave(deploy) {
    setBusy(true);
    setLog(l => [...l, deploy ? 'Saving pages + deploying...' : 'Saving pages locally...']);
    try {
      const res = await fetch('/api/admin/content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: draft }),
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error || 'Save failed');
      setLog(l => [...l, '✅ Pages saved']);

      if (deploy) {
        const dep = await fetch('/api/admin/deploy', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: 'designer: update page content', deploy: true }),
        });
        const depData = await dep.json();
        setLog(l => [...l, ...(depData.deploy?.out || 'deploy ok').split('\n')]);
        if (depData.deploy?.ok) setLog(l => [...l, '🚀 Deployed!']);
      }
    } catch (e) {
      setLog(l => [...l, `❌ ${e}`]);
    } finally {
      setBusy(false);
    }
  }

  if (loading) return <div style={{ padding: 40, fontFamily: 'system-ui' }}>Loading site content...</div>;
  if (error) return <div style={{ padding: 40, color: 'red', fontFamily: 'system-ui' }}>Error: {error}</div>;
  if (!draft) return null;

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'system-ui', background: '#f3f4f6' }}>
      {/* Left: page tabs */}
      <div style={{ width: 220, borderRight: '1px solid #e5e7eb', background: '#fff', overflowY: 'auto' }}>
        <div style={{ padding: 16, fontWeight: 700, borderBottom: '1px solid #e5e7eb' }}>Page Designer</div>
        <div style={{ padding: '12px 16px', fontSize: 11, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: 1 }}>Select Page</div>
        {PAGE_TABS.map(t => (
          <button
            key={t.key}
            onClick={() => setActivePage(t.key)}
            style={{
              display: 'block', width: '100%', textAlign: 'left', padding: '10px 16px',
              border: 'none', borderBottom: '1px solid #f3f4f6', cursor: 'pointer',
              background: activePage === t.key ? '#ecfdf5' : '#fff',
              color: activePage === t.key ? '#047857' : '#111827',
              fontWeight: activePage === t.key ? 600 : 400,
            }}
          >
            {t.label}
          </button>
        ))}
        <div style={{ padding: 16, fontSize: 12, color: '#9ca3af' }}>
          <a href="/admin" style={{ color: '#047857' }}>← 产品编辑器</a>
        </div>
      </div>

      {/* Center: fields */}
      <div style={{ flex: 1, overflowY: 'auto', padding: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <h1 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>Editing: {PAGE_TABS.find(t => t.key === activePage)?.label}</h1>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={() => handleSave(false)} disabled={busy}
              style={{ padding: '8px 16px', background: '#fff', border: '1px solid #d1d5db', borderRadius: 8, cursor: 'pointer' }}>💾 Save</button>
            <button onClick={() => handleSave(true)} disabled={busy}
              style={{ padding: '8px 16px', background: '#047857', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer' }}>🚀 Save + Deploy</button>
          </div>
        </div>

        <div style={{ background: '#fff', borderRadius: 12, padding: 20, border: '1px solid #e5e7eb' }}>
          <FieldTree value={draft[activePage]} onChange={updatePage} />
        </div>

        <div style={{ background: '#fff', borderRadius: 12, padding: 20, marginTop: 16, border: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: 16, fontWeight: 600, margin: '0 0 12px' }}>Action Log</h2>
          <pre style={{ whiteSpace: 'pre-wrap', fontSize: 12, color: '#374151', maxHeight: 200, overflowY: 'auto', margin: 0 }}>
            {log.length ? log.join('\n') : 'No actions yet.'}
          </pre>
        </div>
      </div>

      {/* Right: live preview (re-renders on every keystroke) */}
      <div style={{ width: '40%', minWidth: 340, borderLeft: '1px solid #e5e7eb', background: '#f9fafb', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '10px 16px', borderBottom: '1px solid #e5e7eb', fontWeight: 600, fontSize: 14, background: '#fff' }}>
          ⚡ Live Preview <span style={{ color: '#047857', fontSize: 11, fontWeight: 400 }}>(real-time)</span>
        </div>
        <div style={{ flex: 1, overflowY: 'auto' }}>
          <PageContentPreview pageKey={activePage} content={draft[activePage]} />
        </div>
      </div>
    </div>
  );
}

export default function AdminPages() {
  return (
    <AdminGate>
      <AdminPagesInner />
    </AdminGate>
  );
}
