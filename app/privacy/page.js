import LegalPage from '../components/LegalPage';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Learn how MiniElephant collects, uses, stores and protects business inquiry and website usage information.',
  alternates: { canonical: 'https://www.semwheelchair.com/privacy' },
  robots: 'index, follow',
};

export default function PrivacyPage() {
  return (
    <LegalPage
      badge="PRIVACY"
      title="Privacy Policy"
      description="How MiniElephant handles business inquiry and website information."
      lastUpdated="October 9, 2026"
    >
      <p>
        This Privacy Policy explains how Jiaxing Small Elephant Medical Technology Co., Ltd. ("MiniElephant", "we", "us" or "our") handles information collected through semwheelchair.com. This website is intended primarily for business visitors, including distributors, importers, OEM/ODM buyers and mobility-equipment partners.
      </p>

      <h2>Information We Collect</h2>
      <p>When you submit an inquiry, we may collect the information you provide, such as your name, work email address, company, country or region, WhatsApp or phone number, model interest, estimated quantity and message.</p>
      <p>We may also receive limited technical and usage information through website analytics, including pages viewed, approximate device or browser information, referral source and interaction events. We do not ask visitors to provide payment-card information through this website.</p>

      <h2>How We Use Information</h2>
      <ul>
        <li>Respond to product, quotation, OEM/ODM and distribution inquiries;</li>
        <li>Prepare model-specific product information and business communications;</li>
        <li>Operate, secure, troubleshoot and improve our website and inquiry process;</li>
        <li>Measure website and campaign performance; and</li>
        <li>Meet applicable legal, accounting and record-keeping obligations.</li>
      </ul>

      <h2>Analytics and Service Providers</h2>
      <p>We use Google Analytics to understand aggregate website activity and improve site performance. Inquiry records may be processed through service providers that support our website hosting, database storage and email delivery. These providers process information only as needed to provide their services to us and under their own applicable terms and safeguards.</p>
      <p>Our website may link to third-party services, including WhatsApp and social-media platforms. Their handling of information is governed by their own privacy notices; please review those notices before using their services.</p>

      <h2>Sharing and International Transfers</h2>
      <p>We do not sell personal information. We may share information with service providers, professional advisers, authorities where legally required, or parties involved in a corporate transaction, only where necessary for the purposes described in this policy. As an international B2B exporter, information may be processed in countries where our service providers or business contacts operate.</p>

      <h2>Retention and Security</h2>
      <p>We retain inquiry and website information for as long as reasonably necessary for business communication, service support, legal obligations and dispute resolution. We use reasonable administrative and technical measures to protect information, but no online transmission or storage system can be guaranteed completely secure.</p>

      <h2>Your Choices and Rights</h2>
      <p>Depending on your location, you may have rights to request access, correction, deletion, restriction or objection to certain processing. You may also ask questions about our handling of your information. To make a request, contact us using the details below. We may need to verify your identity and authority before responding.</p>

      <h2>Contact</h2>
      <p>
        Jiaxing Small Elephant Medical Technology Co., Ltd.<br />
        No. 18 Zhenzhong East Road, Jiashan County, Jiaxing City, Zhejiang Province, China<br />
        Email: <a href="mailto:johnson@semwheelchair.com">johnson@semwheelchair.com</a><br />
        Phone: <a href="tel:+8613819098967">+86 13819098967</a>
      </p>

      <h2>Updates to This Policy</h2>
      <p>We may update this policy when our website, services or legal obligations change. The current version and update date will be posted on this page.</p>
    </LegalPage>
  );
}
