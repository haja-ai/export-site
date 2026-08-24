'use client';

// 区块级可视化建站器 — 添加/删除/排序/编辑区块，实时预览
import { useEffect, useState, useCallback } from 'react';
import AdminGate from '../../components/AdminGate';
import SectionRenderer from '../../components/SectionRenderer';

const PAGE_KEYS = [
  { key: 'home', label: '🏠 Home' },
  { key: 'about', label: '📄 About' },
  { key: 'faq', label: '❓ FAQ' },
  { key: 'contact', label: '📮 Contact' },
  { key: 'news', label: '📰 News' },
  { key: 'productsPage', label: '🛒 Products' },
];

const SECTION_TYPES = [
  { type: 'hero', label: '🖼 Hero Banner' },
  { type: 'stats', label: '📊 Stats Row' },
  { type: 'productGrid', label: '🛒 Product Grid' },
  { type: 'features', label: '✨ Feature Cards' },
  { type: 'textImage', label: '🖼 Text + Image' },
  { type: 'cta', label: '🚀 CTA Banner' },
  { type: 'text', label: '📝 Text Block' },
  { type: 'twoCol', label: '🗂 Two Columns' },
  { type: 'quote', label: '💬 Quote' },
  { type: 'spacer', label: '↕ Spacer' },
];

const defaultContent = {
  hero: {
    title: 'New Hero Title', subtitle: 'Hero subtitle text.', primaryLabel: 'Learn More', primaryHref: '/',
    secondaryLabel: 'Contact', secondaryHref: '/contact', bannerPoster: '/images/factory-aerial-poster.webp', programs: [],
  },
  stats: { title: 'Our Numbers', stats: [{ value: '10+', label: 'Years' }] },
  productGrid: { badge: 'PRODUCTS', title: 'Featured Models', description: '', viewAllLabel: '', viewAllHref: '/products', productSlugs: ['miniredone-i'] },
  features: { badge: 'WHY US', title: 'Why Choose Us', description: '', items: [{ title: 'Feature', desc: 'Description' }] },
  textImage: { badge: 'ABOUT', title: 'Title', paragraphs: ['Paragraph text.'], linkLabel: '', linkHref: '/about', stats: [] },
  cta: { title: 'Ready to start?', description: '', buttonLabel: 'Get a Quote', buttonHref: '/contact', secondaryLabel: '', secondaryHref: '/products' },
  text: { title: 'Section Title', paragraphs: ['Paragraph.'] },
  twoCol: { leftTitle: 'Left', leftText: 'Left text.', rightTitle: 'Right', rightText: 'Right text.' },
  quote: { text: 'Quote text', author: 'Author' },
  spacer: { height: 64 },
};

function BuilderInner() {
  const [sections, setSections] = useState(null);
  const [pageKey, setPageKey] = useState('home');
  const [selectedId, setSelectedId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [log, setLog] = useState([]);
  const [showAdd, setShowAdd] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/sections');
      const data = await res.json();
      if (!data.ok) throw new Error(data.error || 'Failed');
      setSections(data.sections);
    } catch (e) {
      setError(String(e));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  function updateContent(path, value) {
    setSections(prev => {
      const copy = JSON.parse(JSON.stringify(prev));
      const list = copy[pageKey] || [];
      const idx = list.findIndex(s => s.id === selectedId);
      if (idx < 0) return prev;
      const sec = list[idx];
      const parts = path.split('.');
      let obj = sec.content;
      for (let i = 0; i < parts.length - 1; i++) {
        if (!obj[parts[i]]) obj[parts[i]] = {};
        obj = obj[parts[i]];
      }
      obj[parts[parts.length - 1]] = value;
      copy[pageKey] = list;
      return copy;
    });
  }

  function updateStyle(key, value) {
    setSections(prev => {
      const copy = JSON.parse(JSON.stringify(prev));
      const list = copy[pageKey] || [];
      const idx = list.findIndex(s => s.id === selectedId);
      if (idx < 0) return prev;
      list[idx].style = { ...(list[idx].style || {}), [key]: value };
      copy[pageKey] = list;
      return copy;
    });
  }

  function addSection(type) {
    const id = `sec-${type}-${Date.now()}`;
    setSections(prev => {
      const copy = JSON.parse(JSON.stringify(prev));
      const list = copy[pageKey] || [];
      list.push({
        id,
        type,
        content: JSON.parse(JSON.stringify(defaultContent[type] || {})),
        style: { paddingY: 'lg', background: 'white' },
      });
      copy[pageKey] = list;
      return copy;
    });
    setSelectedId(id);
    setShowAdd(false);
    setLog(l => [...l, `➕ Added ${type} section`]);
  }

  function removeSection(id) {
    setSections(prev => {
      const copy = JSON.parse(JSON.stringify(prev));
      copy[pageKey] = (copy[pageKey] || []).filter(s => s.id !== id);
      return copy;
    });
    if (selectedId === id) setSelectedId(null);
    setLog(l => [...l, `🗑 Removed section ${id}`]);
  }

  function moveSection(id, dir) {
    setSections(prev => {
      const copy = JSON.parse(JSON.stringify(prev));
      const list = copy[pageKey] || [];
      const idx = list.findIndex(s => s.id === id);
      const target = idx + dir;
      if (idx < 0 || target < 0 || target >= list.length) return prev;
      [list[idx], list[target]] = [list[target], list[idx]];
      copy[pageKey] = list;
      return copy;
    });
    setLog(l => [...l, `↕ Moved ${id} ${dir > 0 ? 'down' : 'up'}`]);
  }

  function duplicateSection(id) {
    setSections(prev => {
      const copy = JSON.parse(JSON.stringify(prev));
      const list = copy[pageKey] || [];
      const idx = list.findIndex(s => s.id === id);
      if (idx < 0) return prev;
      const dup = JSON.parse(JSON.stringify(list[idx]));
      dup.id = `${dup.type}-${Date.now()}`;
      list.splice(idx + 1, 0, dup);
      copy[pageKey] = list;
      return copy;
    });
    setLog(l => [...l, `📋 Duplicated ${id}`]);
  }

  async function handleSave(deploy) {
    setBusy(true);
    setLog(l => [...l, deploy ? 'Saving sections + deploying...' : 'Saving sections...']);
    try {
      const res = await fetch('/api/admin/sections', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sections }),
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error || 'Save failed');
      setLog(l => [...l, '✅ Sections saved']);

      if (deploy) {
        const dep = await fetch('/api/admin/deploy', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: `designer: update ${pageKey} sections`, deploy: true }),
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

  if (loading) return <div style={{ padding: 40, fontFamily: 'system-ui' }}>Loading sections...</div>;
  if (error) return <div style={{ padding: 40, color: 'red', fontFamily: 'system-ui' }}>Error: {error}</div>;
  if (!sections) return null;

  const currentSections = sections[pageKey] || [];
  const selected = currentSections.find(s => s.id === selectedId);

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'system-ui', background: '#f3f4f6' }}>
      {/* Left: page tabs + section list */}
      <div style={{ width: 260, borderRight: '1px solid #e5e7eb', background: '#fff', overflowY: 'auto' }}>
        <div style={{ padding: 16, fontWeight: 700, borderBottom: '1px solid #e5e7eb' }}>🧩 Block Builder</div>
        <div style={{ padding: '10px 16px', fontSize: 11, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: 1 }}>Page</div>
        {PAGE_KEYS.map(t => (
          <button key={t.key} onClick={() => { setPageKey(t.key); setSelectedId(null); }}
            style={{ display: 'block', width: '100%', textAlign: 'left', padding: '8px 16px', border: 'none', borderBottom: '1px solid #f3f4f6', cursor: 'pointer',
              background: pageKey === t.key ? '#ecfdf5' : '#fff', color: pageKey === t.key ? '#047857' : '#111827', fontWeight: pageKey === t.key ? 600 : 400 }}>
            {t.label}
          </button>
        ))}

        <div style={{ padding: '10px 16px', fontSize: 11, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: 1, marginTop: 8 }}>
          Sections ({currentSections.length})
        </div>
        {currentSections.map((s, i) => (
          <div key={s.id}
            style={{ padding: '8px 16px', borderBottom: '1px solid #f3f4f6', cursor: 'pointer',
              background: selectedId === s.id ? '#ecfdf5' : '#fff' }}
            onClick={() => setSelectedId(s.id)}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 13, fontWeight: 500 }}>{i + 1}. {SECTION_TYPES.find(t => t.type === s.type)?.label || s.type}</span>
              <span style={{ display: 'flex', gap: 4 }}>
                <button onClick={(e) => { e.stopPropagation(); moveSection(s.id, -1); }} style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: 12, color: '#6b7280' }}>↑</button>
                <button onClick={(e) => { e.stopPropagation(); moveSection(s.id, 1); }} style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: 12, color: '#6b7280' }}>↓</button>
                <button onClick={(e) => { e.stopPropagation(); duplicateSection(s.id); }} style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: 12, color: '#047857' }}>⧉</button>
                <button onClick={(e) => { e.stopPropagation(); removeSection(s.id); }} style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: 12, color: '#dc2626' }}>✕</button>
              </span>
            </div>
          </div>
        ))}

        <div style={{ padding: 16 }}>
          <button onClick={() => setShowAdd(!showAdd)}
            style={{ width: '100%', padding: '10px', background: '#047857', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 600, cursor: 'pointer' }}>
            + Add Section
          </button>
          {showAdd && (
            <div style={{ marginTop: 8, maxHeight: 260, overflowY: 'auto', border: '1px solid #e5e7eb', borderRadius: 8 }}>
              {SECTION_TYPES.map(t => (
                <button key={t.type} onClick={() => addSection(t.type)}
                  style={{ display: 'block', width: '100%', textAlign: 'left', padding: '8px 12px', border: 'none', borderBottom: '1px solid #f3f4f6', cursor: 'pointer', background: '#fff', fontSize: 13 }}>
                  {t.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <div style={{ padding: 16, borderTop: '1px solid #e5e7eb', display: 'flex', gap: 8 }}>
          <button onClick={() => handleSave(false)} disabled={busy}
            style={{ flex: 1, padding: '8px', background: '#fff', border: '1px solid #d1d5db', borderRadius: 8, cursor: 'pointer', fontSize: 13 }}>💾 Save</button>
          <button onClick={() => handleSave(true)} disabled={busy}
            style={{ flex: 1, padding: '8px', background: '#047857', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer', fontSize: 13 }}>🚀 Deploy</button>
        </div>
        <div style={{ padding: '8px 16px' }}>
          <a href="/admin" style={{ color: '#047857', fontSize: 12 }}>← 产品编辑器</a> ·{' '}
          <a href="/admin/pages" style={{ color: '#047857', fontSize: 12 }}>文案编辑器</a>
        </div>
      </div>

      {/* Center: editor for selected section */}
      <div style={{ flex: 1, overflowY: 'auto', padding: 24, minWidth: 380 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <h1 style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>Block Builder — {PAGE_KEYS.find(p => p.key === pageKey)?.label}</h1>
        </div>

        {!selected ? (
          <div style={{ background: '#fff', borderRadius: 12, padding: 40, textAlign: 'center', border: '1px solid #e5e7eb', color: '#9ca3af' }}>
            Select a section on the left to edit, or click "+ Add Section" to create one.
          </div>
        ) : (
          <div style={{ background: '#fff', borderRadius: 12, padding: 20, border: '1px solid #e5e7eb' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <h2 style={{ fontSize: 16, fontWeight: 600, margin: 0 }}>
                {SECTION_TYPES.find(t => t.type === selected.type)?.label} <span style={{ color: '#9ca3af', fontWeight: 400, fontSize: 12 }}>({selected.id})</span>
              </h2>
            </div>

            {/* Style controls */}
            <div style={{ display: 'flex', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
              <div>
                <Label>Background</Label>
                <select value={selected.style?.background || 'white'} onChange={e => updateStyle('background', e.target.value)}
                  style={selectStyle}>
                  <option value="white">White</option>
                  <option value="gray">Light Gray</option>
                  <option value="cream">Cream</option>
                  <option value="teal">Teal (dark)</option>
                  <option value="dark">Dark</option>
                </select>
              </div>
              <div>
                <Label>Padding</Label>
                <select value={selected.style?.paddingY || 'lg'} onChange={e => updateStyle('paddingY', e.target.value)}
                  style={selectStyle}>
                  <option value="0">None</option>
                  <option value="sm">Small</option>
                  <option value="md">Medium</option>
                  <option value="lg">Large</option>
                </select>
              </div>
            </div>

            {/* Content editor: generic recursive */}
            <ContentEditor value={selected.content} onChange={(path, v) => updateContent(path, v)} />
          </div>
        )}

        {/* Log */}
        <div style={{ background: '#fff', borderRadius: 12, padding: 20, marginTop: 16, border: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: 14, fontWeight: 600, margin: '0 0 8px' }}>Action Log</h2>
          <pre style={{ whiteSpace: 'pre-wrap', fontSize: 12, color: '#374151', maxHeight: 150, overflowY: 'auto', margin: 0 }}>
            {log.length ? log.join('\n') : 'No actions yet.'}
          </pre>
        </div>
      </div>

      {/* Right: live preview */}
      <div style={{ width: '42%', minWidth: 380, borderLeft: '1px solid #e5e7eb', background: '#f9fafb', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '10px 16px', borderBottom: '1px solid #e5e7eb', fontWeight: 600, fontSize: 14, background: '#fff' }}>
          ⚡ Live Preview <span style={{ color: '#047857', fontSize: 11, fontWeight: 400 }}>(real-time)</span>
        </div>
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {/* 预览当前页面所有区块（全页预览） */}
          <div style={{ outline: selected ? `3px solid #047857` : 'none' }}>
            {currentSections.map((s, i) => (
              <div key={s.id} style={{ outline: selectedId === s.id ? '2px solid #10b981' : '1px dashed transparent', cursor: 'pointer' }} onClick={() => setSelectedId(s.id)}>
                <SectionRenderer section={s} />
              </div>
            ))}
          </div>
          <div style={{ padding: 20, textAlign: 'center', color: '#9ca3af', fontSize: 13 }}>
            — End of page —
          </div>
        </div>
      </div>
    </div>
  );
}

const selectStyle = { padding: '6px 10px', border: '1px solid #d1d5db', borderRadius: 6, fontSize: 13 };

function Label({ children }) {
  return <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 4, marginTop: 8 }}>{children}</div>;
}

function ContentEditor({ value, onChange, prefix = '' }) {
  if (Array.isArray(value)) {
    return (
      <div style={{ borderLeft: '2px solid #e5e7eb', paddingLeft: 12, marginLeft: 4 }}>
        <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 6 }}>{prefix || 'array'} — {value.length} items</div>
        {value.map((item, i) => (
          <div key={i} style={{ marginBottom: 8, border: '1px solid #f3f4f6', borderRadius: 8, padding: 8 }}>
            <ContentEditor value={item} onChange={onChange} prefix={prefix ? `${prefix}.${i}` : String(i)} />
            <button onClick={() => onChange(prefix, value.filter((_, j) => j !== i))} style={{ fontSize: 11, color: '#dc2626', border: 'none', background: 'none', cursor: 'pointer' }}>Remove item</button>
          </div>
        ))}
        <button onClick={() => onChange(prefix, [...value, { title: 'New', desc: '' }])}
          style={{ padding: '4px 10px', fontSize: 12, border: '1px dashed #9ca3af', borderRadius: 6, background: '#f9fafb', cursor: 'pointer', marginBottom: 8 }}>
          + Add item
        </button>
      </div>
    );
  }
  if (value && typeof value === 'object') {
    return (
      <div style={{ borderLeft: '2px solid #e5e7eb', paddingLeft: 12, marginLeft: 4 }}>
        <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 6 }}>{prefix || 'content'}</div>
        {Object.entries(value).map(([k, v]) => (
          <div key={k} style={{ marginBottom: 10 }}>
            {v && typeof v === 'object' ? (
              <ContentEditor value={v} onChange={onChange} prefix={prefix ? `${prefix}.${k}` : k} />
            ) : (
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, color: '#374151', marginBottom: 3 }}>{k}</div>
                <input
                  value={String(v ?? '')}
                  onChange={e => onChange(prefix ? `${prefix}.${k}` : k, e.target.value)}
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

export default function AdminBuilder() {
  return (
    <AdminGate>
      <BuilderInner />
    </AdminGate>
  );
}
