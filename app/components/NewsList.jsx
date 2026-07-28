'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FadeIn } from './ScrollReveal';

const PER_PAGE = 6;

export default function NewsList({ articles }) {
  const [showCount, setShowCount] = useState(PER_PAGE);
  const sorted = […articles].sort((a, b) => b.date.localeCompare(a.date));
  const visible = sorted.slice(0, showCount);
  const hasMore = showCount < sorted.length;

  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header + View All */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-teal text-xs font-semibold uppercase tracking-widest">Latest Updates</span>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-1">News & Insights</h2>
          </div>
          <Link href="/news" className="text-teal text-sm font-semibold hover:underline shrink-0">
            View All
          </Link>
        </div>

        {/* Article grid — 3 columns */}        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">          {visible.map((article, i) => (
            <FadeIn key={article.slug} delay={Math.min(i * 0.05, 0.3)}>
              <Link href={`/news/${article.slug}`} className="block group h-full">
                <article className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-5 lg:p-6 h-full flex flex-col">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-x-3 gap-y-1 mb-2">
                    {article.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-[11px] text-teal font-medium">{tag}</span>
                    ))}
                  </div>
                  {/* Title */}
                  <h2 className="text-base lg:text-lg font-bold text-gray-900 mb-2 group-hover:text-teal transition-colors leading-snug flex-1">
                    {article.title}
                  </h2>
                  {/* Summary */}
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-3 mb-4">
                    {article.summary}
                  </p>
                  {/* Bottom row: date */}
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-auto">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{article.date}</span>
                  </div>
                </article>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Load more */}
        {hasMore && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowCount((c) => Math.min(c + PER_PAGE, sorted.length))}
              className="px-8 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:border-teal/40 hover:text-teal transition-[box-shadow,transform,color,background-color,border-color]"
            >
              Load more articles ({sorted.length - showCount} remaining)
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
