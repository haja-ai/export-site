import Link from 'next/link';
import { wheelchairs } from '@/lib/products';
import { siteContent } from '@/lib/site-content';
import PageHero from './components/PageHero';
import ProductCard from './components/ProductCard';
import AnimatedStats from './components/AnimatedStats';
import { StaggerGrid, FadeUpItem, FadeIn } from './components/ScrollReveal';
import WhyChooseUs from './components/WhyChooseUs';
const featuredProducts = [wheelchairs[0], wheelchairs[5], wheelchairs[7], wheelchairs[9]];

export const metadata = {
  title: 'Electric Wheelchair Manufacturer | MiniRedone',
  description:
    'Professional electric wheelchair manufacturer of lightweight folding wheelchairs with magnesium alloy frames. Dual 350W motors, 30km range. ISO/CE/FDA certified.',
  openGraph: {
    title: 'MiniElephant Electric Wheelchair | B2B Magnesium Alloy Wheelchair Factory',
    description:
      'Lightweight folding electric wheelchairs with magnesium alloy frames, dual 350W motors, 30km range. Factory-direct B2B pricing. ISO/CE/FDA certified.',
    url: 'https://www.semwheelchair.com',
    type: 'website',
    images: [{ url: 'https://www.semwheelchair.com/og-image.jpg', width: 1200, height: 630, alt: 'MiniElephant MiniRedone Series Lightweight Folding Electric Wheelchairs' }],
  },
  alternates: {
    canonical: 'https://www.semwheelchair.com',
  },
};

const { siteContent: sc } = { siteContent };
const advTitles = ['Factory-Direct Pricing', 'Certified Quality', 'OEM / ODM Available', 'Reliable Logistics', 'After-Sales Support', 'Sample Service'];
const advantages = advTitles.map((t) => {
  const fromContent = sc.home.whyChooseUs.advantages.find(a => a.title === t) || { title: t, desc: '' };
  return { title: fromContent.title, desc: fromContent.desc, icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> };
});

export default function HomePage() {
  return (
    <div>
      {/* Preload hero images for faster LCP */}
      <link rel="preload" as="image" href="/images/miniredone-i.webp" fetchPriority="high" />
      <link rel="preload" as="image" href="/images/miniredone-ii-plus.webp" fetchPriority="high" />
      <PageHero />

      <AnimatedStats />

      {/* Featured Products */}
      <section className="py-16 lg:py-24 bg-[#F8F9FA]">
        <div className="px-6 sm:px-8 lg:px-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <FadeIn>
            <div>
              <span className="text-teal font-semibold text-sm uppercase tracking-widest">
                {sc.home.featured.badge}
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-3">
                {sc.home.featured.title}
              </h2>
              <p className="text-gray-500 max-w-xl">
                {sc.home.featured.description}
              </p>
            </div>
            </FadeIn>
            <Link
              href="/products"
              className="text-teal font-semibold text-sm hover:text-teal-dark transition-colors inline-flex items-center gap-1 shrink-0"
            >
              {sc.home.featured.viewAll}
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
      <WhyChooseUs advantages={advantages} />

      {/* Company Highlights */}
      <section className="py-16 lg:py-24 bg-[#F8F9FA]">
        <div className="px-6 sm:px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-teal font-semibold text-sm uppercase tracking-widest">
                About Us
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-6">
                {sc.home.aboutSection.title}
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
        <div className="px-6 sm:px-8 lg:px-16 text-center">
          <FadeIn>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {sc.home.cta.title}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            {sc.home.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              {sc.home.cta.buttonLabel}
            </Link>
            <Link href="/products" className="btn-secondary text-base px-8 py-4">
              Browse Products
            </Link>
          </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
