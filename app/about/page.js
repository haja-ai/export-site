import { siteSections } from '@/lib/site-sections';
import { siteContent as sc } from '@/lib/site-content';
import PulseFitPage from '../components/PulseFitPage';
import SectionRenderer from '../components/SectionRenderer';

export const metadata = {
  title: 'Electric Wheelchair Factory',
  description:
    'Learn about MiniElephant, the manufacturer behind MiniRedone folding electric wheelchairs. Factory location, company profile, and export support.',
  openGraph: {
    title: 'Electric Wheelchair Factory',
    description:
      'Learn about MiniElephant, the manufacturer behind MiniRedone folding electric wheelchairs. Factory location, company profile, and export support.',
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
    <PulseFitPage bannerImage={sc.about.bannerImage} badge={sc.about.badge} title={sc.about.title} description={sc.about.description}>
      {sections.map((section) => (
        <SectionRenderer key={section.id} section={section} />
      ))}
    </PulseFitPage>
  );
}
