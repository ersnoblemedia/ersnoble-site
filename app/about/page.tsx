"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion"; 
import { 
  ShieldCheck, Cpu, Terminal, Globe2, 
  Zap, ArrowRight, Eye, Target, 
  Lock, Workflow, Boxes
} from "lucide-react";
import Link from "next/link";

export default function ErsnobleAboutBuild() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleLine = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // VERCEL-FIXED CONSTANT: 
  // We use "as any" on transition to bypass the strict string-type check in Vercel.
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { 
      duration: 0.7, 
      ease: [0.22, 1, 0.36, 1] as any 
    }
  };

  return (
    <main ref={containerRef} className="bg-[#020202] text-white selection:bg-[#008BFF] font-sans antialiased overflow-x-hidden">
      
      {/* 1. HERO: MISSION MANIFESTO */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-40 pb-20 border-b border-white/5">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-[#008BFF]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-[1800px] mx-auto w-full relative z-10">
          <motion.div {...fadeInUp} className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-[#008BFF]" />
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#008BFF]">The Mission // Alpha</span>
          </motion.div>
          
          <motion.h1 {...fadeInUp} className="text-[14vw] md:text-8xl lg:text-[120px] font-black uppercase tracking-tighter leading-[0.85] mb-16">
            Global <br /> <span className="text-white/20 italic">Architects.</span>
          </motion.h1>

          <div className="grid lg:grid-cols-2 gap-16 md:gap-32 items-start">
            <motion.p {...fadeInUp} className="text-xl md:text-3xl font-light leading-snug text-white/90">
              We bridge the gap between <span className="text-[#008BFF] font-black italic">bold vision</span> and <span className="text-white font-black underline decoration-[#008BFF]">world-class execution.</span>
            </motion.p>
            <div className="space-y-8">
              <motion.p {...fadeInUp} className="text-[11px] md:text-[13px] text-white/40 uppercase tracking-[0.2em] leading-relaxed max-w-lg">
                Ersnoble is a specialized advisory for those who require more than just a website. We build the digital infrastructure that secures your brand's future and global scalability.
              </motion.p>
              {/* Startup Inclusivity Tag */}
              <motion.div {...fadeInUp} className="inline-flex items-center gap-3 px-5 py-3 bg-[#008BFF]/5 border border-[#008BFF]/20 rounded-xl">
                <Boxes size={16} className="text-[#008BFF]" />
                <span className="text-[9px] font-mono uppercase tracking-widest text-white/70 italic">Empowering Startups & Global Institutions.</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OPERATIONAL PHILOSOPHY */}
      <section className="py-24 md:py-48 px-6 md:px-12 lg:px-24 bg-[#050505]">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
              { 
                title: "Absolute Clarity", 
                desc: "We replace jargon with simple, actionable insights. You see every move we make on your roadmap.",
                icon: <Eye /> 
              },
              { 
                title: "Launch Velocity", 
                desc: "Our 45-day cycle ensures you hit the market while your competitors are still stuck in planning.",
                icon: <Zap /> 
              },
              { 
                title: "Total Ownership", 
                desc: "We build proprietary systems. You own your code, your data, and your digital destiny—permanently.",
                icon: <ShieldCheck /> 
              }
            ].map((item, i) => (
              <motion.div key={i} {...fadeInUp} className="bg-black p-10 md:p-20 group hover:bg-[#080808] transition-all relative overflow-hidden">
                <div className="mb-10 text-[#008BFF] group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                <h4 className="text-2xl font-black uppercase tracking-widest mb-6">{item.title}</h4>
                <p className="text-[12px] text-white/40 leading-relaxed uppercase tracking-widest">{item.desc}</p>
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                   <Terminal size={100} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE PROTOCOL (Roadmap Logic) */}
      <section className="py-24 md:py-48 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-32">
            <span className="text-[10px] font-black uppercase tracking-[1em] text-[#008BFF] block mb-4">Methodology</span>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">How we <br /> <span className="italic text-white/20">Build.</span></h2>
          </div>

          <div className="relative">
            {/* The Kinetic Line */}
            <div className="absolute left-[23px] top-0 bottom-0 w-px bg-white/10">
              <motion.div style={{ scaleY: scaleLine, originY: 0 }} className="w-full h-full bg-[#008BFF] shadow-[0_0_20px_#008BFF]" />
            </div>

            <div className="space-y-32">
              {[
                { 
                  step: "01", 
                  title: "Diagnostic Intake", 
                  desc: "A deep-dive audit of your current assets. We identify exactly what you need to grow—no more, no less.",
                  icon: <Target /> 
                },
                { 
                  step: "02", 
                  title: "Growth Blueprinting", 
                  desc: "We design the visual identity and tech architecture. Your vision becomes a structured, manageable plan.",
                  icon: <Workflow /> 
                },
                { 
                  step: "03", 
                  title: "Secure Deployment", 
                  desc: "Our team executes the build. In 45 days, your institutional-grade system is live and ready for traffic.",
                  icon: <Cpu /> 
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
                    <p className="max-w-2xl text-white/40 text-[13px] md:text-lg leading-relaxed uppercase tracking-wider">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONVERSION CTA */}
      <section className="py-32 md:py-56 px-6 text-center bg-white text-black relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h2 {...fadeInUp} className="text-6xl md:text-[120px] font-black uppercase tracking-[-0.05em] leading-[0.9] mb-16">
            Ready to <br /> <span className="text-[#008BFF]">Succeed?</span>
          </motion.h2>
          <motion.p {...fadeInUp} className="text-black/50 text-[10px] md:text-[12px] font-bold uppercase tracking-[0.2em] mb-16 max-w-lg mx-auto leading-loose">
            Whether you are launching your first startup or managing a global legacy, our process is built to give you the ultimate advantage.
          </motion.p>
          <Link href="/contact" className="group flex flex-col items-center">
            <div className="flex items-center gap-6 border-b-[6px] md:border-b-8 border-black pb-4 md:pb-6 group-hover:gap-10 transition-all duration-700">
              <span className="text-2xl md:text-7xl font-[1000] uppercase tracking-tighter">Start My Journey</span>
              <ArrowRight className="w-8 h-8 md:w-20 md:h-20 text-[#008BFF] group-hover:translate-x-3 transition-transform" />
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}