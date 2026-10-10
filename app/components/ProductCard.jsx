'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';

export default function ProductCard({ product, index = 0, animate = false }) {
  const reduceMotion = useReducedMotion();
  const content = (
    <>
      <div className="relative aspect-[4/3] overflow-hidden border-b border-[#dbe3dd] bg-[#f4f7f4]">
        {product.images ? (
          <img src={product.images[0]} alt={`${product.fullName}: ${product.tagline}`} width={400} height={300} loading="lazy" className="h-full w-full object-contain p-5 transition-transform duration-500 group-hover:scale-[1.035]" />
        ) : <div className="flex h-full items-center justify-center text-sm text-[#7a857f]">No image available</div>}
        {product.specs?.[0] && <span className="absolute left-4 top-4 border border-[#dbe3dd] bg-white px-2.5 py-1 text-[0.68rem] font-bold text-[#152019]">{product.specs[0].value}</span>}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="text-[0.65rem] font-extrabold uppercase tracking-[0.13em] text-[#278a36]">MiniRedone series</span>
        <h3 className="mt-2 text-xl font-bold tracking-[-0.035em] text-[#152019] transition-colors group-hover:text-[#278a36]">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-[#657069]">{product.tagline}</p>
        <div className="mt-5 grid grid-cols-3 border-t border-[#dbe3dd] pt-3 text-[0.65rem] leading-4 text-[#657069]">
          {product.specs?.slice(0, 3).map((spec) => <span key={spec.label} className="pr-2"><b className="block text-xs text-[#152019]">{spec.value}</b>{spec.label.replace('Net ', '')}</span>)}
        </div>
        <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#278a36]">View model <span aria-hidden="true">→</span></span>
      </div>
    </>
  );
  const className = 'group flex flex-col overflow-hidden border border-[#dbe3dd] bg-white transition-colors duration-200 hover:border-[#3ab54a]';
  if (animate && !reduceMotion) return <motion.a href={`/products/${product.slug}`} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.16 }} transition={{ duration: 0.42, delay: index * 0.05 }} className={className}>{content}</motion.a>;
  return <Link href={`/products/${product.slug}`} className={className}>{content}</Link>;
}