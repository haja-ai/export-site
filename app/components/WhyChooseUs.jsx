'use client';

import { useState } from 'react';
import { FadeUpItem } from './ScrollReveal';

const FALLBACK_ICONS = {
  'factory-direct': '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>',
  'certified-quality': '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>',
  'default': '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>',
};

const ADVANTAGE_IMAGE_MAP = {
  'factory-direct': '/images/advantage-factory-direct.webp?v=3',
  'model-comparison': '/images/advantage-model-comparison.webp?v=3',
  'after-sales-support': '/images/advantage-after-sales-support.webp?v=2',
  'verified-content': '/images/advantage-verified-content.webp?v=3',
  'sample-requests': '/images/advantage-sample-requests.webp?v=3',
};

function AdvantageCard({ item, index }) {
  const [imgError, setImgError] = useState(false);
  const imgSlug = item.title.toLowerCase().replace(/[^a-z]/g, '-').replace(/--+/g, '-').replace(/^-|-$/g, '');
  const imgSrc = ADVANTAGE_IMAGE_MAP[imgSlug] || `/images/advantage-${imgSlug}.webp?v=2`;
  const fallbackIcon = FALLBACK_ICONS[imgSlug] || FALLBACK_ICONS['default'];

  return (
    <FadeUpItem index={index}>
      <div className="bg-white rounded-xl border border-gray-200 hover:border-teal/30 hover:shadow-lg transition-all duration-300 group">
        {!imgError ? (
          <div className="max-h-40 group-hover:max-h-[600px] overflow-hidden transition-all duration-500 ease-out relative">
            <img
              src={imgSrc}
              alt={item.title}
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover group-hover:scale-105 transition-all duration-500 ease-out"
              onError={() => setImgError(true)}
            />
            {/* Dark overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 pointer-events-none" />
          </div>
        ) : (
          <div className="h-40 bg-gradient-to-br from-teal/5 to-teal/10 flex items-center justify-center">
            <div
              className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center text-teal"
              dangerouslySetInnerHTML={{ __html: fallbackIcon }}
            />
          </div>
        )}
        <div className="p-5">
          <h3 className="font-bold text-gray-900 mb-1.5">{item.title}</h3>
          <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
        </div>
      </div>
    </FadeUpItem>
  );
}

export default function WhyChooseUs({ advantages, badge, title, description, className }) {
  return (
    <section className={`py-16 lg:py-24 bg-white ${className || ''}`}>
      <div className="px-6 sm:px-8 lg:px-16">
        <div className="text-center mb-14">
          <span className="text-teal font-semibold text-sm uppercase tracking-widest">{badge || 'Why MiniElephant'}</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">{title || 'Why Choose Our Electric Wheelchair Factory'}</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            {description || 'We deliver value beyond products — partnership, quality, and peace of mind. As a direct electric wheelchair manufacturer, we provide factory-direct communication, OEM/ODM discussions, and buyer-ready product information for market review.'}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, i) => (
            <AdvantageCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
