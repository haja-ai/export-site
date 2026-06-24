'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function PageHero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return <section className="min-h-[88vh] bg-gray-900" />;

  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-banner.jpg"
          alt="MiniElephant Electric Wheelchair"
          fill
          className="object-cover"
          priority
        />
        {/* Dark gradient overlay — from bottom-left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/60 to-gray-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/80 text-sm mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Premium Electric Wheelchair Manufacturer · ISO 13485 · CE · FDA
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up tracking-tight">
            MiniElephant Electric Wheelchair
          </h1>

          <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Freedom to Move, Power to Live — Factory-direct magnesium alloy electric wheelchairs.
            Dual 350W motors, 30km range, 150KG load. Exported to 50+ countries with OEM/ODM service.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Get a Quote
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-white border-2 border-white/30 hover:bg-white hover:text-gray-900 transition-all duration-200 text-base"
            >
              View Products
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-6 mt-12 text-white/50 text-xs uppercase tracking-widest animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
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
