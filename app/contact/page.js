import { siteSections } from '@/lib/site-sections';
import { siteContent as sc } from '@/lib/site-content';
import PulseFitPage from '../components/PulseFitPage';
import SectionRenderer from '../components/SectionRenderer';

export const metadata = {
  title: 'MiniElephant | Request a Wholesale Quote',
  description:
    'Contact MiniElephant for MiniRedone product pricing, samples, OEM/ODM requests, and export inquiries. Our team replies within 24 hours.',
  openGraph: {
    title: 'MiniElephant | Request a Wholesale Quote',
    description:
      'Contact MiniElephant for MiniRedone product pricing, samples, OEM/ODM requests, and export inquiries. Our team replies within 24 hours.',
    url: 'https://www.semwheelchair.com/contact',
    type: 'website',
    images: [{ url: 'https://www.semwheelchair.com/images/banner-contact.webp', width: 1200, height: 630, alt: 'MiniElephant contact page' }],
  },
  alternates: {
    canonical: 'https://www.semwheelchair.com/contact',
  },
};

export default function ContactPage() {
  const sections = siteSections.contact || [];

  return (
    <PulseFitPage bannerImage={sc.contact.bannerImage} badge={sc.contact.badge} title={sc.contact.title} description={sc.contact.description}>
      {sections.map((section) => (
        <SectionRenderer key={section.id} section={section} />
      ))}
    </PulseFitPage>
  );
}
