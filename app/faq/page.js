import { siteSections } from '@/lib/site-sections';
import { siteContent as sc } from '@/lib/site-content';
import PulseFitPage from '../components/PulseFitPage';
import SectionRenderer from '../components/SectionRenderer';

export const metadata = {
  title: 'Electric Wheelchair FAQ | MiniElephant',
  description:
    'Find answers about MiniRedone electric wheelchair models, ordering, OEM/ODM, shipping, warranty, and after-sales support.',
  openGraph: {
    title: 'Electric Wheelchair FAQ | MiniElephant',
    description:
      'Find answers about MiniRedone electric wheelchair models, ordering, OEM/ODM, shipping, warranty, and after-sales support.',
    url: 'https://www.semwheelchair.com/faq',
    type: 'website',
    images: [{ url: 'https://www.semwheelchair.com/images/banner-faq.webp', width: 1200, height: 630, alt: 'MiniElephant faq page' }],
  },
  alternates: {
    canonical: 'https://www.semwheelchair.com/faq',
  },
};

export default function FaqPage() {
  const sections = siteSections.faq || [];
  const faqSection = sections.find((s) => s.type === 'faqList');
  const faqs = faqSection?.content?.faqs || [];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PulseFitPage bannerImage={sc.faq.bannerImage} badge={sc.faq.badge} title={sc.faq.title} description={sc.faq.description}>
        {sections.map((section) => (
          <SectionRenderer key={section.id} section={section} />
        ))}
      </PulseFitPage>
    </>
  );
}
