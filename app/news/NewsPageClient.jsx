'use client';

import { useState, useMemo } from 'react';
import { siteContent as sc } from '@/lib/site-content';
import Link from 'next/link';
import { newsArticles } from '@/lib/news';
import PulseFitPage from '../components/PulseFitPage';

const PER_PAGE = 9;
const CATEGORIES = [
  { id: 'all', label: 'All Articles', description: 'Every update, guide and perspective from MiniElephant.' },
  { id: 'company-life', label: 'Company Life & Events', description: 'Trade shows, factory moments and the people behind MiniElephant.' },
  { id: 'industry-innovation', label: 'Industry & Innovation', description: 'Mobility technology, regulations and market developments.' },
  { id: 'buyer-resources', label: 'Buyer Resources', description: 'RFQs, importing, quality control and distributor operations.' },
  { id: 'wheelchair-insights', label: 'Wheelchair Insights', description: 'Practical perspectives on fit, components and everyday mobility.' },
];
const CATEGORY_BY_ID = Object.fromEntries(CATEGORIES.map((category) => [category.id, category]));

export default function NewsPageClient() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showCount, setShowCount] = useState(PER_PAGE);
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
      <section className="border-b border-[#dbe3dd] bg-white py-5">
        <div className="px-6 sm:px-8 lg:px-16">
          <div className="flex flex-wrap items-center gap-2" aria-label="News categories">
            <span className="mr-2 text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#278a36]">Explore by purpose</span>
            {CATEGORIES.map((category) => {
              const active = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => selectCategory(category.id)}
                  aria-pressed={active}
                  className={`border px-3 py-2 text-xs font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3ab54a] focus-visible:ring-offset-2 ${active ? 'border-[#152019] bg-[#152019] text-white' : 'border-[#dbe3dd] bg-white text-[#526158] hover:border-[#3ab54a] hover:text-[#278a36]'}`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="min-h-[50vh] bg-white py-14 lg:py-20">
        <div className="px-6 sm:px-8 lg:px-16">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4 border-b border-[#dbe3dd] pb-5">
            <div>
              <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#278a36]">Latest knowledge</p>
              <h2 className="mt-2 text-[clamp(1.8rem,2.7vw,2.6rem)] font-extrabold tracking-[-0.05em] text-[#152019]">{CATEGORY_BY_ID[activeCategory].label}</h2>
            </div>
            <p className="text-sm text-[#657069]">{filtered.length} {filtered.length === 1 ? 'article' : 'articles'}</p>
          </div>
          {activeCategory !== 'all' && <button onClick={() => selectCategory('all')} className="mb-6 text-sm font-bold text-[#278a36] hover:underline">View all articles</button>}
          {visible.length === 0 ? (
            <div className="border border-[#dbe3dd] bg-[#f4f7f4] px-6 py-16 text-center text-[#657069]"><p className="text-lg">No articles in this category yet.</p><button onClick={() => selectCategory('all')} className="mt-4 text-sm font-bold text-[#278a36] hover:underline">View all articles</button></div>
          ) : (
            <div className="border-t border-[#dbe3dd]">
              {visible.map((article) => {
                const category = CATEGORY_BY_ID[article.category] || CATEGORY_BY_ID['buyer-resources'];
                return (
                  <Link key={article.slug} href={`/news/${article.slug}`} className="group grid gap-5 border-b border-[#dbe3dd] py-7 transition-colors hover:bg-[#f8fbf8] sm:grid-cols-[12rem_1fr] sm:gap-7 lg:grid-cols-[19.5rem_1fr_2.5rem] lg:items-center lg:gap-8">
                    <div className="relative h-48 overflow-hidden bg-[#f4f7f4] sm:h-32 lg:h-48">
                      {article.bannerImage ? <img src={`${article.bannerImage}?v=4`} alt={article.title} onError={(event) => { event.currentTarget.classList.add('hidden'); }} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]" /> : <div className="flex h-full items-center justify-center text-xs font-bold text-[#657069]">MiniElephant Insights</div>}
                    </div>
                    <article>
                      <p className="text-[0.66rem] font-extrabold uppercase tracking-[0.12em] text-[#278a36]">{category.label} <span className="mx-1 text-[#a1aaa4]">·</span> <time className="text-[#657069]">{article.date}</time></p>
                      <h3 className="mt-2 text-[clamp(1.25rem,2.1vw,1.95rem)] font-extrabold leading-[1.08] tracking-[-0.045em] text-[#152019] transition-colors group-hover:text-[#278a36]">{article.title}</h3>
                      <p className="mt-3 max-w-3xl text-sm leading-6 text-[#657069]">{article.summary}</p>
                      <span className="mt-4 inline-flex text-sm font-bold text-[#278a36]">Read article <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span></span>
                    </article>
                    <span className="hidden text-2xl text-[#278a36] lg:block">→</span>
                  </Link>
                );
              })}
            </div>
          )}

          {hasMore && <div className="mt-10"><button onClick={() => setShowCount((c) => Math.min(c + PER_PAGE, filtered.length))} className="border border-[#152019] px-6 py-3 text-sm font-bold text-[#152019] transition-colors hover:border-[#3ab54a] hover:bg-[#3ab54a] hover:text-white">Load more ({filtered.length - showCount} remaining)</button></div>}
        </div>
      </section>

      <section className="border-y border-[#25332a] bg-[#17231b] py-14 lg:py-18">
        <div className="flex flex-col justify-between gap-7 px-6 sm:px-8 lg:flex-row lg:items-end lg:px-16">
          <div>
            <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#74cf80]">MiniElephant export team</p>
            <h2 className="mt-3 text-[clamp(2rem,3.6vw,3.6rem)] font-extrabold leading-[0.98] tracking-[-0.06em] text-white">Need a model or market-specific answer?</h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300">Discuss product configurations, OEM/ODM requirements and document requests with the export team.</p>
          </div>
          <Link href="/contact" className="inline-flex self-start bg-[#3ab54a] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white hover:text-[#152019] lg:self-auto">Contact the Export Team</Link>
        </div>
      </section>
    </PulseFitPage>
  );
}