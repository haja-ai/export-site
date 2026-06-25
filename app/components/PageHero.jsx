'use client';

import { PulseFitHero } from "@/components/ui/pulse-fit-hero";

export default function PageHero() {
  return (
    <PulseFitHero
      logo="MiniElephant"
      navigation={[
        { label: "Home", href: '/' },
        { label: "Products", href: '/products' },
        { label: "About Us", href: '/about' },
        { label: "FAQ", href: '/faq' },
        { label: "News", href: '/news' },
        { label: "Contact", href: '/contact' },
      ]}
      ctaButton={{
        label: "Get a Quote",
        href: '/contact',
      }}
      title="Factory-Direct Electric Wheelchair Manufacturer | MiniRedone Lightweight Folding Wheelchairs"
      subtitle="Premium electric wheelchairs with magnesium alloy frames. Dual 350W motors, 30km range, 150KG load. Factory-direct B2B export to 50+ countries. OEM/ODM customization available."
      primaryAction={{
        label: "Browse Models",
        href: '/products',
      }}
      secondaryAction={{
        label: "Get a Quote",
        href: '/contact',
      }}
      programs={[
        { image: "/images/miniredone-i.png", category: "BASE MODEL", title: "MiniRedone-I · 47KG", href: '/products/miniredone-i' },
        { image: "/images/miniredone-ii-plus.png", category: "LIGHTWEIGHT", title: "MiniRedone-II · 42KG", href: '/products/miniredone-ii' },
        { image: "/images/miniredone-iii.png", category: "PREMIUM", title: "MiniRedone-III · High Back", href: '/products/miniredone-iii' },
        { image: "/images/miniredone-v.png", category: "EXTRA WIDE", title: "MiniRedone-V · W900mm", href: '/products/miniredone-v' },
      ]}
      bannerImage="/images/wheelchair-banner.png"
    />
  );
}
