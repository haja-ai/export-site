import Link from 'next/link';
import { wheelchairs } from '@/lib/products';
import PageHero from './components/PageHero';
import ProductCard from './components/ProductCard';
import AnimatedStats from './components/AnimatedStats';
import { StaggerGrid, FadeUpItem } from './components/ScrollReveal';

const featuredProducts = [wheelchairs[0], wheelchairs[5], wheelchairs[7], wheelchairs[9]];

export const metadata = {
  title: 'MiniElephant Electric Wheelchair | Premium B2B Electric Wheelchairs Manufacturer | Lightweight Folding Wheelchairs',
  description:
    'Professional electric wheelchair manufacturer & supplier of lightweight folding wheelchairs with magnesium alloy frames. Dual 350W motors, 30km range, 150KG load capacity. B2B export to 50+ countries. ISO, CE, FDA certified. OEM/ODM available. Factory-direct pricing.',
  openGraph: {
    title: 'MiniElephant Electric Wheelchair | Premium B2B Electric Wheelchairs Manufacturer | Lightweight Folding Wheelchairs',
    description:
      'Lightweight folding electric wheelchairs with magnesium alloy frames, dual 350W motors, 30km range, 150KG load. Factory-direct B2B pricing from China manufacturer. ISO/CE/FDA certified.',
    url: 'https://www.semwheelchair.com',
    type: 'website',
    images: [{ url: 'https://www.semwheelchair.com/og-image.jpg', width: 1200, height: 630, alt: 'MiniElephant MiniRedone Series Lightweight Folding Electric Wheelchairs' }],
  },
  alternates: {
    canonical: 'https://www.semwheelchair.com',
  },
};

const advantages = [
  {
    title: 'Factory-Direct Pricing',
    desc: 'No middlemen — you deal directly with the manufacturer. Competitive pricing with volume discounts.',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
  },
  {
    title: 'Certified Quality',
    desc: 'ISO, CE, FDA — our products meet the strictest international standards for medical devices.',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  },
  {
    title: 'OEM / ODM Available',
    desc: 'Custom branding, packaging, specifications, and design modifications for your market.',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>,
  },
  {
    title: 'Reliable Logistics',
    desc: 'Established shipping partnerships ensure timely delivery by sea, air, or rail worldwide.',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10m8-1a1 1 0 01-1 1H5a1 1 0 01-1-1m14-5h2a1 1 0 011 1v3a1 1 0 01-1 1h-2M9 20a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4z" /></svg>,
  },
  {
    title: 'After-Sales Support',
    desc: 'Dedicated support team for technical questions, warranty claims, and spare parts.',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
  },
  {
    title: 'Sample Service',
    desc: 'Pre-order sample evaluation. We ship samples quickly so you can verify quality firsthand.',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Preload hero images for faster LCP */}
      <link rel="preload" as="image" href="/images/miniredone-i.png" fetchPriority="high" />
      <link rel="preload" as="image" href="/images/miniredone-ii-plus.png" fetchPriority="high" />
      <PageHero />

      <AnimatedStats />

      {/* Featured Products */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-teal font-semibold text-sm uppercase tracking-widest">
                Our Products
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-3">
                Featured Electric Wheelchair Models
              </h2>
              <p className="text-gray-500 max-w-xl">
                Explore our complete MiniRedone series of folding electric wheelchairs — from ultra-lightweight 42KG portable designs to premium high-back comfort models. All feature magnesium alloy frames and dual 350W motors.
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

          <StaggerGrid className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, i) => (
              <FadeUpItem key={product.slug} index={i}>
                <ProductCard product={product} index={i} />
              </FadeUpItem>
            ))}
          </StaggerGrid>
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
              Why Choose Our Electric Wheelchair Factory
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We deliver value beyond products — partnership, quality, and peace of mind. As a direct electric wheelchair manufacturer with ISO, CE, and FDA certification, we offer factory-direct pricing, OEM/ODM customization, and reliable after-sales support.
            </p>
          </div>

          <StaggerGrid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((item, i) => (
              <FadeUpItem key={item.title} index={i}>
                <div className="bg-cream rounded-xl p-6 border border-gray-100 hover:border-teal/20 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center text-teal mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </FadeUpItem>
            ))}
          </StaggerGrid>
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
                Professional Manufacturer of Electric Wheelchairs — Magnesium Alloy Folding Wheelchair Factory
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Jiaxing Small Elephant Medical Technology Co., Ltd is a professional manufacturer
                specializing in folding electric wheelchairs. With over 10 years of experience, our
                MiniElephant brand has become synonymous with quality, innovation, and reliability in
                the mobility aid industry.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our MiniRedone series features 10 electric wheelchair models covering every need — from lightweight
                42KG portable designs to premium high-back comfort and extra-wide (900mm) wheelchairs. All models feature
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

      {/* CTA Section — Contact for Quotation */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ready to Partner with Our Electric Wheelchair Factory?
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            Contact our B2B export team today for a customized quotation on MiniRedone folding electric wheelchairs. OEM/ODM customization available. We typically respond within 24 hours.
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
