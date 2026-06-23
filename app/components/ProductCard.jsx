'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function ProductCard({ product, index = 0 }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return <div className="p-6 min-h-[320px]" />;

  return (
    <Link
      href={`/products/${product.slug}`}
      className="product-card group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="p-6">
        {/* Product Image */}
        <div className="w-full aspect-[4/3] rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-100 flex items-center justify-center mb-5 overflow-hidden">
          {product.images ? (
            <img src={product.images[0]} alt={product.name} className="w-full h-full object-contain p-2" loading="lazy" />
          ) : (
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="12" cy="5" r="2.5" />
                <path d="M5 22l3-9h8l3 9" />
                <path d="M8 13c0 3.3 2.7 6 6 6s6-2.7 6-6" />
                <path d="M4 13h4" />
                <path d="M16 13h4" />
              </svg>
              <p className="text-[10px] text-gray-400 mt-2">{product.name}</p>
            </div>
          )}
        </div>
        <span className="text-xs font-semibold uppercase tracking-wider text-teal">
          MiniRedone Series
        </span>
        <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2 group-hover:text-teal transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
          {product.tagline}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {product.specs.slice(0, 3).map((spec) => (
            <span key={spec.label} className="text-[11px] bg-gray-50 text-gray-600 px-2.5 py-1 rounded-full border border-gray-100">
              {spec.label}: {spec.value}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
