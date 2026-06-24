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
    default: 'MiniElephant Electric Wheelchair | Premium B2B Electric Wheelchairs Manufacturer',
    template: '%s | MiniElephant Electric Wheelchair',
  },
  description:
    'Professional electric wheelchair manufacturer. Lightweight folding wheelchairs with magnesium alloy frame, 30km range. B2B export to 50+ countries. OEM/ODM welcome.',
  keywords:
    'electric wheelchair, MiniElephant, MiniRedone, wheelchair manufacturer, B2B, export, China, Zhejiang, mobility, folding wheelchair, magnesium alloy, mobility aid',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://www.semwheelchair.com',
    languages: {
      'en-US': 'https://www.semwheelchair.com',
    },
  },
  openGraph: {
    title: 'MiniElephant Electric Wheelchair | Premium B2B Electric Wheelchairs Manufacturer',
    description:
      'Professional electric wheelchair manufacturer. Lightweight folding wheelchairs with magnesium alloy frame, 30km range, 150KG load. B2B export to 50+ countries. OEM/ODM welcome.',
    type: 'website',
    url: 'https://www.semwheelchair.com',
    siteName: 'MiniElephant Electric Wheelchair',
    locale: 'en_US',
    images: [{ url: 'https://www.semwheelchair.com/og-image.jpg', width: 1200, height: 630, alt: 'MiniElephant Electric Wheelchair — MiniRedone Series' }],
    determiner: '',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MiniElephant Electric Wheelchair | Premium B2B Manufacturer',
    description:
      'Professional electric wheelchair manufacturer. Magnesium alloy frames, 30km range, 150KG load. B2B export to 50+ countries.',
    images: ['https://www.semwheelchair.com/og-image.jpg'],
  },
  other: {
    'application-name': 'MiniElephant Electric Wheelchair',
    'apple-mobile-web-app-title': 'MiniElephant',
    'msapplication-TileColor': '#14B8A6',
    'theme-color': '#14B8A6',
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
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
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
            "description": "Professional electric wheelchair manufacturer. Lightweight folding wheelchairs with magnesium alloy frame, 30km range. B2B export to 50+ countries. OEM/ODM welcome.",
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
                "availableLanguage": ["English", "Chinese"]
              }
            ],
            "sameAs": [
              "https://wa.me/8613819098967"
            ],
            "foundingDate": "2013",
            "areaServed": "Worldwide",
            "numberOfEmployees": "100+",
            "isoCertifications": ["ISO 13485", "CE", "FDA"]
          }),
        }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://www.semwheelchair.com/#website",
            "url": "https://www.semwheelchair.com",
            "name": "MiniElephant Electric Wheelchair",
            "description": "Premium B2B electric wheelchair manufacturer. Factory-direct magnesium alloy folding wheelchairs.",
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
          <div className="max-w-7xl mx-auto text-center text-sm text-gray-500">
            <p>&copy; 2026 Jiaxing Small Elephant Medical Technology Co., Ltd. All rights reserved.</p>
            <p className="mt-2">johnson@semwheelchair.com | +86 13819098967</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
