'use client';

import { motion } from "framer-motion";
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
      {/* Banner hero region — mirrors the homepage first-screen feel */}
      <div className="relative flex flex-col overflow-hidden min-h-[460px] sm:min-h-[520px] lg:min-h-[600px]">
        {/* Banner image */}
        <img src={bannerImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
        {/* Cinematic overlay : dark enough for white text, and the nav melts into the banner top */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,23,42,0.82) 0%, rgba(15,23,42,0.48) 42%, rgba(15,23,42,0.66) 100%)",
          }}
        />

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 flex flex-row justify-between items-center px-8 lg:px-16"
          style={{ paddingTop: "32px", paddingBottom: "32px" }}
        >
          {/* Full brand logo */}
          <Link href="/" style={{ textDecoration: 'none' }} className="flex items-center">
            <img src="/logo-white.png" alt="MiniElephant Electric Wheelchair" style={{ height: "56px", width: "auto" }} />
          </Link>

          <nav className="hidden lg:flex flex-row items-center gap-10" aria-label="Main navigation">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "18px",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.92)",
                  textDecoration: 'none',
                }}
                className="hover:opacity-70 transition-opacity"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="px-7 py-3 rounded-full transition-all hover:scale-105 hidden sm:inline-block"
            style={{
              background: "#FFFFFF",
              border: "1px solid #e2e8f0",
              fontFamily: "Inter, sans-serif",
              fontSize: "17px",
              fontWeight: 500,
              color: "#1a1a1a",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
              textDecoration: 'none',
            }}
          >
            Get a Quote
          </Link>
        </motion.header>

        {/* Title block — centered over the banner */}
        {(badge || title) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto pb-14"
            style={{ gap: "16px" }}
          >
            {badge && (
              <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#5EEAD4" }}>
                {badge}
              </span>
            )}
            <h1
              className="text-[2.25rem] sm:text-[2.75rem] lg:text-[3.25rem]"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                lineHeight: "1.12",
                color: "#FFFFFF",
                letterSpacing: "-0.02em",
              }}
            >
              {title}
            </h1>
            {description && (
              <p
                className="text-[1rem] lg:text-[1.125rem]"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  lineHeight: "1.6",
                  color: "rgba(255,255,255,0.88)",
                  maxWidth: "620px",
                }}
              >
                {description}
              </p>
            )}
          </motion.div>
        )}
      </div>

      {/* Page content */}
      <div className="flex-1 bg-white">
        {children}
      </div>
    </section>
  );
}
