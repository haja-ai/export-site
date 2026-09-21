'use client';

import { useState } from 'react';
import AdminGate from '../../components/AdminGate';
import AdminNav from '../../components/AdminNav';

const initialMessage = `Hello,

Thank you for your inquiry about MiniElephant electric wheelchairs.

We have received your requirements and are reviewing the suitable configuration. We will reply with product details and a quotation shortly.

Best regards,
Johnson
MiniElephant B2B Export Team`;

function ReplyForm() {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('Re: Your MiniElephant Electric Wheelchair Inquiry');
  const [message, setMessage] = useState(initialMessage);
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState(null);

  async function sendReply(event) {
    event.preventDefault();
    setBusy(true);
    setResult(null);
    try {
      const res = await fetch('/api/admin/reply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ to, subject, message }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || 'Send failed');
      setResult({ ok: true, text: '已发送。客户看到的发件人是 MiniElephant B2B。' });
    } catch (error) {
      setResult({ ok: false, text: error.message });
    } finally {
      setBusy(false);
    }
  }

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '28px 24px', fontFamily: 'system-ui' }}>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ margin: 0, fontSize: 24, color: '#111827' }}>以 MiniElephant 官方名义回复客户</h1>
        <p style={{ margin: '8px 0 0', color: '#6b7280', fontSize: 14 }}>
          邮件通过网站服务器发送，From 显示为 MiniElephant B2B，不使用个人邮箱发件。
        </p>
      </div>

      <div style={{ background: '#ecfdf5', border: '1px solid #a7f3d0', borderRadius: 10, padding: '12px 14px', marginBottom: 20, color: '#065f46', fontSize: 13 }}>
        <strong>发送身份：</strong> MiniElephant B2B &lt;contact@semwheelchair.com&gt;&nbsp; · &nbsp;
        <strong>客户回复地址：</strong> johnson@semwheelchair.com
      </div>

      <form onSubmit={sendReply} style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, padding: 22, boxShadow: '0 2px 10px rgba(0,0,0,.04)' }}>
        <label style={labelStyle}>客户邮箱 *</label>
        <input type="email" required value={to} onChange={e => setTo(e.target.value)} placeholder="customer@example.com" style={inputStyle} />

        <label style={labelStyle}>邮件主题 *</label>
        <input required value={subject} onChange={e => setSubject(e.target.value)} style={inputStyle} />

        <label style={labelStyle}>回复内容 *</label>
        <textarea required value={message} onChange={e => setMessage(e.target.value)} style={{ ...inputStyle, minHeight: 300, resize: 'vertical', lineHeight: 1.6 }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 16 }}>
          <button type="submit" disabled={busy} style={{ padding: '11px 22px', background: busy ? '#9ca3af' : '#047857', color: '#fff', border: 0, borderRadius: 8, fontWeight: 700, cursor: busy ? 'wait' : 'pointer' }}>
            {busy ? '发送中...' : '发送官方回复'}
          </button>
          {result && <span style={{ color: result.ok ? '#047857' : '#dc2626', fontSize: 13 }}>{result.text}</span>}
        </div>
      </form>

      <div style={{ marginTop: 18, color: '#6b7280', fontSize: 12, lineHeight: 1.7 }}>
        使用方式：从收到的询盘邮件复制客户邮箱，粘贴到上方，编辑内容后发送。暂时不会把客户原始邮件存入网站数据库，因此不会自动显示历史询盘列表。
      </div>
    </div>
  );
}

const labelStyle = { display: 'block', color: '#374151', fontSize: 13, fontWeight: 600, margin: '14px 0 6px' };
const inputStyle = { width: '100%', boxSizing: 'border-box', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: 8, fontSize: 14, fontFamily: 'inherit' };

export default function AdminReplyPage() {
  return <AdminGate><AdminNav /><ReplyForm /></AdminGate>;
}
