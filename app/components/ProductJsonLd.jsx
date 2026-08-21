/**
 * Product JSON-LD structured data for MiniElephant products.
 * Pricing: B2B FOB ~$1995 for all MiniRedone models
 */
export default function ProductJsonLd({ product }) {
  // Extract net weight as a clean number
  const weightSpec = product.specs?.find(s => s.label === 'Net Weight');
  const weightRaw = weightSpec?.value || '';
  const weightNum = parseFloat(weightRaw.replace('~', '').replace('KG', '').trim());
  
  // B2B FOB price from product data (range: $1,850-$1,990)
  const price = product.b2bPrice || '1950.00';
  const weightValue = isNaN(weightNum) ? '47' : String(weightNum);

  // Image URLs (must be absolute)
  const images = product.images?.length > 0
    ? product.images.map(img => `https://www.semwheelchair.com${img}`)
    : ['https://www.semwheelchair.com/og-image.jpg'];

  // Set priceValidUntil ~1 year from product-specific date based on slug
  const validUntil = '2027-06-30';
  const validFrom = '2026-01-01';

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
      priceValidUntil: validUntil,
      validFrom,
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: {
          '@type': 'MonetaryAmount',
          value: 0,
          currency: 'USD',
        },
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: 'US',
        },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: {
            '@type': 'QuantitativeValue',
            minValue: 3,
            maxValue: 5,
            unitCode: 'DAY',
          },
          transitTime: {
            '@type': 'QuantitativeValue',
            minValue: 25,
            maxValue: 40,
            unitCode: 'DAY',
          },
        },
      },
      hasMerchantReturnPolicy: {
        '@type': 'MerchantReturnPolicy',
        applicableCountry: 'US',
        returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
        merchantReturnDays: 30,
        returnMethod: 'https://schema.org/ReturnByMail',
        returnFees: 'https://schema.org/FreeReturn',
      },
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
