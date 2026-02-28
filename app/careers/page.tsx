"use client";
import { motion } from "framer-motion";
import { Terminal, Target, Briefcase, ArrowUpRight, Mail, ShieldAlert } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function CareersPage() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }
    };

    return (
        <main className="bg-[#020202] text-white selection:bg-[#008BFF] font-sans antialiased overflow-x-hidden min-h-screen relative">

            {/* BRAND ALIGNED BACKGROUND GRADIENT */}
            <div className="fixed inset-0 z-0">
                {/* Deep Global Brand Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,139,255,0.08)_0%,_transparent_70%)]" />

                {/* Dynamic Cursor Glow - Brightened for Visibility */}
                <div className="absolute inset-0 pointer-events-none opacity-40 transition-opacity duration-1000"
                    style={{ background: `radial-gradient(circle 500px at ${mousePos.x}px ${mousePos.y}px, rgba(0, 139, 255, 0.15), transparent 80%)` }}
                />
            </div>

            <section className="relative pt-40 pb-24 px-6 md:px-12 lg:px-24 z-10">
                <div className="max-w-6xl mx-auto">

                    {/* HEADER SECTION */}
                    <motion.div {...fadeInUp} className="mb-24 relative">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-px bg-[#008BFF] shadow-[0_0_10px_#008BFF]" />
                            <span className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.6em] text-[#008BFF] flex items-center gap-2">
                                <Terminal size={14} /> ADMISSIONS_PORTAL_2026
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-10 text-white drop-shadow-2xl">
                            We’re <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008BFF] to-white">Hiring.</span>
                        </h1>

                        <div className="inline-flex items-center gap-4 p-4 bg-red-500/10 border border-red-500/20 rounded-sm">
                            <ShieldAlert className="text-red-500" size={18} />
                            <p className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">
                                Average performers need not apply.
                            </p>
                        </div>
                    </motion.div>

                    {/* MAIN CONTENT GRID */}
                    <div className="grid lg:grid-cols-12 gap-16">

                        {/* WRITEOUT: THE MISSION (LG: SPAN 7) */}
                        <div className="lg:col-span-7 space-y-20">

                            <motion.div {...fadeInUp} className="space-y-8">
                                <h2 className="text-2xl font-black uppercase tracking-[0.2em] text-white flex items-center gap-4">
                                    <Target className="text-[#008BFF]" /> Mission Objective
                                </h2>
                                <div className="space-y-8 text-white text-base md:text-lg font-bold leading-relaxed uppercase tracking-wider">
                                    <p className="bg-white/5 p-6 border-l-4 border-[#008BFF]">
                                        Ersnoble Media is a Technical Systems Firm building unified digital engines for ambitious brands. We engineer identity systems and software infrastructure that power serious businesses.
                                    </p>
                                    <p className="text-white/80">
                                        We are initiating a search for a high-performance <span className="text-[#008BFF] underline underline-offset-8">Business Development Executive</span> to help us scale. This is for the results-obsessed.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div {...fadeInUp} className="space-y-8">
                                <h2 className="text-2xl font-black uppercase tracking-[0.2em] text-white flex items-center gap-4">
                                    <Briefcase className="text-[#008BFF]" /> Performance Metrics
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        "Cold Outreach Initiation",
                                        "B2B Lead Qualification",
                                        "Target-Driven Execution",
                                        "Persuasive Logic",
                                        "Strategic Persuasion",
                                        "Scalable Growth Mindset"
                                    ].map((skill) => (
                                        <div key={skill} className="group p-5 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#008BFF] transition-all duration-500">
                                            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white/70 group-hover:text-[#008BFF]">
                                                {skill}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* SIDEBAR: APPLICATION (LG: SPAN 5) */}
                        <div className="lg:col-span-5">
                            <motion.div
                                {...fadeInUp}
                                className="sticky top-40 bg-gradient-to-b from-[#0A0A0A] to-[#050505] border-2 border-white/10 p-10 md:p-12 rounded-[2rem] shadow-[0_40px_100px_rgba(0,0,0,0.8)]"
                            >
                                <div className="mb-10">
                                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 text-white">Initialize <br /> Your Pitch.</h3>
                                    <div className="h-1 w-20 bg-[#008BFF] shadow-[0_0_15px_#008BFF]" />
                                </div>

                                <p className="text-white/50 text-xs font-bold uppercase tracking-widest leading-loose mb-10">
                                    If you are disciplined, persuasive, and results-obsessed — we want to speak with you.
                                </p>

                                <div className="space-y-6">
                                    <p className="text-[10px] font-black text-[#008BFF] uppercase tracking-[0.4em]">Submission Directive:</p>
                                    <a
                                        href="mailto:ersnoblemedia@gmail.com"
                                        className="group flex items-center justify-between p-6 bg-white text-black rounded-xl hover:bg-[#008BFF] hover:text-white transition-all duration-500 transform hover:-translate-y-1"
                                    >
                                        <span className="text-xs font-black uppercase tracking-[0.2em]">Send CV + Pitch</span>
                                        <Mail className="group-hover:rotate-12 transition-transform" />
                                    </a>

                                    <div className="text-center">
                                        <span className="text-[10px] font-mono text-white/20 uppercase">To: ersnoblemedia@gmail.com</span>
                                    </div>
                                </div>

                                <div className="mt-12 pt-8 border-t border-white/5">
                                    <p className="text-[9px] font-medium text-white/30 uppercase tracking-[0.2em] leading-relaxed italic">
                                        This is a growth role. We build systems bigger than ourselves.
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}