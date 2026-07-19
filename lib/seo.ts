import type { Metadata } from "next";
import { blogPosts, faqs, landingPages, site } from "@/lib/site";

export function absoluteUrl(path = "/") {
  const base = site.domain.replace(/\/$/, "");
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${cleanPath}`;
}

export function baseMetadata({
  title,
  description,
  path,
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}): Metadata {
  const url = absoluteUrl(path);
  return {
    metadataBase: new URL(site.domain),
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_US",
      images: [{ url: "/images/og-pdx-to-shuttle.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og-pdx-to-shuttle.jpg"],
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function organizationSchema() {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TransportationService"],
    name: site.name,
    legalName: site.legalName,
    url: site.domain,
    areaServed: ["Portland, OR", "Portland International Airport", "PDX"],
    priceRange: "$$",
    image: absoluteUrl("/images/og-pdx-to-shuttle.jpg"),
  };

  if (site.phone) schema.telephone = site.phone;
  if (site.email) schema.email = site.email;
  if (site.address) {
    schema.address = {
      "@type": "PostalAddress",
      addressLocality: "Portland",
      addressRegion: "OR",
      addressCountry: "US",
      streetAddress: site.address,
    };
  }
  if (site.hours !== "By reservation") schema.openingHours = site.hours;

  return schema;
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.domain,
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(source = faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: source.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function articleSchema(post: (typeof blogPosts)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
  };
}

export const allIndexablePaths = [
  "/",
  "/about",
  "/services",
  "/airport-shuttle",
  "/corporate-transportation",
  "/private-transportation",
  "/pricing",
  "/service-areas",
  "/faq",
  "/blog",
  "/contact",
  "/privacy-policy",
  "/terms",
  ...landingPages.map((page) => `/${page.slug}`),
  ...blogPosts.map((post) => `/blog/${post.slug}`),
];
