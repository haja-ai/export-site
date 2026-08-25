import Link from 'next/link';
import { siteSections } from '@/lib/site-sections';
import { siteContent as sc } from '@/lib/site-content';
import PulseFitPage from '../components/PulseFitPage';
import SectionRenderer from '../components/SectionRenderer';

export const metadata = {
  title: 'FAQ | Electric Wheelchair B2B Buying Guide',
  description:
    'B2B electric wheelchair FAQ: weight, range, motors, shipping, OEM/ODM, certification, warranty, pricing for MiniRedone wheelchairs.',
  openGraph: {
    title: 'FAQ | Electric Wheelchair Buying Guide',
    description: 'Find answers about electric wheelchair shipping, OEM customization, warranty, battery range, and more from the manufacturer.',
    url: 'https://www.semwheelchair.com/faq',
    type: 'website',
    images: [
      { url: 'https://www.semwheelchair.com/images/banner-faq.webp', width: 1200, height: 630, alt: 'MiniElephant faq page' },
    ],
  },
  alternates: {
    canonical: 'https://www.semwheelchair.com/faq',
  },
};

export default function FaqPage() {
  // FAQ 数据来自区块（保留 FAQPage schema 供 SEO）
  const sections = siteSections.faq || [];
  const faqSection = sections.find(s => s.type === 'faqList');
  const faqs = faqSection?.content?.faqs || [];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PulseFitPage bannerImage={sc.faq.bannerImage}
        badge={sc.faq.badge} title={sc.faq.title} description={sc.faq.description}>
        {/* 区块化渲染：FAQ 页内容来自 siteSections.faq */}
        {sections.map((section) => (
          <SectionRenderer key={section.id} section={section} />
        ))}
      </PulseFitPage>
    </>
  );
}
