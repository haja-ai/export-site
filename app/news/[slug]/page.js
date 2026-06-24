import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getArticleBySlug, newsArticles } from '@/lib/news';

export async function generateStaticParams() {
  return newsArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: 'Article Not Found' };

  return {
    title: `${article.title} | MiniElephant News`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      url: `https://www.semwheelchair.com/news/${slug}`,
      type: 'article',
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

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.semwheelchair.com/" },
            { "@type": "ListItem", "position": 2, "name": "News", "item": "https://www.semwheelchair.com/news" },
            { "@type": "ListItem", "position": 3, "name": article.title, "item": `https://www.semwheelchair.com/news/${slug}` }
          ]
        }),
      }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": article.title,
          "description": article.summary,
          "datePublished": article.date,
          "author": {
            "@type": "Organization",
            "name": "Jiaxing Small Elephant Medical Technology Co., Ltd"
          },
          "publisher": {
            "@type": "Organization",
            "@id": "https://www.semwheelchair.com/#organization",
            "name": "Jiaxing Small Elephant Medical Technology Co., Ltd",
            "logo": { "@type": "ImageObject", "url": "https://www.semwheelchair.com/logo.png" }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://www.semwheelchair.com/news/${slug}`
          },
          "url": `https://www.semwheelchair.com/news/${slug}`,
          "keywords": article.tags ? article.tags.join(', ') : undefined
        }),
      }} />
      {/* Breadcrumb */}
      <div className="bg-cream border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-teal transition-colors">Home</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/news" className="hover:text-teal transition-colors">News</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-700 font-medium truncate max-w-[200px]">{article.title}</span>
          </nav>
        </div>
      </div>

      {/* Article */}
      <article className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-3">
              {article.tags.map((tag) => (
                <span key={tag} className="text-xs bg-teal/10 text-teal px-2.5 py-1 rounded-full font-medium">
                  {tag}
                </span>
              ))}
            </div>
            <time className="text-sm text-gray-400">{article.date}</time>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-2 mb-4">{article.title}</h1>
          </div>

          {/* Content */}
          <div
            className="prose prose-gray max-w-none
              prose-headings:text-gray-900 prose-headings:font-bold
              prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4
              prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3
              prose-p:text-gray-600 prose-p:leading-relaxed
              prose-ul:text-gray-600 prose-li:leading-relaxed
              prose-strong:text-gray-900
              prose-a:text-teal prose-a:no-underline hover:prose-a:underline
              prose-table:text-sm prose-th:font-semibold prose-th:text-gray-700 prose-td:text-gray-600
              prose-blockquote:border-teal prose-blockquote:text-gray-600"
          >
            {/* Simple markdown-to-HTML rendering */}
            {article.content.split('\n').map((line, i) => {
              // Headings
              if (line.startsWith('## ')) return <h2 key={i}>{line.slice(3)}</h2>;
              if (line.startsWith('### ')) return <h3 key={i}>{line.slice(4)}</h3>;
              if (line.startsWith('#### ')) return <h4 key={i}>{line.slice(5)}</h4>;

              // Blockquote
              if (line.startsWith('> ')) return <blockquote key={i} className="border-l-4 border-teal pl-4 italic text-gray-600 my-4"><p>{line.slice(2)}</p></blockquote>;

              // Bold
              let content = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
              content = content.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener" class="text-teal hover:underline">$1</a>');

              // Table row detection (simple)
              if (content.startsWith('|') && content.endsWith('|') && !content.includes('---')) {
                const cells = content.split('|').filter(c => c.trim());
                return (
                  <div key={i} className="grid grid-cols-3 gap-2 py-1 text-sm border-b border-gray-100">
                    {cells.map((cell, j) => (
                      <span key={j} className={j === 0 ? 'font-semibold text-gray-700' : 'text-gray-600'} dangerouslySetInnerHTML={{ __html: cell.trim().replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                    ))}
                  </div>
                );
              }

              // Empty line
              if (!content.trim()) return <br key={i} />;

              // Regular paragraph
              return <p key={i} dangerouslySetInnerHTML={{ __html: content }} />;
            })}
          </div>

          {/* CTA at bottom */}
          <div className="mt-12 p-6 bg-cream rounded-2xl border border-gray-200 text-center">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Interested in MiniElephant Electric Wheelchairs?
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Get a customized quotation and product recommendation from our export team. Response within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="btn-primary px-6 py-3 text-sm">
                Request Quotation
              </Link>
              <Link href="/products" className="btn-secondary px-6 py-3 text-sm">
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
