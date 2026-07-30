import { wheelchairs } from '@/lib/products';
import { newsArticles } from '@/lib/news';

const BASE_URL = 'https://www.semwheelchair.com';

// Auto-updating lastModified date
const today = new Date().toISOString().split('T')[0];

// Static pages with meaningful lastModified and priority
const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'weekly', lastModified: today },
  { url: '/products', priority: '0.9', changefreq: 'weekly', lastModified: today },
  { url: '/about', priority: '0.8', changefreq: 'monthly', lastModified: today },
  { url: '/contact', priority: '0.8', changefreq: 'monthly', lastModified: today },
  { url: '/faq', priority: '0.7', changefreq: 'monthly', lastModified: today },
  { url: '/news', priority: '0.8', changefreq: 'weekly', lastModified: today },
];

const productPages = wheelchairs.map((p) => ({
  url: `/products/${p.slug}`,
  priority: '0.8',
  changefreq: 'weekly',
  lastModified: today,
}));

const newsPages = newsArticles.map((a) => ({
  url: `/news/${a.slug}`,
  priority: '0.7',
  changefreq: 'monthly',
  lastModified: today,
}));

export default async function sitemap() {
  const allPages = [...staticPages, ...productPages, ...newsPages];

  return allPages.map((page) => ({
    url: `${BASE_URL}${page.url}`,
    lastModified: page.lastModified,
    changeFrequency: page.changefreq,
    priority: page.priority,
  }));
}
