'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState, useMemo, Suspense } from 'react';
import { wheelchairs, motors } from '@/lib/products';

const allProducts = [...wheelchairs, ...motors];

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'wheelchair') return wheelchairs;
    if (activeCategory === 'motor') return motors;
    return allProducts;
  }, [activeCategory]);

  return (
    <>
      {/* Filter Bar */}
      <section className="sticky top-16 lg:top-20 bg-white border-b border-gray-200 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 py-4 overflow-x-auto scrollbar-hide">
            {[
              { id: 'all', label: 'All Products' },
              { id: 'wheelchair', label: 'Electric Wheelchairs' },
              { id: 'motor', label: 'Industrial Motors' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-teal text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12 lg:py-16 bg-gray-50 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No products found in this category.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className={`product-card group ${product.bgColor} border border-gray-100`}
                >
                  <div className="p-6 lg:p-8">
                    <div className={`w-14 h-14 rounded-xl ${product.accentBg} bg-opacity-20 flex items-center justify-center mb-5`}>
                      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
                    </div>

                    <span className={`text-xs font-semibold uppercase tracking-wider ${product.accentColor}`}>
                      {product.brand}
                    </span>
                    <h3 className="text-xl font-bold text-charcoal mt-1 mb-2 group-hover:text-teal transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed mb-4">
                      {product.tagline}
                    </p>

                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {product.specs.slice(0, 4).map((spec) => (
                        <div key={spec.label} className="text-xs">
                          <span className="text-gray-400">{spec.label}:</span>{' '}
                          <span className="text-gray-700 font-medium">{spec.value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-sm font-medium text-teal mt-auto">
                      <span>View Details</span>
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default function ProductsPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-charcoal to-teal text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Explore our complete range of electric wheelchairs and industrial
            electric motors. All products meet international quality standards.
          </p>
        </div>
      </section>

      <Suspense
        fallback={
          <section className="py-12 lg:py-16 bg-gray-50 min-h-[60vh]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
              <p className="text-gray-500">Loading products...</p>
            </div>
          </section>
        }
      >
        <ProductsContent />
      </Suspense>
    </div>
  );
}
