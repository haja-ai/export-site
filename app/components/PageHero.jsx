'use client';

import { PulseFitHero } from "@/components/ui/pulse-fit-hero";
import { siteContent } from "@/lib/site-content";

export default function PageHero() {
  const h = siteContent.home.hero;
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
      ctaButton={h.ctaButton}
      title={h.title}
      subtitle={h.subtitle}
      primaryAction={h.primaryAction}
      secondaryAction={h.secondaryAction}
      programs={h.programs}
      bannerImage="/images/wheelchair-banner.webp"
      bannerVideo={h.bannerVideo}
      bannerPoster={h.bannerPoster}
    />
  );
}
