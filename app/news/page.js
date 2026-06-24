import Link from 'next/link';
import { newsArticles } from '@/lib/news';
import PulseFitPage from '../components/PulseFitPage';


export const metadata = {
  title: 'News & Insights | MiniElephant Electric Wheelchair',
  description:
    'Stay updated with MiniElephant news, product launches, industry insights, and B2B buyer guides for electric wheelchairs.',
  openGraph: {
    title: 'News & Insights — MiniElephant Electric Wheelchair',
    description: 'Product launches, industry insights, and B2B buyer guides for electric wheelchairs.',
    url: 'https://www.semwheelchair.com/news',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.semwheelchair.com/news',
  },
};

export default function NewsPage() {
  return (
    <PulseFitPage badge="News & Insights" title="MiniElephant Updates" description="Product launches, industry insights, and B2B buyer guides. Stay informed about electric wheelchair innovations.">
      

      {/* Article List */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {newsArticles.map((article) => (
              <article
                key={article.slug}
                className="bg-white rounded-2xl border border-gray-200 p-6 lg:p-8 hover:shadow-md transition-shadow"
              >
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-teal/10 text-teal px-2.5 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Date */}
                <time className="text-sm text-gray-400">{article.date}</time>

                {/* Title */}
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mt-2 mb-3">
                  <Link
                    href={`/news/${article.slug}`}
                    className="hover:text-teal transition-colors"
                  >
                    {article.title}
                  </Link>
                </h2>

                {/* Summary */}
                <p className="text-gray-600 leading-relaxed mb-4">{article.summary}</p>

                {/* Read more + Source */}
                <div className="flex items-center justify-between">
                  <Link
                    href={`/news/${article.slug}`}
                    className="text-teal font-semibold text-sm hover:text-teal-dark transition-colors inline-flex items-center gap-1"
                  >
                    Read Full Article
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  {article.source !== 'MiniElephant Official' && (
                    <span className="text-xs text-gray-400">via {article.source}</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-gradient-to-r from-teal to-teal-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Want to Feature Your Market?
          </h2>
          <p className="text-teal-light/80 max-w-xl mx-auto mb-6">
            Contact us for customized product solutions, OEM/ODM partnerships, and volume pricing.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-teal font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </PulseFitPage>  );
}
