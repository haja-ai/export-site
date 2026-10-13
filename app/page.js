import HomeRedesign from './components/HomeRedesign';

export const metadata = {
  title: 'Folding Electric Wheelchair Manufacturer',
  description:
    'Premium MiniRedone folding electric wheelchairs and power chairs from MiniElephant. Compare comfort-focused models for wholesale and OEM/ODM projects.',
  openGraph: {
    title: 'Folding Electric Wheelchair Manufacturer',
    description:
      'Premium MiniRedone folding electric wheelchairs and power chairs from MiniElephant. Compare comfort-focused models for wholesale and OEM/ODM projects.',
    url: 'https://www.semwheelchair.com',
    type: 'website',
    images: [{ url: 'https://www.semwheelchair.com/og-image.jpg', width: 1200, height: 630, alt: 'MiniElephant MiniRedone folding electric wheelchairs' }],
  },
  alternates: {
    canonical: 'https://www.semwheelchair.com',
  },
};

export default function HomePage() {
  return <HomeRedesign />;
}
