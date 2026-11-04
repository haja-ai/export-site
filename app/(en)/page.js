import HomeRedesign from '@/app/components/HomeRedesign';

// Title is 63 characters and set as absolute so the layout template does not
// append a second brand suffix. Description is 150 characters.
export const metadata = {
  title: { absolute: 'Folding Electric Wheelchair Manufacturer | MiniElephant OEM/ODM' },
  description:
    'MiniElephant (MiniRedone) builds folding electric wheelchairs for B2B export. 30-unit wholesale MOQ, OEM/ODM support. Request a quote for your market.',
  openGraph: {
    title: 'Folding Electric Wheelchair Manufacturer | MiniElephant OEM/ODM',
    description:
      'MiniElephant (MiniRedone) builds folding electric wheelchairs for B2B export. 30-unit wholesale MOQ, OEM/ODM support. Request a quote for your market.',
    url: 'https://www.semwheelchair.com',
    type: 'website',
    images: [{ url: 'https://www.semwheelchair.com/og-image.jpg', width: 1200, height: 630, alt: 'MiniElephant MiniRedone folding electric wheelchairs' }],
  },
  alternates: {
    canonical: 'https://www.semwheelchair.com',
    languages: {
      'en': 'https://www.semwheelchair.com/',
      'es': 'https://www.semwheelchair.com/es',
      'fr': 'https://www.semwheelchair.com/fr',
      'x-default': 'https://www.semwheelchair.com/',
    },
  },
};

export default function HomePage() {
  return <HomeRedesign />;
}
