'use client';

import { useState } from 'react';
import AdminGate from '../../components/AdminGate';
import AdminNav from '../../components/AdminNav';

const initialMessage = `Hello,

Thank you for your interest in MiniElephant electric wheelchairs.

Please find the requested product information attached. If you would like a quotation or have questions about configuration, sample requirements, or OEM/ODM options, please let us know.

Best regards,
Johnson
MiniElephant B2B Export Team`;

function DirectEmailForm() {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('MiniElephant Electric Wheelchair Information');
  const [message, setMessage] = useState(initialMessage);
  const [attachments, setAttachments] = useState([]);
  const [sending, setSending] = useState(false);
  const [notice, setNotice] = useState('');

  async function sendEmail(event) {
    event.preventDefault();
    setSending(true); setNotice('');
    try {
      const form = new FormData();
      form.append('to', to); form.append('subject', subject); form.append('message', message);
      attachments.forEach(file => form.append('attachments', file));
      const token = localStorage.getItem('admin_token');
      const response = await fetch('/api/admin/email', { method: 'POST', headers: { Authorization: `Bearer ${token || ''}` }, body: form });
      const data = await response.json();
      if (!response.ok || !data.ok) throw new Error(data.error || '发送失败');
      setNotice(`已发送给 ${to}，邮件来自 MiniElephant B2B。`);
      setAttachments([]);
    } catch (error) { setNotice(error.message); } finally { setSending(false); }
  }

  return <div style={{ maxWidth: 900, margin: '0 auto', padding: '28px 24px', fontFamily: 'system-ui' }}>
    <h1 style={{ margin: 0, fontSize: 25 }}>直接发送官方邮件</h1>
    <p style={{ color: '#6b7280', fontSize: 14, margin: '8px 0 22px' }}>适合联系历史询盘、展会客户或其他未录入数据库的客户。无需先创建询盘记录。</p>
    <div style={{ background: '#ecfdf5', border: '1px solid #a7f3d0', borderRadius: 10, padding: '12px 14px', marginBottom: 20, color: '#065f46', fontSize: 13 }}>
      <strong>From：</strong> MiniElephant B2B &lt;contact@semwheelchair.com&gt;&nbsp; · &nbsp;<strong>客户回复：</strong> johnson@semwheelchair.com
    </div>
    <form onSubmit={sendEmail} style={panelStyle}>
      <label style={labelStyle}>收件人邮箱 *</label>
      <input required type="email" value={to} onChange={e => setTo(e.target.value)} placeholder="customer@example.com" style={inputStyle} />
      <label style={labelStyle}>邮件主题 *</label>
      <input required value={subject} onChange={e => setSubject(e.target.value)} style={inputStyle} />
      <label style={labelStyle}>邮件内容 *</label>
      <textarea required value={message} onChange={e => setMessage(e.target.value)} style={{ ...inputStyle, minHeight: 320, lineHeight: 1.6, resize: 'vertical' }} />
      <label style={labelStyle}>附件（PDF / 图片 / DOCX / XLSX，单个 ≤25MB，最多5个，合计 ≤40MB）</label>
      <input type="file" multiple accept=".pdf,.jpg,.jpeg,.png,.webp,.docx,.xlsx" onChange={e => setAttachments(Array.from(e.target.files || []))} style={{ ...inputStyle, padding: 8 }} />
      {attachments.length > 0 && <div style={muted}>已选择：{attachments.map(file => `${file.name} (${(file.size / 1024 / 1024).toFixed(1)}MB)`).join('、')}</div>}
      <div style={{ marginTop: 16, display: 'flex', gap: 12, alignItems: 'center' }}><button disabled={sending} style={primaryButton}>{sending ? '发送中...' : '发送官方邮件'}</button>{notice && <span style={{ color: notice.includes('失败') || notice.includes('Failed') ? '#b91c1c' : '#047857', fontSize: 13 }}>{notice}</span>}</div>
    </form>
    <p style={{ color: '#6b7280', fontSize: 12, lineHeight: 1.7, marginTop: 16 }}>发送前请确认收件人地址。附件会通过 Resend 发送，并在 Supabase 私有 Storage 保留内部副本。</p>
  </div>;
}

const panelStyle = { background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, padding: 22, boxShadow: '0 2px 10px rgba(0,0,0,.04)' };
const inputStyle = { boxSizing: 'border-box', width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: 8, fontSize: 14, fontFamily: 'inherit', background: '#fff' };
const labelStyle = { display: 'block', fontSize: 13, fontWeight: 650, color: '#374151', margin: '14px 0 6px' };
const muted = { color: '#6b7280', fontSize: 13, margin: '6px 0' };
const primaryButton = { border: 0, borderRadius: 8, padding: '11px 18px', color: '#fff', background: '#047857', fontWeight: 700, cursor: 'pointer' };

export default function AdminEmailPage() { return <AdminGate><AdminNav /><DirectEmailForm /></AdminGate>; }
