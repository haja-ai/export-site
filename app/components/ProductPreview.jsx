'use client';

// 实时预览组件：把 draft 产品数据传给真实 ProductCard 渲染，输入即更新
import ProductCard from './ProductCard';

export default function ProductPreview({ draft }) {
  if (!draft) return null;
  return (
    <div style={{ padding: 20, fontFamily: 'system-ui' }}>
      <div style={{ fontSize: 13, color: '#6b7280', marginBottom: 12 }}>
        Live preview — updates as you type
      </div>

      {/* 真实 ProductCard 渲染（与实际网站完全一致） */}
      <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm max-w-sm mx-auto">
        <ProductCard product={draft} />
      </div>

      {/* 规格表实时预览 */}
      <div style={{ background: '#fff', borderRadius: 12, border: '1px solid #e5e7eb', padding: 16, marginTop: 16, maxWidth: 400, margin: '16px auto 0' }}>
        <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 10 }}>Specifications</div>
        {draft.specs?.map((s, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid #f3f4f6', fontSize: 13 }}>
            <span style={{ color: '#6b7280' }}>{s.label}</span>
            <span style={{ fontWeight: 600, textAlign: 'right' }}>{s.value}</span>
          </div>
        ))}
        {draft.b2bPrice && (
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', fontSize: 14 }}>
            <span style={{ color: '#6b7280' }}>Price (USD)</span>
            <span style={{ fontWeight: 700, color: '#047857' }}>${draft.b2bPrice}</span>
          </div>
        )}
      </div>

      {/* 描述实时预览 */}
      {draft.description && (
        <div style={{ background: '#fff', borderRadius: 12, border: '1px solid #e5e7eb', padding: 16, marginTop: 16, maxWidth: 400, margin: '16px auto 0' }}>
          <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>Description</div>
          <div style={{ fontSize: 13, color: '#374151', lineHeight: 1.6 }}>{draft.description}</div>
        </div>
      )}

      {/* 卖点实时预览 */}
      {draft.features?.length > 0 && (
        <div style={{ background: '#fff', borderRadius: 12, border: '1px solid #e5e7eb', padding: 16, marginTop: 16, maxWidth: 400, margin: '16px auto 0' }}>
          <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>Features</div>
          <ul style={{ fontSize: 13, color: '#374151', paddingLeft: 18, lineHeight: 1.8 }}>
            {draft.features.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}
