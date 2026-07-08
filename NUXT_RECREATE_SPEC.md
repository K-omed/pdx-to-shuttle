# PDX to Shuttle Nuxt Recreation Spec

## Purpose

Recreate the existing **PDX to Shuttle** website as a Nuxt application while preserving the same business goals, SEO strategy, content structure, booking behavior, visual direction, and deployment readiness.

Do not copy implementation details blindly from Next.js. Rebuild the site idiomatically in Nuxt, but keep the user-facing experience and SEO output equivalent.

## Current Project Summary

- Brand: **PDX to Shuttle**
- Business: premium airport shuttle transportation to and from Portland International Airport, PDX
- Primary market: Portland, Oregon
- Primary conversion goal: booking / quote request form submission
- Secondary conversion goals: phone call, service-area exploration, blog/internal SEO traffic
- Current stack: Next.js App Router, React, TypeScript, Tailwind CSS
- Desired Nuxt stack: Nuxt 3 or newer, Vue 3, TypeScript, Tailwind CSS

## Design Direction

The site should feel:

- Premium
- Professional
- Trustworthy
- Safe
- Reliable
- Fast
- Mobile-first

Visual palette:

- Dark navy: primary brand background
- White: main content surface
- Gold: accent color for CTAs, highlights, icons
- Light gray: section backgrounds and borders

Important design behaviors:

- First viewport should immediately communicate airport shuttle service and include booking/quote CTA.
- Use generous spacing, clear typography, and restrained card layouts.
- Keep UI practical and conversion-focused, not like a generic landing-page template.
- Avoid fake claims, fake review schema, and unverifiable trust badges.
- Use the optimized generated shuttle visual currently stored at:
  - `public/images/pdx-shuttle-hero.webp`
- Keep lightweight hero treatment for performance if raster image hurts LCP.

## Routes To Recreate

Core pages:

- `/`
- `/about`
- `/services`
- `/airport-shuttle`
- `/corporate-transportation`
- `/private-transportation`
- `/pricing`
- `/service-areas`
- `/faq`
- `/blog`
- `/contact`
- `/privacy-policy`
- `/terms`
- `/booking-success`
- custom 404 page

SEO landing pages:

- `/portland-airport-shuttle`
- `/pdx-shuttle`
- `/pdx-shuttle-service`
- `/portland-shuttle-service`
- `/shuttle-to-pdx`
- `/shuttle-from-pdx`
- `/shuttle-to-portland`
- `/shuttle-from-portland`
- `/airport-transportation-portland`
- `/private-airport-shuttle-portland`

Blog post pages:

- `/blog/best-transportation-to-pdx`
- `/blog/how-early-should-you-arrive-at-pdx`
- `/blog/travel-tips-for-portland-visitors`
- `/blog/airport-shuttle-vs-uber`
- `/blog/corporate-airport-transportation`

## Main Homepage Sections

Recreate these homepage sections in this order:

1. Hero section
   - H1: premium PDX shuttle service positioning
   - Supporting copy
   - Book Now CTA
   - Call CTA
   - Trust badges
   - Booking form visible in first major section

2. Services overview
   - Airport Shuttle
   - Corporate Transportation
   - Private Transportation

3. Fleet / experience section
   - Use optimized shuttle image
   - Focus on clean vehicles, luggage, private rides, airport timing

4. Why Choose Us
   - Premium experience
   - Safety and reliability
   - Local route knowledge
   - Clear booking flow

5. Pricing preview
   - Custom quote rows by service area
   - No fake fixed prices unless business provides them

6. Testimonials
   - Use generic placeholder-style copy only
   - Do not add Review schema until verified reviews are supplied

7. FAQ
   - Use FAQ schema

8. Map / Local SEO section
   - OpenStreetMap embed by default
   - Portland / PDX service area

9. Conversion band
   - Final quote request and phone CTA

## Booking Form

Fields:

- Pickup location
- Dropoff location
- Date
- Time
- Passengers
- Luggage
- Flight Number
- Name
- Email
- Phone
- Special Requests
- Hidden honeypot field, e.g. `company`

Behavior:

- Validate client and server side.
- Required fields: pickup, dropoff, date, time, passengers, luggage, name, email, phone.
- On success, redirect to `/booking-success`.
- If email provider is not configured, return a clear error instead of silently dropping the lead.
- Booking request is not an automatic reservation confirmation.

Suggested Nuxt implementation:

- Create a server route, for example `server/api/book.post.ts`.
- Use `zod` for validation.
- Use `nodemailer` or Hostinger-compatible SMTP.
- Environment variables should not be committed.

Required environment variables:

```env
NUXT_PUBLIC_SITE_URL=https://pdxtoshuttle.com
NUXT_PUBLIC_BUSINESS_PHONE=(503) 000-0000
NUXT_PUBLIC_BUSINESS_EMAIL=booking@pdxtoshuttle.com
NUXT_PUBLIC_BUSINESS_ADDRESS=Portland, OR

BOOKING_TO_EMAIL=booking@pdxtoshuttle.com
BOOKING_FROM_EMAIL=no-reply@pdxtoshuttle.com
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=smtp-user
SMTP_PASS=smtp-password
```

## SEO Requirements

Every route needs:

- Unique title
- Unique meta description
- Canonical URL
- Open Graph title/description/url/image
- Twitter card metadata
- One H1 only
- Semantic H2/H3 hierarchy
- Descriptive internal links
- Clean URL slug
- Human-readable, original copy

Structured data:

- LocalBusiness
- Organization
- WebSite
- BreadcrumbList
- FAQPage where FAQ content appears
- Article for blog posts
- Review schema only after verified real review data is supplied

Nuxt equivalents:

- Use `useSeoMeta`, `useHead`, or route-level metadata utilities.
- Generate JSON-LD through composables/components.
- Use Nuxt sitemap/robots modules or explicit server routes.

Required SEO endpoints:

- `/sitemap.xml`
- `/robots.txt`

Robots behavior:

- Allow crawling of public pages.
- Disallow API routes.
- Include sitemap URL.

Canonical base:

- Must derive from `NUXT_PUBLIC_SITE_URL`.
- Do not leave `https://example.com` in production.

## Content Model

Keep content data-driven. Suggested Nuxt files:

- `data/site.ts`
- `data/services.ts`
- `data/faqs.ts`
- `data/landing-pages.ts`
- `data/blog.ts`
- `utils/seo.ts`

Business placeholders:

- Phone, email, and address currently must be replaced before production.
- Use Portland / PDX service area until exact NAP details are provided.
- Do not invent operating credentials, fixed reviews, or exact rates.

Primary target keywords:

- PDX Shuttle
- Portland Airport Shuttle
- PDX Airport Transportation
- Airport Shuttle Portland
- Luxury Airport Shuttle Portland
- PDX Transportation
- Transportation to Portland Airport
- Private Shuttle Portland
- Airport Car Service Portland
- Shuttle to PDX
- Airport Transfer Portland
- Portland Airport Car Service

Use keywords naturally. Avoid keyword stuffing.

## Assets

Current project assets to preserve or recreate:

- `public/images/pdx-shuttle-hero.webp`
- `public/images/hero-shuttle.svg`
- `public/images/fleet-shuttle.svg`
- `public/images/og-pdx-to-shuttle.svg`

Recommended Nuxt public asset paths can remain the same:

```text
public/images/pdx-shuttle-hero.webp
public/images/hero-shuttle.svg
public/images/fleet-shuttle.svg
public/images/og-pdx-to-shuttle.svg
```

Image requirements:

- Use optimized image formats.
- Add descriptive alt text for meaningful images.
- Decorative images should use empty alt text.
- Avoid large above-the-fold raster images if they hurt Lighthouse LCP.

## Accessibility Requirements

- Keyboard navigable header/menu.
- Visible focus states.
- Form labels for every input.
- Accessible validation and status messages.
- Sufficient color contrast.
- Logical heading hierarchy.
- No text overlap at mobile/tablet/desktop sizes.
- No horizontal overflow on mobile.

## Performance Requirements

Target:

- Lighthouse Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

Performance decisions from the current project:

- System font stack was faster than remote/custom font loading.
- Lightweight SVG hero performed better than a large first-viewport raster image.
- Generated WebP visual works better below the fold.

## Deployment Notes

Current GitHub repo:

```text
https://github.com/K-omed/pdx-to-shuttle
```

Current Hostinger compatibility changes:

- Next.js was pinned to `15.5.20`
- React was pinned to `18.3.1`
- App folders were moved to root-level structure to help Hostinger detect the project

If recreating in Nuxt, deploy from a separate branch or repo unless explicitly replacing the Next.js project.

Recommended Nuxt deployment settings will depend on Hostinger’s Nuxt support:

- Install command: `npm install`
- Build command: `npm run build`
- Start command: likely `node .output/server/index.mjs` or Hostinger’s Nuxt preset
- Node version: 20+ or 22+

## Validation Checklist

Before launch:

- Replace all placeholder business data.
- Set canonical domain.
- Configure SMTP and test booking form.
- Verify `/sitemap.xml`.
- Verify `/robots.txt`.
- Validate JSON-LD with Rich Results Test or Schema.org Validator.
- Run Lighthouse on production build.
- Test mobile/tablet/desktop layouts.
- Confirm no real secrets are committed.
- Confirm Hostinger environment variables match the Nuxt variable names.

## Important Non-Goals

- Do not recreate the site in Nuxt yet unless explicitly requested.
- Do not use WordPress.
- Do not use Hostinger Horizons for this version unless the stack is intentionally changed.
- Do not add fake reviews, fake addresses, fake licenses, or unverifiable claims.
- Do not copy Rose Shuttle text, design, branding, or assets.
