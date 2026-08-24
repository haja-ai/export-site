'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { newsArticles } from '@/lib/news';
import PulseFitPage from '../components/PulseFitPage';
import { StaggerGrid, FadeUpItem, FadeIn } from '../components/ScrollReveal';

const PER_PAGE = 9;

// All unique tags for filter tabs
const ALL_TAGS = ['All', ...new Set(newsArticles.flatMap((a) => a.tags))].slice(0, 8);

export default function NewsPageClient() {
  const [activeTag, setActiveTag] = useState('All');
  const [showCount, setShowCount] = useState(PER_PAGE);

  const filtered = useMemo(() => {
    let list = [...newsArticles].sort((a, b) => b.date.localeCompare(a.date));
    if (activeTag !== 'All') {
      list = list.filter((a) => a.tags.includes(activeTag));
    }
    return list;
  }, [activeTag]);

  const visible = filtered.slice(0, showCount);
  const hasMore = showCount < filtered.length;

  return (
    <PulseFitPage
      bannerImage="/images/banner-news.webp"
      badge="News & Insights"
      title="MiniElephant Updates"
      description="Product launches, industry insights, and B2B buyer guides. Stay informed about electric wheelchair innovations."
    >
      {/* Category Filter Tabs */}
      <section className="pt-8 pb-2 bg-cream">
        <div className="px-6 sm:px-8 lg:px-16">
          <div className="flex flex-wrap gap-2">
            {ALL_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => { setActiveTag(tag); setShowCount(PER_PAGE); }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTag === tag
                    ? 'bg-teal text-white shadow-sm'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-teal/40 hover:text-teal'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-8 lg:py-12 bg-cream min-h-[50vh]">
        <div className="px-6 sm:px-8 lg:px-16">
          {visible.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <p className="text-lg">No articles in this category yet.</p>
              <button
                onClick={() => { setActiveTag('All'); setShowCount(PER_PAGE); }}
                className="mt-4 text-teal text-sm font-semibold hover:underline"
              >
                View all articles
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visible.map((article, i) => {
                const tagColor = getTagColor(article.tags[0] || '');

                return (
                  <FadeIn key={article.slug} delay={Math.min(i * 0.04, 0.3)}>
                    <Link href={`/news/${article.slug}`} className="block group h-full">
                      <article className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col overflow-hidden">
                        {/* Banner Image or Gradient Fallback */}
                        <div
                          className="relative h-72 lg:h-96 overflow-hidden"
                          style={article.bannerImage ? {} : { background: tagColor.gradient }}
                        >
                          {article.bannerImage ? (
                            <img
                              src={`${article.bannerImage}?v=2`}
                              alt={article.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <div className="text-center px-6">
                                <div className="w-10 h-10 mx-auto mb-2 opacity-30">
                                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full" style={{ color: tagColor.text }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                  </svg>
                                </div>
                                <span className="text-xs font-semibold opacity-50" style={{ color: tagColor.text }}>
                                  {article.tags[0] || 'Article'}
                                </span>
                              </div>
                            </div>
                          )}
                          {/* Tag badge */}
                          <span
                            className="absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm"
                            style={{ background: 'rgba(255,255,255,0.9)', color: tagColor.text }}
                          >
                            {article.tags[0] || 'General'}
                          </span>
                        </div>

                        {/* Card Body */}
                        <div className="p-5 lg:p-6 flex flex-col flex-1">
                          <time className="text-xs text-gray-400 mb-1.5">{article.date}</time>
                          <h2 className="text-base lg:text-lg font-bold text-gray-900 mb-2 group-hover:text-teal transition-colors leading-snug flex-1 line-clamp-2">
                            {article.title}
                          </h2>
                          <p className="text-xs text-gray-500 leading-relaxed line-clamp-3 mb-4">
                            {article.summary}
                          </p>
                          <div className="flex items-center gap-1 text-teal text-xs font-semibold mt-auto">
                            Read Article
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </article>
                    </Link>
                  </FadeIn>
                );
              })}
            </div>
          )}

          {/* Load More */}
          {hasMore && (
            <div className="text-center mt-10">
              <button
                onClick={() => setShowCount((c) => Math.min(c + PER_PAGE, filtered.length))}
                className="px-8 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:border-teal/40 hover:text-teal transition-all"
              >
                Load more ({filtered.length - showCount} remaining)
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-gradient-to-r from-teal to-teal-dark">
        <div className="px-6 sm:px-8 lg:px-16 text-center">
          <FadeIn>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Want to Feature Your Market?
            </h2>
            <p className="text-teal-light/80 max-w-xl mx-auto mb-6">
              Contact us for customized product solutions, OEM/ODM partnerships, and volume pricing.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-teal font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </Link>
          </FadeIn>
        </div>
      </section>
    </PulseFitPage>
  );
}

// Tag color mapping
const TAG_COLORS = {
  'B2B Guide': { bg: '#E0F2FE', text: '#0369A1', gradient: 'linear-gradient(135deg, #E0F2FE, #BAE6FD)' },
  'Market Trends': { bg: '#FEF3C7', text: '#B45309', gradient: 'linear-gradient(135deg, #FEF3C7, #FDE68A)' },
  'Comparison': { bg: '#EDE9FE', text: '#7C3AED', gradient: 'linear-gradient(135deg, #EDE9FE, #DDD6FE)' },
  'Manufacturer': { bg: '#D1FAE5', text: '#059669', gradient: 'linear-gradient(135deg, #D1FAE5, #A7F3D0)' },
  'Certification': { bg: '#FEE2E2', text: '#DC2626', gradient: 'linear-gradient(135deg, #FEE2E2, #FECACA)' },
  'Warranty': { bg: '#FEF3C7', text: '#D97706', gradient: 'linear-gradient(135deg, #FEF3C7, #FDE68A)' },
  'Technology': { bg: '#DBEAFE', text: '#2563EB', gradient: 'linear-gradient(135deg, #DBEAFE, #BFDBFE)' },
  'Electric Wheelchair': { bg: '#D1FAE5', text: '#059669', gradient: 'linear-gradient(135deg, #D1FAE5, #A7F3D0)' },
  'South America': { bg: '#FFF7ED', text: '#C2410C', gradient: 'linear-gradient(135deg, #FFF7ED, #FED7AA)' },
  'China Sourcing': { bg: '#FEF2F2', text: '#B91C1C', gradient: 'linear-gradient(135deg, #FEF2F2, #FECACA)' },
  'Electric Wheelchair Market': { bg: '#ECFDF5', text: '#047857', gradient: 'linear-gradient(135deg, #ECFDF5, #A7F3D0)' },
  'B2B Import': { bg: '#EFF6FF', text: '#1D4ED8', gradient: 'linear-gradient(135deg, #EFF6FF, #BFDBFE)' },
};

function getTagColor(tag) {
  return TAG_COLORS[tag] || { bg: '#F3F4F6', text: '#6B7280', gradient: 'linear-gradient(135deg, #F3F4F6, #E5E7EB)' };
}
