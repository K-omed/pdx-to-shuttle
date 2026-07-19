import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { baseMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = baseMetadata({
  title: `Booking Request Received | ${site.name}`,
  description: "Your PDX to Shuttle booking request has been received.",
  path: "/booking-success",
  noindex: true,
});

export default function BookingSuccessPage() {
  return (
    <section className="bg-white py-24">
      <div className="section-shell max-w-2xl text-center">
        <CheckCircle2 className="mx-auto text-[#c9a35b]" size={56} aria-hidden="true" />
        <h1 className="mt-6 text-4xl font-black text-[#071426]">Booking request received.</h1>
        <p className="mt-4 text-base leading-8 text-[#516070]">
          Thank you for contacting {site.name}. The team will review your route, flight details,
          timing, and passenger needs before confirming availability and pricing.
        </p>
        <Link href="/" className="focus-ring mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-[#071426] px-5 py-3 text-sm font-bold text-white">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
