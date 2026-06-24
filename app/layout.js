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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-J9D6EMGBXL"></script>
        <script dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-J9D6EMGBXL');`,
        }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Jiaxing Small Elephant Medical Technology Co., Ltd",
            "url": "https://www.semwheelchair.com",
            "email": "johnson@semwheelchair.com",
            "telephone": "+86-13819098967",
            "contactPoint": { "@type": "ContactPoint", "contactType": "Sales", "name": "Johnson", "telephone": "+86-13819098967", "email": "johnson@semwheelchair.com" }
          }),
        }} />
      </head>
      <body className="min-h-full flex flex-col">
        <main className="flex-1">{children}</main>
        <footer className="bg-gray-900 text-gray-400 py-12 px-4">
          <div className="max-w-7xl mx-auto text-center text-sm text-gray-500">
            <p>&copy; 2025 Jiaxing Small Elephant Medical Technology Co., Ltd. All rights reserved.</p>
            <p className="mt-2">johnson@semwheelchair.com | +86 13819098967</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
