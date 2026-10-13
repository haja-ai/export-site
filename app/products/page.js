import { siteSections } from '@/lib/site-sections';
import { siteContent as sc } from '@/lib/site-content';
import PulseFitPage from '../components/PulseFitPage';
import SectionRenderer from '../components/SectionRenderer';

export const metadata = {
  title: 'Folding Electric Wheelchairs and Power Chairs',
  description:
    'Compare MiniRedone folding electric wheelchairs and power chairs by seating, finish, weight and folded dimensions. Request a model-specific wholesale quote.',
  openGraph: {
    title: 'Folding Electric Wheelchairs and Power Chairs',
    description:
      'Compare MiniRedone folding electric wheelchairs and power chairs by seating, finish, weight and folded dimensions. Request a model-specific wholesale quote.',
    url: 'https://www.semwheelchair.com/products',
    type: 'website',
    images: [{ url: 'https://www.semwheelchair.com/images/banner-products.webp', width: 1200, height: 630, alt: 'MiniElephant products page' }],
  },
  alternates: { canonical: 'https://www.semwheelchair.com/products' },
};

export default function ProductsPage() {
  const sections = siteSections.productsPage || [];

  return (
    <PulseFitPage bannerImage={sc.productsPage.bannerImage} badge={sc.productsPage.badge} title="MiniRedone Folding Electric Wheelchairs" description="Compare premium folding electric wheelchairs, also called power wheelchairs or motorized wheelchairs, for your mobility product range. Review each power chair's seating, finish, net weight and folded dimensions before requesting a wholesale or OEM/ODM quotation.">
      {sections.map((section) => (
        <SectionRenderer key={section.id} section={section} />
      ))}
    </PulseFitPage>
  );
}
