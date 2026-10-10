'use client';

import Link from 'next/link';

export default function PulseFitPage({
  children,
  badge,
  title,
  description,
  logo = "MiniElephant",
  bannerImage = "/images/wheelchair-banner.webp",
}) {
  const navLinks = [
    { label: "Home", href: '/' },
    { label: "Products", href: '/products' },
    { label: "About Us", href: '/about' },
    { label: "FAQ", href: '/faq' },
    { label: "News", href: '/news' },
    { label: "Contact", href: '/contact' },
  ];

  return (
    <section className="relative flex flex-col">
      <header className="sticky top-0 z-50 flex h-[4.875rem] items-center justify-between border-b border-[#dbe3dd] bg-white px-6 sm:px-8 lg:px-16">
        {/* Full brand logo */}
        <Link href="/" style={{ textDecoration: 'none' }} className="flex items-center">
          <img src="/logo-black.png" alt="MiniElephant Electric Wheelchair" className="h-14 w-auto object-contain object-left" />
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-[#334139] lg:flex" aria-label="Main navigation">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[#278a36]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden border border-[#3ab54a] bg-[#3ab54a] px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-[#278a36] sm:inline-block"
        >
          Get a Quote
        </Link>
      </header>

      {/* ===== Banner hero region ===== */}
      <div className="relative flex min-h-[25rem] overflow-hidden border-b border-[#dbe3dd] bg-[#f4f7f4] sm:min-h-[29rem] lg:min-h-[33rem]">
        {/* Banner image */}
        <img src={bannerImage} alt="" className="absolute inset-0 w-full h-full object-cover" loading="eager" fetchPriority="high" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(244,247,244,0.95),rgba(244,247,244,0.72)_52%,rgba(244,247,244,0.18))]" />

        {/* Title block — centered over the banner */}
        {(badge || title) && (
          <div className="relative z-10 flex min-h-[25rem] max-w-3xl flex-col justify-end px-6 pb-12 pt-28 sm:min-h-[29rem] sm:px-8 lg:min-h-[33rem] lg:px-16 lg:pb-16">
            {badge && (
              <span className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#278a36]">
                {badge}
              </span>
            )}
            {title && (
              <h1 className="mt-3 text-[clamp(2.7rem,5.4vw,5.8rem)] font-extrabold leading-[0.94] tracking-[-0.07em] text-[#152019]">
                {title}
              </h1>
            )}
            {description && (
              <p className="mt-6 max-w-xl text-base leading-7 text-[#55625b] sm:text-lg">
                {description}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Page content */}
      {children}
    </section>
  );
}
