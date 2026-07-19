import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookingForm } from "@/components/booking-form";
import { JsonLd } from "@/components/json-ld";
import { ConversionBand, FaqSection, PricingPreview, SectionHeading, ServicesOverview } from "@/components/sections";
import { baseMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";
import {
  hasPublicAddress,
  hasPublicEmail,
  hasPublicPhone,
  landingPages,
  landingPageCopy,
  pageContent,
  PageSlug,
  serviceAreas,
  services,
  site,
} from "@/lib/site";

type Params = Promise<{ slug: string }>;

function getPage(slug: string) {
  const simple = pageContent[slug as PageSlug];
  if (simple) return { kind: "simple" as const, ...simple, slug };
  const landing = landingPages.find((page) => page.slug === slug);
  if (landing) return { kind: "landing" as const, ...landing };
  return null;
}

export function generateStaticParams() {
  return [
    ...Object.keys(pageContent).map((slug) => ({ slug })),
    ...landingPages.map((page) => ({ slug: page.slug })),
  ];
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) return {};
  return baseMetadata({
    title: `${page.title} | ${site.name}`,
    description: page.description,
    path: `/${slug}`,
  });
}

export default async function DynamicPage({ params }: { params: Params }) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) notFound();

  if (page.kind === "landing") {
    return (
      <>
        <JsonLd
          data={[
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: page.title, path: `/${page.slug}` },
            ]),
            faqSchema(),
          ]}
        />
        <LandingPage page={page} />
      </>
    );
  }

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: page.title, path: `/${slug}` },
          ]),
          slug === "faq" ? faqSchema() : null,
        ].filter(Boolean)}
      />
      <SimplePage slug={slug} title={page.title} keyword={page.keyword} description={page.description} />
    </>
  );
}

function PageHero({ title, keyword, description }: { title: string; keyword: string; description: string }) {
  return (
    <section className="bg-[#071426] py-20 text-white">
      <div className="section-shell">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f5e8c8]">{keyword}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#dbe5f1]">{description}</p>
      </div>
    </section>
  );
}

function SimplePage({
  slug,
  title,
  keyword,
  description,
}: {
  slug: string;
  title: string;
  keyword: string;
  description: string;
}) {
  if (slug === "contact") {
    return (
      <>
        <PageHero title={title} keyword={keyword} description={description} />
        <section className="bg-white py-20">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Plan your next Portland airport ride."
                text="Send the booking request form with your route, flight, passenger, and luggage details. Exact reservations are confirmed after availability and timing are reviewed."
              />
              <div className="mt-8 rounded-md border border-[#d9e0ea] bg-[#fbfcfe] p-5 text-sm leading-7 text-[#516070]">
                {hasPublicPhone ? <p><strong className="text-[#071426]">Phone:</strong> {site.phone}</p> : null}
                {hasPublicEmail ? <p><strong className="text-[#071426]">Email:</strong> {site.email}</p> : null}
                <p><strong className="text-[#071426]">Area:</strong> {site.area}</p>
                {hasPublicAddress ? <p><strong className="text-[#071426]">Address:</strong> {site.address}</p> : null}
                <p><strong className="text-[#071426]">Hours:</strong> {site.hours}</p>
                {!hasPublicPhone && !hasPublicEmail ? (
                  <p className="mt-3">Public phone and email will be added after verified business contact details are available.</p>
                ) : null}
              </div>
            </div>
            <BookingForm />
          </div>
        </section>
        <ConversionBand />
      </>
    );
  }

  if (slug === "services") {
    return (
      <>
        <PageHero title={title} keyword={keyword} description={description} />
        <ServicesOverview />
        <ConversionBand />
      </>
    );
  }

  if (slug === "pricing") {
    return (
      <>
        <PageHero title={title} keyword={keyword} description={description} />
        <PricingPreview />
        <ConversionBand />
      </>
    );
  }

  if (slug === "service-areas") {
    return (
      <>
        <PageHero title={title} keyword={keyword} description={description} />
        <section className="bg-white py-20">
          <div className="section-shell">
            <SectionHeading
              eyebrow="Coverage"
              title="Portland airport shuttle service areas."
              text="PDX to Shuttle focuses on airport transfer routes throughout Portland and nearby communities. Longer-distance routes are quoted based on availability."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {serviceAreas.map((area) => (
                <div key={area} className="rounded-md border border-[#d9e0ea] bg-[#fbfcfe] p-5 font-bold text-[#071426]">
                  {area}
                </div>
              ))}
            </div>
          </div>
        </section>
        <ConversionBand />
      </>
    );
  }

  if (slug === "faq") {
    return (
      <>
        <PageHero title={title} keyword={keyword} description={description} />
        <FaqSection />
        <ConversionBand />
      </>
    );
  }

  if (slug === "privacy-policy" || slug === "terms") {
    return (
      <>
        <PageHero title={title} keyword={keyword} description={description} />
        <PolicyContent type={slug} />
      </>
    );
  }

  return (
    <>
      <PageHero title={title} keyword={keyword} description={description} />
      <section className="bg-white py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <article className="prose max-w-none">
            <h2 className="text-3xl font-black text-[#071426]">{keyword} designed for real airport schedules</h2>
            <p className="mt-4 text-base leading-8 text-[#516070]">
              {site.name} helps travelers arrange dependable Portland airport transportation with
              clear pickup details, direct routing, and a premium private shuttle experience. The
              service is built for travelers who want less uncertainty before a flight and a more
              organized ride after landing at PDX.
            </p>
            <p className="mt-4 text-base leading-8 text-[#516070]">
              Whether the trip is personal, corporate, or family-focused, the reservation process
              collects the details that matter: passenger count, luggage, flight number, pickup
              location, dropoff location, and any special travel requirements.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {services.map((service) => (
                <Link key={service.slug} href={service.href} className="focus-ring rounded-md border border-[#d9e0ea] p-5 font-bold text-[#071426] hover:bg-[#fbfcfe]">
                  {service.title}
                </Link>
              ))}
            </div>
          </article>
          <BookingForm />
        </div>
      </section>
      <ConversionBand />
    </>
  );
}

function LandingPage({ page }: { page: (typeof landingPages)[number] }) {
  const copy = landingPageCopy[page.slug];

  return (
    <>
      <PageHero title={page.title} keyword={page.keyword} description={page.description} />
      <section className="bg-white py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.85fr]">
          <article>
            <h2 className="text-3xl font-black text-[#071426]">{copy.h2}</h2>
            <div className="mt-5 space-y-5 text-base leading-8 text-[#516070]">
              {copy.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <h2 className="mt-10 text-2xl font-black text-[#071426]">Planning notes for {page.keyword}</h2>
            <ul className="mt-5 grid gap-3 text-sm font-semibold text-[#27364a]">
              {copy.bullets.map((item) => (
                <li key={item} className="rounded-md border border-[#d9e0ea] bg-[#fbfcfe] p-4">{item}</li>
              ))}
            </ul>
            <div className="mt-8 rounded-md border border-[#d9e0ea] bg-[#fbfcfe] p-5">
              <h2 className="text-xl font-black text-[#071426]">Local relevance</h2>
              <p className="mt-3 text-sm leading-7 text-[#516070]">{copy.localAngle}</p>
            </div>
          </article>
          <aside>
            <BookingForm />
            <div className="mt-6 rounded-md border border-[#d9e0ea] bg-[#fbfcfe] p-5">
              <h2 className="text-xl font-black text-[#071426]">Related services</h2>
              <div className="mt-4 grid gap-2">
                {services.map((service) => (
                  <Link key={service.slug} className="focus-ring rounded-md px-3 py-2 text-sm font-bold text-[#27364a] hover:bg-white" href={service.href}>
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
      <FaqSection />
      <ConversionBand />
    </>
  );
}

function PolicyContent({ type }: { type: string }) {
  const isPrivacy = type === "privacy-policy";
  return (
    <section className="bg-white py-20">
      <div className="section-shell max-w-3xl">
        <div className="space-y-6 text-base leading-8 text-[#516070]">
          {isPrivacy ? (
            <>
              <p>PDX to Shuttle collects contact and trip details submitted through the booking form so the team can respond to quote and reservation requests.</p>
              <p>Information may include pickup and dropoff locations, flight number, passenger count, luggage count, name, email, phone number, and special requests.</p>
              <p>Booking details are used to communicate about requested transportation and are not sold. Replace placeholder contact values with verified business details before launch.</p>
            </>
          ) : (
            <>
              <p>Website content is provided for informational and booking-request purposes. A submitted form does not guarantee ride availability or final pricing.</p>
              <p>Reservations, rates, pickup timing, and service availability must be confirmed directly by PDX to Shuttle before travel.</p>
              <p>Customers are responsible for providing accurate flight, pickup, dropoff, luggage, and contact information.</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
