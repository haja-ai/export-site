'use client';

import { useState, useMemo } from 'react';
import { siteContent as sc } from '@/lib/site-content';
import Link from 'next/link';
import { newsArticles } from '@/lib/news';
import PulseFitPage from '../components/PulseFitPage';
import { FadeIn } from '../components/ScrollReveal';

const PER_PAGE = 9;
const CATEGORIES = [
  { id: 'all', label: 'All Articles', description: 'Every update, guide and perspective from MiniElephant.', active: 'bg-gray-900', idle: 'bg-gray-50 border-gray-200 text-gray-700' },
  { id: 'company-life', label: 'Company Life & Events', description: 'Trade shows, factory moments and the people behind MiniElephant.', active: 'bg-emerald-700', idle: 'bg-emerald-50 border-emerald-100 text-emerald-800' },
  { id: 'industry-innovation', label: 'Industry & Innovation', description: 'Mobility technology, regulations and market developments.', active: 'bg-violet-700', idle: 'bg-violet-50 border-violet-100 text-violet-800' },
  { id: 'buyer-resources', label: 'Buyer Resources', description: 'RFQs, importing, quality control and distributor operations.', active: 'bg-sky-700', idle: 'bg-sky-50 border-sky-100 text-sky-800' },
  { id: 'wheelchair-insights', label: 'Wheelchair Insights', description: 'Practical perspectives on fit, components and everyday mobility.', active: 'bg-amber-700', idle: 'bg-amber-50 border-amber-100 text-amber-800' },
];
const CATEGORY_BY_ID = Object.fromEntries(CATEGORIES.map((category) => [category.id, category]));

export default function NewsPageClient() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showCount, setShowCount] = useState(PER_PAGE);
  const categoryCounts = useMemo(() => newsArticles.reduce((result, article) => {
    const category = article.category || 'buyer-resources';
    result[category] = (result[category] || 0) + 1;
    return result;
  }, {}), []);

  const filtered = useMemo(() => {
    const list = [...newsArticles].sort((a, b) => b.date.localeCompare(a.date));
    return activeCategory === 'all' ? list : list.filter((article) => (article.category || 'buyer-resources') === activeCategory);
  }, [activeCategory]);

  const selectCategory = (category) => {
    setActiveCategory(category);
    setShowCount(PER_PAGE);
  };

  const visible = filtered.slice(0, showCount);
  const hasMore = showCount < filtered.length;

  return (
    <PulseFitPage
      bannerImage={sc.news.bannerImage}
      badge={sc.news.badge}
      title={sc.news.title}
      description={sc.news.description}
    >
      {/* Editorial category filter */}
      <section className="pt-8 pb-4 bg-cream">
        <div className="px-6 sm:px-8 lg:px-16">
          <div className="mb-5">
            <p className="text-xs font-bold tracking-[0.16em] uppercase text-teal mb-2">Explore by purpose</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Knowledge with a clearer place</h2>
          </div>
          <div className="grid sm:grid-cols-2 xl:grid-cols-5 gap-3">
            {CATEGORIES.map((category) => {
              const active = activeCategory === category.id;
              const count = category.id === 'all' ? newsArticles.length : (categoryCounts[category.id] || 0);
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => selectCategory(category.id)}
                  aria-pressed={active}
                  className={`relative min-h-36 p-4 rounded-2xl border text-left transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 ${active ? `${category.active} border-transparent text-white shadow-lg -translate-y-0.5` : `${category.idle} hover:shadow-md hover:-translate-y-0.5`}`}
                >
                  <span className={`inline-flex items-center justify-center min-w-7 h-7 px-2 rounded-full text-xs font-bold mb-5 ${active ? 'bg-white/20 text-white' : 'bg-white text-gray-700 shadow-sm'}`}>{count}</span>
                  <span className="block text-sm font-bold leading-snug">{category.label}</span>
                  <span className={`block mt-1.5 text-xs leading-relaxed ${active ? 'text-white/80' : 'text-gray-500'}`}>{category.description}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-8 lg:py-12 bg-cream min-h-[50vh]">
        <div className="px-6 sm:px-8 lg:px-16">
          <div className="flex flex-wrap items-end justify-between gap-3 mb-6">
            <div>
              <p className="text-sm font-semibold text-gray-900">{CATEGORY_BY_ID[activeCategory].label}</p>
              <p className="text-sm text-gray-500 mt-1">{filtered.length} {filtered.length === 1 ? 'article' : 'articles'}</p>
            </div>
            {activeCategory !== 'all' && <button onClick={() => selectCategory('all')} className="text-sm font-semibold text-teal hover:text-teal-dark transition-colors">View all articles</button>}
          </div>
          {visible.length === 0 ? (
            <div className="text-center py-20 text-gray-400 bg-white rounded-2xl border border-gray-100">
              <p className="text-lg">No articles in this category yet.</p>
              <button onClick={() => selectCategory('all')} className="mt-4 text-teal text-sm font-semibold hover:underline">View all articles</button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visible.map((article) => {
                const category = CATEGORY_BY_ID[article.category] || CATEGORY_BY_ID['buyer-resources'];

                return (
                  <div key={article.slug}>
                    <Link href={`/news/${article.slug}`} className="block group h-full">
                      <article className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col overflow-hidden">
                        <div className="relative h-72 lg:h-96 overflow-hidden bg-gray-100">
                          {article.bannerImage ? (
                            <>
                              <img
                                src={`${article.bannerImage}?v=4`}
                                alt={article.title}
                                onError={(event) => {
                                  event.currentTarget.classList.add('hidden');
                                  event.currentTarget.nextElementSibling?.classList.remove('hidden');
                                }}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                              <div className="hidden absolute inset-0 items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                                <span className="text-xs font-semibold text-gray-500">MiniElephant Insights</span>
                              </div>
                            </>
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                              <span className="text-xs font-semibold text-gray-500">MiniElephant Insights</span>
                            </div>
                          )}
                          <span className="absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm bg-white/95 text-gray-800">
                            {category.label}
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
                  </div>
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