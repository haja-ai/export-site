import PulseFitPage from '@/app/components/PulseFitPage';
import { siteContent as sc } from '@/lib/site-content';
import { newsArticles } from '@/lib/news';
import { paginate, sortByDateDesc, toCards, PER_PAGE } from '@/lib/news-taxonomy';
import NewsArchiveList from '@/app/components/NewsArchiveList';
import NewsCategoryNav from '@/app/components/NewsCategoryNav';
import NewsPager from '@/app/components/NewsPager';

export const metadata = {
  title: 'Electric Wheelchair News & Guides',
  description:
    'Read MiniElephant news, electric wheelchair buying guides, OEM/ODM notes, and practical export insights for distributors and importers.',
  openGraph: {
    title: 'Electric Wheelchair News & Guides',
    description:
      'Read MiniElephant news, electric wheelchair buying guides, OEM/ODM notes, and practical export insights for distributors and importers.',
    url: 'https://www.semwheelchair.com/news',
    type: 'website',
    images: [
      { url: 'https://www.semwheelchair.com/images/banner-news.webp', width: 1200, height: 630, alt: 'MiniElephant news page' },
    ],
  },
  alternates: {
    canonical: 'https://www.semwheelchair.com/news',
  },
};

export default function NewsPage() {
  const sorted = sortByDateDesc(newsArticles);
  const { items, current, pages, total } = paginate(sorted, 1, PER_PAGE);

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
              <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#278a36]">Latest knowledge</p>
              <h2 className="mt-2 text-[clamp(1.8rem,2.7vw,2.6rem)] font-extrabold tracking-[-0.05em] text-[#152019]">All articles</h2>
            </div>
            <p className="text-sm text-[#657069]">
              {total} articles · page {current} of {pages}
            </p>
          </div>

          <NewsArchiveList articles={toCards(items)} showCategory />
          <NewsPager current={current} pages={pages} />
        </div>
      </section>
    </PulseFitPage>
  );
}
