import Link from 'next/link';
import { wheelchairs } from '@/lib/products';
import PageHero from './components/PageHero';
import ProductCard from './components/ProductCard';

const featuredProducts = [wheelchairs[0], wheelchairs[5], wheelchairs[7], wheelchairs[9]];

export const metadata = {
  title: 'MiniElephant Electric Wheelchair | Premium B2B Electric Wheelchairs Manufacturer',
  description:
    'Professional electric wheelchair manufacturer. Lightweight folding wheelchairs with magnesium alloy frame, 30km range. B2B export to 50+ countries. OEM/ODM welcome.',
  openGraph: {
    title: 'MiniElephant Electric Wheelchair | Premium B2B Electric Wheelchairs Manufacturer',
    description:
      'Lightweight folding electric wheelchairs with magnesium alloy frame, 30km range. Factory-direct B2B pricing.',
    url: 'https://www.semwheelchair.com',
    type: 'website',
    images: [{ url: 'https://www.semwheelchair.com/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.semwheelchair.com',
  },
};

const advantages = [
  {
    title: 'Factory-Direct Pricing',
    desc: 'No middlemen — you deal directly with the manufacturer. Competitive pricing with volume discounts.',
  },
  {
    title: 'Certified Quality',
    desc: 'ISO, CE, FDA — our products meet the strictest international standards for medical devices.',
  },
  {
    title: 'OEM / ODM Available',
    desc: 'Custom branding, packaging, specifications, and design modifications for your market.',
  },
  {
    title: 'Reliable Logistics',
    desc: 'Established shipping partnerships ensure timely delivery by sea, air, or rail worldwide.',
  },
  {
    title: 'After-Sales Support',
    desc: 'Dedicated support team for technical questions, warranty claims, and spare parts.',
  },
  {
    title: 'Sample Service',
    desc: 'Pre-order sample evaluation. We ship samples quickly so you can verify quality firsthand.',
  },
];

const stats = [
  { label: 'Countries Exported', value: '50+' },
  { label: 'Happy Users', value: '100K+' },
  { label: 'Years Experience', value: '10+' },
  { label: 'ISO Certified', value: 'Yes' },
];

export default function HomePage() {
  return (
    <div>
      <PageHero />

      {/* Stats Section */}
      <section className="py-12 lg:py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="animate-fade-in-up">
                <div className="text-3xl lg:text-4xl font-bold text-teal mb-2">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-teal font-semibold text-sm uppercase tracking-widest">
                Our Products
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-3">
                Featured Wheelchair Models
              </h2>
              <p className="text-gray-500 max-w-xl">
                Explore our complete MiniRedone series — from lightweight portability to premium
                high-back comfort.
              </p>
            </div>
            <Link
              href="/products"
              className="text-teal font-semibold text-sm hover:text-teal-dark transition-colors inline-flex items-center gap-1 shrink-0"
            >
              View All Models
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, i) => (
              <ProductCard key={product.slug} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-teal font-semibold text-sm uppercase tracking-widest">
              Why MiniElephant
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We deliver value beyond products — partnership, quality, and peace of mind.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((item) => (
              <div
                key={item.title}
                className="bg-cream rounded-xl p-6 border border-gray-100 hover:border-teal/20 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center text-teal mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Highlights */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-teal font-semibold text-sm uppercase tracking-widest">
                About Us
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Professional Manufacturer of Electric Wheelchairs
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Jiaxing Small Elephant Medical Technology Co., Ltd is a professional manufacturer
                specializing in electric wheelchairs. With over 10 years of experience, our
                MiniElephant brand has become synonymous with quality, innovation, and reliability in
                the mobility aid industry.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our MiniRedone series features 10 models covering every need — from lightweight
                portable designs to premium high-back comfort wheelchairs. All models feature
                magnesium alloy frames, dual 350W brushless motors, and 30km range.
              </p>
              <Link
                href="/about"
                className="text-teal font-semibold hover:text-teal-dark transition-colors inline-flex items-center gap-1"
              >
                Learn More About Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: '10+ Years', desc: 'Industry Experience' },
                { label: '50+ Countries', desc: 'Global Export' },
                { label: '10 Models', desc: 'MiniRedone Series' },
                { label: 'OEM/ODM', desc: 'Custom Solutions' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-xl p-6 border border-gray-100 text-center"
                >
                  <div className="text-2xl font-bold text-teal mb-1">{item.label}</div>
                  <div className="text-sm text-gray-500">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            Contact our export team today for a customized quotation. We typically respond within 24
            hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Get a Quote
            </Link>
            <Link href="/products" className="btn-secondary text-base px-8 py-4">
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
