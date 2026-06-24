'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About Us' },
  { href: '/faq', label: 'FAQ' },
  { href: '/news', label: 'News' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  // PulseFitHero has its own nav on homepage — hide this one
  if (pathname === '/') return null;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled || !mounted ? 'rgba(255,255,255,0.9)' : 'transparent',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : 'none',
        transition: 'all 0.3s',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '32px 32px',
        }}
      >
        {/* Logo — text only, PulseFit style */}
        <Link href="/" className="hover:opacity-70 transition-opacity">
          <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '24px', color: '#1a1a1a' }}>
            MiniElephant
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex flex-row items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => router.push(link.href)}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                fontWeight: pathname === link.href ? 500 : 400,
                color: pathname === link.href ? '#14B8A6' : '#4a5568',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => { e.target.style.opacity = '0.7'; }}
              onMouseLeave={(e) => { e.target.style.opacity = '1'; }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Get a Quote */}
        <Link
          href="/contact"
          style={{
            padding: '12px 24px',
            borderRadius: '9999px',
            background: '#FFFFFF',
            border: '1px solid #e2e8f0',
            fontFamily: 'Inter, sans-serif',
            fontSize: '16px',
            fontWeight: 500,
            color: '#1a1a1a',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
            transition: 'all 0.2s',
            cursor: 'pointer',
            textDecoration: 'none',
          }}
          className="hidden sm:inline-block hover:scale-105"
        >
          Get a Quote
        </Link>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <>
                <path d="M4 6h16" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 12h16" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{
          background: 'white',
          borderTop: '1px solid #e2e8f0',
          padding: '16px 32px',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => { router.push(link.href); setMobileMenuOpen(false); }}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  fontWeight: pathname === link.href ? 500 : 400,
                  color: pathname === link.href ? '#14B8A6' : '#4a5568',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  padding: '8px 0',
                }}
              >
                {link.label}
              </button>
            ))}
            <Link
              href="/contact"
              style={{
                display: 'block',
                textAlign: 'center',
                padding: '12px 24px',
                borderRadius: '9999px',
                background: '#14B8A6',
                color: 'white',
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
