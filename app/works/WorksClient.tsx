"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Terminal, Layers, Cpu } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        id: "01",
        title: "Project Alpha-Sovereign",
        category: "Web Architecture",
        description: "Total rebuild of a global fintech infrastructure for sub-second latency and absolute data sovereignty.",
        tech: ["Next.js 16", "PostgreSQL", "Cloudflare Architecture"],
        color: "#008BFF"
    },
    {
        id: "02",
        title: "Nexus Identity System",
        category: "Identity Systems",
        description: "Developing a visual authority protocol for an institutional advisory firm operating in the EU markets.",
        tech: ["Brand Engineering", "Design Systems", "Vector Logic"],
        color: "#008BFF"
    },
    {
        id: "03",
        title: "Titan Mobile Core",
        category: "App Systems",
        description: "A cross-platform deployment unit designed for high-frequency trading and real-time data visualization.",
        tech: ["React Native", "WebSockets", "Biometric Security"],
        color: "#008BFF"
    },
    {
        id: "04",
        title: "Aura UI Strategy",
        category: "UI/UX Strategy",
        description: "Behavioral engineering for a luxury startup, resulting in a 40% increase in lead conversion velocity.",
        tech: ["Framer Motion", "Conversion Logic", "User Psychology"],
        color: "#008BFF"
    }
];

export default function WorksClient() {
    // UPDATED: Added 'as any' to ease to satisfy TypeScript strict mode
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] as any
        }
    };

    return (
        <main className="bg-[#020202] text-white selection:bg-[#008BFF] min-h-screen pt-40 pb-20">
            <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">

                {/* Header Section */}
                <header className="mb-24 md:mb-40">
                    <motion.div {...fadeInUp} className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-px bg-[#008BFF]" />
                        <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#008BFF]">Case Archives</span>
                    </motion.div>
                    <motion.h1 {...fadeInUp} className="text-[12vw] md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none">
                        Selected <br /> <span className="text-white/20 italic">Deployments.</span>
                    </motion.h1>
                </header>

                {/* 2x2 Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            {...fadeInUp}
                            className="group relative bg-black p-8 md:p-16 lg:p-24 overflow-hidden border border-transparent hover:border-[#008BFF]/30 transition-all duration-700"
                        >
                            {/* Project ID Accent */}
                            <span className="absolute top-8 left-8 text-[10px] font-mono text-white/20 group-hover:text-[#008BFF] transition-colors">
                                REF_{project.id}
                            </span>

                            {/* Hover Glow Effect */}
                            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#008BFF]/10 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-12">
                                    <div className="p-4 bg-white/5 rounded-full text-[#008BFF] group-hover:bg-[#008BFF] group-hover:text-black transition-all duration-500">
                                        <Cpu size={24} />
                                    </div>
                                    <ArrowUpRight className="text-white/20 group-hover:text-white transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" size={32} />
                                </div>

                                <p className="text-[#008BFF] font-mono text-[10px] uppercase tracking-[0.3em] mb-4">
                                    {project.category}
                                </p>
                                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8 group-hover:italic transition-all">
                                    {project.title}
                                </h2>
                                <p className="text-white/40 text-sm md:text-base leading-relaxed uppercase tracking-wider mb-12 max-w-md">
                                    {project.description}
                                </p>

                                {/* Tech Specs Line */}
                                <div className="flex flex-wrap gap-4 pt-8 border-t border-white/5">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-[9px] font-mono text-white/30 uppercase tracking-widest">
                                            [{t}]
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Top Border Glow Line */}
                            <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#008BFF] group-hover:w-full transition-all duration-700 shadow-[0_0_15px_#008BFF]" />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <footer className="mt-40 text-center">
                    <motion.div {...fadeInUp} className="inline-flex flex-col items-center">
                        <Terminal className="text-[#008BFF] mb-6" />
                        <p className="text-white/40 text-[10px] uppercase tracking-[0.5em] mb-12">Ready to Initialize your build?</p>
                        <Link href="/contact" className="text-2xl md:text-5xl font-black uppercase tracking-tighter hover:text-[#008BFF] transition-colors flex items-center gap-4">
                            Start Mandate <ArrowUpRight size={48} />
                        </Link>
                    </motion.div>
                </footer>
            </div>
        </main>
    );
}