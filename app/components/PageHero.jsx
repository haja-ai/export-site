'use client';

import Link from 'next/link';
import { PulseFitHero } from "@/components/ui/pulse-fit-hero";

export default function PageHero() {
  return (
    <PulseFitHero
      logo="MiniElephant"
      navigation={[
        { label: "Home", onClick: () => window.location.href = '/' },
        { label: "Products", onClick: () => window.location.href = '/products' },
        { label: "About Us", onClick: () => window.location.href = '/about' },
        { label: "FAQ", onClick: () => window.location.href = '/faq' },
        { label: "News", onClick: () => window.location.href = '/news' },
        { label: "Contact", onClick: () => window.location.href = '/contact' },
      ]}
      ctaButton={{
        label: "Get a Quote",
        onClick: () => window.location.href = '/contact',
      }}
      title="Factory-Direct Electric Wheelchair Manufacturer | MiniRedone Lightweight Folding Wheelchairs"
      subtitle="Premium electric wheelchairs with magnesium alloy frames — dual 350W motors, 30km range, 150KG load. Factory-direct B2B export to 50+ countries. OEM/ODM customization available."
      primaryAction={{
        label: "See the MiniRedone Series",
        onClick: () => window.location.href = '/products',
      }}
      secondaryAction={{
        label: "Request Factory Pricing",
        onClick: () => window.location.href = '/contact',
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
        { image: "/images/miniredone-i.png", category: "BASE MODEL", title: "MiniRedone-I · 47KG", onClick: () => window.location.href = '/products/miniredone-i' },
        { image: "/images/miniredone-ii-plus.png", category: "LIGHTWEIGHT", title: "MiniRedone-II · 42KG", onClick: () => window.location.href = '/products/miniredone-ii' },
        { image: "/images/miniredone-iii.png", category: "PREMIUM", title: "MiniRedone-III · High Back", onClick: () => window.location.href = '/products/miniredone-iii' },
        { image: "/images/miniredone-v.png", category: "EXTRA WIDE", title: "MiniRedone-V · W900mm", onClick: () => window.location.href = '/products/miniredone-v' },
      ]}
    />
  );
}
