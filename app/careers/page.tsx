"use client";
import { motion } from "framer-motion";
import { Terminal, Target, Briefcase, ArrowUpRight, Mail, ShieldAlert, Globe2, Zap } from "lucide-react";
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
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,139,255,0.08)_0%,_transparent_70%)]" />
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
                                <Terminal size={14} /> RECRUITMENT_PHASE_02
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-10 text-white">
                            Expand the <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008BFF] to-white">Mandate.</span>
                        </h1>

                        <div className="inline-flex items-center gap-4 p-4 bg-[#008BFF]/10 border border-[#008BFF]/20 rounded-sm">
                            <ShieldAlert className="text-[#008BFF]" size={18} />
                            <p className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">
                                This is a revenue seat, not an administrative role.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid lg:grid-cols-12 gap-16">

                        {/* LEFT COLUMN: CORE DIRECTIVES */}
                        <div className="lg:col-span-7 space-y-20">

                            <motion.div {...fadeInUp} className="space-y-8">
                                <h2 className="text-2xl font-black uppercase tracking-[0.2em] text-white flex items-center gap-4">
                                    <Target className="text-[#008BFF]" /> Core Directives
                                </h2>
                                <div className="grid gap-4">
                                    {[
                                        { t: "Global Outreach", d: "Initiate structured B2B outreach to UK & US markets." },
                                        { t: "Strategic Qualification", d: "Identify and qualify decision-makers in high-growth firms." },
                                        { t: "Consultation Booking", d: "Secure strategic infrastructure consultations for technical leads." },
                                        { t: "Mandate Conversion", d: "Convert qualified opportunities into high-value mandates." }
                                    ].map((item, i) => (
                                        <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-xl group hover:border-[#008BFF] transition-all">
                                            <h4 className="text-[#008BFF] text-[11px] font-black uppercase tracking-widest mb-2">{item.t}</h4>
                                            <p className="text-white/80 text-sm font-bold uppercase tracking-wide">{item.d}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div {...fadeInUp} className="space-y-8">
                                <h2 className="text-2xl font-black uppercase tracking-[0.2em] text-white flex items-center gap-4">
                                    <Zap className="text-[#008BFF]" /> Performance Rewards
                                </h2>
                                <div className="p-8 border-2 border-[#008BFF] bg-[#008BFF]/5 rounded-3xl">
                                    <h3 className="text-xl font-black uppercase tracking-widest mb-4">Commission-Tiered Structure</h3>
                                    <p className="text-white/70 text-sm font-medium uppercase tracking-widest leading-relaxed mb-6">
                                        We reward producers. Compensation is strictly tied to closed mandate values with uncapped earning potential. The higher the deal value, the higher the tier.
                                    </p>
                                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-[#008BFF]">
                                        [ High_Value_Mandates = High_Capital_Allocation ]
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* RIGHT COLUMN: APPLICATION BOX */}
                        <div className="lg:col-span-5">
                            <motion.div
                                {...fadeInUp}
                                className="sticky top-40 bg-[#0A0A0A] border-2 border-white/10 p-10 rounded-[2rem] shadow-2xl overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Globe2 size={120} />
                                </div>

                                <h3 className="text-2xl font-black uppercase tracking-tighter mb-6">Submit Your <br /> Pitch.</h3>

                                <div className="space-y-8 relative z-10">
                                    <p className="text-white/50 text-xs font-bold uppercase tracking-widest leading-relaxed">
                                        If you are structured, persuasive, and serious about performance-based growth, we want your CV.
                                    </p>

                                    <div className="space-y-4">
                                        <a
                                            href="mailto:ersnoblemedia@gmail.com"
                                            className="flex items-center justify-center gap-3 w-full py-6 bg-white text-black font-black uppercase tracking-widest text-xs rounded-xl hover:bg-[#008BFF] hover:text-white transition-all transform hover:scale-[1.02]"
                                        >
                                            <Mail size={16} /> Apply Here
                                        </a>
                                        <p className="text-center text-[9px] font-mono text-white/30 uppercase tracking-[0.2em]">
                                            DIRECTIVE: ersnoblemedia@gmail.com
                                        </p>
                                    </div>

                                    <div className="pt-8 border-t border-white/5 text-[9px] text-white/40 uppercase tracking-widest leading-loose">
                                        Ersnoble Media constructs unified digital engines. We expect our team to operate with the same technical precision.
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}