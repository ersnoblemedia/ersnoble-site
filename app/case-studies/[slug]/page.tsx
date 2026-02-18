"use client";
import { motion } from "framer-motion";
import { ArrowLeft, Zap, Shield, Activity, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

// THE DATA MESH: Verified High-Resolution Architectural Assets
const CASE_STUDIES_DATA: any = {
  "revenue-flow-architecture": {
    title: "Revenue Flow Architecture",
    client: "Fintech Leader",
    year: "2025",
    // Aesthetic: Modern Finance/Tech Glass (Lagos Civic-style)
    image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2787&auto=format&fit=crop",
    metrics: [
      { label: "Transaction Speed", value: "+140%", icon: <Zap size={18} /> },
      { label: "User Retention", value: "88%", icon: <Activity size={18} /> },
      { label: "System Uptime", value: "99.9%", icon: <Shield size={18} /> }
    ],
    challenge: "The client’s existing brand identity was fragmented across multiple sub-platforms, causing massive friction in high-volume transaction environments.",
    solution: "We deployed a unified Brand Governance Protocol and reconstructed the core API mesh to align visual trust with real-time system performance."
  },
  "brand-identity-framework": {
    title: "Institutional Re-alignment",
    client: "Aviation Group",
    year: "2024",
    // Aesthetic: Corporate Glass/Steel (Lagos Eko Tower-style)
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop",
    metrics: [
      { label: "Brand Equity", value: "Institutional", icon: <Shield size={18} /> },
      { label: "Global Presence", value: "5 Countries", icon: <Activity size={18} /> },
      { label: "Asset Synergy", value: "100%", icon: <Zap size={18} /> }
    ],
    challenge: "A leading aviation firm lacked a cohesive visual language to match its global logistics complexity, causing friction in B2B negotiations.",
    solution: "Engineered a high-fidelity visual infrastructure and digital brand book used across all international hubs to ensure pedigree consistency."
  },
  "digital-ecosystem-build": {
    title: "Digital Ecosystem Build",
    client: "Real Estate",
    year: "2025",
    // Aesthetic: Minimalist Urban Geometry (Abuja CBD-style)
    image: "https://images.unsplash.com/photo-1449156001931-82997297390d?q=80&w=2940&auto=format&fit=crop",
    metrics: [
      { label: "Asset Sync", value: "Real-Time", icon: <Activity size={18} /> },
      { label: "Management Load", value: "-45%", icon: <Zap size={18} /> },
      { label: "Data Integrity", value: "100%", icon: <Shield size={18} /> }
    ],
    challenge: "Managing disparate property data across multiple regions resulted in 30% data loss and significant operational lag for the holding group.",
    solution: "Created a unified digital dashboard that aggregates global assets into a single source of truth with automated reporting and equity tracking."
  },
  "market-entry-infrastructure": {
    title: "Market Entry Infrastructure",
    client: "Energy Sector",
    year: "2026",
    // Aesthetic: Engineering/Connectivity (Bridge-style)
    image: "https://images.unsplash.com/photo-1478479405421-ce83c92fb3ba?q=80&w=2787&auto=format&fit=crop",
    metrics: [
      { label: "Compliance Rate", value: "100%", icon: <Shield size={18} /> },
      { label: "Deployment Time", value: "6 Weeks", icon: <Zap size={18} /> },
      { label: "Regulatory Sync", value: "Global", icon: <Activity size={18} /> }
    ],
    challenge: "The client needed to enter three new international markets but lacked the localized brand compliance and technical API infrastructure to scale.",
    solution: "We deployed a modular market-entry kit that localized brand assets while maintaining global technical standards via an encrypted asset mesh."
  }
};

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug as string;
  const study = CASE_STUDIES_DATA[slug];

  if (!study) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">
        <p className="text-accent font-mono text-[10px] mb-4 uppercase tracking-[0.4em]">Auth Error // 404</p>
        <h1 className="text-2xl font-black uppercase mb-8 tracking-tighter">Slug "{slug}" Not Found</h1>
        <Link href="/#deployments" className="bg-white text-black px-8 py-4 text-[10px] font-black uppercase tracking-widest">Return Base</Link>
      </div>
    );
  }

  return (
    <main className="relative min-h-screen bg-[#050505] text-white font-sans antialiased">
      
      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/90 backdrop-blur-md px-6 h-20 flex items-center justify-between">
        <Link href="/#deployments" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] group">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Deployments
        </Link>
        <img src="/logo.svg" alt="Ersnoble" className="h-7 w-auto" />
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-48 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-accent font-mono text-[10px] uppercase tracking-[0.4em] mb-4">Diagnostic Report // Archive_{study.year}</p>
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-12">{study.title}</h1>
            
            <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10 overflow-hidden">
              {study.metrics.map((m: any, i: number) => (
                <div key={i} className="bg-[#0A0A0A] p-10 flex items-center gap-6 group hover:bg-black transition-all">
                  <div className="text-accent group-hover:scale-110 transition-transform">{m.icon}</div>
                  <div>
                    <p className="text-3xl font-black uppercase tracking-tighter">{m.value}</p>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{m.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ANALYSIS GRID */}
          <div className="grid lg:grid-cols-2 gap-24 py-20 border-t border-white/5 items-start">
            <div className="space-y-16">
              <div>
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-6 font-mono">01 // Problem Statement</h2>
                <p className="text-xl text-gray-300 leading-relaxed font-medium">{study.challenge}</p>
              </div>
              <div>
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-6 font-mono">02 // Technical Solution</h2>
                <p className="text-xl text-gray-300 leading-relaxed font-medium">{study.solution}</p>
              </div>
            </div>
            
            <div className="relative border border-white/10 p-2 bg-[#0A0A0A] group">
               <div className="aspect-[4/5] relative overflow-hidden bg-[#050505]">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-8 left-8 right-8">
                     <div className="w-12 h-1 bg-accent mb-4" />
                     <p className="text-[9px] font-black uppercase tracking-[0.5em] text-white/40 group-hover:text-white transition-colors">Infrastructure Node_{study.year}</p>
                  </div>
               </div>
               <div className="absolute -top-1 -right-1 w-4 h-4 border-t border-r border-accent" />
               <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b border-l border-accent" />
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-48 text-center bg-[#0A0A0A] border-t border-white/10 px-6">
        <h2 className="text-4xl md:text-6xl font-black uppercase mb-12 tracking-tight">Request Operational <br /> Audit</h2>
        <Link href="/contact" className="bg-white text-black px-12 py-6 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-accent hover:text-white transition-all shadow-2xl inline-block">
          Initiate Protocol
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="py-20 bg-black border-t border-white/10 text-center px-6">
        <img src="/logo.svg" alt="Ersnoble" className="h-6 w-auto mx-auto mb-8 opacity-40 grayscale" />
        <p className="text-[10px] font-black text-gray-600 tracking-[0.8em] uppercase leading-loose">
          Ersnoble — Built in Nigeria. Operating Globally. © 2026
        </p>
      </footer>
    </main>
  );
}