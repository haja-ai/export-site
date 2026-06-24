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
      subtitle="Premium electric wheelchairs with magnesium alloy frames — dual 350W motors, 30km range, 150KG load. Factory-direct B2B export to 50+ countries. OEM/ODM customization available."
      primaryAction={{
        label: "See the MiniRedone Series",
        href: '/products',
      }}
      secondaryAction={{
        label: "Request Factory Pricing",
        href: '/contact',
      }}
      disclaimer="ISO 13485 · CE · FDA Certified · OEM/ODM Welcome"
      socialProof={{
        avatars: [
          "https://i.pravatar.cc/150?img=1",
          "https://i.pravatar.cc/150?img=2",
          "https://i.pravatar.cc/150?img=3",
          "https://i.pravatar.cc/150?img=4",
        ],
        text: "Trusted by partners in 50+ countries",
      }}
      programs={[
        { image: "/images/miniredone-i.png", category: "BASE MODEL", title: "MiniRedone-I · 47KG", href: '/products/miniredone-i' },
        { image: "/images/miniredone-ii-plus.png", category: "LIGHTWEIGHT", title: "MiniRedone-II · 42KG", href: '/products/miniredone-ii' },
        { image: "/images/miniredone-iii.png", category: "PREMIUM", title: "MiniRedone-III · High Back", href: '/products/miniredone-iii' },
        { image: "/images/miniredone-v.png", category: "EXTRA WIDE", title: "MiniRedone-V · W900mm", href: '/products/miniredone-v' },
      ]}
      bannerImage="/images/hero-banner.png"
    />
  );
}
