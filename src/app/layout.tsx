import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://nihal-puse.vercel.app"),
  title: "Nihal Puse — Frontend Developer",
  description:
    "Frontend developer in Bhopal building fast, accessible web interfaces with React, Next.js & TypeScript.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "Nihal Puse — Frontend Developer",
    description:
      "Frontend developer building fast, accessible web interfaces with React, Next.js & TypeScript.",
    url: "/",
    siteName: "Nihal Puse",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Nihal Puse — Frontend Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nihal Puse — Frontend Developer",
    description: "Frontend developer building fast, accessible web interfaces.",
    images: ["/og.png"],
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
      </body>
    </html>
  );
}
