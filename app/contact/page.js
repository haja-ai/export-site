import { siteSections } from '@/lib/site-sections';
import { siteContent as sc } from '@/lib/site-content';
import PulseFitPage from '../components/PulseFitPage';
import SectionRenderer from '../components/SectionRenderer';

export const metadata = {
  title: 'Contact Us | Get an Electric Wheelchair Quote',
  description:
    'Contact MiniElephant for electric wheelchair pricing, OEM/ODM quotes, samples, and export inquiries. Fast response within 24 hours.',
  openGraph: {
    title: 'Contact MiniElephant | Wheelchair Quote',
    description: 'Get a customized quotation for folding electric wheelchairs. OEM/ODM inquiries welcome. Factory-direct B2B pricing.',
    url: 'https://www.semwheelchair.com/contact',
    type: 'website',
    images: [
      { url: 'https://www.semwheelchair.com/images/banner-contact.webp', width: 1200, height: 630, alt: 'MiniElephant contact page' },
    ],
  },
  alternates: {
    canonical: 'https://www.semwheelchair.com/contact',
  },
};

export default function ContactPage() {
  const sections = siteSections.contact || [];

  return (
    <PulseFitPage bannerImage={sc.contact.bannerImage}
      badge={sc.contact.badge} title={sc.contact.title} description={sc.contact.description}>
      {/* 区块化渲染：Contact 页内容来自 siteSections.contact */}
      {sections.map((section) => (
        <SectionRenderer key={section.id} section={section} />
      ))}
    </PulseFitPage>
  );
}
