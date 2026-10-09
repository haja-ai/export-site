import LegalPage from '../components/LegalPage';

export const metadata = {
  title: 'Terms of Use',
  description: 'Terms governing use of the MiniElephant electric wheelchair B2B website and inquiry services.',
  alternates: { canonical: 'https://www.semwheelchair.com/terms' },
  robots: 'index, follow',
};

export default function TermsPage() {
  return (
    <LegalPage
      badge="TERMS"
      title="Terms of Use"
      description="Terms for using the MiniElephant website and sending a business inquiry."
      lastUpdated="October 9, 2026"
    >
      <p>These Terms of Use govern your access to and use of semwheelchair.com. By using the website or submitting an inquiry, you agree to these terms. If you do not agree, please do not use the website.</p>

      <h2>Website Purpose</h2>
      <p>MiniElephant publishes this website to introduce MiniRedone folding electric wheelchairs and facilitate B2B inquiries from distributors, importers, OEM/ODM buyers and other commercial partners. Information on this website is general product and company information; it is not medical advice, a clinical recommendation, a public offer, or a guarantee that a product is available, approved or suitable in every market.</p>

      <h2>Product Information and Quotations</h2>
      <p>Product configurations, specifications, available options, documents and commercial terms may vary by model, revision, destination and order. A written quotation, purchase agreement and the applicable product documents govern any transaction. Do not rely on website content alone for regulatory, market-entry, technical, shipping, payment, warranty, delivery or suitability decisions.</p>
      <p>References to OEM/ODM or customization describe topics that may be discussed with our export team. They do not create an obligation to provide a particular configuration, certification, minimum order quantity, price, lead time or market approval.</p>

      <h2>Market and Regulatory Responsibilities</h2>
      <p>Buyers are responsible for confirming the requirements that apply to their intended market, including importation, registration, labeling, language, documentation, testing, local representative and post-market obligations. Any regulatory document should be evaluated for the exact product, configuration, date and market to which it applies.</p>

      <h2>Acceptable Use</h2>
      <p>You may use the website for lawful business research and inquiry purposes. You must not interfere with the website, attempt unauthorized access, submit misleading information, use automated means to collect content at a disruptive scale, or use our brand and materials in a way that suggests an unapproved affiliation.</p>

      <h2>Intellectual Property</h2>
      <p>The website design, text, photographs, product information, trademarks, logos and other materials are owned by or used with permission by MiniElephant and its respective rights holders. You may not reproduce, modify, distribute or use them for commercial purposes without prior written permission, except where applicable law permits.</p>

      <h2>Third-Party Links</h2>
      <p>Links to third-party websites or communication services are provided for convenience. We do not control and are not responsible for their content, security, availability or privacy practices.</p>

      <h2>Disclaimer and Limitation</h2>
      <p>To the extent permitted by applicable law, the website is provided on an "as is" and "as available" basis. We do not warrant that it will always be uninterrupted, error-free or complete. Nothing in these terms limits liability that cannot be limited under applicable law.</p>

      <h2>Governing Contact</h2>
      <p>Questions about these terms can be sent to <a href="mailto:johnson@semwheelchair.com">johnson@semwheelchair.com</a>. Jiaxing Small Elephant Medical Technology Co., Ltd. is located at No. 18 Zhenzhong East Road, Jiashan County, Jiaxing City, Zhejiang Province, China.</p>

      <h2>Changes</h2>
      <p>We may revise these terms from time to time. The revised version will be posted on this page with an updated date.</p>
    </LegalPage>
  );
}
