import Link from "next/link";
import { Menu, Plane } from "lucide-react";
import { PrimaryCta } from "@/components/cta";
import { navLinks, site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#d9e0ea] bg-white/95 backdrop-blur">
      <div className="section-shell flex min-h-20 items-center justify-between gap-6">
        <Link href="/" className="focus-ring flex items-center gap-3" aria-label="PDX to Shuttle home">
          <span className="grid size-11 place-items-center rounded-md bg-[#071426] text-[#c9a35b]">
            <Plane aria-hidden="true" size={22} />
          </span>
          <span>
            <span className="block text-lg font-black tracking-tight text-[#071426]">{site.name}</span>
            <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#64748b]">
              Portland Airport Shuttle
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="focus-ring rounded-md px-3 py-2 text-sm font-semibold text-[#27364a] transition hover:bg-[#f0f3f8] hover:text-[#071426]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <PrimaryCta label="Book Now" />
        </div>
        <details className="relative lg:hidden">
          <summary className="focus-ring grid size-11 cursor-pointer list-none place-items-center rounded-md border border-[#d9e0ea] bg-white text-[#071426]">
            <Menu aria-label="Open navigation" size={22} />
          </summary>
          <nav className="absolute right-0 mt-3 w-72 rounded-md border border-[#d9e0ea] bg-white p-3 shadow-2xl" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="focus-ring block rounded-md px-3 py-3 text-sm font-semibold text-[#27364a] hover:bg-[#f0f3f8]"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3">
              <PrimaryCta label="Book Now" />
            </div>
          </nav>
        </details>
      </div>
    </header>
  );
}
