import { wheelchairs } from '@/lib/products';
import { newsArticles } from '@/lib/news';
import { NEWS_CATEGORIES, PER_PAGE } from '@/lib/news-taxonomy';

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
  { url: '/privacy', priority: '0.3', changefreq: 'yearly', lastModified: today },
  { url: '/terms', priority: '0.3', changefreq: 'yearly', lastModified: today },
  { url: '/cookie-policy', priority: '0.3', changefreq: 'yearly', lastModified: today },
  { url: '/news', priority: '0.8', changefreq: 'weekly', lastModified: today },
  { url: '/certifications', priority: '0.8', changefreq: 'monthly', lastModified: today },
  { url: '/oem-odm', priority: '0.8', changefreq: 'monthly', lastModified: today },
  { url: '/wholesale', priority: '0.8', changefreq: 'monthly', lastModified: today },
  { url: '/es', priority: '0.7', changefreq: 'monthly', lastModified: today },
  { url: '/fr', priority: '0.7', changefreq: 'monthly', lastModified: today },
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
  lastModified: a.date || today,
}));

const newsPageCount = Math.max(1, Math.ceil(newsArticles.length / PER_PAGE));

const newsArchivePages = Array.from({ length: Math.max(0, newsPageCount - 1) }, (_, i) => ({
  url: `/news/page/${i + 2}`,
  priority: '0.5',
  changefreq: 'weekly',
  lastModified: today,
}));

const newsCategoryPages = NEWS_CATEGORIES.map((c) => ({
  url: `/news/category/${c.slug}`,
  priority: '0.7',
  changefreq: 'weekly',
  lastModified: today,
}));

export default async function sitemap() {
  const allPages = [...staticPages, ...productPages, ...newsCategoryPages, ...newsArchivePages, ...newsPages];

  return allPages.map((page) => ({
    url: `${BASE_URL}${page.url}`,
    lastModified: page.lastModified,
    changeFrequency: page.changefreq,
    priority: page.priority,
  }));
}
