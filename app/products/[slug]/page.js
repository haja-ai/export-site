import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductBySlug, wheelchairs } from '@/lib/products';
import ProductJsonLd from '@/app/components/ProductJsonLd';
import ImageGallery from '@/app/components/ImageGallery';
import FloatingInquiry from '@/app/components/FloatingInquiry';

export async function generateStaticParams() {
  return wheelchairs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: 'Product Not Found' };

  const specs = product.specs.map((s) => `${s.label}: ${s.value}`).join(', ');

  return {
    title: `${product.fullName}`,
    description: `${product.tagline}. ${specs}. MiniElephant MiniRedone B2B export product page.`,
    openGraph: {
      title: `${product.fullName}`,
      description: `${product.tagline}. ${specs}. MiniElephant MiniRedone B2B export product page.`,
      url: `https://www.semwheelchair.com/products/${slug}`,
      type: 'website',
      images: product.images && product.images.length > 0
        ? [{ url: `https://www.semwheelchair.com${product.images[0]}`, width: 800, height: 600, alt: product.fullName }]
        : [{ url: 'https://www.semwheelchair.com/og-image.jpg', width: 1200, height: 630, alt: product.fullName }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.fullName}`,
      description: `${product.tagline}. ${specs}`,
      images: product.images && product.images.length > 0
        ? [`https://www.semwheelchair.com${product.images[0]}`]
        : ['https://www.semwheelchair.com/og-image.jpg'],
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

  const specValue = (label) => product.specs.find((spec) => spec.label === label)?.value || 'Please confirm in the quotation';
  const buyerFaqs = [
    {
      q: `Who is the ${product.name} electric wheelchair designed for?`,
      a: `${product.name} is presented as a MiniRedone folding electric wheelchair for distributors, importers, mobility retailers, and OEM/ODM buyers. Its recommended market positioning should be confirmed against the selected configuration and local requirements.`,
    },
    {
      q: `What makes the ${product.name} different from other MiniRedone models?`,
      a: `${product.keyDifference || product.tagline}. Compare the full specification sheet with other models before selecting a range for your market.`,
    },
    {
      q: `What are the key ${product.name} specifications?`,
      a: `The listed specification includes ${specValue('Net Weight')} net weight, ${specValue('Max Load')} maximum load, ${specValue('Range')} approximate range, ${specValue('Battery')} battery, and ${specValue('Frame Material')} frame material. Confirm the final configuration before ordering.`,
    },
    {
      q: `Can I request a sample or wholesale quotation for ${product.name}?`,
      a: `Yes. Contact MiniElephant with your target market, quantity, packaging needs, and destination. Sample terms, MOQ, lead time, shipping, and warranty scope are confirmed in the quotation for the selected model.`,
    },
    {
      q: `Does MiniElephant support OEM or ODM for ${product.name}?`,
      a: `OEM/ODM discussions are available for suitable projects. Branding, colors, packaging, manuals, configuration changes, MOQ, and approval requirements must be reviewed and confirmed before production.`,
    },
  ];

  return (
    <div>
      <ProductJsonLd product={product} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.semwheelchair.com/' },
            { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://www.semwheelchair.com/products' },
            { '@type': 'ListItem', position: 3, name: product.name, item: `https://www.semwheelchair.com/products/${slug}` },
          ],
        }),
      }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: buyerFaqs.map((faq) => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: { '@type': 'Answer', text: faq.a },
          })),
        }),
      }} />

      <div className="bg-[#f4f7f4] border-b border-[#dbe3dd]">
        <div className="px-6 sm:px-8 lg:px-16 py-4">
          <nav className="flex items-center gap-2 text-sm text-[#627067]" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#3ab54a] transition-colors">Home</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <Link href="/products" className="hover:text-[#3ab54a] transition-colors">Products</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-[#152019] font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      <section className="py-12 lg:py-16 bg-[#f4f7f4]">
        <div className="px-6 sm:px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <ImageGallery images={product.images} alt={product.fullName} />
            </div>

            <div>
              <span className="text-[#3ab54a] font-bold text-xs uppercase tracking-[0.16em]">{product.category}</span>
              <h1 className="text-2xl lg:text-3xl font-bold text-[#152019] mt-2 mb-3">{product.fullName}</h1>
              <p className="text-[#152019] font-medium mb-4">{product.tagline}</p>
              <p className="text-[#526158] leading-relaxed mb-6">{product.description}</p>

              {product.keyDifference && (
                <div className="border-l-2 border-[#3ab54a] bg-white p-4 mb-6">
                  <span className="text-xs font-bold text-[#3ab54a] uppercase tracking-[0.16em]">Key Difference</span>
                  <p className="text-sm text-[#344239] mt-1">{product.keyDifference}</p>
                </div>
              )}

              <Link href={`/contact?product=${encodeURIComponent(product.name)}`} className="px-6 py-3 inline-flex items-center gap-2 bg-[#3ab54a] border border-[#3ab54a] text-white font-semibold text-sm hover:bg-[#2d963c] hover:border-[#2d963c] transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Request a Wholesale Quote
              </Link>
            </div>
          </div>

          <div className="mt-16 pt-12 border-t border-[#dbe3dd] grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl font-bold text-[#152019] mb-6">Technical Specifications</h2>
              <div className="bg-white border border-[#dbe3dd] overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    {product.specs.map((spec, i) => (
                      <tr key={spec.label} className={i % 2 === 0 ? 'bg-[#f4f7f4]' : 'bg-white'}>
                        <td className="py-3 px-4 font-medium text-[#344239] w-1/2">{spec.label}</td>
                        <td className="py-3 px-4 text-[#526158]">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#152019] mb-6">Key Features</h2>
              <ul className="space-y-3">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 border border-[#dbe3dd] bg-white flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-[#3ab54a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-[#526158]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white border-t border-[#dbe3dd]">
        <div className="px-6 sm:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto mb-14">
            <h2 className="text-xl font-bold text-[#152019] mb-6">Buyer Questions About {product.name}</h2>
            <div className="border-t border-[#dbe3dd]">
              {buyerFaqs.map((faq) => (
                <div key={faq.q} className="border-b border-[#dbe3dd] bg-[#f4f7f4] px-5 py-5">
                  <h3 className="font-semibold text-[#152019] mb-2">{faq.q}</h3>
                  <p className="text-sm text-[#526158] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
          <h2 className="text-xl font-bold text-[#152019] mb-6">Explore Other Models</h2>
          <div className="flex flex-wrap gap-3">
            {wheelchairs.filter((p) => p.slug !== slug).map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`} className="px-4 py-2 bg-[#f4f7f4] border border-[#dbe3dd] text-sm text-[#526158] hover:border-[#3ab54a] hover:text-[#152019] transition-colors">
                {p.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FloatingInquiry product={product.name} />
    </div>
  );
}
