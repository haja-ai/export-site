import NewsPageClient from './NewsPageClient';

export const metadata = {
  title: 'News & Insights | Electric Wheelchair Industry',
  description:
    'Electric wheelchair news, B2B guides and market insights from MiniElephant manufacturer. OEM/ODM, certification, shipping, battery topics.',
  openGraph: {
    title: 'News & Insights | Electric Wheelchair Industry',
    description: 'Electric wheelchair product launches, B2B buyer guides, and industry insights from MiniElephant manufacturer.',
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
