import Link from 'next/link';
import PageHeader from '../components/PageHeader';

export const metadata = {
  title: 'FAQ | Electric Wheelchair | MiniElephant',
  description:
    'Frequently asked questions about MiniElephant electric wheelchairs. Shipping, warranty, OEM/ODM, battery, maintenance, and more. Find answers quickly.',
  openGraph: {
    title: 'FAQ — MiniElephant Electric Wheelchair',
    description: 'Find answers about electric wheelchair shipping, warranty, customization, and more.',
    url: 'https://www.semwheelchair.com/faq',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.semwheelchair.com/faq',
  },
};

const faqs = [
  {
    q: 'What is the minimum order quantity (MOQ)?',
    a: 'Our standard MOQ for MiniRedone electric wheelchairs is 5 units per model. For sample orders, we accept 1–2 units for evaluation. Contact our sales team for mixed-model orders and volume discounts.',
  },
  {
    q: 'How long does shipping take?',
    a: 'Shipping time depends on your location and chosen method. By sea: 25–40 days to most ports. By air: 7–10 days. By express (DHL/UPS/FedEx): 5–7 days for sample orders. We ship from Zhejiang, China.',
  },
  {
    q: 'Do you offer OEM / ODM services?',
    a: 'Yes! We offer full OEM and ODM services. You can customize the brand logo, packaging, color schemes, seat fabric, and even request specific design modifications for your market. Contact us to discuss your requirements.',
  },
  {
    q: 'What certifications do your wheelchairs have?',
    a: 'Our MiniRedone series meets ISO 13485 (medical devices), CE (European Union), and FDA (United States) requirements. We can provide certification documents upon request.',
  },
  {
    q: 'What is the warranty period?',
    a: 'We offer a 12-month warranty on the frame and motor, and a 6-month warranty on the battery and controller. Extended warranty options are available for bulk orders.',
  },
  {
    q: 'What is the battery range and charging time?',
    a: 'All MiniRedone models use a 16Ah lithium-ion battery with approximately 30km range under normal conditions. Full charging time is 4–6 hours. The battery is removable for convenient charging.',
  },
  {
    q: 'Can the wheelchair be used outdoors?',
    a: 'Yes! MiniRedone wheelchairs are designed for both indoor and outdoor use. The pneumatic tires provide good traction on pavement, grass, and gravel. The magnesium alloy frame is weather-resistant.',
  },
  {
    q: 'Is the wheelchair foldable for transport?',
    a: 'All MiniRedone models are folding wheelchairs. Folded dimensions vary by model (approximately L830–850 × W675–900 × H780–1250 mm). The lightweight magnesium alloy frame makes lifting and loading easy.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept T/T (bank transfer), L/C (letter of credit), and Western Union. For sample orders, we also accept PayPal. Payment terms: typically 30% deposit, 70% balance before shipment.',
  },
  {
    q: 'Do you provide spare parts?',
    a: 'Yes, we supply all spare parts including batteries, chargers, controllers, motors, tires, armrests, and footplates. We recommend keeping a spare parts inventory for after-sales service in your market.',
  },
  {
    q: 'Can I get a sample before placing a bulk order?',
    a: 'Absolutely. We encourage sample evaluation before bulk orders. Sample units are shipped within 3–5 working days after payment. Sample pricing and shipping costs will be quoted by our sales team.',
  },
  {
    q: 'What is the maximum user weight capacity?',
    a: 'All MiniRedone models support a maximum load of 150 KG (330 lbs). The magnesium alloy frame is engineered for durability and strength across the full weight range.',
  },
];

export default function FaqPage() {
  return (
    <div>
      <PageHeader
        badge="Help Center"
        title="Frequently Asked Questions"
        description="Find answers to common questions about our electric wheelchairs, ordering, shipping, and more."
      />
      {/* FAQ Content */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors list-none">
                  <span className="text-gray-900 font-medium pr-4">{faq.q}</span>
                  <svg
                    className="w-5 h-5 text-gray-400 shrink-0 group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-gradient-to-r from-teal to-teal-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-teal-light/80 max-w-xl mx-auto mb-6">
            Our team is ready to help. Reach out for detailed product information, pricing, and technical support.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-teal font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
