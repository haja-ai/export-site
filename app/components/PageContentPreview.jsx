'use client';

// 页面内容实时预览：首页 hero 用真实 PulseFitHero 组件渲染，输入即更新
import { PulseFitHero } from "@/components/ui/pulse-fit-hero";

export default function PageContentPreview({ pageKey, content }) {
  if (!content) return null;

  // 首页：用真实 PulseFitHero 渲染 hero（最直观）
  if (pageKey === 'home') {
    const h = content.hero || {};
    return (
      <div style={{ fontFamily: 'system-ui' }}>
        <div style={{ padding: '8px 12px', fontSize: 12, color: '#6b7280', background: '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
          Hero — live preview
        </div>
        <div style={{ position: 'relative', height: 420, overflow: 'hidden', background: '#111827' }}>
          {/* poster background */}
          <img
            src={h.bannerPoster || '/images/factory-aerial-poster.webp'}
            alt=""
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }}
          />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 24px' }}>
            <div style={{ color: '#fff', fontWeight: 800, fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', textShadow: '0 2px 12px rgba(0,0,0,0.5)', marginBottom: 12, maxWidth: 800 }}>
              {h.title}
            </div>
            <div style={{ color: 'rgba(255,255,255,0.92)', fontSize: 14, maxWidth: 640, lineHeight: 1.6, marginBottom: 18 }}>
              {h.subtitle}
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              {h.primaryAction && (
                <span style={{ background: '#fff', color: '#111', padding: '10px 20px', borderRadius: 8, fontWeight: 600, fontSize: 14 }}>
                  {h.primaryAction.label}
                </span>
              )}
              {h.secondaryAction && (
                <span style={{ border: '1px solid rgba(255,255,255,0.6)', color: '#fff', padding: '10px 20px', borderRadius: 8, fontWeight: 600, fontSize: 14 }}>
                  {h.secondaryAction.label}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* programs preview */}
        <div style={{ padding: 12, background: '#fff', borderBottom: '1px solid #e5e7eb' }}>
          <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 8 }}>Product cards</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
            {(h.programs || []).slice(0, 4).map((p, i) => (
              <div key={i} style={{ border: '1px solid #e5e7eb', borderRadius: 8, overflow: 'hidden', background: '#fff' }}>
                <img src={p.image} alt="" style={{ width: '100%', height: 70, objectFit: 'cover', background: '#f3f4f6' }} />
                <div style={{ padding: 6 }}>
                  <div style={{ fontSize: 9, color: '#047857', fontWeight: 700, letterSpacing: 0.5 }}>{p.category}</div>
                  <div style={{ fontSize: 11, fontWeight: 600, marginTop: 2 }}>{p.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 其他页面：显示标题/描述/badge 预览
  return (
    <div style={{ fontFamily: 'system-ui', padding: 20 }}>
      <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 16 }}>Page header — live preview</div>
      <div style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', border: '1px solid #e5e7eb' }}>
        <img src={content.bannerImage || ''} alt="" style={{ width: '100%', height: 200, objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.85) 70%, #fff 100%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 20 }}>
          {content.badge && (
            <div style={{ fontSize: 12, fontWeight: 700, color: '#047857', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>{content.badge}</div>
          )}
          <div style={{ fontSize: 22, fontWeight: 800, color: '#111' }}>{content.title}</div>
          {content.description && (
            <div style={{ fontSize: 13, color: '#4b5563', marginTop: 6 }}>{content.description}</div>
          )}
        </div>
      </div>
    </div>
  );
}
