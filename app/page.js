'use client';

import Link from 'next/link';
import { wheelchairs, motors } from '@/lib/products';

const WheelchairIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="5" r="2.5" />
    <path d="M5 22l3-9h8l3 9" />
    <path d="M8 13c0 3.3 2.7 6 6 6s6-2.7 6-6" />
    <path d="M4 13h4" />
    <path d="M16 13h4" />
  </svg>
);

const MotorIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 4V2" />
    <path d="M12 22v-2" />
    <path d="M20 12h2" />
    <path d="M2 12h2" />
    <path d="M17.66 6.34l1.41-1.41" />
    <path d="M4.93 19.07l1.41-1.41" />
    <path d="M6.34 6.34L4.93 4.93" />
    <path d="M19.07 19.07l-1.41-1.41" />
  </svg>
);

const products = [...wheelchairs, ...motors];
const featuredProducts = [products[0], products[1], products[3], products[4]];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-charcoal via-[#1e3a4a] to-teal overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-light rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/80 text-sm mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              B2B Export · Quality Certified
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Your Trusted Partner for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-light to-amber-300">
                Mobility & Industrial Power
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
              Proudly manufacturing premium electric wheelchairs under Xiaoxiang
              and industrial electric motors under Dongbang Motor (DPG). Serving
              B2B partners worldwide with certified quality, competitive
              pricing, and reliable supply chains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products" className="btn-primary text-base px-8 py-4">
                Explore Products
              </Link>
              <Link href="/contact" className="btn-secondary text-base px-8 py-4 border-white/30 text-white hover:bg-white hover:text-charcoal">
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Introduction Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              Two Brands, One Commitment to Excellence
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              From life-changing mobility solutions to industrial-grade power
              systems — we deliver quality that our partners can rely on.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Xiaoxiang Wheelchair */}
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 lg:p-10 border border-amber-100">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white">
                  <WheelchairIcon />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal">Xiaoxiang Wheelchair</h3>
                  <p className="text-sm text-gray-500">小象轮椅 · Smart Mobility Solution</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-5">
                Xiaoxiang Wheelchair designs and manufactures cutting-edge electric
                wheelchairs that combine smart control technology with exceptional
                comfort and safety. Our lightweight, foldable designs empower users
                with independence and mobility — from the compact X1 Lite to the
                flagship X3 Pro with 40km range.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {['Smart Control', 'Long Battery Life', 'Lightweight Design', 'Safety Certified'].map((feat) => (
                  <div key={feat} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-orange-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feat}
                  </div>
                ))}
              </div>
              <Link href="/products?category=wheelchair" className="text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors inline-flex items-center gap-1">
                View Wheelchair Products
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Dongbang Motor */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 lg:p-10 border border-gray-200">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-700 to-blue-500 flex items-center justify-center text-white">
                  <MotorIcon />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal">Dongbang Motor (DPG)</h3>
                  <p className="text-sm text-gray-500">东邦电机 · Industrial Power Solutions</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-5">
                Dongbang Motor (DPG) is a professional manufacturer of high-quality
                industrial electric motors ranging from 0.75kW to 22kW. With IE3/IE4
                efficiency ratings, IP55 protection, and CE/CCC/UL certifications,
                our motors power machinery across manufacturing, agriculture, HVAC,
                and material handling industries worldwide.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {['IE3/IE4 Efficiency', 'CE & UL Certified', 'IP55 Protection', 'Customizable'].map((feat) => (
                  <div key={feat} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-blue-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feat}
                  </div>
                ))}
              </div>
              <Link href="/products?category=motor" className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors inline-flex items-center gap-1">
                View Motor Products
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-3">
                Featured Products
              </h2>
              <p className="text-gray-500">
                Our most popular models trusted by B2B partners worldwide.
              </p>
            </div>
            <Link href="/products" className="text-teal font-semibold text-sm hover:text-teal-light transition-colors inline-flex items-center gap-1 shrink-0">
              View All Products
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, i) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className={`product-card group ${product.bgColor}`}
              >
                <div className="p-6">
                  {/* Product icon placeholder */}
                  <div className={`w-12 h-12 rounded-xl ${product.accentBg} bg-opacity-20 flex items-center justify-center mb-4`}>
                    {product.category === 'wheelchair' ? (
                      <WheelchairIcon />
                    ) : (
                      <MotorIcon />
                    )}
                  </div>
                  <span className={`text-xs font-semibold uppercase tracking-wider ${product.accentColor}`}>
                    {product.brand}
                  </span>
                  <h3 className="text-lg font-bold text-charcoal mt-1 mb-2 group-hover:text-teal transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                    {product.tagline}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-teal">
                    <span>Learn More</span>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-20 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Years in Business', value: '15+' },
              { label: 'Countries Exported To', value: '40+' },
              { label: 'Happy B2B Partners', value: '500+' },
              { label: 'Products in Line', value: '6+' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl lg:text-4xl font-bold text-teal-light mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            Whether you need custom OEM/ODM wheelchair solutions or bulk motor
            orders, our team is ready to discuss your requirements. Get a quote
            within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Send Inquiry
            </Link>
            <Link href="/about" className="btn-secondary text-base px-8 py-4">
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
