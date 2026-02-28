import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutClientWrapper from "./components/LayoutClientWrapper";
import GlobalHeader from "./components/GlobalHeader";
import GlobalFooter from "./components/GlobalFooter";
import Analytics from "./components/Analytics";

const inter = Inter({ subsets: ["latin"] });

// 1. INSTITUTIONAL METADATA (SEO & Browser Tab)
export const metadata: Metadata = {
  metadataBase: new URL('https://ersnoblemedia.com'),
  title: {
    // Reflects the Ecosystem: Engineering + Authority
    default: "Ersnoble Media | Engineering Digital Engines & Visual Authority",
    template: "%s | Ersnoble Media"
  },
  description: "Specialized systems firm engineering high-performance digital infrastructure, brand sovereignty, and institutional software within a 45-day velocity window.",
  keywords: [
    "Technical Sovereignty",
    "Web Development",
    "Brand Identity",
    "Graphic Design",
    "Mobile Application",
    "Mobile Development",
    "Digital Engine Engineering",
    "Brand Authority Systems",
    "Institutional Web Architecture",
    "Product Engineering Firm",
    "Global Advisory Infrastructure",
    "45-Day System Deployment",
    "High-Performance UI Strategy"
  ],
  authors: [{ name: "Ersnoble Media" }],
  creator: "Ersnoble Media",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ersnoblemedia.com",
    siteName: "Ersnoble Media",
    title: "Ersnoble Media | Digital Sovereignty & Product Engineering",
    description: "Constructing high-performance digital engines for brands who refuse to settle for standard solutions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ersnoble Media System_Core_v2.6"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Ersnoble Media | Engineering Digital Engines & Visual Authority",
    description: "Built for the ambitious. High-velocity digital systems and institutional infrastructure.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#020202] text-white selection:bg-[#008BFF] antialiased overflow-x-hidden`}>

        {/* INITIALIZE OMNIPRESENCE TRACKING */}
        <Analytics />

        {/* 2. CLIENT-SIDE EFFECTS (Mouse Glow & Interactivity) */}
        <LayoutClientWrapper>

          {/* UNIVERSAL NAVIGATION (GLOBAL HEADER) */}
          <GlobalHeader />

          {/* PAGE CONTENT */}
          <main className="relative z-10 min-h-screen">
            {children}
          </main>

          {/* UNIVERSAL FOOTER (GLOBAL FOOTER) */}
          <GlobalFooter />

        </LayoutClientWrapper>

      </body>
    </html>
  );
}