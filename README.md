# MiniElephant Electric Wheelchair — B2B Export Website

A professional B2B export independent website for **MiniElephant Electric Wheelchair** (semwheelchair.com), built with Next.js 16 (App Router, Tailwind CSS v4).

## 🏗️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Deployment:** Vercel
- **Email:** Resend (free tier: 100 emails/day)

## 📁 Project Structure

```
export-site/
├── app/
│   ├── layout.js          # Root layout — nav + footer
│   ├── page.js            # Home page — hero, featured products, advantages, CTA
│   ├── globals.css        # Global styles & Tailwind
│   ├── about/page.js      # Company info page
│   ├── contact/page.js    # Inquiry/contact form
│   ├── faq/page.js        # FAQ page
│   ├── news/
│   │   ├── page.js        # News listing (grid, filter, pagination)
│   │   └── [slug]/page.js # Article detail page
│   ├── products/
│   │   ├── page.js        # Products listing
│   │   └── [slug]/page.js # Product detail page
│   └── api/
│       ├── inquiry/route.js     # Form submission handler
│       └── send-email/route.js  # Email notification via Resend
├── lib/
│   ├── products.js        # Product data (10 MiniRedone wheelchair models)
│   └── news.js            # News articles
├── public/
│   ├── images/            # Product & banner images
│   └── admin/             # Decap CMS admin panel
├── components/
│   └── ui/                # Reusable UI components
└── package.json
```

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 🌐 Deployment to Vercel

```bash
npm i -g vercel
vercel deploy --prod --yes
```

Or connect the GitHub repository to Vercel for auto-deploy on push.

## 🛍️ Products

**MiniRedone Series — 10 Electric Wheelchair Models**

All models feature:
- One-piece magnesium alloy die-cast frame
- Dual 350W self-developed hub motors
- 16Ah LiFePO₄ battery (30km range)
- 150KG max load capacity
- ISO 13485 / CE / FDA certified

## 📧 Email Configuration

The inquiry form uses [Resend](https://resend.com) free tier.

Environment variables in Vercel:
- `RESEND_API_KEY` — Your Resend API key
- `FROM_EMAIL` — Sender email (e.g., contact@semwheelchair.com)
- `NOTIFICATION_EMAIL` — Email to receive inquiry alerts (e.g., johnson@semwheelchair.com)

## 🔧 Customization

- **Product data:** Edit `lib/products.js`
- **News articles:** Edit `lib/news.js`
- **Branding:** Update logos/colors in `app/layout.js` and `app/globals.css`
- **Content:** Edit page files in `app/*/page.js`

---
© 2026 Jiaxing Small Elephant Medical Technology Co., Ltd. All rights reserved.
