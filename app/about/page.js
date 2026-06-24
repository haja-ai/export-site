import Link from 'next/link';
import { getRecentArticles } from '@/lib/news';

export const metadata = {
  title: 'About Us | MiniElephant Electric Wheelchair Manufacturer',
  description:
    'Jiaxing Small Elephant Medical Technology Co., Ltd — professional electric wheelchair manufacturer with 10+ years experience. ISO certified, OEM/ODM available, 50+ countries exported.',
  openGraph: {
    title: 'About MiniElephant — Professional Electric Wheelchair Manufacturer',
    description:
      '10+ years of experience in electric wheelchair manufacturing. ISO certified factory in Zhejiang, China.',
    url: 'https://www.semwheelchair.com/about',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.semwheelchair.com/about',
  },
};

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-teal-light font-semibold text-sm uppercase tracking-widest">
            Our Story
          </span>
          <h1 className="text-3xl lg:text-5xl font-bold text-white mt-3 mb-4">
            About MiniElephant
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Professional electric wheelchair manufacturer committed to mobility innovation and quality.
          </p>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Jiaxing Small Elephant Medical Technology Co., Ltd
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Founded in Jiaxing, Zhejiang Province, we have grown into a trusted name in the
                electric wheelchair industry. Our MiniElephant brand represents a commitment to
                lightweight, durable, and accessible mobility solutions for users worldwide.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We specialize in the MiniRedone series — 10 models of folding electric wheelchairs
                built on a common magnesium alloy frame platform. With dual 350W brushless motors and
                a 30km range, every MiniRedone wheelchair delivers reliable daily mobility.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our factory at No. 18 Zhenzhong East Road, Jiashan County, produces wheelchairs for
                export to over 50 countries. We hold ISO, CE, and FDA certifications, ensuring our
                products meet the highest international standards.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Established', value: '2013' },
                { label: 'Employees', value: '100+' },
                { label: 'Products', value: '10+ Models' },
                { label: 'Export Markets', value: '50+ Countries' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-cream rounded-xl p-6 border border-gray-100 text-center"
                >
                  <div className="text-2xl font-bold text-teal mb-1">{item.value}</div>
                  <div className="text-sm text-gray-500">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Quality Certifications
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Our products meet international standards for medical devices and mobility equipment.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'ISO 13485', desc: 'Medical devices quality management' },
              { name: 'CE Marking', desc: 'European health & safety compliance' },
              { name: 'FDA Registered', desc: 'US Food and Drug Administration' },
            ].map((cert) => (
              <div
                key={cert.name}
                className="bg-white rounded-xl p-6 border border-gray-100 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{cert.name}</h3>
                <p className="text-sm text-gray-500">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-12 lg:py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-teal font-semibold text-sm uppercase tracking-widest">Latest Updates</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-2">News & Insights</h2>
            </div>
            <Link href="/news" className="text-teal font-semibold text-sm hover:text-teal-dark transition-colors inline-flex items-center gap-1 shrink-0">
              View All
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {getRecentArticles(3).map((article) => (
              <Link
                key={article.slug}
                href={`/news/${article.slug}`}
                className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md hover:border-teal/20 transition-all group"
              >
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {article.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-[10px] bg-teal/10 text-teal px-2 py-0.5 rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-teal transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">{article.summary}</p>
                <time className="text-xs text-gray-400 mt-3 block">{article.date}</time>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-gradient-to-r from-teal to-teal-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Want to Learn More?
          </h2>
          <p className="text-teal-light/80 max-w-xl mx-auto mb-6">
            Contact our team for detailed product specifications, pricing, and sample requests.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-teal font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
