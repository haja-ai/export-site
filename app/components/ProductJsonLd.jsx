/**
 * Product JSON-LD structured data for MiniElephant products.
 */
export default function ProductJsonLd({ product }) {
  const weightSpec = product.specs?.find((s) => s.label === 'Net Weight');
  const weightRaw = weightSpec?.value || '';
  const weightNum = parseFloat(weightRaw.replace('~', '').replace('KG', '').trim());

  const price = product.b2bPrice || '1950.00';
  const weightValue = isNaN(weightNum) ? '47' : String(weightNum);

  const images = product.images?.length > 0
    ? product.images.map((img) => `https://www.semwheelchair.com${img}`)
    : ['https://www.semwheelchair.com/og-image.jpg'];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `https://www.semwheelchair.com/products/${product.slug}#product`,
    name: product.fullName,
    description: `${product.tagline}. ${product.description}`.slice(0, 5000),
    image: images,
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
      '@id': `https://www.semwheelchair.com/products/${product.slug}#offer`,
      url: `https://www.semwheelchair.com/products/${product.slug}`,
      price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
    },
    sku: product.slug,
    mpn: `ME-${product.slug.toUpperCase()}`,
    category: 'Electric Wheelchair',
    material: 'Magnesium Alloy',
    weight: {
      '@type': 'QuantitativeValue',
      value: weightValue,
      unitCode: 'KGM',
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}
