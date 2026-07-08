import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { baseMetadata, organizationSchema, websiteSchema } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = baseMetadata({
  title: "PDX to Shuttle | Portland Airport Shuttle Service",
  description:
    "Book premium Portland airport shuttle service with PDX to Shuttle. Private, corporate, and door-to-door airport transportation to and from PDX.",
  path: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#fbfcfe] text-[#0b1324] antialiased">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
