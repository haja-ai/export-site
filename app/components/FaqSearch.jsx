'use client';

import { useState, useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

export default function FaqSearch({ faqs }) {
  const [query, setQuery] = useState('');
  const reduce = useReducedMotion();

  const filtered = useMemo(() => {
    if (!query.trim()) return faqs;
    const q = query.toLowerCase();
    return faqs.filter((f) => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q));
  }, [query, faqs]);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Search input */}
      <div className="relative mb-8">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search questions…"
          className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/30 transition-[box-shadow,transform,color,background-color,border-color] text-sm"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors text-sm"
          >
            Clear
          </button>
        )}
      </div>

      {/* Results count */}
      <p className="text-sm text-gray-400 mb-4">
        {filtered.length === 0
          ? 'No matching questions found.'
          : `${filtered.length} question${filtered.length > 1 ? 's' : ''} found`}
      </p>

      {/* FAQ list */}
      <div className="space-y-4">
        {filtered.map((faq, i) => (
          <motion.details
            key={i}
            initial={reduce ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4, delay: Math.min(i * 0.03, 0.3), ease: EASE }}
            className="group bg-white rounded-xl border border-gray-200 overflow-hidden"
          >
            <summary className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors list-none">
              <span className="text-gray-900 font-medium pr-4 text-sm">{faq.q}</span>
              <svg
                className="w-5 h-5 text-gray-400 shrink-0 group-open:rotate-180 transition-transform"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-4">
              <p className="text-gray-600 leading-relaxed text-sm">{faq.a}</p>
            </div>
          </motion.details>
        ))}
      </div>
    </div>
  );
}
