'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getProductBySlug, wheelchairs, motors } from '@/lib/products';
import { notFound } from 'next/navigation';

export default function ProductDetailPage() {
  const params = useParams();
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts =
    product.category === 'wheelchair'
      ? wheelchairs.filter((p) => p.slug !== product.slug)
      : motors.filter((p) => p.slug !== product.slug);

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-teal transition-colors">
              Home
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/products" className="hover:text-teal transition-colors">
              Products
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-700 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section className={`py-12 lg:py-16 ${product.bgColor}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left: Image / Visual */}
            <div className="relative">
              <div className={`aspect-square rounded-2xl ${product.accentBg} bg-opacity-10 border-2 border-dashed border-gray-200 flex items-center justify-center`}>
                <div className="text-center">
                  <svg className="w-24 h-24 mx-auto text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    {product.category === 'wheelchair' ? (
                      <>
                        <circle cx="12" cy="5" r="2.5" />
                        <path d="M5 22l3-9h8l3 9" />
                        <path d="M8 13c0 3.3 2.7 6 6 6s6-2.7 6-6" />
                        <path d="M4 13h4" />
                        <path d="M16 13h4" />
                      </>
                    ) : (
                      <>
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 4V2" />
                        <path d="M12 22v-2" />
                        <path d="M20 12h2" />
                        <path d="M2 12h2" />
                        <path d="M17.66 6.34l1.41-1.41" />
                        <path d="M4.93 19.07l1.41-1.41" />
                        <path d="M6.34 6.34L4.93 4.93" />
                        <path d="M19.07 19.07l-1.41-1.41" />
                      </>
                    )}
                  </svg>
                  <p className="text-sm text-gray-400 mt-4">Product image coming soon</p>
                </div>
              </div>
              {/* Badge */}
              <div className={`absolute top-4 left-4 ${product.accentBg} text-white text-xs font-bold px-3 py-1.5 rounded-full`}>
                {product.brand}
              </div>
            </div>

            {/* Right: Info */}
            <div>
              <span className={`text-sm font-semibold uppercase tracking-wider ${product.accentColor}`}>
                {product.category === 'wheelchair' ? 'Electric Wheelchair' : 'Industrial Motor'}
              </span>
              <h1 className="text-3xl lg:text-4xl font-bold text-charcoal mt-2 mb-3">
                {product.name}
              </h1>
              <p className="text-lg text-gray-500 mb-6">
                {product.tagline}
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Key Features */}
              <h3 className="font-bold text-charcoal mb-3">Key Features</h3>
              <ul className="space-y-2 mb-8">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <svg className={`w-5 h-5 ${product.accentColor} shrink-0 mt-0.5`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Specifications Table */}
              <h3 className="font-bold text-charcoal mb-3">Technical Specifications</h3>
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-8">
                <table className="w-full text-sm">
                  <tbody>
                    {product.specs.map((spec, i) => (
                      <tr key={spec.label} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-4 py-3 text-gray-500 font-medium w-1/3">{spec.label}</td>
                        <td className="px-4 py-3 text-gray-800">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-center flex-1">
                  Request Quotation
                </Link>
                <Link href="/contact" className="btn-secondary text-center flex-1">
                  Ask a Question
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-charcoal mb-8">
              More {product.category === 'wheelchair' ? 'Wheelchair' : 'Motor'} Models
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.slice(0, 3).map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/products/${rp.slug}`}
                  className={`product-card group ${rp.bgColor} border border-gray-100 p-6`}
                >
                  <span className={`text-xs font-semibold uppercase tracking-wider ${rp.accentColor}`}>
                    {rp.brand}
                  </span>
                  <h3 className="text-lg font-bold text-charcoal mt-1 mb-2 group-hover:text-teal transition-colors">
                    {rp.name}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                    {rp.tagline}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-teal">
                    <span>View Details</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
