"use client";
import { motion } from "framer-motion";
import { Shield, Lock, FileText, ChevronLeft, Terminal } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function PrivacyLegalPage() {
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
    <main className="bg-[#020202] text-white selection:bg-[#008BFF] font-sans antialiased overflow-x-hidden min-h-screen">
      {/* ATMOSPHERIC BACKGROUND - SYSTEM GLOW */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-30"
        style={{ background: `radial-gradient(circle 600px at ${mousePos.x}px ${mousePos.y}px, rgba(0, 139, 255, 0.05), transparent 80%)` }}
      />

      <section className="relative pt-40 pb-24 px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-4xl mx-auto">

          {/* BACK NAVIGATION */}
          <motion.div {...fadeInUp} className="mb-12">
            <Link href="/" className="group inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-[#008BFF] transition-all">
              <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Return_to_Core
            </Link>
          </motion.div>

          {/* HEADER SECTION */}
          <motion.div {...fadeInUp} className="mb-24 border-l-[1px] border-[#008BFF]/30 pl-8 md:pl-12 relative">
            <div className="absolute top-0 left-0 w-[1px] h-full bg-[#008BFF] shadow-[0_0_15px_#008BFF]" />
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#008BFF] block mb-6 flex items-center gap-2">
              <Terminal size={12} /> Legal_Protocol_v2.6
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
              Privacy & <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/20 to-white/5">Data Sovereignty.</span>
            </h1>
            <p className="text-white/30 text-[10px] md:text-xs uppercase tracking-[0.4em] font-mono bg-white/[0.03] inline-block px-4 py-2 rounded-sm border border-white/5">
              Entity: Ersnoble Digital Media // Active_2026
            </p>
          </motion.div>

          {/* LEGAL CONTENT BLOCKS */}
          <div className="space-y-24">

            <motion.div {...fadeInUp} className="group">
              <div className="flex items-center gap-4 mb-6">
                <Shield size={20} className="text-[#008BFF] group-hover:drop-shadow-[0_0_8px_#008BFF] transition-all" />
                <h2 className="text-xl font-black uppercase tracking-widest text-white/90">01. Data Custodianship</h2>
              </div>
              <div className="space-y-6 text-white/50 text-[13px] md:text-sm leading-loose tracking-widest uppercase">
                <p>
                  <span className="text-white font-bold italic">Ersnoble Digital Media</span> operates as a high-integrity data custodian. We do not sell, trade, or compromise telemetry acquired during mandate initiation or the engineering lifecycle.
                </p>
                <p>
                  Information is strictly utilized for the construction of digital infrastructure and the maintenance of institutional communication protocols.
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="group">
              <div className="flex items-center gap-4 mb-6">
                <Lock size={20} className="text-[#008BFF] group-hover:drop-shadow-[0_0_8px_#008BFF] transition-all" />
                <h2 className="text-xl font-black uppercase tracking-widest text-white/90">02. Encryption Standards</h2>
              </div>
              <p className="text-white/50 text-[13px] md:text-sm leading-loose tracking-widest uppercase">
                All data packets processed by <span className="text-white font-bold italic">Ersnoble Digital Media</span> are hardened using AES-256 standards. Communication channels within the project ecosystem are strictly gated and audited for technical integrity.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} className="group">
              <div className="flex items-center gap-4 mb-6">
                <FileText size={20} className="text-[#008BFF] group-hover:drop-shadow-[0_0_8px_#008BFF] transition-all" />
                <h2 className="text-xl font-black uppercase tracking-widest text-white/90">03. IP Sovereignty</h2>
              </div>
              <p className="text-white/50 text-[13px] md:text-sm leading-loose tracking-widest uppercase">
                Upon fulfillment of the mandate and settlement of capital allocation, full digital sovereignty and intellectual property rights transfer from <span className="text-white font-bold italic">Ersnoble Digital Media</span> to the client.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} className="group pb-20">
              <div className="flex items-center gap-4 mb-6">
                <Terminal size={20} className="text-[#008BFF] group-hover:drop-shadow-[0_0_8px_#008BFF] transition-all" />
                <h2 className="text-xl font-black uppercase tracking-widest text-white/90">04. Disclosure Nodes</h2>
              </div>
              <p className="text-white/50 text-[13px] md:text-sm leading-loose tracking-widest uppercase">
                Information disclosure occurs only when legally mandated by sovereign law or when essential to protect the technical infrastructure of the <span className="text-white font-bold italic">Ersnoble Digital Media</span> network.
              </p>
            </motion.div>

          </div>

          {/* FOOTER ARCHIVE */}
          <motion.div {...fadeInUp} className="mt-32 pt-16 border-t border-white/10 text-center">
            <p className="text-[9px] font-mono text-white/40 uppercase tracking-[0.5em] hover:text-white/40 transition-colors cursor-default">
              Registered Entity: Ersnoble Digital Media // contact: legal@ersnoblemedia.com
            </p>
          </motion.div>

        </div>
      </section>
    </main>
  );
}