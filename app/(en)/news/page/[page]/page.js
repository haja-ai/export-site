import { notFound } from 'next/navigation';
import PulseFitPage from '@/app/components/PulseFitPage';
import { siteContent as sc } from '@/lib/site-content';
import { newsArticles } from '@/lib/news';
import { paginate, sortByDateDesc, PER_PAGE } from '@/lib/news-taxonomy';
import NewsArchiveList from '@/app/components/NewsArchiveList';
import NewsCategoryNav from '@/app/components/NewsCategoryNav';
import NewsPager from '@/app/components/NewsPager';

const sorted = sortByDateDesc(newsArticles);
const TOTAL_PAGES = Math.max(1, Math.ceil(sorted.length / PER_PAGE));

export const dynamicParams = false;

export function generateStaticParams() {
  return Array.from({ length: Math.max(0, TOTAL_PAGES - 1) }, (_, i) => ({ page: String(i + 2) }));
}

export async function generateMetadata({ params }) {
  const { page } = await params;
  const n = Number(page);
  if (!Number.isInteger(n) || n < 2 || n > TOTAL_PAGES) return { title: 'News page not found' };
  const title = `Electric Wheelchair News and Guides Page ${n}`;
  const description = `Page ${n} of the MiniElephant electric wheelchair knowledge library: buying guides, compliance notes, logistics and dealer operations for importers.`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: `https://www.semwheelchair.com/news/page/${n}` },
    robots: { index: true, follow: true },
  };
}

export default async function NewsPaginatedPage({ params }) {
  const { page } = await params;
  const n = Number(page);
  if (!Number.isInteger(n) || n < 2 || n > TOTAL_PAGES) notFound();
  const { items, current, pages, total } = paginate(sorted, n, PER_PAGE);

  return (
    <PulseFitPage
      bannerImage={sc.news.bannerImage}
      badge={sc.news.badge}
      title={sc.news.title}
      description={sc.news.description}
    >
      <NewsCategoryNav active="" />

      <section className="min-h-[50vh] bg-white py-14 lg:py-20">
        <div className="px-6 sm:px-8 lg:px-16">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4 border-b border-[#dbe3dd] pb-5">
            <div>
              <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#278a36]">Archive</p>
              <h2 className="mt-2 text-[clamp(1.8rem,2.7vw,2.6rem)] font-extrabold tracking-[-0.05em] text-[#152019]">
                All articles · page {current}
              </h2>
            </div>
            <p className="text-sm text-[#657069]">
              {total} articles · page {current} of {pages}
            </p>
          </div>

          <NewsArchiveList articles={items} showCategory />
          <NewsPager current={current} pages={pages} />
        </div>
      </section>
    </PulseFitPage>
  );
}
