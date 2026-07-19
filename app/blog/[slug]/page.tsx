import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { ConversionBand } from "@/components/sections";
import { articleSchema, baseMetadata, breadcrumbSchema } from "@/lib/seo";
import { blogPostBodies, blogPosts, site } from "@/lib/site";

type Params = Promise<{ slug: string }>;

function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return baseMetadata({
    title: `${post.title} | ${site.name}`,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const body = blogPostBodies[post.slug];

  return (
    <>
      <JsonLd
        data={[
          articleSchema(post),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />
      <article className="bg-white">
        <header className="bg-[#071426] py-20 text-white">
          <div className="section-shell max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f5e8c8]">{post.keyword}</p>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">{post.title}</h1>
            <p className="mt-5 text-lg leading-8 text-[#dbe5f1]">{post.description}</p>
          </div>
        </header>
        <div className="section-shell max-w-3xl py-16">
          <div className="space-y-6 text-base leading-8 text-[#516070]">
            {body.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-black text-[#071426]">{section.heading}</h2>
                <div className="mt-4 space-y-4">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </article>
      <ConversionBand />
    </>
  );
}
