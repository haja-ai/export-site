import { wheelchairs } from '@/lib/products';
import { newsArticles } from '@/lib/news';

const BASE_URL = 'https://www.semwheelchair.com';

// Static pages with meaningful lastModified and priority
const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'weekly', lastModified: '2026-06-24' },
  { url: '/products', priority: '0.9', changefreq: 'weekly', lastModified: '2026-06-24' },
  { url: '/about', priority: '0.8', changefreq: 'monthly', lastModified: '2026-06-15' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly', lastModified: '2026-06-15' },
  { url: '/faq', priority: '0.7', changefreq: 'monthly', lastModified: '2026-06-01' },
  { url: '/news', priority: '0.8', changefreq: 'weekly', lastModified: '2026-06-15' },
];

const productPages = wheelchairs.map((p) => ({
  url: `/products/${p.slug}`,
  priority: '0.8',
  changefreq: 'weekly',
  lastModified: '2026-06-24',
}));

const newsPages = newsArticles.map((a) => ({
  url: `/news/${a.slug}`,
  priority: '0.7',
  changefreq: 'monthly',
  lastModified: '2026-06-15',
}));

// Add additional product variants that aren't in the main list
const additionalUrls = [
  { url: '/products/miniredone-i-r', priority: '0.8', changefreq: 'weekly', lastModified: '2026-06-24' },
];

export default async function sitemap() {
  const allPages = [...staticPages, ...productPages, ...newsPages, ...additionalUrls];

  return allPages.map((page) => ({
    url: `${BASE_URL}${page.url}`,
    lastModified: page.lastModified,
    changeFrequency: page.changefreq,
    priority: page.priority,
  }));
}
