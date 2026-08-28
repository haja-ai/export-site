export const siteContent = {
  home: {
    hero: {
      title: 'Factory-Direct Folding Electric Wheelchairs for B2B Buyers',
      subtitle: 'MiniElephant makes MiniRedone folding electric wheelchairs for distributors, importers, and OEM/ODM partners. Compare models, review verified specifications, or request a wholesale quote.',
      primaryAction: { label: 'Compare Models', href: '/products' },
      secondaryAction: { label: 'Request a Wholesale Quote', href: '/contact' },
      ctaButton: { label: 'Request a Wholesale Quote', href: '/contact' },
      bannerVideo: '/videos/factory-aerial.mp4',
      bannerPoster: '/images/factory-aerial-poster.webp',
      programs: [
        { image: '/images/miniredone-i.webp', category: 'BASE MODEL', title: 'MiniRedone-I', href: '/products/miniredone-i' },
        { image: '/images/miniredone-ii.webp', category: 'LIGHTWEIGHT', title: 'MiniRedone-II', href: '/products/miniredone-ii' },
        { image: '/images/miniredone-iii.webp', category: 'HIGH-BACK', title: 'MiniRedone-III', href: '/products/miniredone-iii' },
        { image: '/images/miniredone-v.webp', category: 'WIDE SEAT', title: 'MiniRedone-V', href: '/products/miniredone-v' },
      ],
    },
    featured: {
      badge: 'OUR PRODUCTS',
      title: 'MiniRedone Folding Electric Wheelchairs',
      description: 'Browse the MiniRedone series and compare model-by-model details before you request a quote.',
      viewAll: 'View All Models',
    },
    whyChooseUs: {
      badge: 'Why MiniElephant',
      title: 'Why Distributors Work With MiniElephant',
      description: 'Clear model structure, export support, and a wholesale-first workflow that helps buyers compare and quote faster.',
      advantages: [
        { title: 'Factory-Direct Pricing', desc: 'Work directly with the manufacturer for wholesale inquiries and project quotes.' },
        { title: 'Model Comparison', desc: 'Each model has a clear use case so buyers can match the right chair to the market.' },
        { title: 'OEM / ODM Available', desc: 'Branding, packaging, and configuration requests can be discussed with the export team.' },
        { title: 'Reliable Logistics', desc: 'Shipping options can be reviewed with the export team based on destination and quantity.' },
        { title: 'After-Sales Support', desc: 'Spare parts and technical support are handled through the sales team.' },
        { title: 'Sample Service', desc: 'Sample and quotation inquiries are routed to the same export contact path.' },
      ],
    },
    aboutSection: {
      title: 'Jiaxing Small Elephant Medical Technology Co., Ltd',
      paragraphs: [
        'MiniElephant is the brand name used on semwheelchair.com. MiniRedone is the folding electric wheelchair product family under that brand.',
        'The site is organized to help B2B buyers understand each model, compare specifications, and send a wholesale inquiry without confusion between brand and product family.',
      ],
    },
    cta: {
      title: 'Need a Wholesale Quote?',
      description: 'Contact our export team for model selection, sample requests, OEM/ODM questions, and pricing support.',
      buttonLabel: 'Request a Wholesale Quote',
    },
  },
  about: {
    badge: 'Our Story',
    title: 'About MiniElephant',
    description: 'MiniElephant and MiniRedone product family overview for B2B buyers.',
    bannerImage: '/images/banner-about.webp',
    companyName: 'Jiaxing Small Elephant Medical Technology Co., Ltd',
  },
  faq: {
    badge: 'Help Center',
    title: 'Frequently Asked Questions',
    description: 'Find answers to common questions about MiniRedone products, ordering, shipping, and more.',
    bannerImage: '/images/banner-faq.webp',
  },
  contact: {
    badge: 'Get in Touch',
    title: 'Request a Wholesale Quote',
    description: 'Submit your inquiry below and our export team will respond within 24 hours.',
    bannerImage: '/images/banner-contact.webp',
  },
  news: {
    badge: 'NEWS & INSIGHTS',
    title: 'MiniElephant Updates',
    description: 'MiniElephant news, electric wheelchair buying guides, OEM/ODM notes, and practical export insights.',
    bannerImage: '/images/banner-news.webp',
  },
  productsPage: {
    badge: 'OUR PRODUCTS',
    title: 'MiniRedone Series Electric Wheelchairs',
    description: 'Browse the MiniRedone range and compare product pages before you request a quote.',
    bannerImage: '/images/banner-products.webp',
  },
};

export function getSiteContent() {
  return siteContent;
}
