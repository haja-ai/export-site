import { siteSections } from '@/lib/site-sections';
import { siteContent as sc } from '@/lib/site-content';
import PulseFitPage from '@/app/components/PulseFitPage';
import SectionRenderer from '@/app/components/SectionRenderer';
import GuideLinks from '@/app/components/GuideLinks';
import SolutionsLinks from '@/app/components/SolutionsLinks';

// Eight guides across four buying themes. Every slug below resolves to a live
// article; the short line under each title is written for this page, not pulled
// from the article summary.
const PRODUCT_GUIDES = [
  'electric-wheelchair-certification-guide-2026-b2b',
  'electric-wheelchair-ce-certification-mdr-2026-guide-b2b',
  'electric-wheelchair-hs-code-import-classification-guide-b2b',
  'electric-wheelchair-container-loading-guide',
  'electric-wheelchair-wholesale-pricing-guide',
  'electric-wheelchair-spare-parts-planning-guide',
  'electric-wheelchair-battery-range-buying-guide',
  'electric-wheelchair-suspension-selection-guide',
];

const PRODUCT_GUIDE_BLURBS = {
  'electric-wheelchair-certification-guide-2026-b2b':
    'Which certificates a buyer needs, what each document covers, and what the factory can supply.',
  'electric-wheelchair-ce-certification-mdr-2026-guide-b2b':
    'How the EU medical device rules apply to powered wheelchairs and what changes for importers.',
  'electric-wheelchair-hs-code-import-classification-guide-b2b':
    'Why 8713 is the correct heading, and where customs brokers most often classify a power chair wrong.',
  'electric-wheelchair-container-loading-guide':
    'Mixed-model container planning, carton orientation and the loading sequence that protects finished units.',
  'electric-wheelchair-wholesale-pricing-guide':
    'What moves a wholesale price: configuration, battery, private label, quantity and the agreed Incoterm.',
  'electric-wheelchair-spare-parts-planning-guide':
    'Which spares a new distributor should stock, and the parts that stop a repair without them.',
  'electric-wheelchair-battery-range-buying-guide':
    'How range claims are produced, why test conditions differ, and what to ask before publishing a figure.',
  'electric-wheelchair-suspension-selection-guide':
    'Frame, fork and cushion choices that change ride comfort on paving, cobbles and factory floors.',
};

const PRODUCT_GUIDE_LABELS = {
  'electric-wheelchair-certification-guide-2026-b2b': 'Compliance & certification',
  'electric-wheelchair-ce-certification-mdr-2026-guide-b2b': 'Compliance & certification',
  'electric-wheelchair-hs-code-import-classification-guide-b2b': 'Shipping & customs',
  'electric-wheelchair-container-loading-guide': 'Shipping & customs',
  'electric-wheelchair-wholesale-pricing-guide': 'Dealer operations',
  'electric-wheelchair-spare-parts-planning-guide': 'Dealer operations',
  'electric-wheelchair-battery-range-buying-guide': 'Product & technology',
  'electric-wheelchair-suspension-selection-guide': 'Product & technology',
};

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

      <SolutionsLinks id="solutions" tone="muted" />

      <GuideLinks
        id="buyer-guides"
        eyebrow="Buyer guides"
        title="What importers ask before the first container."
        intro="Pick a model, then pick the paperwork. These eight guides cover certification, customs and freight, dealer operations and the technical choices behind range, ride comfort and serviceability."
        tone="muted"
        columns={4}
        slugs={PRODUCT_GUIDES}
        blurbs={PRODUCT_GUIDE_BLURBS}
        labels={PRODUCT_GUIDE_LABELS}
      />
    </PulseFitPage>
  );
}
