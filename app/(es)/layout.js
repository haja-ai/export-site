import { Geist, Geist_Mono } from 'next/font/google';
import BrowserZoomCompensator from '@/app/components/BrowserZoomCompensator';
import SiteFooter from '@/app/components/SiteFooter';
import '@/app/globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#14B8A6" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-J9D6EMGBXL"></script>
        <script
          dangerouslySetInnerHTML={{ __html: "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-J9D6EMGBXL');" }}
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
