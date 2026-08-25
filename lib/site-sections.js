// ============================================================
// MiniElephant 区块化页面构建数据
// 每个页面由区块数组组成，区块有 type / content / style
// 设计器 (/admin/builder) 可增删排序编辑，页面按此渲染
// ============================================================

export const SECTION_TYPES = {
  hero: { label: 'Hero Banner', desc: '视频/图片大图 + 标题 + 按钮' },
  productGrid: { label: 'Product Grid', desc: '产品卡片网格' },
  features: { label: 'Feature Cards', desc: 'Why Choose Us 特性卡片' },
  stats: { label: 'Stats Row', desc: '数字统计（年限/国家/型号）' },
  textImage: { label: 'Text + Image', desc: '图文并排区块' },
  cta: { label: 'CTA Banner', desc: '行动号召按钮' },
  text: { label: 'Text Block', desc: '纯文本段落' },
  spacer: { label: 'Spacer', desc: '垂直间距' },
  twoCol: { label: 'Two Columns', desc: '双栏内容' },
  quote: { label: 'Quote', desc: '引用语' },
};

export const siteSections = {
  "home": [
    {
      id: "sec-hero",
      type: "hero",
      content: {"badge":"MiniElephant","title":"Factory-Direct Electric Wheelchair Manufacturer | MiniRedone Lightweight Folding Wheelchairs","subtitle":"Premium electric wheelchairs with magnesium alloy frames. Dual 350W motors, 30km range, 150KG load. Factory-direct B2B export to 50+ countries. OEM/ODM customization available.","primaryLabel":"Browse Models","primaryHref":"/products","secondaryLabel":"Get a Quote","secondaryHref":"/contact","bannerVideo":"/videos/factory-aerial.mp4","bannerPoster":"/images/factory-aerial-poster.webp","programs":[{"image":"/images/miniredone-i.webp","category":"BASE MODEL","title":"MiniRedone-I · 47KG","href":"/products/miniredone-i"},{"image":"/images/miniredone-ii-plus.webp","category":"LIGHTWEIGHT","title":"MiniRedone-II · 42KG","href":"/products/miniredone-ii"},{"image":"/images/miniredone-iii.webp","category":"PREMIUM","title":"MiniRedone-III · High Back","href":"/products/miniredone-iii"},{"image":"/images/miniredone-v.webp","category":"EXTRA WIDE","title":"MiniRedone-V · W900mm","href":"/products/miniredone-v"}]},
      style: {"paddingY":"0"},
    },
    {
      id: "sec-stats",
      type: "stats",
      content: {"title":"MiniElephant in Numbers","stats":[{"value":"10+","label":"Years Experience"},{"value":"50+","label":"Countries Exported"},{"value":"100K+","label":"Happy Users"},{"value":"Yes","label":"ISO Certified"}]},
      style: {"paddingY":"lg"},
    },
    {
      id: "sec-featured",
      type: "productGrid",
      content: {"badge":"OUR PRODUCTS","title":"Featured Electric Wheelchair Models","description":"Explore our complete MiniRedone series of folding electric wheelchairs — from ultra-lightweight 42KG portable designs to premium high-back comfort models.","viewAllLabel":"View All Models","viewAllHref":"/products","productSlugs":["miniredone-i","miniredone-ii","miniredone-iii","miniredone-v"]},
      style: {"paddingY":"lg","background":"white"},
    },
    {
      id: "sec-why",
      type: "features",
      content: {"badge":"Why MiniElephant","title":"Why Choose Our Electric Wheelchair Factory","description":"We deliver value beyond products — partnership, quality, and peace of mind. Factory-direct pricing, OEM/ODM customization, reliable after-sales support.","items":[{"title":"Factory-Direct Pricing","desc":"No middlemen — you deal directly with the manufacturer. Competitive pricing with volume discounts."},{"title":"Certified Quality","desc":"ISO, CE, FDA — our products meet the strictest international standards for medical devices."},{"title":"OEM / ODM Available","desc":"Custom branding, packaging, specifications, and design modifications for your market."},{"title":"Reliable Logistics","desc":"Established shipping partnerships ensure timely delivery by sea, air, or rail worldwide."},{"title":"After-Sales Support","desc":"Dedicated support team for technical questions, warranty claims, and spare parts."},{"title":"Sample Service","desc":"Evaluate product quality before committing to bulk orders with fast sample shipping."}]},
      style: {"paddingY":"lg","background":"white"},
    },
    {
      id: "sec-about",
      type: "textImage",
      content: {"badge":"About Us","title":"Professional Manufacturer of Electric Wheelchairs — Magnesium Alloy Folding Series","paragraphs":["Jiaxing Small Elephant Medical Technology Co., Ltd is a professional manufacturer specializing in folding electric wheelchairs. With over 10 years of experience, our MiniElephant brand has become synonymous with quality, innovation, and reliability.","Our MiniRedone series features 10 electric wheelchair models covering every need — from lightweight 42KG portable designs to premium high-back comfort and extra-wide (900mm) wheelchairs."],"linkLabel":"Learn More About Us","linkHref":"/about","stats":[{"value":"10+ Years","label":"Industry Experience"},{"value":"50+ Countries","label":"Global Export"},{"value":"10 Models","label":"MiniRedone Series"},{"value":"OEM/ODM","label":"Custom Solutions"}]},
      style: {"paddingY":"lg","background":"gray"},
    },
    {
      id: "sec-cta",
      type: "cta",
      content: {"title":"Ready to Partner with Our Electric Wheelchair Factory?","description":"Contact our B2B export team today for a customized quotation on MiniRedone folding electric wheelchairs. OEM/ODM customization available.","buttonLabel":"Get a Quote","buttonHref":"/contact","secondaryLabel":"Browse Products","secondaryHref":"/products"},
      style: {"paddingY":"lg","background":"teal"},
    },
  ],
  "about": [
    {
      id: "sec-about-company",
      type: "companyInfo",
      content: {"badge":"Our Story","title":"Jiaxing Small Elephant Medical Technology Co., Ltd","paragraphs":["Founded in Jiaxing, Zhejiang Province, we have grown into a trusted name in the electric wheelchair industry. Our MiniElephant brand represents a commitment to lightweight, durable, and accessible mobility solutions for users worldwide.","We specialize in the MiniRedone series : 10 models of folding electric wheelchairs built on a common magnesium alloy frame platform. With dual 350W brushless motors and a 30km range, every MiniRedone wheelchair delivers reliable daily mobility.","Our factory at No. 18 Zhenzhong East Road, Jiashan County, produces wheelchairs for export to over 50 countries. We hold ISO, CE, and FDA certifications, ensuring our products meet the highest international standards."],"stats":[{"label":"Established","value":"2013"},{"label":"Employees","value":"100+"},{"label":"Products","value":"10+ Models"},{"label":"Export Markets","value":"50+ Countries"}]},
      style: {"paddingY":"lg","background":"white"},
    },
    {
      id: "sec-about-certificates",
      type: "certificates",
      content: {},
      style: {"paddingY":"lg","background":"cream"},
    },
    {
      id: "sec-about-intellectual",
      type: "intellectualProperty",
      content: {},
      style: {"paddingY":"lg","background":"white"},
    },
    {
      id: "sec-about-news",
      type: "newsGrid",
      content: {"badge":"Latest Updates","title":"News & Insights","viewAllLabel":"View All","viewAllHref":"/news","count":3},
      style: {"paddingY":"lg","background":"cream"},
    },
    {
      id: "sec-about-cta",
      type: "cta",
      content: {"title":"Want to Learn More?","description":"Contact our team for detailed product specifications, pricing, and sample requests.","buttonLabel":"Get in Touch","buttonHref":"/contact","secondaryLabel":"","secondaryHref":"/products"},
      style: {"paddingY":"lg","background":"teal"},
    },
  ],
  "faq": [
    {
      id: "sec-faq-list",
      type: "faqList",
      content: {"faqs":[{"q":"What is the minimum order quantity (MOQ)?","a":"Our standard MOQ for MiniRedone electric wheelchairs is 5 units per model. For sample orders, we accept 1-2 units for evaluation."},{"q":"How long does shipping take?","a":"By sea: 25-40 days to most ports. By air: 7-10 days. By express (DHL/UPS/FedEx): 5-7 days for sample orders. We ship from Zhejiang, China."},{"q":"Do you offer OEM / ODM services?","a":"Yes! We offer full OEM and ODM services. You can customize the brand logo, packaging, color schemes, seat fabric, and even request specific design modifications."},{"q":"What certifications do your wheelchairs have?","a":"Our MiniRedone series meets ISO 13485 (medical devices), CE (European Union), and FDA (United States) requirements."},{"q":"What is the warranty period?","a":"We offer a 12-month warranty on the frame and motor, and a 6-month warranty on the battery and controller."},{"q":"What is the battery range and charging time?","a":"All MiniRedone models use a 16Ah lithium-ion battery with approximately 30km range. Full charging time is 4-6 hours."},{"q":"Can the wheelchair be used outdoors?","a":"Yes! MiniRedone wheelchairs are designed for both indoor and outdoor use. The pneumatic tires provide good traction."},{"q":"Is the wheelchair foldable for transport?","a":"All MiniRedone models are folding wheelchairs. The lightweight magnesium alloy frame makes lifting and loading easy."},{"q":"What payment methods do you accept?","a":"We accept T/T, L/C, and Western Union. For sample orders, we also accept PayPal. Typically 30% deposit, 70% balance."},{"q":"Do you provide spare parts?","a":"Yes, we supply all spare parts including batteries, chargers, controllers, motors, tires, armrests, and footplates."},{"q":"Can I get a sample before placing a bulk order?","a":"Absolutely. Sample units are shipped within 3-5 working days after payment."},{"q":"What is the maximum user weight capacity?","a":"All MiniRedone models support a maximum load of 150 KG (330 lbs)."}]},
      style: {"paddingY":"lg","background":"cream"},
    },
    {
      id: "sec-faq-cta",
      type: "cta",
      content: {"title":"Still Have Questions?","description":"Our team is ready to help. Reach out for detailed product information, pricing, and technical support.","buttonLabel":"Contact Us","buttonHref":"/contact","secondaryLabel":"","secondaryHref":"/products"},
      style: {"paddingY":"lg","background":"teal"},
    },
  ],
  "contact": [
    {
      id: "sec-contact-info",
      type: "contactInfo",
      content: {"badge":"Contact Info","title":"Get in Touch","email":"johnson@semwheelchair.com","phone":"+86 13819098967","whatsapp":"+86 13819098967","address":"No. 18 Zhenzhong East Road, Jiashan County, Jiaxing City, Zhejiang Province, China","hours":"Mon-Sat 8:00-17:00 (GMT+8)"},
      style: {"paddingY":"lg","background":"white"},
    },
    {
      id: "sec-contact-form",
      type: "contactForm",
      content: {"title":"Send Us Your Inquiry","description":"Fill in the form below and our export team will respond within 24 hours."},
      style: {"paddingY":"lg","background":"gray"},
    },
  ],
  "news": [
  ],
  "productsPage": [
    {
      id: "sec-products-grid",
      type: "productCatalog",
      content: {"badge":"OUR PRODUCTS","title":"MiniRedone Series Electric Wheelchairs","description":"Browse our full range of folding electric wheelchairs — magnesium alloy frames, dual 350W motors, 30km range."},
      style: {"paddingY":"lg","background":"cream"},
    },
    {
      id: "sec-products-cta",
      type: "cta",
      content: {"title":"Need Help Choosing the Right Model?","description":"Contact our export team for a recommendation and customized quotation.","buttonLabel":"Get a Quote","buttonHref":"/contact","secondaryLabel":"Chat on WhatsApp","secondaryHref":"https://wa.me/8613819098967"},
      style: {"paddingY":"lg","background":"teal"},
    },
  ],
};
