'use client';

// 设计器顶部导航栏 — 三个编辑器之间自由跳转
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminNav() {
  const pathname = usePathname();
  const tabs = [
    { href: '/admin', label: '🛒 产品编辑器', desc: '图片/规格/价格' },
    { href: '/admin/pages', label: '📄 文案编辑器', desc: '页面文字/标题' },
    { href: '/admin/builder', label: '🧩 区块建站器', desc: '布局/添加/删除' },
  ];

  return (
    <div style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: '#fff', borderBottom: '1px solid #e5e7eb',
      fontFamily: 'system-ui', boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    }}>
      <div style={{ maxWidth: '100%', display: 'flex', alignItems: 'center', gap: 4, padding: '8px 16px' }}>
        <span style={{ fontWeight: 800, fontSize: 14, color: '#111827', marginRight: 12, whiteSpace: 'nowrap' }}>
          MiniElephant <span style={{ color: '#047857' }}>Designer</span>
        </span>
        {tabs.map(t => {
          const active = pathname === t.href;
          return (
            <Link
              key={t.href}
              href={t.href}
              style={{
                padding: '7px 14px', borderRadius: 8, textDecoration: 'none', whiteSpace: 'nowrap',
                background: active ? '#ecfdf5' : 'transparent',
                border: active ? '1px solid #a7f3d0' : '1px solid transparent',
              }}
            >
              <span style={{ fontWeight: active ? 700 : 500, fontSize: 13, color: active ? '#047857' : '#374151' }}>
                {t.label}
              </span>
              <span style={{ fontSize: 10, color: '#9ca3af', marginLeft: 4, display: 'none' }}>{t.desc}</span>
            </Link>
          );
        })}
        <span style={{ marginLeft: 'auto', fontSize: 11, color: '#9ca3af', whiteSpace: 'nowrap' }}>
          <a href="/" target="_blank" style={{ color: '#047857' }}>查看网站 ↗</a>
        </span>
      </div>
    </div>
  );
}
