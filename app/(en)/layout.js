import { Geist, Geist_Mono } from 'next/font/google';
import BrowserZoomCompensator from '@/app/components/BrowserZoomCompensator';
import '@/app/globals.css';
import SiteFooter from '@/app/components/SiteFooter';

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
      'en': 'https://www.semwheelchair.com/',
      'es': 'https://www.semwheelchair.com/es',
      'fr': 'https://www.semwheelchair.com/fr',
      'x-default': 'https://www.semwheelchair.com/',
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
              sameAs: [
                'https://wa.me/8613819098967',
                'https://www.tiktok.com/@electricwheelchairuae',
                'https://www.tiktok.com/@electricwheelchairsa',
                'https://www.tiktok.com/@electricwheelchai8',
                'https://www.youtube.com/@xiaoxianhuang-z4t',
                'https://www.youtube.com/@xiaoxiangelectricwheelchairuae',
                'https://www.linkedin.com/in/electricwheelchair-supplier-045232411',
                'https://www.linkedin.com/in/electric-wheelchair-uae-48b226411',
              ],
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
        <BrowserZoomCompensator />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
