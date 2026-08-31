export default function OrganizationJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Jiaxing Small Elephant Medical Technology Co., Ltd',
    url: 'https://www.semwheelchair.com',
    logo: 'https://www.semwheelchair.com/logo.png',
    description:
      'Factory-direct electric wheelchair manufacturer. MiniRedone folding wheelchairs with magnesium alloy frames for B2B buyers.',
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
      'https://www.tiktok.com/@electricwheelchairuae',
      'https://www.tiktok.com/@electricwheelchairsa',
      'https://www.tiktok.com/@electricwheelchai8',
      'https://www.youtube.com/@xiaoxianhuang-z4t',
      'https://www.youtube.com/@xiaoxiangelectricwheelchairuae',
      'https://www.linkedin.com/in/electricwheelchair-supplier-045232411',
      'https://www.linkedin.com/in/electric-wheelchair-uae-48b226411',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
