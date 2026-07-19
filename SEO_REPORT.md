# PDX to Shuttle SEO and Launch Report

## Build Status

- `npm run lint`: passed
- `npm run build`: passed
- `npm audit --omit=dev`: passed, 0 vulnerabilities
- Hostinger compatibility: pinned to Next.js 15.5.20 and React 18.3.1
- Hostinger importer compatibility: app, components, and lib folders moved to repository root
- Static pages generated: 35
- Dynamic server route: `/api/book`

## Lighthouse

Final local production audit:

- URL: `http://127.0.0.1:3011`
- Report file: `.lighthouse-seo-final.json`
- Performance: 98
- Accessibility: 100
- Best Practices: 100
- SEO: 100

Lighthouse completed report generation but exited with a Windows temp-profile cleanup `EPERM` error after writing the JSON report.

## SEO Implemented

- Unique route metadata
- Canonical URLs from `NEXT_PUBLIC_SITE_URL`
- Open Graph and Twitter card metadata
- Dynamic `sitemap.xml`
- `robots.txt`
- LocalBusiness and Organization JSON-LD
- WebSite JSON-LD
- Breadcrumb JSON-LD
- FAQ JSON-LD
- Article JSON-LD for blog posts
- Duplicate homepage LocalBusiness schema removed
- WebSite SearchAction removed because no site search exists
- Dummy phone, email, and address removed from visible content and structured data
- `/booking-success` set to noindex/nofollow and removed from sitemap
- Single H1 verified on key pages
- Local service-area content
- Internal links among services, landing pages, blog, and booking flow
- AI-generated premium shuttle image saved as `public/images/pdx-shuttle-hero.webp`
- AI-generated 1200x630 social image saved as `public/images/og-pdx-to-shuttle.jpg`
- Hero source prompt used a photorealistic Portland airport shuttle scene with no readable logos, license text, watermark, or in-image text
- Ten landing pages rewritten with distinct intent-specific content blocks
- Blog posts expanded with unique article sections

## Browser QA

Checked locally with the in-app browser:

- Home page metadata, single H1, JSON-LD, image alt text, and booking fields
- Dynamic landing page route: `/portland-airport-shuttle`
- Dynamic service route: `/airport-shuttle`
- Dynamic blog route: `/blog/best-transportation-to-pdx`
- Contact page route and booking form
- `sitemap.xml` and `robots.txt`
- Mobile, tablet, and desktop viewport overflow checks
- No dummy `(503) 000-0000` or `booking@example.com` rendered
- No placeholder testimonial labels rendered
- No SearchAction schema rendered
- Open Graph image resolves to JPG metadata

## Booking API

- Empty request returns validation error.
- Valid request returns explicit 503 until SMTP and booking email environment variables are configured.
- This prevents silent lead loss before production email setup.

## Production Gates

Before deploying publicly, replace placeholders in `.env.local` / Hostinger environment variables:

- Real domain in `NEXT_PUBLIC_SITE_URL`
- Real phone, email, and address/service-area address
- SMTP credentials
- Booking destination and sender email
- Verified real reviews before adding Review schema

Current fallback canonical and sitemap domain is `https://pdxtoshuttle.com`. Public LocalBusiness phone, email, address, and hours are omitted until real environment variables are set.

## Content Similarity Check

Local rendered-page five-word overlap check across landing pages and blog posts:

- Highest pair overlap: 42.8%
- Prior audit reported landing pages at approximately 87-90% similar
- Remaining overlap is largely shared navigation, booking form, FAQ, and footer structure
