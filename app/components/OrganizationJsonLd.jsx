export default function OrganizationJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Jiaxing Small Elephant Medical Technology Co., Ltd',
    url: 'https://www.semwheelchair.com',
    logo: 'https://www.semwheelchair.com/logo.png',
    description:
      'Professional electric wheelchair manufacturer. Lightweight folding wheelchairs with magnesium alloy frame, 30km range. B2B export to 50+ countries.',
    email: 'johnson@semwheelchair.com',
    telephone: '+86-13819098967',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No. 18 Zhenzhong East Road',
      addressLocality: 'Jiashan County, Jiaxing City',
      addressRegion: 'Zhejiang Province',
      addressCountry: 'CN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Sales',
      name: 'Johnson',
      telephone: '+86-13819098967',
      email: 'johnson@semwheelchair.com',
      availableLanguage: ['English', 'Chinese'],
    },
    sameAs: [
      'https://wa.me/8613819098967',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
