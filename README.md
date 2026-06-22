# Xiaoxiang Wheelchair & Dongbang Motor — B2B Export Website

A professional B2B export independent website built with Next.js 16 (App Router, Tailwind CSS v4).

## 🏗️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Deployment:** Vercel (recommended)
- **Email (optional):** Resend (free tier: 100 emails/day)

## 📁 Project Structure

```
export-site/
├── app/
│   ├── layout.js          # Root layout — nav + footer
│   ├── page.js            # Home page — hero, brands, featured products, CTA
│   ├── globals.css        # Global styles & Tailwind
│   ├── about/page.js      # Company info page
│   ├── contact/page.js    # Inquiry/contact form
│   ├── products/
│   │   ├── page.js        # Products listing with filters
│   │   └── [slug]/page.js # Product detail page
│   └── api/
│       ├── inquiry/route.js     # Form submission handler
│       └── send-email/route.js  # Email notification via Resend
├── lib/
│   └── products.js        # Product data (3 wheelchairs + 3 motors)
├── public/
│   └── images/            # Product images (placeholders)
├── package.json
└── next.config.mjs
```

## 🚀 Quick Start

### 1. Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Production Build

```bash
npm run build
npm start
```

## 🌐 Deployment to Vercel

### Option A: Deploy via Vercel CLI

```bash
npm i -g vercel
vercel login
vercel deploy --prod --yes
```

### Option B: Deploy via GitHub + Vercel (Recommended)

1. **Push to GitHub:**

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/export-site.git
git push -u origin main
```

2. **Import to Vercel:**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Framework preset: **Next.js** (auto-detected)
   - Environment variables (optional):
     - `RESEND_API_KEY` — Your Resend API key for email notifications
     - `NOTIFICATION_EMAIL` — Email to receive inquiry alerts
     - `FROM_EMAIL` — Sender email address
   - Click **Deploy**

3. **Set custom domain** (optional):
   - In Vercel dashboard → Project → Domains
   - Add your custom domain (e.g., `xiaoxiang-dpg.com`)

## 📧 Email Configuration (Optional)

The inquiry form uses [Resend](https://resend.com) free tier (100 emails/day).

1. Sign up at https://resend.com
2. Add a verified domain or use the sandbox `onboarding@resend.dev`
3. Set environment variables in Vercel:
   - `RESEND_API_KEY=re_xxxxxxxxxxxx`
   - `FROM_EMAIL=onboarding@resend.dev` (or your domain)
   - `NOTIFICATION_EMAIL=export@xiaoxiang-dpg.com`

Without Resend configured, inquiries are logged to the server console.

## 🛍️ Products Included

### Electric Wheelchairs (Xiaoxiang)
| Model | Weight | Range | Key Feature |
|-------|--------|-------|-------------|
| X1 Lite | 19 kg | 20 km | Ultra-light, compact fold |
| X2 Comfort | 26 kg | 25 km | Ergonomic bestseller |
| X3 Pro | 32 kg | 40 km | Smart control, app connectivity |

### Industrial Motors (Dongbang DPG)
| Series | Power | Efficiency | Application |
|--------|-------|------------|-------------|
| DPG-80 | 0.75–2.2 kW | IE3 | General industrial |
| DPG-100 | 3–7.5 kW | IE4 | High-efficiency duty |
| DPG-150 | 11–22 kW | IE4 | Heavy duty |

## 🔧 Customization

- **Product data:** Edit `lib/products.js` to add/update products
- **Branding:** Update logos, colors in `app/layout.js` and `app/globals.css`
- **Content:** Edit page files in `app/*/page.js`
