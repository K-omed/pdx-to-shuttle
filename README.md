# PDX to Shuttle

SEO-first Next.js website for a premium Portland airport shuttle service.

## Stack

- Next.js App Router
- React and TypeScript
- Tailwind CSS
- Server route for booking email requests
- Dynamic metadata, sitemap, robots.txt, JSON-LD, and local SEO content

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment

Copy `.env.example` to `.env.local` and replace every placeholder before production launch.

Required for canonical URLs and LocalBusiness schema:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_BUSINESS_PHONE`
- `NEXT_PUBLIC_BUSINESS_EMAIL`
- `NEXT_PUBLIC_BUSINESS_ADDRESS`

Required for booking email delivery:

- `BOOKING_TO_EMAIL`
- `BOOKING_FROM_EMAIL`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`

If SMTP variables are missing, the booking form validates input but the API returns a configuration error instead of silently dropping leads.

## Pages

Core pages:

- Home
- About
- Services
- Airport Shuttle
- Corporate Transportation
- Private Transportation
- Pricing
- Service Areas
- FAQ
- Blog
- Contact
- Privacy Policy
- Terms
- 404
- Booking success

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

## SEO Implemented

- Unique metadata for every route
- Canonical URLs from `NEXT_PUBLIC_SITE_URL`
- Open Graph and Twitter card metadata
- Dynamic `sitemap.xml`
- `robots.txt`
- LocalBusiness and Organization schema
- WebSite schema
- Breadcrumb schema
- FAQ schema
- Article schema for blog posts
- Semantic headings and internal links
- Optimized local visual assets with descriptive alt text

Review/testimonial schema is intentionally not added until verified real reviews are supplied.

## Verification

```bash
npm run lint
npm run build
```

Before launch, also verify:

- `/sitemap.xml`
- `/robots.txt`
- JSON-LD in Rich Results Test or Schema.org Validator
- Lighthouse Performance, Accessibility, Best Practices, and SEO
- Mobile, tablet, and desktop layouts
- Booking form behavior with real SMTP credentials

## Hostinger Deployment

Preferred deployment path:

1. Push the project to GitHub.
2. In Hostinger Web Apps or Node.js hosting, create a Next.js app from the GitHub repository.
3. Use `npm install` as the install command.
4. Use `npm run build` as the build command.
5. Use `npm run start` as the start command.
6. Add production environment variables in Hostinger.
7. Connect the real domain and confirm SSL.
8. Re-run Lighthouse and structured-data checks on the live URL.

Do not deploy through Hostinger Horizons for this project because Horizons enforces React/JavaScript/React Router, while this implementation is Next.js/TypeScript.
