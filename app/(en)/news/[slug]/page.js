import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getArticleBySlug, newsArticles } from '@/lib/news';
import { getNewsMeta } from '@/lib/news-meta';
import { autoMeta } from '@/lib/news-auto-meta';
import { addContextualLinks } from '@/lib/news-inline-links';
import { wheelchairs } from '@/lib/products';
import NewsBody from '@/app/components/NewsBody';
import { categoryOf, CATEGORY_BY_SLUG } from '@/lib/news-taxonomy';

function pickRelated(article, all, limit = 4) {
  const articleCategory = categoryOf(article);
  const tags = new Set(article.tags || []);
  return all
    .filter((a) => a.slug !== article.slug && a.title)
    .map((a) => ({
      article: a,
      sameCategory: categoryOf(a) === articleCategory ? 1 : 0,
      tagScore: (a.tags || []).filter((t) => tags.has(t)).length,
    }))
    .sort(
      (x, y) =>
        y.sameCategory - x.sameCategory ||
        y.tagScore - x.tagScore ||
        String(y.article.date || '').localeCompare(String(x.article.date || '')),
    )
    .slice(0, limit)
    .map((x) => x.article);
}

// Three product pages per article, rotated deterministically so the 158 articles
// spread links across all ten models instead of pointing at the same three.
function pickProducts(article, list, count = 3) {
  const seed = Array.from(String(article.slug || '')).reduce((h, ch) => (h * 31 + ch.charCodeAt(0)) >>> 0, 7);
  const picked = [];
  for (let i = 0; picked.length < Math.min(count, list.length); i += 1) {
    const candidate = list[(seed + i * 3) % list.length];
    if (!picked.some((p) => p.slug === candidate.slug)) picked.push(candidate);
  }
  return picked;
}

export async function generateStaticParams() {
  return newsArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: 'Article Not Found' };

  const override = getNewsMeta(slug);
  const fitted = autoMeta(article);
  const seoTitle = (override?.title || fitted.title || article.title).trim();
  const seoDescription = (override?.description || fitted.description || article.summary).trim();

  return {
    title: { absolute: seoTitle },
    description: seoDescription,
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: `https://www.semwheelchair.com/news/${slug}`,
      type: 'article',
      images: article.bannerImage
        ? [{ url: `https://www.semwheelchair.com${article.bannerImage}`, width: 1600, height: 900, alt: article.title }]
        : [{ url: 'https://www.semwheelchair.com/og-image.jpg', width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      images: article.bannerImage ? [`https://www.semwheelchair.com${article.bannerImage}`] : ['https://www.semwheelchair.com/og-image.jpg'],
    },
    alternates: {
      canonical: `https://www.semwheelchair.com/news/${slug}`,
    },
  };
}

export default async function NewsArticlePage({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const related = pickRelated(article, newsArticles, 4);
  const topicCategory = CATEGORY_BY_SLUG[categoryOf(article)] || CATEGORY_BY_SLUG['buying-guides'];
  const relatedProducts = pickProducts(article, wheelchairs, 3);
  const linked = addContextualLinks(article.content, article, newsArticles, wheelchairs);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.semwheelchair.com/' },
            { '@type': 'ListItem', position: 2, name: 'News', item: 'https://www.semwheelchair.com/news' },
            { '@type': 'ListItem', position: 3, name: article.title, item: `https://www.semwheelchair.com/news/${slug}` },
          ],
        }),
      }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: article.title,
          description: article.summary,
          datePublished: article.date,
          author: {
            '@type': 'Organization',
            name: 'Jiaxing Small Elephant Medical Technology Co., Ltd',
          },
          publisher: {
            '@type': 'Organization',
            '@id': 'https://www.semwheelchair.com/#organization',
            name: 'Jiaxing Small Elephant Medical Technology Co., Ltd',
            logo: { '@type': 'ImageObject', url: 'https://www.semwheelchair.com/logo.png' },
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://www.semwheelchair.com/news/${slug}`,
          },
          url: `https://www.semwheelchair.com/news/${slug}`,
          keywords: article.tags ? article.tags.join(', ') : undefined,
        }),
      }} />
      <div className="bg-cream border-b border-gray-100">
        <div className="px-6 sm:px-8 lg:px-16 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-teal transition-colors">Home</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <Link href="/news" className="hover:text-teal transition-colors">News</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-gray-700 font-medium truncate max-w-[12.5rem]">{article.title}</span>
          </nav>
        </div>
      </div>

      <article className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-3">
              {article.tags.map((tag) => (
                <span key={tag} className="text-xs bg-teal/10 text-teal px-2.5 py-1 rounded-full font-medium">{tag}</span>
              ))}
            </div>
            <time className="text-sm text-gray-400">{article.date}</time>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-2 mb-4">{article.title}</h1>
          </div>

          {article.bannerImage && (
            <div className="mb-8 -mx-4 sm:-mx-6 lg:-mx-8 rounded-xl overflow-hidden">
              <img
                src={`${article.bannerImage}?v=4`}
                alt={article.title}
                className="w-full h-auto max-h-[25rem] object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          )}

          <div className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3 prose-p:text-gray-600 prose-p:leading-relaxed prose-ul:text-gray-600 prose-li:leading-relaxed prose-strong:text-gray-900 prose-a:text-teal prose-a:no-underline hover:prose-a:underline prose-table:text-sm prose-th:font-semibold prose-th:text-gray-700 prose-td:text-gray-600 prose-blockquote:border-teal prose-blockquote:text-gray-600">
                        <NewsBody content={linked.content} />
          </div>

          {related.length > 0 && (
            <div className="mt-12 border-t border-gray-200 pt-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Related reading</h3>
              <ul className="space-y-2">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/news/${r.slug}`} className="text-teal hover:underline text-sm">
                      {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                More in this topic:{' '}
                <Link href={`/news/category/${topicCategory.slug}`} className="text-teal font-semibold hover:underline">
                  {topicCategory.label}
                </Link>
                {' · '}
                <Link href="/news" className="text-teal font-semibold hover:underline">
                  All articles
                </Link>
              </p>
            </div>
          )}

          <div className="mt-10 border-t border-gray-200 pt-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">MiniRedone models</h3>
            <ul className="grid gap-2 sm:grid-cols-3">
              {relatedProducts.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="block border border-gray-200 px-4 py-3 text-sm text-gray-700 transition-colors hover:border-teal hover:text-teal"
                  >
                    <span className="font-semibold">{product.name}</span>
                    <span className="mt-1 block text-xs text-gray-500">Folding electric wheelchair</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 p-6 bg-cream rounded-2xl border border-gray-200 text-center">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Interested in MiniElephant Electric Wheelchairs?</h3>
            <p className="text-gray-600 text-sm mb-4">Get a customized quotation and product recommendation from our export team. Response within 24 hours.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="btn-primary px-6 py-3 text-sm">Request Wholesale Quote</Link>
              <Link href="/products" className="btn-secondary px-6 py-3 text-sm">Browse Products</Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
