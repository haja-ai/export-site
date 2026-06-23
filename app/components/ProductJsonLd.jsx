export default function ProductJsonLd({ product }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.fullName,
    description: `${product.tagline}. ${product.description}`,
    brand: {
      '@type': 'Brand',
      name: 'MiniElephant',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Jiaxing Small Elephant Medical Technology Co., Ltd',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      price: '0.00',
      priceCurrency: 'USD',
      priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
        .toISOString()
        .split('T')[0],
      url: `https://www.semwheelchair.com/products/${product.slug}`,
    },
    sku: product.slug,
    category: 'Electric Wheelchair',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
