'use client';

import Link from 'next/link';
import { CATEGORY_BY_SLUG } from '@/lib/news-taxonomy';

// Archive list used by /news, /news/page/N and /news/category/<slug>. It is a client
// component so the card markup is emitted once (HTML) instead of twice (HTML + RSC
// payload); only the projected card fields travel as props.
// Every row links to an article, and the category label links to its topic hub.
export default function NewsArchiveList({ articles = [], showCategory = true }) {
  if (!articles.length) {
    return (
      <div className="border border-[#dbe3dd] bg-[#f4f7f4] px-6 py-16 text-center text-[#657069]">
        <p className="text-lg">No articles in this section yet.</p>
        <Link href="/news" className="mt-4 inline-flex text-sm font-bold text-[#278a36] hover:underline">
          View all articles
        </Link>
      </div>
    );
  }

  return (
    <div className="border-t border-[#dbe3dd]">
      {articles.map((article) => {
        const category = CATEGORY_BY_SLUG[article.category] || CATEGORY_BY_SLUG['buying-guides'];
        return (
          <article
            key={article.slug}
            className="group grid gap-5 border-b border-[#dbe3dd] py-7 transition-colors hover:bg-[#f8fbf8] sm:grid-cols-[12rem_1fr] sm:gap-7 lg:grid-cols-[19.5rem_1fr] lg:items-center lg:gap-8"
          >
            <div className="relative h-48 overflow-hidden bg-[#f4f7f4] sm:h-32 lg:h-48">
              {article.bannerImage ? (
                <img
                  src={`${article.bannerImage}?v=4`}
                  alt={article.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-xs font-bold text-[#657069]">
                  MiniElephant Insights
                </div>
              )}
            </div>
            <div>
              <p className="text-[0.66rem] font-extrabold uppercase tracking-[0.12em] text-[#278a36]">
                {showCategory ? (
                  <Link href={`/news/category/${category.slug}`} className="hover:underline">
                    {category.label}
                  </Link>
                ) : (
                  category.label
                )}
                <span className="mx-1 text-[#a1aaa4]">·</span>
                <time className="text-[#657069]">{article.date}</time>
              </p>
              <h3 className="mt-2 text-[clamp(1.25rem,2.1vw,1.95rem)] font-extrabold leading-[1.08] tracking-[-0.045em] text-[#152019] transition-colors group-hover:text-[#278a36]">
                <Link href={`/news/${article.slug}`}>{article.title}</Link>
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-[#657069]">{article.summary}</p>
              <Link href={`/news/${article.slug}`} className="mt-4 inline-flex text-sm font-bold text-[#278a36]">
                Read article <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
