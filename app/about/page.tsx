"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ShieldCheck, Cpu, Terminal, Globe2,
  Zap, ArrowRight, Target,
  Workflow, PenTool, Activity, Smartphone,
  Layers, Box, Database, Code2
} from "lucide-react";
import Link from "next/link";

export default function AboutClient() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleLine = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as any
    }
  };

  return (
    <main ref={containerRef} className="bg-[#020202] text-white selection:bg-[#008BFF] font-sans antialiased overflow-x-hidden">

      {/* 1. HERO: PURE ENGINEERING POWER */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 pb-20 border-b border-white/5">
        <div className="absolute top-[15%] right-[-10%] w-[85vw] h-[85vw] md:w-[45vw] md:h-[45vw] bg-[#008BFF]/10 rounded-full blur-[70px] md:blur-[140px] pointer-events-none z-0" />

        <div className="max-w-[1800px] mx-auto w-full relative z-10">
          <motion.div {...fadeInUp} className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-[#008BFF]" />
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#008BFF]">System_Integrity // v2.6</span>
          </motion.div>

          <motion.h1 {...fadeInUp} className="text-[12vw] md:text-8xl lg:text-[110px] font-black uppercase tracking-tighter leading-[0.85] mb-12">
            We Engineer <br /> <span className="text-[#008BFF] italic text-transparent bg-clip-text bg-gradient-to-r from-[#008BFF] to-[#00D1FF]">Digital Sovereignty.</span>
          </motion.h1>

          <div className="grid lg:grid-cols-2 gap-12 md:gap-32 items-start">
            <div className="space-y-10">
              <motion.p {...fadeInUp} className="text-xl md:text-3xl font-light leading-snug text-white/90">
                Ersnoble is a <span className="text-white font-bold italic underline decoration-[#008BFF] decoration-4">Technical Systems Firm</span>. We construct the unified digital engines that power global brands and ambitious startups.
              </motion.p>

              <div className="flex flex-wrap gap-3">
                {["Software Engineering", "System Architecture", "Visual Identity"].map((tag, i) => (
                  <motion.div key={i} {...fadeInUp} className="px-4 py-2 bg-white/10 border border-white/20 rounded-sm">
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#008BFF]">{tag}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div {...fadeInUp} className="border-l border-white/10 pl-8 py-4 bg-white/[0.02] p-8 rounded-r-lg">
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#008BFF] mb-4">The Mandate</h3>
              <p className="text-[14px] md:text-[16px] text-white/80 uppercase tracking-widest leading-relaxed">
                We eliminate technical debt by deploying proprietary systems. We don't provide "advice"—we ship production-ready assets in 45-day cycles, ensuring you own your infrastructure entirely.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. THE ECOSYSTEM: UNIFIED HARMONY */}
      <section className="py-24 md:py-48 px-6 md:px-12 lg:px-24 border-b border-white/5 relative">
        <div className="max-w-[1800px] mx-auto">
          <motion.div {...fadeInUp} className="mb-20">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">The Ersnoble <br /><span className="text-[#008BFF]">Ecosystem.</span></h2>
            <p className="mt-6 max-w-2xl text-white/70 uppercase tracking-widest text-[12px] md:text-[14px] leading-relaxed">
              Startups often struggle with fragmented tools that don't talk to each other. We solve this by engineering a unified ecosystem where your brand, your software, and your growth systems live in total technical harmony.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Visual Authority",
                desc: "We build premium design languages engineered to establish immediate trust with global investors and high-tier clients.",
                icon: <PenTool className="text-[#008BFF]" />
              },
              {
                title: "Technical Power",
                desc: "Custom-built software engines designed for your specific needs. No templates, no bloat—just pure, scalable performance architecture.",
                icon: <Code2 className="text-[#008BFF]" />
              },
              {
                title: "Growth Logic",
                desc: "Conversion-first UI/UX designed to guide users effortlessly through your funnel, turning passive traffic into high-value leads.",
                icon: <Zap className="text-[#008BFF]" />
              }
            ].map((item, i) => (
              <motion.div key={i} {...fadeInUp} className="p-10 bg-white/[0.04] border border-white/10 relative group overflow-hidden transition-colors hover:bg-white/[0.07]">
                <div className="mb-6">{item.icon}</div>
                <h4 className="text-xl font-black uppercase tracking-widest mb-4">{item.title}</h4>
                <p className="text-[12px] text-white/60 uppercase tracking-widest leading-loose group-hover:text-white/90 transition-colors">{item.desc}</p>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#008BFF] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES: WHAT WE DO */}
      <section className="py-24 md:py-48 px-6 md:px-12 lg:px-24 bg-[#050505]">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
            {[
              {
                title: "Identity Systems",
                desc: "We engineer visual authority through bespoke design languages. We ensure your brand remains sovereign and distinct in competitive markets.",
                icon: <ShieldCheck size={32} />
              },
              {
                title: "Software Engines",
                desc: "High-performance full-stack applications. We build the internal and external tools that run your business operations with sub-second latency.",
                icon: <Cpu size={32} />
              },
              {
                title: "Infrastructure",
                desc: "Robust server architecture and database systems built for global scale. We ensure your system never goes down during peak demand.",
                icon: <Layers size={32} />
              },
              {
                title: "Mobile Units",
                desc: "Modern cross-platform applications that feel native. Optimized for performance and high user retention on any mobile device.",
                icon: <Smartphone size={32} />
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                className="bg-black p-10 md:p-20 group hover:bg-[#070707] transition-all duration-500 relative overflow-hidden"
              >
                <div className="mb-10 text-[#008BFF] group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_#008BFF] transition-all duration-500">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-black uppercase tracking-widest mb-6">{item.title}</h4>
                <p className="text-[13px] text-white/70 leading-relaxed uppercase tracking-[0.2em] group-hover:text-white/90 transition-colors">{item.desc}</p>
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#008BFF] group-hover:w-full transition-all duration-700 shadow-[0_0_15px_#008BFF]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE PROTOCOL: 45-DAY VELOCITY */}
      <section className="py-24 md:py-48 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="mb-32">
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">The 45-Day <br /> <span className="italic text-[#008BFF]">Velocity Cycle.</span></h2>
          </div>

          <div className="relative">
            <div className="absolute left-[23px] top-0 bottom-0 w-px bg-white/10">
              <motion.div style={{ scaleY: scaleLine, originY: 0 }} className="w-full h-full bg-[#008BFF] shadow-[0_0_20px_#008BFF]" />
            </div>

            <div className="space-y-32">
              {[
                {
                  step: "01",
                  title: "Diagnostic Audit",
                  desc: "We analyze your current brand and tech stack to identify bottlenecks. We find the fastest, most secure path to your market launch.",
                  icon: <Box />
                },
                {
                  step: "02",
                  title: "Parallel Build",
                  desc: "Engineering and Design happen at the same time. This ensures that the code and the visuals are perfectly synced for a seamless user experience.",
                  icon: <Workflow />
                },
                {
                  step: "03",
                  title: "Sovereign Launch",
                  desc: "Live initialization. Your system is stress-tested and deployed. We provide a full handover, ensuring you have 100% ownership of your technology.",
                  icon: <Terminal />
                }
              ].map((item, i) => (
                <motion.div key={i} {...fadeInUp} className="relative flex gap-10 md:gap-20 group">
                  <div className="relative z-10 h-12 w-12 rounded-full bg-black border border-white/20 flex items-center justify-center group-hover:border-[#008BFF] group-hover:shadow-[0_0_15px_rgba(0,139,255,0.4)] transition-all flex-shrink-0">
                    <span className="text-[10px] font-black group-hover:text-[#008BFF]">{item.step}</span>
                  </div>
                  <div className="pt-2">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-white/20 group-hover:text-[#008BFF] transition-colors">{item.icon}</div>
                      <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">{item.title}</h3>
                    </div>
                    <p className="max-w-2xl text-white/70 text-[14px] md:text-lg leading-relaxed uppercase tracking-wider group-hover:text-white transition-colors">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONVERSION: CALL TO BUILD */}
      <section className="py-32 md:py-64 px-6 text-center bg-white text-black relative">
        <div className="max-w-5xl mx-auto">
          <motion.h2 {...fadeInUp} className="text-6xl md:text-[130px] font-black uppercase tracking-tighter leading-[0.85] mb-16">
            Execute <br /> <span className="text-[#008BFF]">the Vision.</span>
          </motion.h2>

          <Link href="/contact" className="group inline-flex flex-col items-center">
            <div className="flex items-center gap-6 md:gap-12 border-b-[6px] md:border-b-8 border-black pb-4 md:pb-8 group-hover:gap-16 transition-all duration-700">
              <span className="text-3xl md:text-8xl font-[1000] uppercase tracking-tighter">Initialize Build</span>
              <ArrowRight className="w-10 h-10 md:w-24 md:h-24 text-[#008BFF] group-hover:translate-x-4 transition-transform" />
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}