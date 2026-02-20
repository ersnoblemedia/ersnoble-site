"use client";
import React, { useRef, use, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, Activity, Zap, Terminal, Cpu, ShieldCheck } from "lucide-react";
import Link from "next/link";

// 1. DATA ARCHIVE - REFINED FOR GLOBAL INSTITUTIONAL POSITIONING
const projectData: any = {
  "ersnoble-ecosystem": {
    title: "Ersnoble",
    subtitle: "Digital Sovereignty.",
    category: "Product Engineering // Infrastructure",
    summary: "Engineering the digital flagship for our Global Institutional Advisory. We deployed a high-velocity visual engine that commands market authority and ensures visitors are converted into elite leads.",
    details: [
      { label: "Deployment", value: "High-Performance Architecture" },
      { label: "Engineering", value: "100/100 Mobile Responsiveness" },
      { label: "Protocol", value: "SVRN_1 Security Integration" }
    ],
    outcome: "A technical powerhouse that communicates institutional dominance immediately."
  },
  "infoware-limited": {
    title: "InfoWARE",
    subtitle: "Financial OS.",
    category: "Infrastructure // FinTech",
    summary: "InfoWARE empowers decision makers with real-time market data. We engineered their digital presence to function as a high-performance operating system for modern business.",
    details: [
      { label: "Sector", value: "Financial Software Solutions" },
      { label: "Data Core", value: "Real-Time Market Intelligence" },
      { label: "Integration", value: "AI-Driven Business Logic" }
    ],
    outcome: "Modernized technical infrastructure for Africa's #1 software provider."
  }
};

const ScrollGlowText = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0.3, 1], [0.3, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const textShadow = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px 0px 0px rgba(0,139,255,0)", "0px 0px 30px rgba(0,139,255,0.4)"]
  );

  return (
    <motion.div ref={ref} style={{ opacity, y, textShadow }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
};

export default function ProjectClient({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const project = projectData[id] || projectData["ersnoble-ecosystem"];

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <main className="bg-[#020202] text-white min-h-screen pb-24 selection:bg-[#008BFF] overflow-x-hidden relative">

      {/* ADAPTIVE GLOW - Institutional Atmosphere */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-20 transition-opacity duration-1000 hidden md:block"
        style={{
          background: `radial-gradient(circle 500px at ${mousePos.x}px ${mousePos.y}px, rgba(0, 139, 255, 0.12), transparent 80%)`
        }}
      />
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10 md:hidden bg-[radial-gradient(circle_at_50%_30%,rgba(0,139,255,0.2),transparent_70%)]" />

      {/* INTERNAL NAVIGATION - Sticky for better usability */}
      <nav className="sticky top-0 w-full z-50 px-6 md:px-12 py-8 flex justify-between items-center bg-black/40 backdrop-blur-xl border-b border-white/5">
        <Link href="/#works" className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-white/50 hover:text-[#008BFF] transition-all">
          <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform duration-500" />
          <span>Exit_to_Archive</span>
        </Link>
        <div className="flex items-center gap-3 text-[10px] font-mono text-[#008BFF] uppercase tracking-widest bg-[#008BFF]/5 px-4 py-2 rounded-full border border-[#008BFF]/20">
          <Terminal size={12} />
          <span>Node_{id.toUpperCase().replace('-', '_')}</span>
        </div>
      </nav>

      {/* HERO SECTION - Engineered Identity */}
      <section className="pt-32 md:pt-56 px-6 md:px-12 lg:px-24 border-b border-white/5 pb-24 relative z-10">
        <div className="max-w-[1800px] mx-auto grid lg:grid-cols-2 gap-16 md:gap-32 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as any }}
          >
            <h1 className="text-[14vw] md:text-8xl lg:text-[110px] font-black uppercase tracking-tighter leading-[0.85] mb-12">
              {project.title} <br />
              <span className="text-white/10 italic font-light">{project.subtitle}</span>
            </h1>
            <div className="inline-flex items-center gap-3 px-5 py-2 border border-[#008BFF]/30 rounded-full bg-[#008BFF]/5 font-mono text-[9px] uppercase tracking-[0.4em] text-[#008BFF]">
              <Cpu size={14} />
              {project.category}
            </div>
          </motion.div>

          <div className="group bg-white/[0.02] border border-white/10 p-8 md:p-14 rounded-2xl relative overflow-hidden transition-all duration-700 hover:border-[#008BFF]/40">
            <div className="absolute top-0 left-0 w-[2px] h-full bg-[#008BFF] shadow-[0_0_20px_#008BFF]" />
            <h3 className="text-[10px] font-black uppercase tracking-[0.6em] text-white/30 mb-8">Executive_Briefing</h3>
            <ScrollGlowText>
              <p className="text-xl md:text-3xl lg:text-4xl font-light leading-snug text-white tracking-tight italic">
                "{project.summary}"
              </p>
            </ScrollGlowText>
          </div>
        </div>
      </section>

      {/* STATS GRID - Spec Sheets */}
      <section className="px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border-x border-white/10">
          {project.details.map((item: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-[#020202] p-12 md:p-20 space-y-10 group transition-all duration-700 relative overflow-hidden border-b border-white/10"
            >
              <div className="flex justify-between items-start">
                <span className="text-[9px] font-mono text-[#008BFF] tracking-[0.5em] uppercase opacity-40">UNIT_SPEC_0{i + 1}</span>
                <ShieldCheck size={16} className="text-white/5 group-hover:text-[#008BFF] transition-all duration-500 group-hover:drop-shadow-[0_0_8px_#008BFF]" />
              </div>
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 group-hover:text-white mb-4 transition-colors">{item.label}</h4>
                <p className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tighter leading-tight group-hover:translate-x-2 transition-transform duration-700">{item.value}</p>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#008BFF] group-hover:w-full transition-all duration-1000 shadow-[0_0_20px_#008BFF]" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* OUTCOME SECTION - Conversion Core */}
      <section className="py-32 md:py-48 px-6 md:px-12 lg:px-24 relative z-10 overflow-hidden">
        <div className="max-w-[1800px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-20">
          <div className="space-y-6 max-w-3xl text-center md:text-left">
            <div className="inline-flex items-center gap-3 text-[#008BFF] text-[10px] font-black uppercase tracking-[0.6em] mb-4">
              <Activity size={18} className="animate-pulse shadow-[0_0_10px_#008BFF]" /> Operational_Validation
            </div>
            <ScrollGlowText>
              <h2 className="text-white text-3xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                {project.outcome}
              </h2>
            </ScrollGlowText>
          </div>

          <Link href="/contact" className="group relative bg-white text-black px-16 py-8 text-[11px] font-black uppercase tracking-[0.5em] hover:bg-[#008BFF] hover:text-white transition-all duration-700 overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.05)]">
            <span className="relative z-10 flex items-center gap-4">
              Initialize Mandate <Zap size={16} />
            </span>
            <div className="absolute inset-0 bg-[#008BFF] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.22, 1, 0.36, 1]" />
          </Link>
        </div>
      </section>
    </main>
  );
}