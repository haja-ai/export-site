import { Geist, Geist_Mono } from 'next/font/google';
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
  title: {
    default: 'MiniElephant Electric Wheelchair | Premium B2B Electric Wheelchairs Manufacturer | Lightweight Folding Wheelchairs',
    template: '%s | MiniElephant Electric Wheelchair',
  },
  description:
    'Professional electric wheelchair manufacturer & supplier of lightweight folding wheelchairs with magnesium alloy frames. Dual 350W motors, 30km range, 150KG load capacity. B2B export to 50+ countries. ISO, CE, FDA certified. OEM/ODM available. Factory-direct pricing.',
  keywords:
    'electric wheelchair, electric wheelchair manufacturer, folding electric wheelchair, lightweight wheelchair, magnesium alloy wheelchair, MiniElephant, MiniRedone, wheelchair supplier, B2B wheelchair export, China wheelchair manufacturer, mobility scooter, power wheelchair, OEM wheelchair, ODM wheelchair, electric wheelchair factory, Zhejiang wheelchair, portable wheelchair, dual motor wheelchair, 30km range wheelchair, 150kg capacity wheelchair, ISO 13485 wheelchair, CE certified wheelchair',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://www.semwheelchair.com',
    languages: {
      'en-US': 'https://www.semwheelchair.com',
    },
  },
  openGraph: {
    title: 'MiniElephant Electric Wheelchair | Premium B2B Electric Wheelchairs Manufacturer | Lightweight Folding Wheelchairs',
    description:
      'Professional electric wheelchair manufacturer. Lightweight folding wheelchairs with magnesium alloy frames, 30km range, 150KG load. Factory-direct B2B export to 50+ countries. OEM/ODM welcome. ISO, CE, FDA certified.',
    type: 'website',
    url: 'https://www.semwheelchair.com',
    siteName: 'MiniElephant Electric Wheelchair',
    locale: 'en_US',
    images: [{ url: 'https://www.semwheelchair.com/og-image.jpg', width: 1200, height: 630, alt: 'MiniElephant Electric Wheelchair — MiniRedone Lightweight Folding Wheelchair Series' }],
    determiner: '',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MiniElephant Electric Wheelchair | Premium B2B Wheelchair Manufacturer',
    description:
      'Professional electric wheelchair manufacturer. Magnesium alloy folding frames, dual 350W motors, 30km range, 150KG load. B2B export to 50+ countries. OEM/ODM.',
    images: ['https://www.semwheelchair.com/og-image.jpg'],
  },
  other: {
    'application-name': 'MiniElephant Electric Wheelchair',
    'apple-mobile-web-app-title': 'MiniElephant',
    'msapplication-TileColor': '#14B8A6',
    'theme-color': '#14B8A6',
    'google-site-verification': '',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#14B8A6" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://wa.me" />
        <link rel="preconnect" href="https://i.pravatar.cc" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://i.pravatar.cc" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-J9D6EMGBXL"></script>
        <script dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-J9D6EMGBXL');`,
        }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://www.semwheelchair.com/#organization",
            "name": "Jiaxing Small Elephant Medical Technology Co., Ltd",
            "alternateName": "MiniElephant Electric Wheelchair",
            "url": "https://www.semwheelchair.com",
            "logo": "https://www.semwheelchair.com/logo.png",
            "image": "https://www.semwheelchair.com/og-image.jpg",
            "description": "Professional electric wheelchair manufacturer of lightweight folding wheelchairs with magnesium alloy frames. Dual 350W brushless motors, 30km range, 150KG load capacity. Factory-direct B2B export to 50+ countries with OEM/ODM service.",
            "email": "johnson@semwheelchair.com",
            "telephone": "+86-13819098967",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "No. 18 Zhenzhong East Road",
              "addressLocality": "Jiashan County, Jiaxing City",
              "addressRegion": "Zhejiang Province",
              "addressCountry": "CN",
              "postalCode": "314100"
            },
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "contactType": "Sales",
                "name": "Johnson",
                "telephone": "+86-13819098967",
                "email": "johnson@semwheelchair.com",
                "availableLanguage": ["English", "Chinese"],
                "hoursAvailable": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              }
            ],
            "sameAs": [
              "https://wa.me/8613819098967"
            ],
            "foundingDate": "2013",
            "areaServed": "Worldwide",
            "numberOfEmployees": {
              "@type": "QuantitativeValue",
              "minValue": 100,
              "maxValue": 200
            },
            "isoCertifications": ["ISO 13485", "CE", "FDA"],
            "knowsAbout": ["Electric Wheelchair Manufacturing", "Lightweight Mobility Devices", "Magnesium Alloy Wheelchairs", "Folding Electric Wheelchairs"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "MiniRedone Electric Wheelchair Series",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "MiniRedone-I" } },
                { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "MiniRedone-II" } },
                { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "MiniRedone-III" } },
                { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "MiniRedone-IV" } },
                { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "MiniRedone-V" } }
              ]
            }
          }),
        }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://www.semwheelchair.com/#website",
            "url": "https://www.semwheelchair.com",
            "name": "MiniElephant Electric Wheelchair",
            "description": "Premium B2B electric wheelchair manufacturer. Factory-direct magnesium alloy lightweight folding wheelchairs. MiniRedone series — dual 350W motors, 30km range, ISO/CE/FDA certified. OEM/ODM available.",
            "publisher": { "@id": "https://www.semwheelchair.com/#organization" },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.semwheelchair.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }),
        }} />
      </head>
      <body className="min-h-full flex flex-col">
        <main className="flex-1">{children}</main>
        <footer className="bg-gray-900 text-gray-400 py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 text-left">
              {/* Brand */}
              <div>
                <h3 className="text-white font-bold text-lg mb-3">MiniElephant</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Professional electric wheelchair manufacturer. Factory-direct B2B export of lightweight folding wheelchairs with magnesium alloy frames.
                </p>
              </div>

              {/* Products — two columns for 10 models */}
              <div>
                <h3 className="text-white font-semibold text-sm mb-3">Electric Wheelchair Models</h3>
                <div className="grid grid-cols-2 gap-x-4">
                  <ul className="space-y-2 text-sm">
                    <li><a href="/products/miniredone-i" className="text-gray-400 hover:text-teal transition-colors">MiniRedone-I — 47KG</a></li>
                    <li><a href="/products/miniredone-i-w" className="text-gray-400 hover:text-teal transition-colors">MiniRedone-I-W — 46KG</a></li>
                    <li><a href="/products/miniredone-i-br" className="text-gray-400 hover:text-teal transition-colors">MiniRedone-I-B&amp;R</a></li>
                    <li><a href="/products/miniredone-i-r" className="text-gray-400 hover:text-teal transition-colors">MiniRedone-I-R</a></li>
                    <li><a href="/products/miniredone-i-plus" className="text-gray-400 hover:text-teal transition-colors">MiniRedone-I-Plus</a></li>
                  </ul>
                  <ul className="space-y-2 text-sm">
                    <li><a href="/products/miniredone-ii" className="text-gray-400 hover:text-teal transition-colors">MiniRedone-II — 42KG</a></li>
                    <li><a href="/products/miniredone-ii-plus" className="text-gray-400 hover:text-teal transition-colors">MiniRedone-II-Plus</a></li>
                    <li><a href="/products/miniredone-iii" className="text-gray-400 hover:text-teal transition-colors">MiniRedone-III</a></li>
                    <li><a href="/products/miniredone-iv" className="text-gray-400 hover:text-teal transition-colors">MiniRedone-IV</a></li>
                    <li><a href="/products/miniredone-v" className="text-gray-400 hover:text-teal transition-colors">MiniRedone-V</a></li>
                  </ul>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-white font-semibold text-sm mb-3">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/" className="text-gray-400 hover:text-teal transition-colors">Home</a></li>
                  <li><a href="/products" className="text-gray-400 hover:text-teal transition-colors">All Products</a></li>
                  <li><a href="/about" className="text-gray-400 hover:text-teal transition-colors">About Us</a></li>
                  <li><a href="/faq" className="text-gray-400 hover:text-teal transition-colors">FAQ</a></li>
                  <li><a href="/news" className="text-gray-400 hover:text-teal transition-colors">News & Insights</a></li>
                  <li><a href="/contact" className="text-gray-400 hover:text-teal transition-colors">Contact & Quotation</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-white font-semibold text-sm mb-3">Contact</h3>
                <ul className="space-y-2 text-sm">
                  <li className="text-gray-400">Email: <a href="mailto:johnson@semwheelchair.com" className="text-teal hover:underline">johnson@semwheelchair.com</a></li>
                  <li className="text-gray-400">Phone: <a href="tel:+8613819098967" className="text-teal hover:underline">+86 13819098967</a></li>
                  <li className="text-gray-400">WhatsApp: <a href="https://wa.me/8613819098967" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">Chat on WhatsApp</a></li>
                  <li className="text-gray-400 text-xs mt-2">ISO 13485 · CE · FDA Certified</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
              <p>&copy; 2026 Jiaxing Small Elephant Medical Technology Co., Ltd. All rights reserved.</p>
              <p className="mt-1">Professional electric wheelchair manufacturer specializing in lightweight folding electric wheelchairs for global B2B export.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
