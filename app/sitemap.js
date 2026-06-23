import { wheelchairs } from '@/lib/products';

const BASE_URL = 'https://www.semwheelchair.com';

const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/products', priority: '0.9', changefreq: 'weekly' },
  { url: '/about', priority: '0.7', changefreq: 'monthly' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/faq', priority: '0.6', changefreq: 'monthly' },
];

const productPages = wheelchairs.map((p) => ({
  url: `/products/${p.slug}`,
  priority: '0.8',
  changefreq: 'weekly',
}));

export default async function sitemap() {
  const allPages = [...staticPages, ...productPages];

  return allPages.map((page) => ({
    url: `${BASE_URL}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changefreq,
    priority: page.priority,
  }));
}
