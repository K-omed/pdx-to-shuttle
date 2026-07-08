import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, MapPin } from "lucide-react";
import { BookingForm } from "@/components/booking-form";
import { PrimaryCta, SecondaryCta } from "@/components/cta";
import { faqs, rates, serviceAreas, services, testimonials, trustBadges, valueProps } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#071426] text-white">
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/images/hero-shuttle.svg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="section-shell relative grid min-h-[640px] items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f5e8c8]">
            Portland Airport Shuttle Service
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            Premium PDX shuttle service for calm, reliable airport travel.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#dbe5f1]">
            PDX to Shuttle provides private airport transportation to and from Portland
            International Airport with professional coordination, luggage-friendly planning, and
            clear quote requests.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryCta label="Book Now" />
            <SecondaryCta />
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-3 rounded-md border border-white/15 bg-white/8 p-3">
                <badge.icon className="text-[#c9a35b]" size={20} aria-hidden="true" />
                <span className="text-sm font-semibold">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
        <BookingForm />
      </div>
    </section>
  );
}

export function ServicesOverview() {
  return (
    <section className="bg-white py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Services"
          title="Airport transportation built around the way Portland travels."
          text="Choose private PDX transportation for airport departures, arriving guests, corporate schedules, and point-to-point shuttle needs."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={service.href}
              className="focus-ring rounded-md border border-[#d9e0ea] bg-[#fbfcfe] p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#071426]/10"
            >
              <service.icon className="text-[#c9a35b]" size={32} aria-hidden="true" />
              <h3 className="mt-5 text-xl font-black text-[#071426]">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#516070]">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FleetSection() {
  return (
    <section className="bg-[#f0f3f8] py-20">
      <div className="section-shell grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative min-h-[360px] overflow-hidden rounded-md border border-[#d9e0ea] bg-white">
          <Image
            src="/images/pdx-shuttle-hero.webp"
            alt="Luxury black shuttle vehicle at Portland airport curbside for PDX transportation"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <SectionHeading
            eyebrow="Fleet"
            title="Comfortable vehicles for airport timing, luggage, and private rides."
            text="The fleet experience is designed for airport transfers: clean interiors, room for luggage, simple pickup coordination, and a quiet ride before or after a flight."
          />
          <ul className="mt-8 grid gap-4">
            {["Private ride planning", "Luggage-aware reservations", "Corporate-ready presentation", "Early and late airport timing"].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm font-semibold text-[#27364a]">
                <CheckCircle2 className="text-[#c9a35b]" aria-hidden="true" size={20} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  return (
    <section className="bg-white py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Why choose us"
          title="A more deliberate airport shuttle experience."
          text="Every page, form, and call-to-action is built to make the reservation path clear while showing travelers that the service is dependable."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((item) => (
            <article key={item.title} className="rounded-md border border-[#d9e0ea] p-5">
              <item.icon className="text-[#c9a35b]" size={28} aria-hidden="true" />
              <h3 className="mt-4 text-lg font-black text-[#071426]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#516070]">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="bg-[#071426] py-20 text-white">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trust signals without fake review claims."
          text="These sample testimonials are written as generic placeholders until verified customer reviews are supplied for schema markup."
          inverted
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.name} className="rounded-md border border-white/15 bg-white/8 p-6">
              <blockquote className="text-sm leading-7 text-[#dbe5f1]">&ldquo;{item.text}&rdquo;</blockquote>
              <figcaption className="mt-5 text-sm font-bold text-[#f5e8c8]">{item.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="bg-white py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="FAQ"
          title="Quick answers for Portland airport shuttle planning."
          text="Useful details for booking, timing, service areas, luggage, and airport pickup expectations."
        />
        <div className="mt-8 grid gap-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="rounded-md border border-[#d9e0ea] bg-[#fbfcfe] p-5">
              <summary className="cursor-pointer text-base font-black text-[#071426]">{faq.question}</summary>
              <p className="mt-3 text-sm leading-7 text-[#516070]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PricingPreview() {
  return (
    <section className="bg-[#f0f3f8] py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Pricing"
          title="Transparent quote requests for airport shuttle routes."
          text="Pricing depends on pickup location, destination, passenger count, luggage, timing, and route distance. Request a quote for exact availability."
        />
        <div className="mt-8 overflow-hidden rounded-md border border-[#d9e0ea] bg-white">
          {rates.map((rate) => (
            <div key={rate.area} className="grid gap-2 border-b border-[#d9e0ea] p-5 last:border-b-0 sm:grid-cols-[1fr_auto]">
              <span className="font-semibold text-[#27364a]">{rate.area}</span>
              <span className="font-black text-[#071426]">{rate.rate}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MapSection() {
  return (
    <section className="bg-white py-20">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Local SEO"
            title="Serving Portland, PDX, and surrounding airport routes."
            text="The site includes a local NAP section, service areas, structured data, and an embedded map for Portland airport transportation relevance."
          />
          <div className="mt-6 flex items-start gap-3 rounded-md border border-[#d9e0ea] p-4">
            <MapPin className="mt-1 text-[#c9a35b]" aria-hidden="true" />
            <p className="text-sm leading-7 text-[#516070]">
              Core service area: {serviceAreas.join(", ")}.
            </p>
          </div>
        </div>
        <iframe
          title="Map of Portland International Airport service area"
          className="min-h-[380px] w-full rounded-md border border-[#d9e0ea]"
          loading="lazy"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-122.735%2C45.430%2C-122.420%2C45.650&layer=mapnik&marker=45.5898%2C-122.5951"
        />
      </div>
    </section>
  );
}

export function ConversionBand() {
  return (
    <section className="bg-[#10243d] py-14 text-white">
      <div className="section-shell flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f5e8c8]">Ready to ride?</p>
          <h2 className="mt-3 text-3xl font-black">Request a PDX shuttle quote today.</h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <PrimaryCta label="Request a Quote" />
          <SecondaryCta />
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  inverted = false,
}: {
  eyebrow: string;
  title: string;
  text: string;
  inverted?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p className={`text-sm font-bold uppercase tracking-[0.22em] ${inverted ? "text-[#f5e8c8]" : "text-[#8a6a2f]"}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-3 text-3xl font-black leading-tight tracking-tight sm:text-4xl ${inverted ? "text-white" : "text-[#071426]"}`}>
        {title}
      </h2>
      <p className={`mt-4 text-base leading-8 ${inverted ? "text-[#dbe5f1]" : "text-[#516070]"}`}>{text}</p>
    </div>
  );
}
