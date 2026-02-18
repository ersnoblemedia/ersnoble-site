"use client";
import React, { useRef, use, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, Activity, Zap } from "lucide-react";
import Link from "next/link"; // Aligned with Homepage

// 1. DATA ARCHIVE - IDs ALIGNED WITH HOMEPAGE
const projectData: any = {
  "ersnoble-ecosystem": { // Changed from 'redesign' to 'ecosystem' to match Home
    title: "Ersnoble",
    subtitle: "Digital Sovereignty.",
    category: "System Redesign // Advisory",
    summary: "Engineering the digital flagship for our Global Institutional Advisory. We focused on visual authority and technical power to ensure visitors are converted into high-value leads.",
    details: [
      { label: "Architecture", value: "High-Performance Digital Infrastructure" },
      { label: "Optimization", value: "100/100 Mobile Responsiveness" },
      { label: "Security", value: "SVRN_1 Protocol Integration" }
    ],
    outcome: "A visual engine that communicates 'Institutional Power' immediately."
  },
  "infoware-limited": {
    title: "InfoWARE",
    subtitle: "Business OS.",
    category: "Infrastructure // Financial Tech",
    summary: "InfoWARE empowers decision makers with real-time market data, a dynamic network of information, and powerful software to run an entire business.",
    details: [
      { label: "Segment", value: "The Operating System of Business" },
      { label: "Focus", value: "Real-Time Market Data & EOMS" },
      { label: "Innovation", value: "AI-Driven Financial Intelligence" }
    ],
    outcome: "A modernized digital presence for Africa's #1 Software Solutions Provider."
  }
};

const ScrollGlowText = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "center center"], 
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]); 
  const y = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const textShadow = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px 0px 0px rgba(0,139,255,0)", "0px 0px 20px rgba(0,139,255,0.4)"]
  );

  return (
    <motion.div ref={ref} style={{ opacity, y, textShadow }} transition={{ duration: 0.8, ease: "easeOut" }}>
      {children}
    </motion.div>
  );
};

export default function ProjectDetailView({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  // Fallback to ecosystem if ID doesn't match
  const project = projectData[id] || projectData["ersnoble-ecosystem"];
  
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <main className="bg-[#020202] text-white min-h-screen pb-24 selection:bg-[#008BFF] overflow-x-hidden relative">
      
      {/* GLOW ALIGNED WITH HOMEPAGE */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-20 transition-opacity duration-1000 hidden md:block"
        style={{ 
          background: `radial-gradient(circle 600px at ${mousePos.x}px ${mousePos.y}px, rgba(0, 139, 255, 0.15), transparent 80%)` 
        }} 
      />
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20 md:hidden bg-[radial-gradient(circle_at_50%_50%,rgba(0,139,255,0.15),transparent_70%)]" />

      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 px-6 md:px-12 py-8 flex justify-between items-center bg-black/60 backdrop-blur-2xl border-b border-white/5">
        <Link href="/#works" className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-white/50 hover:text-[#008BFF] transition-all">
          <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform duration-500" />
          <span>Exit_to_Archive</span>
        </Link>
        <div className="text-[10px] font-mono text-[#008BFF] uppercase tracking-widest bg-[#008BFF]/5 px-4 py-2 rounded-full border border-[#008BFF]/20">
          System_Node: {id.toUpperCase().replace('-', '_')}
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-48 md:pt-64 px-6 md:px-12 lg:px-24 border-b border-white/5 pb-24 relative z-10">
        <div className="max-w-[1800px] mx-auto grid lg:grid-cols-2 gap-16 md:gap-24 items-end">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as any }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-[120px] font-black uppercase tracking-tighter leading-[0.8] mb-12">
              {project.title} <br /> 
              <span className="text-white/10 italic font-light">{project.subtitle}</span>
            </h1>
            <div className="inline-block px-5 py-2 border border-[#008BFF]/30 rounded-full bg-[#008BFF]/5 font-mono text-[10px] uppercase tracking-[0.4em] text-[#008BFF]">
              {project.category}
            </div>
          </motion.div>

          <div className="group bg-white/[0.01] border border-white/5 p-8 md:p-14 rounded-2xl relative overflow-hidden transition-all duration-700 hover:border-[#008BFF]/30">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#008BFF] shadow-[0_0_20px_#008BFF]" />
            <h3 className="text-[10px] font-black uppercase tracking-[0.6em] text-white/30 mb-8">Executive_Briefing</h3>
            <ScrollGlowText>
              <p className="text-xl md:text-3xl lg:text-4xl font-light leading-snug text-white tracking-tight italic">
                "{project.summary}"
              </p>
            </ScrollGlowText>
          </div>
        </div>
      </section>

      {/* STATS GRID */}
      <section className="py-0 px-6 md:px-12 lg:px-24 bg-[#020202] relative z-10">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border-x border-white/5">
          {project.details.map((item: any, i: number) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-[#020202] p-12 md:p-20 space-y-8 group transition-all duration-700 relative overflow-hidden border-b border-white/5"
            >
              <div className="flex justify-between items-start">
                <span className="text-[9px] font-mono text-[#008BFF] tracking-[0.5em] uppercase opacity-40">PROTOCOL_0{i+1}</span>
                <Zap size={14} className="text-white/5 group-hover:text-[#008BFF] transition-colors duration-500" />
              </div>
              <div>
                <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-white/20 group-hover:text-white mb-4">{item.label}</h4>
                <p className="text-xl md:text-2xl font-bold text-white uppercase tracking-tighter leading-tight group-hover:translate-x-2 transition-transform duration-700">{item.value}</p>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#008BFF] group-hover:w-full transition-all duration-1000 ease-in-out shadow-[0_0_20px_#008BFF]" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* OUTCOME SECTION */}
      <section className="py-32 md:py-48 px-6 md:px-12 lg:px-24 relative z-10 overflow-hidden">
        <div className="max-w-[1800px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-20">
          <div className="space-y-6 max-w-3xl text-center md:text-left">
            <div className="inline-flex items-center gap-3 text-[#008BFF] text-[10px] font-black uppercase tracking-[0.6em] mb-4">
              <Activity size={16} className="animate-pulse"/> Operational_Validation
            </div>
            <ScrollGlowText>
              <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
                {project.outcome}
              </h2>
            </ScrollGlowText>
          </div>
          
          <Link href="/contact" className="group relative bg-white text-black px-16 py-8 text-[11px] font-black uppercase tracking-[0.5em] hover:bg-[#008BFF] hover:text-white transition-all duration-700 overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.05)]">
            <span className="relative z-10 flex items-center gap-4">
              Initialize Mandate <Activity size={16} />
            </span>
            <div className="absolute inset-0 bg-[#008BFF] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.22, 1, 0.36, 1]" />
          </Link>
        </div>
      </section>
    </main>
  );
}