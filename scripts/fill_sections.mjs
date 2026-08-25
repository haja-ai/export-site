// 填充 FAQ/Contact/ProductsPage 区块数据到 site-sections.js
import fs from 'fs';
import { siteSections } from '../lib/site-sections.js';

// FAQ 页区块
siteSections.faq = [
  {
    id: 'sec-faq-list',
    type: 'faqList',
    content: {
      faqs: [
        { q: 'What is the minimum order quantity (MOQ)?', a: 'Our standard MOQ for MiniRedone electric wheelchairs is 5 units per model. For sample orders, we accept 1-2 units for evaluation.' },
        { q: 'How long does shipping take?', a: 'By sea: 25-40 days to most ports. By air: 7-10 days. By express (DHL/UPS/FedEx): 5-7 days for sample orders. We ship from Zhejiang, China.' },
        { q: 'Do you offer OEM / ODM services?', a: 'Yes! We offer full OEM and ODM services. You can customize the brand logo, packaging, color schemes, seat fabric, and even request specific design modifications.' },
        { q: 'What certifications do your wheelchairs have?', a: 'Our MiniRedone series meets ISO 13485 (medical devices), CE (European Union), and FDA (United States) requirements.' },
        { q: 'What is the warranty period?', a: 'We offer a 12-month warranty on the frame and motor, and a 6-month warranty on the battery and controller.' },
        { q: 'What is the battery range and charging time?', a: 'All MiniRedone models use a 16Ah lithium-ion battery with approximately 30km range. Full charging time is 4-6 hours.' },
        { q: 'Can the wheelchair be used outdoors?', a: 'Yes! MiniRedone wheelchairs are designed for both indoor and outdoor use. The pneumatic tires provide good traction.' },
        { q: 'Is the wheelchair foldable for transport?', a: 'All MiniRedone models are folding wheelchairs. The lightweight magnesium alloy frame makes lifting and loading easy.' },
        { q: 'What payment methods do you accept?', a: 'We accept T/T, L/C, and Western Union. For sample orders, we also accept PayPal. Typically 30% deposit, 70% balance.' },
        { q: 'Do you provide spare parts?', a: 'Yes, we supply all spare parts including batteries, chargers, controllers, motors, tires, armrests, and footplates.' },
        { q: 'Can I get a sample before placing a bulk order?', a: 'Absolutely. Sample units are shipped within 3-5 working days after payment.' },
        { q: 'What is the maximum user weight capacity?', a: 'All MiniRedone models support a maximum load of 150 KG (330 lbs).' },
      ],
    },
    style: { paddingY: 'lg', background: 'cream' },
  },
  {
    id: 'sec-faq-cta',
    type: 'cta',
    content: { title: 'Still Have Questions?', description: 'Our team is ready to help. Reach out for detailed product information, pricing, and technical support.', buttonLabel: 'Contact Us', buttonHref: '/contact', secondaryLabel: '', secondaryHref: '/products' },
    style: { paddingY: 'lg', background: 'teal' },
  },
];

// Contact 页区块
siteSections.contact = [
  {
    id: 'sec-contact-info',
    type: 'contactInfo',
    content: {
      badge: 'Contact Info',
      title: 'Get in Touch',
      email: 'johnson@semwheelchair.com',
      phone: '+86 13819098967',
      whatsapp: '+86 13819098967',
      address: 'No. 18 Zhenzhong East Road, Jiashan County, Jiaxing City, Zhejiang Province, China',
      hours: 'Mon-Sat 8:00-17:00 (GMT+8)',
    },
    style: { paddingY: 'lg', background: 'white' },
  },
  {
    id: 'sec-contact-form',
    type: 'contactForm',
    content: { title: 'Send Us Your Inquiry', description: 'Fill in the form below and our export team will respond within 24 hours.' },
    style: { paddingY: 'lg', background: 'gray' },
  },
];

// Products 列表页区块
siteSections.productsPage = [
  {
    id: 'sec-products-grid',
    type: 'productCatalog',
    content: { badge: 'OUR PRODUCTS', title: 'MiniRedone Series Electric Wheelchairs', description: 'Browse our full range of folding electric wheelchairs — magnesium alloy frames, dual 350W motors, 30km range.' },
    style: { paddingY: 'lg', background: 'cream' },
  },
  {
    id: 'sec-products-cta',
    type: 'cta',
    content: { title: 'Need Help Choosing the Right Model?', description: 'Contact our export team for a recommendation and customized quotation.', buttonLabel: 'Get a Quote', buttonHref: '/contact', secondaryLabel: 'Chat on WhatsApp', secondaryHref: 'https://wa.me/8613819098967' },
    style: { paddingY: 'lg', background: 'teal' },
  },
];

// 序列化写回（与 PUT API 的 serializeSections 一致）
function serializeSections(obj) {
  const out = [];
  out.push('export const siteSections = {');
  for (const [pageKey, sections] of Object.entries(obj)) {
    out.push(`  ${JSON.stringify(pageKey)}: [`);
    for (const s of sections || []) {
      out.push('    {');
      out.push(`      id: ${JSON.stringify(s.id)},`);
      out.push(`      type: ${JSON.stringify(s.type)},`);
      out.push(`      content: ${JSON.stringify(s.content)},`);
      out.push(`      style: ${JSON.stringify(s.style || {})},`);
      out.push('    },');
    }
    out.push('  ],');
  }
  out.push('};');
  return out.join('\n');
}

const path = 'lib/site-sections.js';
const src = fs.readFileSync(path, 'utf-8');
const headerMatch = src.match(/^([\s\S]*?)\nexport const siteSections = \{/);
const header = headerMatch[1];
const newSrc = header + '\n' + serializeSections(siteSections) + '\n';
fs.writeFileSync(path, newSrc, 'utf-8');
console.log('WRITTEN', Object.entries(siteSections).map(([k, v]) => `${k}:${v.length}`).join(' | '));
