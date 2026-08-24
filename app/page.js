import { wheelchairs } from '@/lib/products';
import { siteSections } from '@/lib/site-sections';
import SectionRenderer from './components/SectionRenderer';

export const metadata = {
  title: 'Electric Wheelchair Manufacturer | MiniRedone',
  description:
    'Professional electric wheelchair manufacturer of lightweight folding wheelchairs with magnesium alloy frames. Dual 350W motors, 30km range. ISO/CE/FDA certified.',
  openGraph: {
    title: 'MiniElephant Electric Wheelchair | B2B Magnesium Alloy Wheelchair Factory',
    description:
      'Lightweight folding electric wheelchairs with magnesium alloy frames, dual 350W motors, 30km range. Factory-direct B2B pricing. ISO/CE/FDA certified.',
    url: 'https://www.semwheelchair.com',
    type: 'website',
    images: [{ url: 'https://www.semwheelchair.com/og-image.jpg', width: 1200, height: 630, alt: 'MiniElephant MiniRedone Series Lightweight Folding Electric Wheelchairs' }],
  },
  alternates: {
    canonical: 'https://www.semwheelchair.com',
  },
};

export default function HomePage() {
  // 区块化渲染：首页所有内容来自 siteSections.home
  const sections = siteSections.home || [];

  return (
    <div>
      {/* 区块列表渲染（首个区块为 hero，含导航 + 视频大图） */}
      {sections.map((section) => (
        <SectionRenderer key={section.id} section={section} />
      ))}
    </div>
  );
}
