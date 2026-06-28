import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { site } from "@/content/site";
import { DevAgentation } from "@/components/DevAgentation";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://nihal-puse.vercel.app"),
  title: "Nihal Puse — Full-Stack Software Engineer",
  description:
    "Full-stack software engineer in Bhopal building production web apps with React, Next.js, TypeScript and Python.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "Nihal Puse — Full-Stack Software Engineer",
    description:
      "Full-stack software engineer building production web apps with React, Next.js, TypeScript and Python.",
    url: "/",
    siteName: "Nihal Puse",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nihal Puse — Full-Stack Software Engineer",
    description: "Full-stack software engineer building production web apps.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: site.name,
              jobTitle: site.role,
              email: site.email,
              address: { "@type": "PostalAddress", addressLocality: "Bhopal", addressCountry: "IN" },
              url: "https://nihal-puse.vercel.app",
              sameAs: [site.socials.github, site.socials.linkedin],
            }),
          }}
        />
        {children}
        {process.env.NODE_ENV === "development" && <DevAgentation />}
      </body>
    </html>
  );
}
