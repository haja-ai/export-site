'use client';

import { Geist, Geist_Mono } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Xiaoxiang Wheelchair & Dongbang Motor (DPG) — Premium electric wheelchairs and industrial electric motors for global B2B partners. Quality certified, competitive pricing." />
        <meta name="keywords" content="electric wheelchair, industrial motor, B2B, export, wheelchair manufacturer, motor manufacturer, China" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.xiaoxiang-dpg.com" />
        <meta property="og:title" content="Xiaoxiang Wheelchair & Dongbang Motor — B2B Export" />
        <meta property="og:description" content="Premium electric wheelchairs and industrial electric motors for global B2B partners." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.xiaoxiang-dpg.com" />
        <title>Xiaoxiang Wheelchair & Dongbang Motor — B2B Export</title>
      </head>
      <body className="min-h-full flex flex-col">
        {/* Navigation Header */}
        <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled
              ? 'bg-white/95 navbar-scrolled border-b border-gray-100'
              : 'bg-transparent'
          }`}
        >
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal to-teal-light flex items-center justify-center text-white font-bold text-lg">
                  XD
                </div>
                <div className="hidden sm:block">
                  <span className="text-sm font-bold text-charcoal block leading-tight group-hover:text-teal transition-colors">
                    Xiaoxiang · Dongbang
                  </span>
                  <span className="text-[10px] text-gray-500 tracking-wider uppercase">
                    B2B Export
                  </span>
                </div>
              </Link>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`nav-link text-sm py-1 ${
                      pathname === link.href
                        ? 'text-teal font-semibold nav-link::after'
                        : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="btn-primary text-sm px-5 py-2.5"
                >
                  Get a Quote
                </Link>
              </div>

              {/* Mobile hamburger */}
              <button
                className="md:hidden p-2 text-gray-600 hover:text-teal transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Mobile Menu */}
            <div
              className={`md:hidden overflow-hidden transition-all duration-300 ${
                mobileMenuOpen ? 'max-h-80 pb-4' : 'max-h-0'
              }`}
            >
              <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      pathname === link.href
                        ? 'bg-teal/10 text-teal'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="btn-primary text-sm text-center mt-2"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-1 pt-16 lg:pt-20">{children}</main>

        {/* Footer */}
        <footer className="bg-charcoal text-gray-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {/* Brand */}
              <div className="lg:col-span-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal to-teal-light flex items-center justify-center text-white font-bold text-lg">
                    XD
                  </div>
                  <div>
                    <span className="text-sm font-bold text-white block">
                      Xiaoxiang · Dongbang
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Your trusted B2B partner for premium electric wheelchairs and
                  industrial electric motors. Quality certified, globally
                  delivered.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-2.5">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Products */}
              <div>
                <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                  Products
                </h3>
                <ul className="space-y-2.5">
                  <li>
                    <Link
                      href="/products?category=wheelchair"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      Electric Wheelchairs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products?category=motor"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      Industrial Motors
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/x1-lite"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      X1 Lite
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/x2-comfort"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      X2 Comfort
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/x3-pro"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      X3 Pro
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/dpg-150-series"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      DPG-150 Series
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                  Contact
                </h3>
                <ul className="space-y-2.5 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>export@xiaoxiang-dpg.com</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+86 400 888 9999</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Shanghai, China</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-700/50 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-gray-500">
                &copy; {new Date().getFullYear()} Xiaoxiang Technology Co., Ltd. &amp; Dongbang Electric Motor Co., Ltd. All rights reserved.
              </p>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
