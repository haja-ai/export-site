import { Geist, Geist_Mono } from 'next/font/google';
import Link from 'next/link';
import Nav from './components/Nav';
import OrganizationJsonLd from './components/OrganizationJsonLd';
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
  { href: '/faq', label: 'FAQ' },
  { href: '/news', label: 'News' },
  { href: '/contact', label: 'Contact' },
];

export const metadata = {
  title: 'MiniElephant Electric Wheelchair | Premium B2B Electric Wheelchairs Manufacturer',
  description:
    'Professional electric wheelchair manufacturer. Lightweight folding wheelchairs with magnesium alloy frame, 30km range. B2B export to 50+ countries. OEM/ODM welcome.',
  keywords:
    'electric wheelchair, MiniElephant, MiniRedone, wheelchair manufacturer, B2B, export, China, mobility, folding wheelchair',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.semwheelchair.com',
  },
  openGraph: {
    title: 'MiniElephant Electric Wheelchair | Premium B2B Electric Wheelchairs Manufacturer',
    description:
      'Professional electric wheelchair manufacturer. Lightweight folding wheelchairs with magnesium alloy frame, 30km range. B2B export to 50+ countries. OEM/ODM welcome.',
    type: 'website',
    url: 'https://www.semwheelchair.com',
    siteName: 'MiniElephant Electric Wheelchair',
    locale: 'en_US',
    images: [{ url: 'https://www.semwheelchair.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MiniElephant Electric Wheelchair | Premium B2B Manufacturer',
    description:
      'Professional electric wheelchair manufacturer. Magnesium alloy frames, 30km range, B2B export.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <OrganizationJsonLd />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-J9D6EMGBXL"></script>
        <script dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-J9D6EMGBXL');`,
        }} />
      </head>
      <body className="min-h-full flex flex-col">
        <Nav />

        <main className="flex-1 pt-16 lg:pt-20">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {/* Brand */}
              <div className="lg:col-span-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal to-teal-dark flex items-center justify-center text-white font-bold text-xl">
                    ME
                  </div>
                  <div>
                    <span className="text-sm font-bold text-white block">MiniElephant</span>
                    <span className="text-[10px] text-gray-500 tracking-wider uppercase">
                      Electric Wheelchair
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Professional electric wheelchair manufacturer serving B2B partners worldwide.
                  Quality certified, factory-direct pricing, global delivery.
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
                        className="text-sm text-gray-500 hover:text-white transition-colors"
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
                      href="/products/miniredone-i"
                      className="text-sm text-gray-500 hover:text-white transition-colors"
                    >
                      MiniRedone-I
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/miniredone-ii"
                      className="text-sm text-gray-500 hover:text-white transition-colors"
                    >
                      MiniRedone-II
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/miniredone-iii"
                      className="text-sm text-gray-500 hover:text-white transition-colors"
                    >
                      MiniRedone-III
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/miniredone-iv"
                      className="text-sm text-gray-500 hover:text-white transition-colors"
                    >
                      MiniRedone-IV
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/miniredone-v"
                      className="text-sm text-gray-500 hover:text-white transition-colors"
                    >
                      MiniRedone-V
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                  Contact
                </h3>
                <ul className="space-y-3 text-sm text-gray-500">
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-4 h-4 mt-0.5 shrink-0 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span>johnson@semwheelchair.com</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-4 h-4 mt-0.5 shrink-0 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span>+86 13819098967</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-4 h-4 mt-0.5 shrink-0 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>Zhejiang, China</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-gray-600">
                &copy; 2025 Jiaxing Small Elephant Medical Technology Co., Ltd. All rights reserved.
              </p>
              <div className="flex items-center gap-4 text-xs text-gray-600">
                <a
                  href="mailto:johnson@semwheelchair.com"
                  className="hover:text-gray-300 transition-colors"
                >
                  Email Us
                </a>
                <a
                  href="https://wa.me/8613819098967"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
