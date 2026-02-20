"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
    ShieldCheck, Cpu, Terminal, Globe2,
    Zap, ArrowRight, Target,
    Workflow, PenTool, Activity, Smartphone
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
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1] as any
        }
    };

    return (
        <main ref={containerRef} className="bg-[#020202] text-white selection:bg-[#008BFF] font-sans antialiased overflow-x-hidden">

            {/* 1. HERO: PRODUCT-FOCUSED ENGINE */}
            <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-40 pb-20 border-b border-white/5">
                {/* Mobile-Optimized Glow */}
                <div className="absolute top-[10%] left-[-10%] w-[70vw] h-[70vw] md:w-[40vw] md:h-[40vw] bg-[#008BFF]/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none z-0" />

                <div className="max-w-[1800px] mx-auto w-full relative z-10">
                    <motion.div {...fadeInUp} className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-px bg-[#008BFF]" />
                        <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#008BFF]">Product Engineering</span>
                    </motion.div>

                    <motion.h1 {...fadeInUp} className="text-[13vw] md:text-8xl lg:text-[120px] font-black uppercase tracking-tighter leading-[0.85] mb-16">
                        We Build <br /> <span className="text-[#008BFF] italic">Digital Engines.</span>
                    </motion.h1>

                    <div className="grid lg:grid-cols-2 gap-12 md:gap-32 items-start">
                        <motion.p {...fadeInUp} className="text-xl md:text-3xl font-light leading-snug text-white/90">
                            Transforming complex vision into <span className="text-[#008BFF] font-black italic">high-velocity</span> technical <span className="text-white font-black underline decoration-[#008BFF]">infrastructure.</span>
                        </motion.p>
                        <div className="space-y-8">
                            <motion.p {...fadeInUp} className="text-[11px] md:text-[13px] text-white/40 uppercase tracking-[0.2em] leading-relaxed max-w-lg">
                                Ersnoble operates as a technical powerhouse. We deliver the complete ecosystem—from identity systems to full-stack architecture—ensuring your brand functions as a high-performance asset.
                            </motion.p>
                            <motion.div {...fadeInUp} className="inline-flex items-center gap-3 px-5 py-3 bg-[#008BFF]/5 border border-[#008BFF]/20 rounded-xl">
                                <Terminal size={16} className="text-[#008BFF]" />
                                <span className="text-[9px] font-mono uppercase tracking-widest text-white/70">System Intelligence Active</span>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. THE GRID: ECOSYSTEM DEPLOYMENT UNITS (2x2) */}
            <section className="py-24 md:py-48 px-6 md:px-12 lg:px-24 bg-[#050505] relative">
                <div className="max-w-[1800px] mx-auto">
                    <motion.div {...fadeInUp} className="mb-16">
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">Deployment Units.</h2>
                        <div className="h-1 w-20 bg-[#008BFF]" />
                    </motion.div>

                    {/* 2x2 Responsive Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
                        {[
                            {
                                title: "Identity Systems",
                                desc: "Engineering visual authority that commands market respect and builds immediate institutional trust.",
                                icon: <PenTool size={32} />
                            },
                            {
                                title: "UI/UX Strategy",
                                desc: "Behavioral engineering designed to convert high-value traffic into committed client leads.",
                                icon: <Activity size={32} />
                            },
                            {
                                title: "App Systems",
                                desc: "Custom-built cross-platform applications engineered for scale, security, and technical sovereignty.",
                                icon: <Smartphone size={32} />
                            },
                            {
                                title: "Web Architecture",
                                desc: "High-performance full-stack infrastructure designed for global reach and sub-second load speeds.",
                                icon: <Globe2 size={32} />
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                {...fadeInUp}
                                className="bg-black p-12 md:p-20 group hover:bg-[#080808] transition-all relative overflow-hidden"
                            >
                                <div className="mb-10 text-[#008BFF] group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                                <h4 className="text-2xl font-black uppercase tracking-widest mb-6">{item.title}</h4>
                                <p className="text-[12px] text-white/30 leading-relaxed uppercase tracking-[0.2em]">{item.desc}</p>

                                {/* Visual Accent */}
                                <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#008BFF] group-hover:w-full transition-all duration-700" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. THE PROTOCOL: SYSTEM INTELLIGENCE */}
            <section className="py-24 md:py-48 px-6 md:px-12 lg:px-24">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-32">
                        <span className="text-[10px] font-black uppercase tracking-[1em] text-[#008BFF] block mb-4">System Intelligence</span>
                        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">Our <br /> <span className="italic text-white/20">Protocol.</span></h2>
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
                                    desc: "We analyze your current digital landscape to identify technical friction and market gaps.",
                                    icon: <Target />
                                },
                                {
                                    step: "02",
                                    title: "Parallel Build",
                                    desc: "Design and engineering move in sync. We develop your identity and architecture as one unified system.",
                                    icon: <Workflow />
                                },
                                {
                                    step: "03",
                                    title: "Institutional Launch",
                                    desc: "A 45-day sprint to full deployment, delivering a proprietary engine that you own entirely.",
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

            {/* 4. CONVERSION: THE FINAL INITIALIZATION */}
            <section className="py-32 md:py-56 px-6 text-center bg-white text-black relative overflow-hidden">
                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.h2 {...fadeInUp} className="text-6xl md:text-[120px] font-black uppercase tracking-[-0.05em] leading-[0.9] mb-16">
                        Initialize <br /> <span className="text-[#008BFF]">Build.</span>
                    </motion.h2>
                    <motion.p {...fadeInUp} className="text-black/50 text-[10px] md:text-[12px] font-bold uppercase tracking-[0.2em] mb-16 max-w-lg mx-auto leading-loose">
                        Ersnoble is ready to deploy your next technical asset. Whether startup or global institution, we engineer for dominance.
                    </motion.p>
                    <Link href="/contact" className="group flex flex-col items-center">
                        <div className="flex items-center gap-6 border-b-[6px] md:border-b-8 border-black pb-4 md:pb-6 group-hover:gap-10 transition-all duration-700">
                            <span className="text-2xl md:text-7xl font-[1000] uppercase tracking-tighter">Start Mandate</span>
                            <ArrowRight className="w-8 h-8 md:w-20 md:h-20 text-[#008BFF] group-hover:translate-x-3 transition-transform" />
                        </div>
                    </Link>
                </div>
            </section>

        </main>
    );
}