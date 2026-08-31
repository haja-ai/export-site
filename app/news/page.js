import NewsPageClient from './NewsPageClient';

export const metadata = {
  title: 'Electric Wheelchair News & Guides | MiniElephant',
  description:
    'Read MiniElephant news, electric wheelchair buying guides, OEM/ODM notes, and practical export insights for distributors and importers.',
  openGraph: {
    title: 'Electric Wheelchair News & Guides | MiniElephant',
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
  return <NewsPageClient />;
}
