'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function PageHero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return <section className="min-h-[88vh] bg-gray-900" />;

  return (
    <section className="relative min-h-[88vh] flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background atmosphere — two soft glows */}
      <div className="absolute inset-0 opacity-[0.07]">
        <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-teal rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-[600px] h-[600px] bg-teal-light rounded-full blur-3xl" />
      </div>

      {/* Geometric dot grid — gives depth without decoration */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, #5EEAD4 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }} />

      {/* Subtle diagonal line at bottom — grounds the section */}
      <div className="absolute bottom-0 right-0 w-96 h-96 border-r-2 border-b-2 border-white/5 rounded-br-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/80 text-sm mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Premium Electric Wheelchair Manufacturer · ISO 13485 · CE · FDA
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up tracking-tight">
            Freedom to Move,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-light to-gold-light">
              Power to Live
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Factory-direct magnesium alloy electric wheelchairs. Dual 350W motors,
            30km range, 150KG load. Exported to 50+ countries with OEM/ODM service.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Link href="/products" className="btn-primary text-base px-8 py-4">
              See the MiniRedone Series
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-white border-2 border-white/30 hover:bg-white hover:text-gray-900 transition-all duration-200 text-base"
            >
              Request Factory Pricing
            </Link>
          </div>

          {/* Trust indicators — small, quiet, at bottom of hero */}
          <div className="flex flex-wrap gap-6 mt-12 text-white/40 text-xs uppercase tracking-widest animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <span>Magnesium Alloy Frame</span>
            <span className="text-white/20">·</span>
            <span>30km Range</span>
            <span className="text-white/20">·</span>
            <span>150kg Load</span>
            <span className="text-white/20">·</span>
            <span>50+ Countries</span>
          </div>
        </div>
      </div>
    </section>
  );
}
