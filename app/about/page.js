import Link from 'next/link';
import { siteSections } from '@/lib/site-sections';
import { siteContent as sc } from '@/lib/site-content';
import PulseFitPage from '../components/PulseFitPage';
import SectionRenderer from '../components/SectionRenderer';

export const metadata = {
  title: 'About Us | Electric Wheelchair Manufacturer',
  description:
    'Professional electric wheelchair manufacturer since 2013. ISO 13485, CE, FDA certified. 20+ patents, 50+ export countries. MiniRedone magnesium alloy folding wheelchairs.',
  openGraph: {
    title: 'About MiniElephant | Electric Wheelchair Manufacturer',
    description:
      '10+ years of electric wheelchair manufacturing experience. ISO/CE/FDA certified factory in Zhejiang, China. Specializing in lightweight magnesium alloy folding wheelchairs.',
    url: 'https://www.semwheelchair.com/about',
    type: 'website',
    images: [
      { url: 'https://www.semwheelchair.com/images/banner-about.webp', width: 1200, height: 630, alt: 'MiniElephant about page' },
    ],
  },
  alternates: {
    canonical: 'https://www.semwheelchair.com/about',
  },
};

export default function AboutPage() {
  const sections = siteSections.about || [];

  return (
    <PulseFitPage bannerImage={sc.about.bannerImage}
    badge={sc.about.badge} title={sc.about.title} description={sc.about.description}>
      {/* 区块化渲染：About 页内容来自 siteSections.about */}
      {sections.map((section) => (
        <SectionRenderer key={section.id} section={section} />
      ))}
    </PulseFitPage>
  );
}
