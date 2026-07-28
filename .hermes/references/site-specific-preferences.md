
## Favicon Deployment — Next.js App Router (metadata.icons)

**Problem:** Manually adding `<link rel=\"icon\" href=\"/favicon.ico\">` in `<head>` doesn't work — Next.js auto-generates a default favicon (`favicon.ico?favicon.<hash>.ico` at size 256x256) that overrides manual link tags.

**Fix:** Use Next.js `metadata.icons` in `export const metadata` (root `layout.js`):
```js
export const metadata = {
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-48x48.png', type: 'image/png', sizes: '48x48' },
      { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
}
```

Then remove ALL manual `<link rel=\"icon\">` / `<link rel=\"apple-touch-icon\">` tags from the `<head>` section — they conflict with Next.js auto-generation.

**Favicon generation from logo:** When user provides a horizontal logo (green elephant + text), crop the elephant icon (left ~60px of the 117x64 logo) as a square favicon. Generate multiple sizes using PIL:
- `favicon.ico` — 16/32/48px multi-size ICO
- `favicon-48x48.png`, `favicon-96x96.png`
- `apple-touch-icon.png` — 180x180

## Email API — Never HTTP-Self-Call in Vercel Serverless

**Problem:** The `/api/inquiry` route called `/api/send-email` via HTTP fetch using `NEXT_PUBLIC_BASE_URL` fallback to `http://localhost:3000`. On Vercel, this env var wasn't set, so the fetch silently failed.

**Fix:** Extract the email-sending logic into a shared `lib/sendEmail.js` function. Both routes import and call it directly — no HTTP call needed:
```js
// lib/sendEmail.js
export async function sendInquiryEmail(inquiry) { ... }

// app/api/inquiry/route.js
import { sendInquiryEmail } from '@/lib/sendEmail';
await sendInquiryEmail(inquiry);  // direct call, no HTTP

// app/api/send-email/route.js
import { sendInquiryEmail } from '@/lib/sendEmail';
export async function POST(request) {
  return Response.json(await sendInquiryEmail(await request.json()));
}
```

This avoids any environment-variable-dependent URL resolution. The shared function reads `process.env.RESEND_API_KEY` directly at runtime.

## JSON-LD hasOfferCatalog — Search Console Duplicate Errors

**Problem:** The Organization JSON-LD in `layout.js` included a `hasOfferCatalog` listing all 5 main MiniRedone products (I-V). Google's Search Console flagged these as "duplicate" on every product detail page — 5 products x N pages = 5+N errors.

**Root cause:** Organization JSON-LD is loaded site-wide (layout). Each product detail page also has its own Product schema. Google sees the catalog entries as duplicate product listings.

**Fix:** Remove `hasOfferCatalog` entirely from the Organization JSON-LD. Product detail pages have complete Product JSON-LD with prices, offers, and shipping details — the catalog is redundant and harmful.

## News Article AI Image Generation

**When writing news articles**, generate matching images using gpt-image-2 API:
- **API:** `https://grsaiapi.com/v1/api/generate` (global) / `https://grsai.dakka.com.cn/v1/api/generate` (China)
- **Auth:** `Authorization: Bearer sk-c1ed54896e49438d89ef3ae388832bf0` (also in `.env.production` as `GPT_IMAGE_KEY`)
- **Model:** `gpt-image-2`
- **Aspect ratio:** `16:9` for article banners
- **Reply type:** `json` (returns image URL immediately)
- **Prompt style:** Professional B2B style, clean background, photorealistic but not showing specific wheelchair models (those need real product photos)

**Workflow:**
1. Generate image with gpt-image-2 API
2. Download the returned image URL
3. Convert to WebP (compress for web, ~100-200KB target)
4. Save to `public/images/news/<article-slug>-banner.webp`
5. Reference in the article's content or add a `bannerImage` field to the article object

**Important:** Product images MUST be real photos, NOT AI-generated. Only use AI images for:
- Article banners and illustration
- Market/chart graphics
- Infographics
- Conceptual illustrations (factory, shipping, usage scenarios)
