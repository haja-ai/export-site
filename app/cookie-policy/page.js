import LegalPage from '../components/LegalPage';

export const metadata = {
  title: 'Cookie Policy',
  description: 'Information about cookies and similar technologies used on the MiniElephant B2B website.',
  alternates: { canonical: 'https://www.semwheelchair.com/cookie-policy' },
  robots: 'index, follow',
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      badge="COOKIES"
      title="Cookie Policy"
      description="How semwheelchair.com uses cookies and similar technologies."
      lastUpdated="October 9, 2026"
    >
      <p>This Cookie Policy explains how Jiaxing Small Elephant Medical Technology Co., Ltd. ("MiniElephant", "we", "us" or "our") uses cookies and similar technologies on semwheelchair.com.</p>

      <h2>What Cookies Are</h2>
      <p>Cookies are small text files stored by a browser. Similar technologies may store or access identifiers, device information or interaction data. They can help a website function, remember preferences, understand aggregate usage and measure campaign performance.</p>

      <h2>How We Use Cookies and Similar Technologies</h2>
      <ul>
        <li><strong>Essential operation:</strong> to help the website load, maintain basic security and support form interactions.</li>
        <li><strong>Analytics:</strong> to understand aggregate traffic, pages viewed and website performance. We currently use Google Analytics for this purpose.</li>
        <li><strong>Campaign measurement:</strong> to understand whether visitors reach our inquiry process after a marketing campaign.</li>
      </ul>

      <h2>Third-Party Technologies</h2>
      <p>Google Analytics may set or read cookies and process information according to Google’s own policies. Links to WhatsApp, social-media platforms and other third-party services may use their own technologies after you follow those links. We do not control third-party cookies or their policies.</p>

      <h2>Your Controls</h2>
      <p>You can usually manage, block or delete cookies in your browser settings. Blocking some cookies may affect website functionality or measurement. Depending on your location, you may also have additional choices regarding non-essential analytics or advertising technologies when they are made available through the website.</p>

      <h2>Changes to This Policy</h2>
      <p>We may update this Cookie Policy as our website or technology use changes. The current version and update date will be posted here.</p>

      <h2>Contact</h2>
      <p>For questions about cookies or privacy, contact <a href="mailto:johnson@semwheelchair.com">johnson@semwheelchair.com</a>. Please also review our <a href="/privacy">Privacy Policy</a> for more information about how we handle inquiry and website information.</p>
    </LegalPage>
  );
}
