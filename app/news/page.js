import NewsPageClient from './NewsPageClient';

export const metadata = {
  title: 'News & Insights | Electric Wheelchair Manufacturer',
  description:
    'Latest news, B2B guides, and market insights from MiniElephant electric wheelchair manufacturer. Topics: OEM/ODM, certification, shipping, battery technology, market trends.',
  openGraph: {
    title: 'News & Insights : MiniElephant Electric Wheelchair Manufacturer',
    description: 'Electric wheelchair product launches, B2B buyer guides, and industry insights from MiniElephant manufacturer.',
    url: 'https://www.semwheelchair.com/news',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.semwheelchair.com/news',
  },
};

export default function NewsPage() {
  return <NewsPageClient />;
}
