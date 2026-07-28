'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from "framer-motion";

export default function ProductCard({ product, index = 0, animate = false }) {
  const reduce = useReducedMotion();

  const cardContent = (
    <>
      {/* Product Image */}
      <div className="relative aspect-[4/3] bg-gradient-to-b from-gray-50 to-white rounded-t-2xl overflow-hidden">
        {product.images ? (
          <img
            src={product.images[0]}
            alt={`${product.fullName}: ${product.tagline}`}
            width={400} height={300}
            loading="lazy"
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-300 text-sm">No Image</div>
        )}
        {/* Overlay label: Weight badge */}
        {product.specs?.[0] && (
          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-xs font-bold text-gray-900 px-2.5 py-1 rounded-lg shadow-sm">
            {product.specs[0].value}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-4 pt-3 flex flex-col flex-1">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-teal">MiniRedone Series</span>
        <h3 className="text-lg font-bold text-gray-900 mt-0.5 mb-1 group-hover:text-teal transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-400 leading-snug line-clamp-2 flex-1">
          {product.tagline}
        </p>
        {/* Key specs in a compact row */}
        <div className="flex gap-3 mt-3 pt-3 border-t border-gray-100 text-xs text-gray-500">
          {product.specs?.slice(0, 3).map((s) => (
            <span key={s.label} className="flex items-baseline gap-1">
              <span className="font-semibold text-gray-700">{s.value}</span>
              <span>{s.label.replace('Net ', '')}</span>
            </span>
          ))}
        </div>
      </div>
    </>
  );

  const baseClass = "product-card group bg-white rounded-2xl border border-gray-100 hover:border-teal/20 hover:shadow-lg transition-[box-shadow,transform,color,background-color,border-color] duration-300 flex flex-col overflow-hidden";

  if (animate && !reduce) {
    return (
      <motion.a
        href={`/products/${product.slug}`}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
        className={baseClass}
      >
        {cardContent}
      </motion.a>
    );
  }

  return (
    <Link href={`/products/${product.slug}`} className={baseClass}>
      {cardContent}
    </Link>
  );
}
