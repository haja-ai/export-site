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
    default: 'MiniElephant | MiniRedone Folding Electric Wheelchairs',
    template: '%s | MiniElephant',
  },
  description:
    'MiniElephant manufactures MiniRedone folding electric wheelchairs for B2B export. Factory-direct inquiry site for distributors, importers, OEM/ODM buyers, and mobility partners.',
  keywords:
    'electric wheelchair, electric wheelchair manufacturer, folding electric wheelchair, MiniElephant, MiniRedone, wheelchair supplier, B2B wheelchair export, OEM wheelchair, ODM wheelchair, magnesium alloy wheelchair, electric wheelchair factory',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://www.semwheelchair.com',
    languages: {
      'en-US': 'https://www.semwheelchair.com',
    },
  },
  openGraph: {
    title: 'MiniElephant | MiniRedone Folding Electric Wheelchairs Manufacturer',
    description:
      'MiniElephant manufactures MiniRedone folding electric wheelchairs for distributors, importers, and OEM/ODM buyers. Factory-direct B2B inquiry site.',
    type: 'website',
    url: 'https://www.semwheelchair.com',
    siteName: 'MiniElephant',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.semwheelchair.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MiniElephant MiniRedone folding electric wheelchairs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MiniElephant | MiniRedone Folding Electric Wheelchairs Manufacturer',
    description:
      'MiniElephant manufactures MiniRedone folding electric wheelchairs for B2B export. Factory-direct inquiry site for distributors and OEM/ODM buyers.',
    images: ['https://www.semwheelchair.com/og-image.jpg'],
  },
  other: {
    'application-name': 'MiniElephant',
    'apple-mobile-web-app-title': 'MiniElephant',
    'msapplication-TileColor': '#14B8A6',
    'theme-color': '#14B8A6',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-48x48.png', type: 'image/png', sizes: '48x48' },
      { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#14B8A6" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-J9D6EMGBXL"></script>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-J9D6EMGBXL');",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              '@id': 'https://www.semwheelchair.com/#organization',
              name: 'Jiaxing Small Elephant Medical Technology Co., Ltd',
              alternateName: 'MiniElephant',
              url: 'https://www.semwheelchair.com',
              logo: 'https://www.semwheelchair.com/logo.png',
              image: 'https://www.semwheelchair.com/og-image.jpg',
              description:
                'MiniElephant is a manufacturer of MiniRedone folding electric wheelchairs for B2B export and OEM/ODM inquiries.',
              email: 'johnson@semwheelchair.com',
              telephone: '+86-13819098967',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'No. 18 Zhenzhong East Road',
                addressLocality: 'Jiashan County, Jiaxing City',
                addressRegion: 'Zhejiang Province',
                addressCountry: 'CN',
                postalCode: '314100',
              },
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  contactType: 'Sales',
                  name: 'Johnson',
                  telephone: '+86-13819098967',
                  email: 'johnson@semwheelchair.com',
                  availableLanguage: ['English', 'Chinese'],
                },
              ],
              sameAs: ['https://wa.me/8613819098967'],
              foundingDate: '2013',
              areaServed: 'Worldwide',
              knowsAbout: ['Electric wheelchair manufacturing', 'Foldable mobility products', 'OEM/ODM export'],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              '@id': 'https://www.semwheelchair.com/#website',
              url: 'https://www.semwheelchair.com',
              name: 'MiniElephant',
              description:
                'MiniElephant MiniRedone folding electric wheelchairs for B2B export, OEM/ODM, and wholesale inquiries.',
              publisher: { '@id': 'https://www.semwheelchair.com/#organization' },
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://www.semwheelchair.com/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <main className="flex-1">{children}</main>
        <footer className="bg-gray-900 text-gray-400 py-12 px-4">
          <div className="max-w-[1600px] mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 text-left">
              <div>
                <div className="mb-3">
                  <img src="/logo-white.png" alt="MiniElephant" style={{ height: '60px', width: 'auto' }} />
                  <h3 className="sr-only">MiniElephant</h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Manufacturer of MiniRedone folding electric wheelchairs for distributors, importers, and OEM/ODM buyers.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold text-sm mb-3">Electric Wheelchair Models</h3>
                <div className="grid grid-cols-2 gap-x-4">
                  <ul className="space-y-2 text-sm">
                    <li><a href="/products/miniredone-i" className="text-gray-400 hover:text-teal transition-colors">MiniRedone-I</a></li>
                    <li><a href="/products/miniredone-i-w" className="text-gray-400 hover:text-teal transition-colors">MiniRedone-I-W</a></li>
                    <li><a href="/products/miniredone-i-br" className="text-gray-400 hover:text-teal transition-colors">MiniRedone-I-B&R</a></li>
                    <li><a href="/products/miniredone-i-r" className="text-gray-400 hover:text-teal transition-colors">MiniRedone-I-R</a></li>
                    <li><a href="/products/miniredone-i-plus" className="text-gray-400 hover:text-teal transition-colors">MiniRedone-I-Plus</a></li>
                  </ul>
                  <ul className="space-y-2 text-sm">
                    <li><a href="/products/miniredone-ii" className="text-gray-400 hover:text-teal transition-colors">MiniRedone-II</a></li>
                    <li><a href="/products/miniredone-ii-plus" className="text-gray-400 hover:text-teal transition-colors">MiniRedone-II-Plus</a></li>
                    <li><a href="/products/miniredone-iii" className="text-gray-400 hover:text-teal transition-colors">MiniRedone-III</a></li>
                    <li><a href="/products/miniredone-iv" className="text-gray-400 hover:text-teal transition-colors">MiniRedone-IV</a></li>
                    <li><a href="/products/miniredone-v" className="text-gray-400 hover:text-teal transition-colors">MiniRedone-V</a></li>
                  </ul>
                </div>
              </div>

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

              <div>
                <h3 className="text-white font-semibold text-sm mb-3">Contact</h3>
                <ul className="space-y-2 text-sm">
                  <li className="text-gray-400">Email: <a href="mailto:johnson@semwheelchair.com" className="text-teal hover:underline">johnson@semwheelchair.com</a></li>
                  <li className="text-gray-400">Phone: <a href="tel:+8613819098967" className="text-teal hover:underline">+86 13819098967</a></li>
                  <li className="text-gray-400">WhatsApp: <a href="https://wa.me/8613819098967" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">Chat on WhatsApp</a></li>
                  <li className="text-gray-400 text-xs mt-2">See About Us and product pages for verified specifications and documents.</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
              <p>&copy; 2026 Jiaxing Small Elephant Medical Technology Co., Ltd. All rights reserved.</p>
              <p className="mt-1">MiniElephant MiniRedone folding electric wheelchairs for global B2B export.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
