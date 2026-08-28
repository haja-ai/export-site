import { siteSections } from '@/lib/site-sections';
import SectionRenderer from './components/SectionRenderer';

export const metadata = {
  title: 'MiniElephant | MiniRedone Folding Electric Wheelchairs Manufacturer',
  description:
    'MiniElephant manufactures MiniRedone folding electric wheelchairs for distributors, importers, and OEM/ODM buyers. Factory-direct B2B inquiry site.',
  openGraph: {
    title: 'MiniElephant | MiniRedone Folding Electric Wheelchairs Manufacturer',
    description:
      'MiniElephant manufactures MiniRedone folding electric wheelchairs for distributors, importers, and OEM/ODM buyers. Factory-direct B2B inquiry site.',
    url: 'https://www.semwheelchair.com',
    type: 'website',
    images: [{ url: 'https://www.semwheelchair.com/og-image.jpg', width: 1200, height: 630, alt: 'MiniElephant MiniRedone folding electric wheelchairs' }],
  },
  alternates: {
    canonical: 'https://www.semwheelchair.com',
  },
};

export default function HomePage() {
  const sections = siteSections.home || [];

  return (
    <div>
      {sections.map((section) => (
        <SectionRenderer key={section.id} section={section} />
      ))}
    </div>
  );
}
