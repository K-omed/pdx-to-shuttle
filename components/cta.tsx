import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function PrimaryCta({ label = "Request a Quote" }: { label?: string }) {
  return (
    <Link
      href="/contact#booking"
      className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#c9a35b] px-5 py-3 text-sm font-bold text-[#071426] shadow-lg shadow-[#071426]/10 transition hover:bg-[#ddb96f]"
    >
      {label}
      <ArrowRight aria-hidden="true" size={18} />
    </Link>
  );
}

export function SecondaryCta() {
  return (
    <a
      href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
      className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/25 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
    >
      <Phone aria-hidden="true" size={18} />
      Call {site.phone}
    </a>
  );
}
