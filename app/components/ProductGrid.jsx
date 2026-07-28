'use client';

import { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import { FadeIn } from './ScrollReveal';

const TABS = [
  { id: 'all', label: 'All Models' },
  { id: 'lightweight', label: 'Lightweight ≤46KG' },
  { id: 'standard', label: 'Standard 47KG' },
  { id: 'wide', label: 'Wide/Tall' },
];

export default function ProductGrid({ products }) {
  const [active, setActive] = useState('all');
  const [hoveredTab, setHoveredTab] = useState(null);

  const filtered = useMemo(() => {
    if (active === 'all') return products;
    return products.filter((p) => {
      const weight = Number(p.specs?.[0]?.value?.replace(/[^\d.]+/g, ''));
      if (active === 'lightweight') return weight && weight <= 46;
      if (active === 'standard') return weight && weight === 47;
      if (active === 'wide') {
        const name = (p.name + ' ' + (p.keyDifference || '')).toLowerCase();
        return name.includes('wide') || name.includes('tall') || name.includes('900mm') || name.includes('1250mm') || name.includes('1200mm');
      }
      return true;
    });
  }, [active, products]);

  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="px-6 sm:px-8 lg:px-16">
        {/* Category filter tabs — like Drive Medical's product tiles */}
        <FadeIn>
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                onMouseEnter={() => setHoveredTab(tab.id)}
                onMouseLeave={() => setHoveredTab(null)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-[box-shadow,transform,color,background-color,border-color] duration-200 ${
                  active === tab.id
                    ? 'bg-teal text-white shadow-sm'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-teal/40 hover:text-teal'
                }`}
              >
                {tab.label}
                {tab.id !== 'all' && (
                  <span className="ml-1.5 text-xs opacity-60">
                    ({products.filter(p => {
                      const weight = Number(p.specs?.[0]?.value?.replace(/[^\d.]+/g, ''));
                      if (tab.id === 'lightweight') return weight && weight <= 46;
                      if (tab.id === 'standard') return weight && weight === 47;
                      if (tab.id === 'wide') {
                        const n = (p.name + ' ' + (p.keyDifference || '')).toLowerCase();
                        return n.includes('wide') || n.includes('tall') || n.includes('900mm') || n.includes('1250mm') || n.includes('1200mm');
                      }
                      return false;
                    }).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Product grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product, i) => (
            <ProductCard key={product.slug} product={product} index={i} />
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <p className="text-center text-gray-500 py-12">No models match this filter.</p>
        )}
      </div>
    </section>
  );
}
