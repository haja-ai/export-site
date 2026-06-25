// Shared constants for MiniElephant Electric Wheelchair site

export const SITE = {
  name: 'MiniElephant',
  fullName: 'MiniElephant Electric Wheelchair',
  company: 'Jiaxing Small Elephant Medical Technology Co., Ltd',
  tagline: 'Factory-Direct Electric Wheelchair Manufacturer',
  url: 'https://www.semwheelchair.com',
  email: 'johnson@semwheelchair.com',
  phone: '+86-13819098967',
  whatsapp: 'https://wa.me/8613819098967',
  address: {
    street: 'No. 18 Zhenzhong East Road',
    city: 'Jiashan County, Jiaxing City',
    province: 'Zhejiang Province',
    country: 'China',
    postalCode: '314100',
  },
  contact: {
    name: 'Johnson',
    hours: 'Mon-Fri 09:00-18:00',
  },
  certifications: ['ISO 13485', 'CE', 'FDA'],
};

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About Us' },
  { href: '/faq', label: 'FAQ' },
  { href: '/news', label: 'News' },
  { href: '/contact', label: 'Contact' },
];

export const stats = [
  { label: 'Countries Exported', value: 50, suffix: '+', display: 'numeric' },
  { label: 'Happy Users', value: 100, suffix: 'K+', display: 'numeric' },
  { label: 'Years Experience', value: 10, suffix: '+', display: 'numeric' },
  { label: 'ISO Certified', value: 0, suffix: '', display: 'text', text: 'Yes' },
];

export const advantages = [
  {
    title: 'Factory-Direct Pricing',
    desc: 'No middlemen : you deal directly with the manufacturer. Competitive pricing with volume discounts.',
    icon: 'Building',
  },
  {
    title: 'Certified Quality',
    desc: 'ISO, CE, FDA : our products meet the strictest international standards for medical devices.',
    icon: 'ShieldCheck',
  },
  {
    title: 'OEM / ODM Available',
    desc: 'Custom branding, packaging, specifications, and design modifications for your market.',
    icon: 'Settings',
  },
  {
    title: 'Reliable Logistics',
    desc: 'Established shipping partnerships ensure timely delivery by sea, air, or rail worldwide.',
    icon: 'Truck',
  },
  {
    title: 'After-Sales Support',
    desc: 'Dedicated support team for technical questions, warranty claims, and spare parts.',
    icon: 'Support',
  },
  {
    title: 'Sample Service',
    desc: 'Pre-order sample evaluation. We ship samples quickly so you can verify quality firsthand.',
    icon: 'Package',
  },
];

export const companyHighlights = [
  { label: '10+ Years', desc: 'Industry Experience' },
  { label: '50+ Countries', desc: 'Global Export' },
  { label: '10 Models', desc: 'MiniRedone Series' },
  { label: 'OEM/ODM', desc: 'Custom Solutions' },
];

export const aboutStats = [
  { label: 'Established', value: '2013' },
  { label: 'Employees', value: '100+' },
  { label: 'Products', value: '10+ Models' },
  { label: 'Export Markets', value: '50+ Countries' },
];

export const productModels = [
  { slug: 'miniredone-i', name: 'MiniRedone-I' },
  { slug: 'miniredone-i-w', name: 'MiniRedone-I-W' },
  { slug: 'miniredone-i-br', name: 'MiniRedone-I-B&R' },
  { slug: 'miniredone-i-r', name: 'MiniRedone-I-R' },
  { slug: 'miniredone-i-plus', name: 'MiniRedone-I-Plus' },
  { slug: 'miniredone-ii', name: 'MiniRedone-II' },
  { slug: 'miniredone-ii-plus', name: 'MiniRedone-II-Plus' },
  { slug: 'miniredone-iii', name: 'MiniRedone-III' },
  { slug: 'miniredone-iv', name: 'MiniRedone-IV' },
  { slug: 'miniredone-v', name: 'MiniRedone-V' },
];

export const footerProductLinks = [
  { slug: 'miniredone-i', name: 'MiniRedone-I : 47KG' },
  { slug: 'miniredone-i-w', name: 'MiniRedone-I-W : 46KG' },
  { slug: 'miniredone-i-br', name: 'MiniRedone-I-B&R' },
  { slug: 'miniredone-i-r', name: 'MiniRedone-I-R' },
  { slug: 'miniredone-i-plus', name: 'MiniRedone-I-Plus' },
  { slug: 'miniredone-ii', name: 'MiniRedone-II : 42KG' },
  { slug: 'miniredone-ii-plus', name: 'MiniRedone-II-Plus' },
  { slug: 'miniredone-iii', name: 'MiniRedone-III' },
  { slug: 'miniredone-iv', name: 'MiniRedone-IV' },
  { slug: 'miniredone-v', name: 'MiniRedone-V' },
];

export const certifications = [
  {
    id: 'ce',
    name: 'CE Marking',
    desc: 'European conformity for medical devices, Regulation (EU) 2017/745',
    image: '/images/cert-ce.jpg',
  },
  {
    id: 'iso',
    name: 'ISO 13485',
    desc: 'Medical devices quality management system certification',
    image: '/images/cert-iso13485-2.png',
  },
  {
    id: 'fda',
    name: 'FDA Registration',
    desc: 'US Food and Drug Administration establishment registration',
    image: '/images/cert-fda.jpg',
  },
];

export const THEME = {
  white: '#FFFFFF',
  black: '#1A1A1A',
  surface: '#F8F9FA',
  surfaceAlt: '#F0F1F3',
  textPrimary: '#1A1A1A',
  textSecondary: '#6B7280',
  textMuted: '#6B7280',
  border: '#E5E7EB',
  borderLight: '#F3F4F6',
};
