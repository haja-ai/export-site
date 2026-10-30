import { siteSections } from '@/lib/site-sections';
import { siteContent as sc } from '@/lib/site-content';
import PulseFitPage from '../components/PulseFitPage';
import SectionRenderer from '../components/SectionRenderer';
import AboutSeoContent from '../components/AboutSeoContent';

const SEO_TITLE = 'Electric Wheelchair Manufacturer: MiniElephant Factory';
const SEO_DESCRIPTION =
  'MiniElephant is a folding electric wheelchair manufacturer in Jiaxing, China. Review SFDA, CE, ISO and FDA listing records, 10 models and OEM options.';

export const metadata = {
  title: { absolute: SEO_TITLE },
  description: SEO_DESCRIPTION,
  openGraph: {
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    url: 'https://www.semwheelchair.com/about',
    type: 'website',
    images: [{ url: 'https://www.semwheelchair.com/images/banner-about.webp', width: 1200, height: 630, alt: 'MiniElephant about page' }],
  },
  alternates: {
    canonical: 'https://www.semwheelchair.com/about',
  },
};

export default function AboutPage() {
  const sections = siteSections.about || [];

  return (
    <PulseFitPage compactSplitHero bannerImage={sc.about.bannerImage} badge={sc.about.badge} title={sc.about.title} description={sc.about.description}>
      {sections.map((section) => (
        <SectionRenderer key={section.id} section={section} />
      ))}
      <AboutSeoContent />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'AboutPage',
              name: SEO_TITLE,
              description: SEO_DESCRIPTION,
              url: 'https://www.semwheelchair.com/about',
              mainEntity: {
                '@type': 'Organization',
                name: 'Jiaxing Small Elephant Medical Technology Co., Ltd',
                alternateName: 'MiniElephant',
                url: 'https://www.semwheelchair.com',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: 'No. 18 Zhenzhong East Road, Jiashan County',
                  addressLocality: 'Jiaxing',
                  addressRegion: 'Zhejiang',
                  addressCountry: 'CN',
                },
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                ['Is MiniElephant an electric wheelchair manufacturer or a trading company?', 'MiniElephant is the brand of Jiaxing Small Elephant Medical Technology Co., Ltd, a manufacturer based in Jiashan County, Jiaxing City, Zhejiang Province, China. The MiniRedone folding electric wheelchair family is produced in-house on a one-piece magnesium alloy die-cast frame platform.'],
                ['What products does the factory build?', 'Ten MiniRedone folding electric wheelchair models share one platform but differ in seat style, wheel configuration and folded size. Standard specification includes dual 350W brushless hub motors, a 16Ah LiFePO4 battery, a 150 kg maximum load and approximately 30 km of range per charge.'],
                ['Which certificates can a buyer review?', 'This page lists the documents held today: a Saudi SFDA medical device marketing authorization, CE and ISO records, a United States facility registration and device listing reference, two trademarks and sixteen patent files. Buyers can request the current copies for a specific model and destination market.'],
                ['Can the factory support OEM and private label orders?', 'Yes. OEM and ODM projects are supported, including logo printing, label and manual adaptation, packaging changes and configuration selection.'],
                ['What documentation is provided with an export order?', 'Commercial invoice, packing list, bill of lading, certificate of origin, specification sheet, and the battery transport documents that apply to the configuration shipped.'],
              ].map(([q, a]) => ({
                '@type': 'Question',
                name: q,
                acceptedAnswer: { '@type': 'Answer', text: a },
              })),
            },
          ]),
        }}
      />
    </PulseFitPage>
  );
}
