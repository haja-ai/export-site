'use client';

import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';

export default function PulseFitPage({ children, badge, title, description, logo = "MiniElephant" }) {
  const navLinks = [
    { label: "Home", href: '/' },
    { label: "Products", href: '/products' },
    { label: "About Us", href: '/about' },
    { label: "FAQ", href: '/faq' },
    { label: "News", href: '/news' },
    { label: "Contact", href: '/contact' },
  ];

  return (
    <section
      className="relative min-h-screen flex flex-col"
      style={{
        background: "linear-gradient(180deg, #E8F0FF 0%, #F5F9FF 50%, #FFFFFF 100%)",
      }}
    >
      {/* Header — identical to PulseFitHero */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 flex flex-row justify-between items-center px-8 lg:px-16"
        style={{ paddingTop: "32px", paddingBottom: "32px" }}
      >
        <Link href="/" style={{ textDecoration: 'none' }}>
          <div style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "24px", color: "#1a1a1a" }}>
            {logo}
          </div>
        </Link>

        <nav className="hidden lg:flex flex-row items-center gap-8" aria-label="Main navigation">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                color: "#4a5568",
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
          className="px-6 py-3 rounded-full transition-all hover:scale-105 hidden sm:inline-block"
          style={{
            background: "#FFFFFF",
            border: "1px solid #e2e8f0",
            fontFamily: "Inter, sans-serif",
            fontSize: "16px",
            fontWeight: 500,
            color: "#1a1a1a",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
            textDecoration: 'none',
          }}
        >
          Get a Quote
        </Link>
      </motion.header>

      {/* Page hero area — badge + title + description */}
      {(badge || title) && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center text-center px-4 max-w-4xl mx-auto"
          style={{ gap: "12px", paddingTop: "40px", paddingBottom: "60px" }}
        >
          {badge && (
            <span className="text-sm font-semibold uppercase tracking-widest text-teal">
              {badge}
            </span>
          )}
          <h1
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(36px, 5vw, 56px)",
              lineHeight: "1.1",
              color: "#1a1a1a",
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </h1>
          {description && (
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(16px, 2vw, 20px)",
                lineHeight: "1.6",
                color: "#4a5568",
                maxWidth: "600px",
              }}
            >
              {description}
            </p>
          )}
        </motion.div>
      )}

      {/* Page content */}
      <div className="flex-1">
        {children}
      </div>
    </section>
  );
}
