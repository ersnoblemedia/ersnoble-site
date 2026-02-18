import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutClientWrapper from "./components/LayoutClientWrapper";
import GlobalHeader from "./components/GlobalHeader";
import GlobalFooter from "./components/GlobalFooter";

const inter = Inter({ subsets: ["latin"] });

// 1. INSTITUTIONAL METADATA (SEO & Browser Tab)
export const metadata: Metadata = {
  title: "Ersnoble | Global Institutional Advisory",
  description: "Building the digital infrastructure for startups and global institutions.",
  icons: {
    icon: "/favicon.ico", // Ensure you have a favicon in your /public folder
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#020202] text-white selection:bg-[#008BFF] antialiased overflow-x-hidden`}>
        
        {/* 2. CLIENT-SIDE EFFECTS (Mouse Glow & Interactivity) */}
        <LayoutClientWrapper>
          {/* UNIVERSAL NAVIGATION */}
          <GlobalHeader />

          {/* PAGE CONTENT */}
          <main className="relative z-10 min-h-screen">
            {children}
          </main>

          {/* UNIVERSAL FOOTER */}
          <GlobalFooter />
        </LayoutClientWrapper>
        
      </body>
    </html>
  );
}