"use client";
import { motion } from "framer-motion";
import { 
  ArrowRight, ShieldCheck, Zap, Globe, BarChart3, 
  Layers, Cpu, Workflow, ChevronRight, ArrowLeft 
} from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      category: "Phase 01",
      title: "Brand Infrastructure",
      description: "Engineering a visual and narrative foundation that supports institutional scale.",
      features: ["Visual Identity Systems", "Brand Governance Protocols", "Strategic Positioning", "Market Entry Frameworks"],
      icon: <Layers className="text-accent" size={24} />
    },
    {
      category: "Phase 02",
      title: "Systems Architecture",
      description: "Hardening the digital core to eliminate operational bottlenecks and technical debt.",
      features: ["Custom Digital Ecosystems", "Revenue Flow Automation", "Infrastructure Audits", "API & Cloud Integration"],
      icon: <Cpu className="text-accent" size={24} />
    },
    {
      category: "Phase 03",
      title: "Operational Scale",
      description: "Deploying the infrastructure into global markets with high-fidelity performance tracking.",
      features: ["Multi-Market Deployment", "Growth Analytics Systems", "Performance Optimization", "Continuous Infrastructure Support"],
      icon: <Workflow className="text-accent" size={24} />
    }
  ];

  return (
    <main className="relative min-h-screen bg-[#050505] text-white font-sans antialiased">
      
      {/* HEADER */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.3em] group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
            <img 
            src="/logo.svg" 
            alt="Ersnoble Logo" 
            className="h-8 md:h-9 w-auto object-contain brightness-100 group-hover:brightness-110 transition-all duration-500"
          />
          </Link>
          <div className="hidden md:block text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500">
            Capabilities // Technical Specifications
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-48 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
              Technical <br /> <span className="text-accent">Capabilities</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed font-medium">
              We deploy modular infrastructure designed to align brand equity with operational performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {services.map((service, i) => (
              <div key={i} className="bg-[#0A0A0A] p-12 hover:bg-[#111] transition-all group relative overflow-hidden flex flex-col justify-between min-h-[500px]">
                <div className="relative z-10">
                  <span className="text-accent font-mono text-[10px] uppercase tracking-[0.4em] mb-6 block">
                    {service.category}
                  </span>
                  <div className="mb-8">{service.icon}</div>
                  <h3 className="text-2xl font-black uppercase mb-6 tracking-tight group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-10">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4 mb-10">
                    {service.features.map(feature => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="w-1 h-1 bg-accent/40" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* THE DYNAMIC ENGAGEMENT LINK */}
                <div className="relative z-10 mt-auto">
                  <Link 
                    href={`/contact?service=${service.title.replace(/\s+/g, '-').toLowerCase()}`}
                    className="inline-flex items-center gap-4 text-accent text-[10px] font-black uppercase tracking-[0.3em] hover:text-white transition-colors group"
                  >
                    Begin {service.title} Engagement 
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                {/* Glow effect */}
                <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-accent/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY SECTION */}
      <section className="relative py-32 bg-[#050505] px-6">
        <div className="max-w-5xl mx-auto border border-white/10 p-12 bg-[#0A0A0A]">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-6">The Integration <br />Standard</h2>
              <p className="text-sm text-gray-400 leading-relaxed mb-8">
                Unlike creative agencies that focus solely on aesthetics, Ersnoble audits your entire technical stack. We ensure that every brand asset is linked to a functional system.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-4 text-accent text-[10px] font-black uppercase tracking-[0.3em] hover:text-white transition-colors">
                Request Audit Protocol <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 border border-white/5 bg-black/40">
                <p className="text-2xl font-black text-white mb-2">99%</p>
                <p className="text-[8px] uppercase tracking-widest text-gray-500">System Uptime</p>
              </div>
              <div className="p-6 border border-white/5 bg-black/40">
                <p className="text-2xl font-black text-white mb-2">3.5x</p>
                <p className="text-[8px] uppercase tracking-widest text-gray-500">Avg Efficiency</p>
              </div>
              <div className="p-6 border border-white/5 bg-black/40">
                <p className="text-2xl font-black text-white mb-2">0%</p>
                <p className="text-[8px] uppercase tracking-widest text-gray-500">Tech Debt</p>
              </div>
              <div className="p-6 border border-white/5 bg-black/40">
                <p className="text-2xl font-black text-white mb-2">12+</p>
                <p className="text-[8px] uppercase tracking-widest text-gray-500">Market Reach</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-48 text-center bg-[#0A0A0A] border-t border-white/10">
        <h2 className="text-4xl md:text-6xl font-black uppercase mb-12 tracking-tight">Deploy Your <br />Infrastructure</h2>
        <Link href="/contact" className="bg-white text-black px-12 py-6 text-sm font-black uppercase tracking-[0.2em] hover:bg-accent hover:text-white transition-all">
          Initiate Consultation
        </Link>
      </section>

      <footer className="py-20 bg-black text-center border-t border-white/10 px-6">
        <p className="text-[10px] font-black text-gray-700 tracking-[0.6em] uppercase">
          Ersnoble — Systematic Excellence © 2026
        </p>
      </footer>
    </main>
  );
}