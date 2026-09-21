'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import AdminGate from '../../components/AdminGate';
import AdminNav from '../../components/AdminNav';

const defaultMessage = `Hello,

Thank you for your inquiry about MiniElephant electric wheelchairs.

We have received your requirements and are reviewing the suitable configuration. We will reply with product details and a quotation shortly.

Best regards,
Johnson
MiniElephant B2B Export Team`;
const statusNames = { new: '新询盘', contacted: '已联系', quoted: '已报价', closed: '已完成' };

function authHeaders() {
  const token = localStorage.getItem('admin_token');
  return { 'Content-Type': 'application/json', Authorization: `Bearer ${token || ''}` };
}

function InquiryManager() {
  const [items, setItems] = useState([]);
  const [selectedId, setSelectedId] = useState('');
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [subject, setSubject] = useState('Re: Your MiniElephant Electric Wheelchair Inquiry');
  const [message, setMessage] = useState(defaultMessage);
  const [replies, setReplies] = useState([]);
  const [sending, setSending] = useState(false);
  const [notice, setNotice] = useState('');

  const load = useCallback(async () => {
    setLoading(true); setError('');
    try {
      const res = await fetch('/api/admin/inquiries', { headers: authHeaders() });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || '无法读取询盘');
      setItems(data.inquiries);
      setSelectedId(current => current || data.inquiries[0]?.id || '');
    } catch (err) { setError(err.message); } finally { setLoading(false); }
  }, []);

  useEffect(() => { load(); }, [load]);
  const selected = useMemo(() => items.find(item => item.id === selectedId), [items, selectedId]);
  const visible = useMemo(() => filter === 'all' ? items : items.filter(item => item.status === filter), [items, filter]);

  useEffect(() => {
    if (!selectedId) { setReplies([]); return; }
    fetch(`/api/admin/reply?inquiryId=${encodeURIComponent(selectedId)}`, { headers: authHeaders() })
      .then(r => r.json()).then(data => setReplies(data.replies || [])).catch(() => setReplies([]));
  }, [selectedId]);

  async function changeStatus(status) {
    if (!selected) return;
    setNotice('');
    const res = await fetch('/api/admin/inquiries', { method: 'PATCH', headers: authHeaders(), body: JSON.stringify({ id: selected.id, status }) });
    const data = await res.json();
    if (!res.ok) { setNotice(data.error || '状态更新失败'); return; }
    setItems(current => current.map(item => item.id === selected.id ? data.inquiry : item));
    setNotice('状态已更新。');
  }

  async function sendReply(event) {
    event.preventDefault();
    if (!selected) return;
    setSending(true); setNotice('');
    try {
      const res = await fetch('/api/admin/reply', { method: 'POST', headers: authHeaders(), body: JSON.stringify({ inquiryId: selected.id, subject, message }) });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || '发送失败');
      setReplies(current => [data.reply, ...current]);
      setItems(current => current.map(item => item.id === selected.id && item.status === 'new' ? { ...item, status: 'contacted' } : item));
      setNotice('已用 MiniElephant 官方邮箱发送，并保存了回复记录。');
    } catch (err) { setNotice(err.message); } finally { setSending(false); }
  }

  return <div style={{ maxWidth: 1500, margin: '0 auto', padding: '28px 20px', fontFamily: 'system-ui' }}>
    <div style={{ marginBottom: 20 }}><h1 style={{ margin: 0, fontSize: 25 }}>询盘管理</h1><p style={{ color: '#6b7280', margin: '8px 0 0', fontSize: 14 }}>客户资料安全保存在数据库中；从这里回复时，客户收到的是 MiniElephant B2B 官方邮件。</p></div>
    {error && <div style={errorStyle}>{error}。请重新登录后台后刷新；若仍出现，检查 Vercel 的 Supabase 环境变量。</div>}
    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, .9fr) minmax(500px, 1.5fr)', gap: 20, alignItems: 'start' }}>
      <section style={panelStyle}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, alignItems: 'center', marginBottom: 14 }}><strong>全部询盘 ({items.length})</strong><button onClick={load} style={smallButton}>刷新</button></div>
        <select value={filter} onChange={e => setFilter(e.target.value)} style={inputStyle}><option value="all">全部状态</option>{Object.entries(statusNames).map(([key, label]) => <option key={key} value={key}>{label}</option>)}</select>
        <div style={{ marginTop: 12, maxHeight: '68vh', overflowY: 'auto' }}>{loading ? <p style={muted}>正在加载...</p> : visible.length ? visible.map(item => <button key={item.id} onClick={() => setSelectedId(item.id)} style={{ ...listButton, background: item.id === selectedId ? '#ecfdf5' : '#fff', borderColor: item.id === selectedId ? '#34d399' : '#e5e7eb' }}><b>{item.name}</b><span>{item.company || item.email}</span><span>{statusNames[item.status]} · {new Date(item.created_at).toLocaleString()}</span></button>) : <p style={muted}>暂无符合条件的询盘。</p>}</div>
      </section>
      <section style={panelStyle}>
        {!selected ? <p style={muted}>请从左侧选择一条询盘。</p> : <>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, alignItems: 'start' }}><div><h2 style={{ margin: 0, fontSize: 20 }}>{selected.name}</h2><p style={muted}>{selected.email}{selected.company ? ` · ${selected.company}` : ''}{selected.country ? ` · ${selected.country}` : ''}</p></div><select aria-label="询盘状态" value={selected.status} onChange={e => changeStatus(e.target.value)} style={{ ...inputStyle, width: 120 }}>{Object.entries(statusNames).map(([key, label]) => <option key={key} value={key}>{label}</option>)}</select></div>
          <div style={detailsStyle}><b>产品：</b>{selected.product || '未填写'}　 <b>数量：</b>{selected.quantity || '未填写'}<br/><b>WhatsApp：</b>{selected.phone || '未填写'}<hr style={{ border: 0, borderTop: '1px solid #e5e7eb', margin: '12px 0' }}/><div style={{ whiteSpace: 'pre-wrap' }}>{selected.message}</div></div>
          <form onSubmit={sendReply}><h3 style={{ margin: '22px 0 8px' }}>以 MiniElephant 官方名义回复</h3><p style={muted}>发件人：MiniElephant B2B &lt;contact@semwheelchair.com&gt; · 客户回复会回到 johnson@semwheelchair.com</p><label style={labelStyle}>主题</label><input required value={subject} onChange={e => setSubject(e.target.value)} style={inputStyle}/><label style={labelStyle}>邮件内容</label><textarea required value={message} onChange={e => setMessage(e.target.value)} style={{ ...inputStyle, minHeight: 240, lineHeight: 1.6, resize: 'vertical' }}/><div style={{ marginTop: 14, display: 'flex', gap: 12, alignItems: 'center' }}><button disabled={sending} style={primaryButton}>{sending ? '发送中...' : '发送官方回复'}</button>{notice && <span style={{ color: notice.includes('失败') || notice.includes('Unable') ? '#b91c1c' : '#047857', fontSize: 13 }}>{notice}</span>}</div></form>
          <div style={{ marginTop: 26 }}><h3 style={{ margin: '0 0 10px' }}>回复记录 ({replies.length})</h3>{replies.length ? replies.map(reply => <div key={reply.id} style={historyStyle}><b>{reply.subject}</b><div style={muted}>{new Date(reply.sent_at).toLocaleString()} · 发给 {reply.recipient_email}</div><div style={{ whiteSpace: 'pre-wrap', marginTop: 8 }}>{reply.message}</div></div>) : <p style={muted}>还没有官方回复记录。</p>}</div>
        </>}
      </section>
    </div>
  </div>;
}

const panelStyle = { background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, padding: 18, boxShadow: '0 2px 10px rgba(0,0,0,.04)' };
const inputStyle = { boxSizing: 'border-box', width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: 8, fontSize: 14, fontFamily: 'inherit', background: '#fff' };
const labelStyle = { display: 'block', fontSize: 13, fontWeight: 650, color: '#374151', margin: '14px 0 6px' };
const muted = { color: '#6b7280', fontSize: 13, margin: '6px 0' };
const primaryButton = { border: 0, borderRadius: 8, padding: '11px 18px', color: '#fff', background: '#047857', fontWeight: 700, cursor: 'pointer' };
const smallButton = { border: '1px solid #d1d5db', borderRadius: 6, padding: '6px 10px', background: '#fff', cursor: 'pointer' };
const listButton = { display: 'flex', flexDirection: 'column', alignItems: 'start', width: '100%', padding: 12, marginBottom: 8, border: '1px solid', borderRadius: 8, cursor: 'pointer', textAlign: 'left', fontSize: 13, color: '#374151', gap: 4 };
const detailsStyle = { marginTop: 16, padding: 14, background: '#f9fafb', borderRadius: 8, fontSize: 14, color: '#374151', lineHeight: 1.65 };
const historyStyle = { padding: 12, border: '1px solid #e5e7eb', borderRadius: 8, marginBottom: 10, fontSize: 13, color: '#374151' };
const errorStyle = { background: '#fef2f2', border: '1px solid #fecaca', color: '#b91c1c', padding: 12, borderRadius: 8, marginBottom: 16, fontSize: 13 };

export default function AdminInquiriesPage() { return <AdminGate><AdminNav /><InquiryManager /></AdminGate>; }
