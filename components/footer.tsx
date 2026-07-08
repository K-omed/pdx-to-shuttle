import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navLinks, serviceAreas, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-[#071426] text-white">
      <div className="section-shell grid gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="text-2xl font-black">{site.name}</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-[#cbd5e1]">
            Premium Portland airport shuttle service for private PDX transfers, corporate travel,
            and door-to-door transportation across the metro area.
          </p>
          <div className="mt-6 space-y-3 text-sm text-[#e2e8f0]">
            <p className="flex items-center gap-3">
              <Phone size={17} aria-hidden="true" /> {site.phone}
            </p>
            <p className="flex items-center gap-3">
              <Mail size={17} aria-hidden="true" /> {site.email}
            </p>
            <p className="flex items-center gap-3">
              <MapPin size={17} aria-hidden="true" /> {site.address}
            </p>
          </div>
        </div>
        <div>
          <p className="font-bold text-[#f5e8c8]">Pages</p>
          <ul className="mt-4 grid gap-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link className="focus-ring text-[#cbd5e1] hover:text-white" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className="focus-ring text-[#cbd5e1] hover:text-white" href="/privacy-policy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="focus-ring text-[#cbd5e1] hover:text-white" href="/terms">
                Terms
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-[#f5e8c8]">Service Areas</p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-[#cbd5e1]">
            {serviceAreas.slice(0, 10).map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="section-shell flex flex-col gap-3 py-5 text-xs text-[#94a3b8] sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Built for fast, accessible, SEO-focused airport shuttle reservations.</p>
        </div>
      </div>
    </footer>
  );
}
