"use client";
import { motion } from "framer-motion";
import { Shield, Lock, FileText, ChevronLeft } from "lucide-react";
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
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }
  };

  return (
    <main className="bg-[#020202] text-white selection:bg-[#008BFF] font-sans antialiased overflow-x-hidden min-h-screen">
      {/* ATMOSPHERIC BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20"
        style={{ background: `radial-gradient(circle 600px at ${mousePos.x}px ${mousePos.y}px, rgba(0, 139, 255, 0.08), transparent 80%)` }}
      />

      <section className="relative pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          
          {/* BACK NAVIGATION */}
          <motion.div {...fadeInUp} className="mb-12">
            <Link href="/" className="group inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-[#008BFF] transition-colors">
              <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Return_to_Core
            </Link>
          </motion.div>

          {/* HEADER */}
          <motion.div {...fadeInUp} className="mb-20 border-l-4 border-[#008BFF] pl-8 md:pl-12">
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#008BFF] block mb-4">Legal_Protocol_v2.6</span>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
              Privacy & <br /> <span className="text-white/20">Data Sovereignty.</span>
            </h1>
            <p className="text-white/40 text-[11px] md:text-xs uppercase tracking-[0.3em] font-mono">
              Effective Date: January 01, 2026 // Global Compliance Active
            </p>
          </motion.div>

          {/* LEGAL CONTENT BLOCKS */}
          <div className="space-y-20">
            
            <motion.div {...fadeInUp} className="group">
              <div className="flex items-center gap-4 mb-6">
                <Shield size={20} className="text-[#008BFF]" />
                <h2 className="text-xl font-black uppercase tracking-widest">01. Data Custodianship</h2>
              </div>
              <div className="space-y-4 text-white/50 text-sm leading-loose tracking-wide uppercase">
                <p>
                  Ersnoble Digital Media operates as a high-integrity data custodian. We do not sell, trade, or compromise the information provided during the mandate initiation or project lifecycle.
                </p>
                <p>
                  Information collected is strictly utilized for the engineering of your digital assets and the maintenance of institutional communication.
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="group">
              <div className="flex items-center gap-4 mb-6">
                <Lock size={20} className="text-[#008BFF]" />
                <h2 className="text-xl font-black uppercase tracking-widest">02. Encryption Standards</h2>
              </div>
              <p className="text-white/50 text-sm leading-loose tracking-wide uppercase">
                All inquiries submitted via the Inquiry Protocol are encrypted using AES-256 standard protocols. Communication channels within our project management ecosystem are strictly gated and monitored for security breaches.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} className="group">
              <div className="flex items-center gap-4 mb-6">
                <FileText size={20} className="text-[#008BFF]" />
                <h2 className="text-xl font-black uppercase tracking-widest">03. Intellectual Property</h2>
              </div>
              <p className="text-white/50 text-sm leading-loose tracking-wide uppercase">
                Upon completion of a mandate and full settlement of capital allocation, full digital sovereignty and intellectual property rights of the engineered assets are transferred to the client, unless otherwise specified in the Project Mandate.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} className="group">
              <div className="flex items-center gap-4 mb-6">
                <ChevronLeft size={20} className="text-[#008BFF] rotate-180" />
                <h2 className="text-xl font-black uppercase tracking-widest">04. Disclosure Nodes</h2>
              </div>
              <p className="text-white/50 text-sm leading-loose tracking-wide uppercase">
                We disclose information only when legally mandated by sovereign law or when necessary to protect the safety and technical integrity of the Ersnoble Global Infrastructure.
              </p>
            </motion.div>

          </div>

          {/* FOOTER NOTE */}
          <motion.div {...fadeInUp} className="mt-32 pt-12 border-t border-white/10 text-center">
            <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em]">
              For detailed legal enquiries, contact: legal@ersnoblemedia.com
            </p>
          </motion.div>

        </div>
      </section>
    </main>
  );
}