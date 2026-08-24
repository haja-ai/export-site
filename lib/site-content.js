// ============================================================
// MiniElephant Site Content — 全站可编辑文案集中配置
// 设计器 (/admin) 修改这里的字段后保存，页面自动生效
// 首页/About/FAQ/Contact 的页面级文案都在这里
// ============================================================

export const siteContent = {
    "home": {
      "hero": {
        "title": "Factory-Direct Electric Wheelchair Manufacturer | MiniRedone Lightweight Folding Wheelchairs",
        "subtitle": "Premium electric wheelchairs with magnesium alloy frames. Dual 350W motors, 30km range, 150KG load. Factory-direct B2B export to 50+ countries. OEM/ODM customization available.",
        "primaryAction": {
          "label": "Browse Models",
          "href": "/products"
        },
        "secondaryAction": {
          "label": "Get a Quote",
          "href": "/contact"
        },
        "ctaButton": {
          "label": "Get a Quote",
          "href": "/contact"
        },
        "bannerVideo": "/videos/factory-aerial.mp4",
        "bannerPoster": "/images/factory-aerial-poster.webp",
        "programs": [
          {
            "image": "/images/miniredone-i.webp",
            "category": "BASE MODEL",
            "title": "MiniRedone-I · 47KG",
            "href": "/products/miniredone-i"
          },
          {
            "image": "/images/miniredone-ii-plus.webp",
            "category": "LIGHTWEIGHT",
            "title": "MiniRedone-II · 42KG",
            "href": "/products/miniredone-ii"
          },
          {
            "image": "/images/miniredone-iii.webp",
            "category": "PREMIUM",
            "title": "MiniRedone-III · High Back",
            "href": "/products/miniredone-iii"
          },
          {
            "image": "/images/miniredone-v.webp",
            "category": "EXTRA WIDE",
            "title": "MiniRedone-V · W900mm",
            "href": "/products/miniredone-v"
          }
        ]
      },
      "featured": {
        "badge": "OUR PRODUCTS",
        "title": "Featured Electric Wheelchair Models",
        "description": "Explore our complete MiniRedone series of folding electric wheelchairs — from ultra-lightweight 42KG portable designs to premium high-back comfort models. All feature magnesium alloy frames and dual 350W motors.",
        "viewAll": "View All Models"
      },
      "whyChooseUs": {
        "badge": "Why MiniElephant",
        "title": "Why Choose Our Electric Wheelchair Factory",
        "description": "We deliver value beyond products — partnership, quality, and peace of mind. As a direct electric wheelchair manufacturer with ISO, CE, and FDA certification, we offer factory-direct pricing, OEM/ODM customization, and reliable after-sales support.",
        "advantages": [
          {
            "title": "Factory-Direct Pricing",
            "desc": "No middlemen — you deal directly with the manufacturer. Competitive pricing with volume discounts."
          },
          {
            "title": "Certified Quality",
            "desc": "ISO, CE, FDA — our products meet the strictest international standards for medical devices."
          },
          {
            "title": "OEM / ODM Available",
            "desc": "Custom branding, packaging, specifications, and design modifications for your market."
          },
          {
            "title": "Reliable Logistics",
            "desc": "Established shipping partnerships ensure timely delivery by sea, air, or rail worldwide."
          },
          {
            "title": "After-Sales Support",
            "desc": "Dedicated support team for technical questions, warranty claims, and spare parts."
          },
          {
            "title": "Sample Service",
            "desc": "Evaluate product quality before committing to bulk orders with fast sample shipping."
          }
        ]
      },
      "aboutSection": {
        "title": "Professional Manufacturer of Electric Wheelchairs — Magnesium Alloy Folding Series",
        "paragraphs": [
          "Jiaxing Small Elephant Medical Technology Co., Ltd is a professional manufacturer of electric wheelchairs, specializing in magnesium alloy folding designs.",
          "Our MiniRedone series features 10 electric wheelchair models covering every need — from 42KG ultra-lightweight to 900mm extra-wide premium seating."
        ]
      },
      "cta": {
        "title": "Ready to Partner with Our Electric Wheelchair Factory?",
        "description": "Contact our B2B export team today for a customized quotation on MiniRedone folding electric wheelchairs.",
        "buttonLabel": "Get a Quote"
      }
    },
    "about": {
      "badge": "Our Story",
      "title": "About MiniElephant",
      "description": "Professional electric wheelchair manufacturer committed to mobility innovation and quality.",
      "bannerImage": "/images/banner-about.webp",
      "companyName": "Jiaxing Small Elephant Medical Technology Co., Ltd"
    },
    "faq": {
      "badge": "Help Center",
      "title": "Frequently Asked Questions",
      "description": "Find answers to common questions about our electric wheelchairs, ordering, shipping, and more.",
      "bannerImage": "/images/banner-faq.webp"
    },
    "contact": {
      "badge": "Get in Touch",
      "title": "Contact & Inquiry",
      "description": "Submit your inquiry below and our export team will respond within 24 hours.",
      "bannerImage": "/images/banner-contact.webp"
    },
    "news": {
      "badge": "NEWS & INSIGHTS",
      "title": "MiniElephant Updates",
      "description": "",
      "bannerImage": "/images/banner-news.webp"
    },
    "productsPage": {
      "badge": "OUR PRODUCTS",
      "title": "MiniRedone Series Electric Wheelchairs",
      "description": "Browse our full range of folding electric wheelchairs — magnesium alloy frames, dual 350W motors, 30km range.",
      "bannerImage": "/images/banner-products.webp"
    }
  };

// 便捷读取函数
export function getSiteContent() {
  return siteContent;
}
