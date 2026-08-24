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
  ],
  "faq": [
  ],
  "contact": [
  ],
  "news": [
  ],
  "productsPage": [
  ],
};
