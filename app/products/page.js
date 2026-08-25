import { siteSections } from '@/lib/site-sections';
import { siteContent as sc } from '@/lib/site-content';
import PulseFitPage from '../components/PulseFitPage';
import SectionRenderer from '../components/SectionRenderer';

export const metadata = {
  title: 'Electric Wheelchair Products | MiniRedone',
  description:
    'Explore all 10 MiniRedone electric wheelchair models: 42KG to 50KG, magnesium alloy frames, dual 350W motors, 30km range. B2B export, OEM/ODM.',
  openGraph: {
    title: 'Electric Wheelchair Products | MiniRedone Series',
    description:
      '10 MiniRedone electric wheelchair models: magnesium alloy frames, dual 350W motors, 30km range. Factory-direct B2B pricing.',
    url: 'https://www.semwheelchair.com/products',
    type: 'website',
    images: [
      { url: 'https://www.semwheelchair.com/images/banner-products.webp', width: 1200, height: 630, alt: 'MiniElephant products page' },
    ],
  },
  alternates: { canonical: 'https://www.semwheelchair.com/products' },
};

export default function ProductsPage() {
  const sections = siteSections.productsPage || [];

  return (
    <PulseFitPage bannerImage={sc.productsPage.bannerImage}
      badge={sc.productsPage.badge} title={sc.productsPage.title} description={sc.productsPage.description}>
      {/* 区块化渲染：Products 页内容来自 siteSections.productsPage */}
      {sections.map((section) => (
        <SectionRenderer key={section.id} section={section} />
      ))}
    </PulseFitPage>
  );
}
