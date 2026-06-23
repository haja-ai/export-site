'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function PageHero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return <section className="min-h-[88vh] bg-gray-900" />;

  return (
    <section className="relative min-h-[88vh] flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07]">
        <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-teal rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-[600px] h-[600px] bg-teal-light rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/80 text-sm mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Premium Electric Wheelchair Manufacturer
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
            Freedom to Move,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-light to-gold-light">
              Power to Live
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            MiniElephant Electric Wheelchair — professional manufacturer of lightweight folding
            electric wheelchairs. Magnesium alloy frames, 30km range, B2B export to 50+ countries.
            OEM/ODM welcome.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Link href="/products" className="btn-primary text-base px-8 py-4">
              Explore Products
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-white border-2 border-white/30 hover:bg-white hover:text-gray-900 transition-all duration-200 text-base"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
