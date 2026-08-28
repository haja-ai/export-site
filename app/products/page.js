import { siteSections } from '@/lib/site-sections';
import { siteContent as sc } from '@/lib/site-content';
import PulseFitPage from '../components/PulseFitPage';
import SectionRenderer from '../components/SectionRenderer';

export const metadata = {
  title: 'MiniElephant | MiniRedone Folding Electric Wheelchairs Manufacturer',
  description:
    'Browse all MiniRedone folding electric wheelchair models from MiniElephant. Compare verified product variants, specifications, and request a wholesale quote.',
  openGraph: {
    title: 'MiniElephant | MiniRedone Folding Electric Wheelchairs Manufacturer',
    description:
      'Browse all MiniRedone folding electric wheelchair models from MiniElephant. Compare verified product variants, specifications, and request a wholesale quote.',
    url: 'https://www.semwheelchair.com/products',
    type: 'website',
    images: [{ url: 'https://www.semwheelchair.com/images/banner-products.webp', width: 1200, height: 630, alt: 'MiniElephant products page' }],
  },
  alternates: { canonical: 'https://www.semwheelchair.com/products' },
};

export default function ProductsPage() {
  const sections = siteSections.productsPage || [];

  return (
    <PulseFitPage bannerImage={sc.productsPage.bannerImage} badge={sc.productsPage.badge} title={sc.productsPage.title} description={sc.productsPage.description}>
      {sections.map((section) => (
        <SectionRenderer key={section.id} section={section} />
      ))}
    </PulseFitPage>
  );
}
