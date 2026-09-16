import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter, Newsreader, Syne } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { profile, siteUrl } from "@/content/profile";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const description =
  "Acyuth Gopalakrishnan — MS in Business Analytics at Carnegie Mellon University with a computer science and data science background. Case studies in credit risk analytics, enterprise AI, and applied machine learning.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — Business & Data Analytics`,
    template: `%s — ${profile.name}`,
  },
  description,
  keywords: [
    "Business Analyst",
    "Data Analyst",
    "Business Intelligence Analyst",
    "Analytics Consultant",
    "Business Analytics",
    "Carnegie Mellon University",
    "Tepper School of Business",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: profile.name,
    title: `${profile.name} — Business & Data Analytics`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Business & Data Analytics`,
    description,
  },
  alternates: { canonical: "/" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  url: siteUrl,
  address: { "@type": "PostalAddress", addressLocality: "Pittsburgh", addressRegion: "PA" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Carnegie Mellon University" },
    { "@type": "CollegeOrUniversity", name: "Vellore Institute of Technology" },
  ],
  knowsAbout: [
    "Business Analytics",
    "Data Analysis",
    "Credit Risk Analytics",
    "Business Intelligence",
    "Machine Learning",
    "Statistical Analysis",
  ],
  sameAs: [profile.links.linkedin, profile.links.github],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Font variables must live on :root: the Tailwind --font-* tokens that
  // reference them are declared there, so var() would not resolve from <body>.
  return (
    <html
      lang="en"
      className={`no-js ${inter.variable} ${syne.variable} ${newsreader.variable} ${plexMono.variable}`}
    >
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.remove('no-js')`,
          }}
        />
        <a
          href="#main"
          className="label sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-sm focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="pt-16 sm:pt-[4.5rem]">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
