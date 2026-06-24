import Link from 'next/link';
import Image from 'next/image';
import { wheelchairs } from '@/lib/products';
import ProductCard from '../components/ProductCard';
import PulseFitPage from '../components/PulseFitPage';



export const metadata = {
  title: 'Electric Wheelchair Products | MiniRedone Series | Lightweight Folding Wheelchairs | MiniElephant',
  description:
    'Explore all 10 MiniRedone electric wheelchair models for B2B export. Magnesium alloy frames, dual 350W motors, 30km range. Lightweight folding designs from 42KG to extra-wide 900mm. ISO/CE/FDA certified. Request factory quotation.',
  openGraph: {
    title: 'Electric Wheelchair Products | MiniRedone Series — Lightweight Folding Wheelchairs',
    description:
      '10 MiniRedone electric wheelchair models — from 42KG lightweight to 900mm extra-wide. Magnesium alloy frames, dual 350W motors, 30km range. Factory-direct B2B pricing.',
    url: 'https://www.semwheelchair.com/products',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.semwheelchair.com/products',
  },
};

export default function ProductsPage() {
  return (
    <PulseFitPage badge="Our Products" title="MiniRedone Series" description="10 electric wheelchair models engineered for diverse needs — from ultra-light portability to premium high-back comfort. All featuring magnesium alloy frames.">
      

      {/* Product Grid */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wheelchairs.map((product, i) => (
              <ProductCard key={product.slug} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Spec Comparison */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-2">
            Product Comparison
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
            Quick overview of core specifications across the MiniRedone line.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 font-semibold text-gray-900">Model</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">Net Weight</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">Max Load</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">Range</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">Seat Size</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">Key Feature</th>
                </tr>
              </thead>
              <tbody>
                {wheelchairs.map((p, i) => (
                  <tr key={p.slug} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-gray-50' : ''}`}>
                    <td className="py-3 px-4 font-medium text-teal">
                      <Link href={`/products/${p.slug}`} className="hover:underline">
                        {p.name}
                      </Link>
                    </td>
                    <td className="py-3 px-4 text-gray-600">{p.specs[0].value}</td>
                    <td className="py-3 px-4 text-gray-600">{p.specs[1].value}</td>
                    <td className="py-3 px-4 text-gray-600">{p.specs[2].value}</td>
                    <td className="py-3 px-4 text-gray-600 text-xs">{p.specs[8]?.value || '—'}</td>
                    <td className="py-3 px-4 text-gray-500 text-xs">{p.keyDifference}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-gradient-to-r from-teal to-teal-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Need Help Choosing a Model?
          </h2>
          <p className="text-teal-light/80 max-w-xl mx-auto mb-6">
            Our export specialists can recommend the best MiniRedone model for your market and customer needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-teal font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </PulseFitPage>  );
}
