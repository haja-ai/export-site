import Link from 'next/link';
import { NEWS_CATEGORIES, categoryCounts } from '@/lib/news-taxonomy';
import { newsArticles } from '@/lib/news';

const counts = categoryCounts(newsArticles);

export default function NewsCategoryNav({ active = '' }) {
  return (
    <section className="border-b border-[#dbe3dd] bg-white py-5">
      <div className="px-6 sm:px-8 lg:px-16">
        <div className="flex flex-wrap items-center gap-2" aria-label="News categories">
          <span className="mr-2 text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#278a36]">
            Browse by topic
          </span>
          <Link
            href="/news"
            className={`border px-3 py-2 text-xs font-bold transition-colors ${active === '' ? 'border-[#152019] bg-[#152019] text-white' : 'border-[#dbe3dd] bg-white text-[#526158] hover:border-[#3ab54a] hover:text-[#278a36]'}`}
          >
            All articles
          </Link>
          {NEWS_CATEGORIES.map((category) => {
            const on = active === category.slug;
            return (
              <Link
                key={category.slug}
                href={`/news/category/${category.slug}`}
                aria-current={on ? 'page' : undefined}
                className={`border px-3 py-2 text-xs font-bold transition-colors ${on ? 'border-[#152019] bg-[#152019] text-white' : 'border-[#dbe3dd] bg-white text-[#526158] hover:border-[#3ab54a] hover:text-[#278a36]'}`}
              >
                {category.label}
                <span className={on ? 'ml-2 text-white/70' : 'ml-2 text-[#a1aaa4]'}>{counts[category.slug]}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
