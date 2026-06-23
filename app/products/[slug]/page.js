import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductBySlug, wheelchairs } from '@/lib/products';
import ProductJsonLd from '../../components/ProductJsonLd';
import ImageGallery from '../../components/ImageGallery';

export async function generateStaticParams() {
  return wheelchairs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: 'Product Not Found' };

  const specs = product.specs.map((s) => `${s.label}: ${s.value}`).join(', ');

  return {
    title: `${product.fullName} | MiniRedone Series | MiniElephant Electric Wheelchair`,
    description: `${product.tagline}. ${specs}. B2B export from China manufacturer. OEM/ODM available.`,
    openGraph: {
      title: `${product.fullName} — ${product.tagline}`,
      description: `${specs}. Magnesium alloy frame, dual 350W motors. Factory-direct pricing.`,
      url: `https://www.semwheelchair.com/products/${slug}`,
      type: 'website',
      images: [{ url: 'https://www.semwheelchair.com/og-image.jpg', width: 1200, height: 630 }],
    },
    alternates: {
      canonical: `https://www.semwheelchair.com/products/${slug}`,
    },
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  return (
    <div>
      <ProductJsonLd product={product} />

      {/* Breadcrumb */}
      <div className="bg-cream border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-teal transition-colors">Home</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/products" className="hover:text-teal transition-colors">Products</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-700 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12 lg:py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Product Image */}
            <div>
              <ImageGallery images={product.images} alt={product.fullName} />
            </div>

            {/* Product Info */}
            <div>
              <span className="text-teal font-semibold text-xs uppercase tracking-wider">
                {product.category}
              </span>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-1 mb-2">
                {product.fullName}
              </h1>
              <p className="text-teal font-medium mb-4">{product.tagline}</p>
              <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

              {/* Key Difference */}
              {product.keyDifference && (
                <div className="bg-teal/5 border border-teal/10 rounded-lg p-4 mb-6">
                  <span className="text-xs font-semibold text-teal uppercase tracking-wider">
                    Key Difference
                  </span>
                  <p className="text-sm text-gray-700 mt-1">{product.keyDifference}</p>
                </div>
              )}

              {/* CTA */}
              <Link
                href={`/contact?product=${encodeURIComponent(product.name)}`}
                className="btn-primary px-6 py-3 inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Request Quotation
              </Link>
            </div>
          </div>

          {/* Specifications */}
          <div className="mt-16 grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    {product.specs.map((spec, i) => (
                      <tr key={spec.label} className={i % 2 === 0 ? 'bg-gray-50/50' : ''}>
                        <td className="py-3 px-4 font-medium text-gray-700 w-1/2">{spec.label}</td>
                        <td className="py-3 px-4 text-gray-600">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Key Features</h2>
              <ul className="space-y-3">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Explore Other Models</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { slug: 'miniredone-i', name: 'MiniRedone-I' },
              { slug: 'miniredone-ii', name: 'MiniRedone-II' },
              { slug: 'miniredone-ii-plus', name: 'MiniRedone-II-Plus' },
              { slug: 'miniredone-iii', name: 'MiniRedone-III' },
              { slug: 'miniredone-iv', name: 'MiniRedone-IV' },
              { slug: 'miniredone-v', name: 'MiniRedone-V' },
            ]
              .filter((p) => p.slug !== slug)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="px-4 py-2 bg-cream border border-gray-200 rounded-full text-sm text-gray-600 hover:border-teal hover:text-teal transition-colors"
                >
                  {p.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
