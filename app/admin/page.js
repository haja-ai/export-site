'use client';

import { useEffect, useState, useCallback } from 'react';

export default function AdminDesigner() {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(null);
  const [draft, setDraft] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [log, setLog] = useState([]);
  const [previewSrc, setPreviewSrc] = useState('');

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/products');
      const data = await res.json();
      if (!data.ok) throw new Error(data.error || 'Failed');
      setProducts(data.products);
      if (!selected && data.products.length) {
        setSelected(data.products[0].slug);
        setDraft(JSON.parse(JSON.stringify(data.products[0])));
        setPreviewSrc(`/products/${data.products[0].slug}`);
      }
    } catch (e) {
      setError(String(e));
    } finally {
      setLoading(false);
    }
  }, [selected]);

  useEffect(() => { load(); }, [load]);

  function selectProduct(slug) {
    const p = products.find(x => x.slug === slug);
    if (!p) return;
    setSelected(slug);
    setDraft(JSON.parse(JSON.stringify(p)));
    setPreviewSrc(`/products/${slug}`);
  }

  function update(field, value) {
    setDraft(prev => ({ ...prev, [field]: value }));
  }

  function updateSpec(idx, field, value) {
    setDraft(prev => {
      const specs = [...prev.specs];
      specs[idx] = { ...specs[idx], [field]: value };
      return { ...prev, specs };
    });
  }

  function updateFeature(idx, value) {
    setDraft(prev => {
      const features = [...prev.features];
      features[idx] = value;
      return { ...prev, features };
    });
  }

  function addFeature() {
    setDraft(prev => ({ ...prev, features: [...prev.features, 'New feature point'] }));
  }

  function removeFeature(idx) {
    setDraft(prev => ({ ...prev, features: prev.features.filter((_, i) => i !== idx) }));
  }

  function addSpec() {
    setDraft(prev => ({ ...prev, specs: [...prev.specs, { label: 'New Spec', value: '' }] }));
  }

  function removeSpec(idx) {
    setDraft(prev => ({ ...prev, specs: prev.specs.filter((_, i) => i !== idx) }));
  }

  async function handleUpload(file, imgIdx) {
    setBusy(true);
    setLog(l => [...l, `Uploading ${file.name}...`]);
    try {
      const fd = new FormData();
      fd.append('file', file);
      fd.append('slug', selected);
      const res = await fetch('/api/admin/upload', { method: 'POST', body: fd });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error || 'Upload failed');
      const images = [...draft.images];
      images[imgIdx] = data.url;
      setDraft(prev => ({ ...prev, images }));
      setLog(l => [...l, `✅ Uploaded → ${data.url} (${(data.size/1024).toFixed(0)}KB)`]);
      refreshPreview();
    } catch (e) {
      setLog(l => [...l, `❌ ${e}`]);
    } finally {
      setBusy(false);
    }
  }

  async function handleUploadNew(file) {
    setBusy(true);
    try {
      const fd = new FormData();
      fd.append('file', file);
      fd.append('slug', selected);
      const res = await fetch('/api/admin/upload', { method: 'POST', body: fd });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error || 'Upload failed');
      setDraft(prev => ({ ...prev, images: [...prev.images, data.url] }));
      setLog(l => [...l, `✅ Added image → ${data.url}`]);
    } catch (e) {
      setLog(l => [...l, `❌ ${e}`]);
    } finally {
      setBusy(false);
    }
  }

  function removeImage(imgIdx) {
    setDraft(prev => ({ ...prev, images: prev.images.filter((_, i) => i !== imgIdx) }));
  }

  function refreshPreview() {
    // Cache-bust preview iframe so edits show immediately
    const t = Date.now();
    setPreviewSrc(`/products/${selected}?t=${t}`);
  }

  async function handleSave(deploy) {
    setBusy(true);
    setLog(l => [...l, deploy ? 'Saving + deploying...' : 'Saving locally...']);
    try {
      // Persist to products.js
      const merged = products.map(p => p.slug === draft.slug ? draft : p);
      const res = await fetch('/api/admin/products', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ products: merged }),
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error || 'Save failed');
      setLog(l => [...l, `✅ Saved (${data.count} products)`]);

      if (deploy) {
        const dep = await fetch('/api/admin/deploy', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: `designer: update ${selected}`, deploy: true }),
        });
        const depData = await dep.json();
        setLog(l => [...l, ...(depData.deploy?.out || 'deploy ok').split('\n')]);
        if (depData.deploy?.ok) setLog(l => [...l, '🚀 Deployed!']);
        else setLog(l => [...l, '⚠️ Deploy issue — see output']);
      }
      await load();
    } catch (e) {
      setLog(l => [...l, `❌ ${e}`]);
    } finally {
      setBusy(false);
    }
  }

  if (loading) return <div style={{ padding: 40, fontFamily: 'system-ui' }}>Loading products...</div>;
  if (error) return <div style={{ padding: 40, color: 'red', fontFamily: 'system-ui' }}>Error: {error}</div>;

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'system-ui', background: '#f3f4f6' }}>
      {/* Left: product list */}
      <div style={{ width: 240, borderRight: '1px solid #e5e7eb', overflowY: 'auto', background: '#fff' }}>
        <div style={{ padding: 16, fontWeight: 700, borderBottom: '1px solid #e5e7eb' }}>MiniElephant Designer</div>
        {products.map(p => (
          <button
            key={p.slug}
            onClick={() => selectProduct(p.slug)}
            style={{
              display: 'block', width: '100%', textAlign: 'left', padding: '10px 16px',
              border: 'none', borderBottom: '1px solid #f3f4f6', cursor: 'pointer',
              background: selected === p.slug ? '#ecfdf5' : '#fff',
              color: selected === p.slug ? '#047857' : '#111827',
              fontWeight: selected === p.slug ? 600 : 400,
            }}
          >
            {p.name}
            <div style={{ fontSize: 11, color: '#9ca3af' }}>{p.fullName}</div>
          </button>
        ))}
        <div style={{ padding: 16, fontSize: 12, color: '#9ca3af' }}>
          Admin mode local tool. Changes commit + push to GitHub and deploy to Vercel.
        </div>
      </div>

      {/* Center: editor */}
      {draft && (
        <div style={{ flex: 1, overflowY: 'auto', padding: 24, minWidth: 420 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <h1 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>Editing: {draft.fullName}</h1>
            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={() => handleSave(false)} disabled={busy}
                style={{ padding: '8px 16px', background: '#fff', border: '1px solid #d1d5db', borderRadius: 8, cursor: 'pointer' }}>
                💾 Save
              </button>
              <button onClick={() => handleSave(true)} disabled={busy}
                style={{ padding: '8px 16px', background: '#047857', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer' }}>
                🚀 Save + Deploy
              </button>
            </div>
          </div>

          {/* Images */}
          <section style={{ background: '#fff', borderRadius: 12, padding: 20, marginBottom: 16, border: '1px solid #e5e7eb' }}>
            <h2 style={{ fontSize: 16, fontWeight: 600, margin: '0 0 12px' }}>Product Images</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
              {draft.images.map((img, idx) => (
                <div key={idx} style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: 8, textAlign: 'center' }}>
                  <img src={img} alt="" style={{ width: '100%', height: 100, objectFit: 'contain', background: '#f9fafb', borderRadius: 4 }} />
                  <input type="file" accept="image/*" onChange={e => e.target.files[0] && handleUpload(e.target.files[0], idx)}
                    style={{ width: '100%', fontSize: 11, marginTop: 6 }} />
                  <button onClick={() => removeImage(idx)} style={{ fontSize: 11, color: '#dc2626', border: 'none', background: 'none', cursor: 'pointer', marginTop: 4 }}>
                    Remove
                  </button>
                </div>
              ))}
              <div style={{ border: '1px dashed #d1d5db', borderRadius: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 120 }}>
                <input type="file" accept="image/*" onChange={e => e.target.files[0] && handleUploadNew(e.target.files[0])} style={{ fontSize: 11 }} />
                <div style={{ fontSize: 11, color: '#9ca3af', marginTop: 6 }}>Add new image</div>
              </div>
            </div>
          </section>

          {/* Basic info */}
          <section style={{ background: '#fff', borderRadius: 12, padding: 20, marginBottom: 16, border: '1px solid #e5e7eb' }}>
            <h2 style={{ fontSize: 16, fontWeight: 600, margin: '0 0 12px' }}>Title & Basic Info</h2>
            <Label>Name (nav / card title)</Label>
            <Input value={draft.name} onChange={v => update('name', v)} />
            <Label>Full Name (page title)</Label>
            <Input value={draft.fullName} onChange={v => update('fullName', v)} />
            <Label>Tagline</Label>
            <Input value={draft.tagline} onChange={v => update('tagline', v)} />
            <Label>Key Difference</Label>
            <Input value={draft.keyDifference || ''} onChange={v => update('keyDifference', v)} />
            <Label>Price (USD)</Label>
            <Input value={draft.b2bPrice || ''} onChange={v => update('b2bPrice', v)} />
            <Label>Category</Label>
            <Input value={draft.category || ''} onChange={v => update('category', v)} />
          </section>

          {/* Description */}
          <section style={{ background: '#fff', borderRadius: 12, padding: 20, marginBottom: 16, border: '1px solid #e5e7eb' }}>
            <h2 style={{ fontSize: 16, fontWeight: 600, margin: '0 0 12px' }}>Description</h2>
            <textarea
              value={draft.description || ''}
              onChange={e => update('description', e.target.value)}
              style={{ width: '100%', minHeight: 180, padding: 12, border: '1px solid #d1d5db', borderRadius: 8, fontFamily: 'inherit', fontSize: 13, lineHeight: 1.6 }}
            />
          </section>

          {/* Specs */}
          <section style={{ background: '#fff', borderRadius: 12, padding: 20, marginBottom: 16, border: '1px solid #e5e7eb' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <h2 style={{ fontSize: 16, fontWeight: 600, margin: 0 }}>Specifications</h2>
              <button onClick={addSpec} style={{ padding: '4px 12px', background: '#f3f4f6', border: '1px solid #d1d5db', borderRadius: 6, cursor: 'pointer', fontSize: 12 }}>+ Add</button>
            </div>
            {draft.specs.map((s, idx) => (
              <div key={idx} style={{ display: 'flex', gap: 8, marginBottom: 8, alignItems: 'center' }}>
                <input value={s.label} placeholder="Label" onChange={e => updateSpec(idx, 'label', e.target.value)}
                  style={{ flex: 1, padding: '6px 10px', border: '1px solid #d1d5db', borderRadius: 6, fontSize: 13 }} />
                <input value={s.value} placeholder="Value" onChange={e => updateSpec(idx, 'value', e.target.value)}
                  style={{ flex: 2, padding: '6px 10px', border: '1px solid #d1d5db', borderRadius: 6, fontSize: 13 }} />
                <button onClick={() => removeSpec(idx)} style={{ color: '#dc2626', border: 'none', background: 'none', cursor: 'pointer' }}>✕</button>
              </div>
            ))}
          </section>

          {/* Features */}
          <section style={{ background: '#fff', borderRadius: 12, padding: 20, marginBottom: 16, border: '1px solid #e5e7eb' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <h2 style={{ fontSize: 16, fontWeight: 600, margin: 0 }}>Features</h2>
              <button onClick={addFeature} style={{ padding: '4px 12px', background: '#f3f4f6', border: '1px solid #d1d5db', borderRadius: 6, cursor: 'pointer', fontSize: 12 }}>+ Add</button>
            </div>
            {draft.features.map((f, idx) => (
              <div key={idx} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                <input value={f} onChange={e => updateFeature(idx, e.target.value)}
                  style={{ flex: 1, padding: '6px 10px', border: '1px solid #d1d5db', borderRadius: 6, fontSize: 13 }} />
                <button onClick={() => removeFeature(idx)} style={{ color: '#dc2626', border: 'none', background: 'none', cursor: 'pointer' }}>✕</button>
              </div>
            ))}
          </section>

          {/* Log */}
          <section style={{ background: '#fff', borderRadius: 12, padding: 20, marginBottom: 16, border: '1px solid #e5e7eb' }}>
            <h2 style={{ fontSize: 16, fontWeight: 600, margin: '0 0 12px' }}>Action Log</h2>
            <pre style={{ whiteSpace: 'pre-wrap', fontSize: 12, color: '#374151', maxHeight: 200, overflowY: 'auto', margin: 0 }}>
              {log.length ? log.join('\n') : 'No actions yet.'}
            </pre>
          </section>
        </div>
      )}

      {/* Right: preview */}
      <div style={{ width: '42%', minWidth: 380, borderLeft: '1px solid #e5e7eb', background: '#fff', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '10px 16px', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontWeight: 600, fontSize: 14 }}>Live Preview</span>
          <button onClick={refreshPreview} style={{ padding: '4px 10px', background: '#f3f4f6', border: '1px solid #d1d5db', borderRadius: 6, cursor: 'pointer', fontSize: 12 }}>↻ Refresh</button>
        </div>
        <iframe src={previewSrc} style={{ flex: 1, border: 'none', width: '100%' }} title="preview" />
      </div>
    </div>
  );
}

function Input({ value, onChange }) {
  return (
    <input
      value={value}
      onChange={e => onChange(e.target.value)}
      style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 8, fontSize: 13, marginBottom: 10 }}
    />
  );
}

function Label({ children }) {
  return <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 4, marginTop: 8 }}>{children}</div>;
}
