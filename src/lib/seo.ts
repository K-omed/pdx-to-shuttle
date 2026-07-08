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
}: {
  title: string;
  description: string;
  path: string;
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
      images: [{ url: "/images/og-pdx-to-shuttle.svg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og-pdx-to-shuttle.svg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TransportationService"],
    name: site.name,
    legalName: site.legalName,
    url: site.domain,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Portland",
      addressRegion: "OR",
      addressCountry: "US",
      streetAddress: site.address,
    },
    areaServed: ["Portland, OR", "Portland International Airport", "PDX"],
    openingHours: "Mo-Su 00:00-23:59",
    priceRange: "$$",
    image: absoluteUrl("/images/og-pdx-to-shuttle.svg"),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.domain,
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.domain.replace(/\/$/, "")}/blog?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
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
  "/booking-success",
  ...landingPages.map((page) => `/${page.slug}`),
  ...blogPosts.map((post) => `/blog/${post.slug}`),
];
