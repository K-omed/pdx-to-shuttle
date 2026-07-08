import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { ConversionBand } from "@/components/sections";
import { baseMetadata, breadcrumbSchema } from "@/lib/seo";
import { blogPosts, site } from "@/lib/site";

export const metadata: Metadata = baseMetadata({
  title: `Portland Airport Shuttle Blog | ${site.name}`,
  description:
    "Read PDX airport transportation guides, Portland visitor tips, shuttle comparisons, and corporate airport travel advice.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }])} />
      <section className="bg-[#071426] py-20 text-white">
        <div className="section-shell">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f5e8c8]">Blog</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            Portland airport shuttle guides and travel tips.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#dbe5f1]">
            Helpful articles for planning PDX transportation, arrival timing, private shuttle service,
            and business airport travel in Portland.
          </p>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="section-shell grid gap-5 md:grid-cols-2">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="focus-ring rounded-md border border-[#d9e0ea] bg-[#fbfcfe] p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#071426]/10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8a6a2f]">{post.keyword}</p>
              <h2 className="mt-3 text-2xl font-black text-[#071426]">{post.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[#516070]">{post.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <ConversionBand />
    </>
  );
}
