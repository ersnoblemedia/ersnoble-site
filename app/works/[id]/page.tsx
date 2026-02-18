"use client";
import React, { useRef, use } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, Activity } from "lucide-react";
import Link from "next/link";

// 1. DATA ARCHIVE
const projectData: any = {
  "ersnoble-redesign": {
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

// 2. INTERNAL GLOW COMPONENT
const ScrollGlowText = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "center center"], 
  });

  // EDIT OPACITY HERE: [Initial Value, Final Value]
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]); 
  
  const y = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const textShadow = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px 0px 0px rgba(0,139,255,0)", "0px 0px 15px rgba(0,139,255,0.3)"]
  );

  return (
    <motion.div ref={ref} style={{ opacity, y, textShadow }} transition={{ duration: 0.8 }}>
      {children}
    </motion.div>
  );
};

// 3. MAIN PAGE COMPONENT
export default function ProjectDetailView({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const project = projectData[id] || projectData["ersnoble-redesign"];

  return (
    <main className="bg-[#020202] text-white min-h-screen pb-24 selection:bg-[#008BFF] overflow-x-hidden relative">
      
      {/* AMBIENT BACKGROUND GLOW */}
      <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-[#008BFF]/5 blur-[180px] pointer-events-none rounded-full z-0" />

      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 px-6 md:px-12 py-10 flex justify-between items-center bg-black/50 backdrop-blur-xl border-b border-white/5">
        <Link href="/#works" className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-white/50 hover:text-[#008BFF] transition-all">
          <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
          <span>Exit_to_Archive</span>
        </Link>
        <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/10">
          Project_ID: {id.toUpperCase().replace('-', '_')}
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-40 md:pt-60 px-6 md:px-12 lg:px-24 border-b border-white/5 pb-20 relative z-10">
        <div className="max-w-[1800px] mx-auto grid lg:grid-cols-2 gap-12 md:gap-20 items-end">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-8xl lg:text-[110px] font-black uppercase tracking-tighter leading-[0.85] mb-12">
              {project.title} <br /> <span className="text-white/10 italic">{project.subtitle}</span>
            </h1>
            <div className="flex flex-wrap gap-3 font-mono text-[9px] uppercase tracking-widest text-white/40">
              <span className="px-4 py-2 border border-white/10 rounded-full bg-white/[0.02] tracking-[0.6em]">{project.category}</span>
            </div>
          </motion.div>

          {/* EXECUTIVE SUMMARY BOX */}
          <div className="bg-white/[0.02] border border-white/10 p-8 md:p-12 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#008BFF] shadow-[0_0_15px_#008BFF]" />
            <h3 className="text-[10px] font-black uppercase tracking-[0.6em] text-white/20 mb-8 underline decoration-[#008BFF] underline-offset-8">Executive Summary</h3>
            <ScrollGlowText>
              <p className="text-lg md:text-2xl lg:text-3xl font-light leading-relaxed text-white italic tracking-tight italic opacity-100">
                "{project.summary}"
              </p>
            </ScrollGlowText>
          </div>
        </div>
      </section>

      {/* STATS GRID */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-[#050505] relative z-10">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {project.details.map((item: any, i: number) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-black p-10 md:p-16 space-y-6 group hover:bg-[#080808] transition-all relative"
            >
              <span className="text-[10px] font-mono text-[#008BFF] tracking-widest uppercase opacity-60">Proprietary_Logic_{i+1}</span>
              <h4 className="text-xl md:text-2xl font-black uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">{item.label}</h4>
              <p className="text-sm md:text-lg font-bold text-white uppercase tracking-tighter">{item.value}</p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#008BFF] group-hover:w-full transition-all duration-700 shadow-[0_0_15px_#008BFF]" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* OUTCOME SECTION */}
      <section className="py-20 px-6 md:px-12 lg:px-24 border-t border-white/5 relative z-10">
        <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="space-y-4 max-w-2xl text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-[#008BFF] text-[10px] font-black uppercase tracking-widest">
              <Activity size={14}/> Operational_Outcome
            </div>
            <ScrollGlowText>
              <p className="text-white text-lg md:text-2xl lg:text-3xl uppercase tracking-wider leading-relaxed">
                {project.outcome}
              </p>
            </ScrollGlowText>
          </div>
          
          <Link href="/contact" className="group relative bg-white text-black px-12 py-6 text-[10px] font-black uppercase tracking-[0.4em] hover:bg-[#008BFF] hover:text-white transition-all duration-500 overflow-hidden">
            <span className="relative z-10">Initialize Protocol</span>
            <div className="absolute inset-0 bg-[#008BFF] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </Link>
        </div>
      </section>

    </main>
  );
}