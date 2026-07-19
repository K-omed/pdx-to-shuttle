import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import {
  ConversionBand,
  FaqSection,
  FleetSection,
  Hero,
  MapSection,
  PricingPreview,
  ServicesOverview,
  Testimonials,
  WhyChooseUs,
} from "@/components/sections";
import { baseMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";

export const metadata: Metadata = baseMetadata({
  title: "PDX Shuttle Service | Portland Airport Shuttle | PDX to Shuttle",
  description:
    "Book premium PDX shuttle service for Portland airport transportation, private airport transfers, corporate rides, and reliable shuttle service to and from PDX.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }]), faqSchema()]} />
      <Hero />
      <ServicesOverview />
      <FleetSection />
      <WhyChooseUs />
      <PricingPreview />
      <Testimonials />
      <FaqSection />
      <MapSection />
      <ConversionBand />
    </>
  );
}
