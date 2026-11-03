import Link from 'next/link';
import PulseFitPage from '@/app/components/PulseFitPage';
import { siteContent as sc } from '@/lib/site-content';
import { NEWS_CATEGORIES, categoryPage, toCards } from '@/lib/news-taxonomy';
import NewsArchiveList from '@/app/components/NewsArchiveList';
import NewsCategoryNav from '@/app/components/NewsCategoryNav';
import TopicPager from '@/app/components/TopicPager';

// Shared body for /news/category/<slug> (page 1) and /news/category/<slug>/page/N.
export default function TopicArchive({ all, category, page }) {
  const { items, current, pages, total, start, end } = categoryPage(all, category.slug, page);

  return (
    <PulseFitPage
      bannerImage={sc.news.bannerImage}
      badge={sc.news.badge}
      title={category.label}
      description={category.blurb}
    >
      <NewsCategoryNav active={category.slug} />

      <section className="min-h-[50vh] bg-white py-14 lg:py-20">
        <div className="px-6 sm:px-8 lg:px-16">
          <nav className="mb-6 flex items-center gap-2 text-sm text-[#657069]" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#278a36]">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/news" className="hover:text-[#278a36]">News</Link>
            <span aria-hidden="true">/</span>
            {current === 1 ? (
              <span className="text-[#152019]">{category.label}</span>
            ) : (
              <>
                <Link href={`/news/category/${category.slug}`} className="hover:text-[#278a36]">{category.label}</Link>
                <span aria-hidden="true">/</span>
                <span className="text-[#152019]">Page {current}</span>
              </>
            )}
          </nav>

          <div className="mb-7 flex flex-wrap items-end justify-between gap-4 border-b border-[#dbe3dd] pb-5">
            <div>
              <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#278a36]">Topic</p>
              <h2 className="mt-2 text-[clamp(1.8rem,2.7vw,2.6rem)] font-extrabold tracking-[-0.05em] text-[#152019]">
                {category.label}
                {current > 1 && <span className="ml-3 align-middle text-base font-bold text-[#657069]">page {current}</span>}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#657069]">{category.blurb}</p>
            </div>
            <p className="text-sm text-[#657069]">
              {total} articles{pages > 1 ? ` · page ${current} of ${pages}` : ''}
            </p>
          </div>

          <TopicPager slug={category.slug} current={current} pages={pages} total={total} start={start} end={end} position="top" />

          <NewsArchiveList articles={toCards(items)} showCategory={false} />

          <TopicPager slug={category.slug} current={current} pages={pages} total={total} start={start} end={end} position="bottom" />

          <div className="mt-10 border-t border-[#dbe3dd] pt-6">
            <p className="text-sm font-bold text-[#152019]">Related topics</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {NEWS_CATEGORIES.filter((c) => c.slug !== category.slug).map((c) => (
                <Link
                  key={c.slug}
                  href={`/news/category/${c.slug}`}
                  className="border border-[#dbe3dd] bg-white px-3 py-2 text-xs font-bold text-[#526158] transition-colors hover:border-[#3ab54a] hover:text-[#278a36]"
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PulseFitPage>
  );
}
