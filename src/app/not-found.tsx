import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-white py-24">
      <div className="section-shell max-w-2xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#8a6a2f]">404</p>
        <h1 className="mt-4 text-4xl font-black text-[#071426]">This page missed the pickup.</h1>
        <p className="mt-4 text-base leading-8 text-[#516070]">
          The page you requested could not be found. Return home or request a Portland airport shuttle quote.
        </p>
        <Link href="/" className="focus-ring mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-[#071426] px-5 py-3 text-sm font-bold text-white">
          Go Home
        </Link>
      </div>
    </section>
  );
}
