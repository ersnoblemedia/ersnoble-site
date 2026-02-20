"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe, Shield, Zap, Terminal } from "lucide-react";
import Link from "next/link";

export default function ErsnobleMasterFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#020202] border-t border-white/[0.05] pt-24 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* KINETIC GLOW EFFECT */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-[#008BFF] to-transparent shadow-[0_0_40px_rgba(0,139,255,0.8)] opacity-40" />
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#008BFF]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1800px] mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-24">

          {/* COLUMN 1: INFRASTRUCTURE IDENTITY */}
          <div className="space-y-8">
            <Link href="/" className="inline-block group">
              <img
                src="/logo.svg"
                alt="Ersnoble"
                className="h-6 md:h-7 brightness-0 invert group-hover:drop-shadow-[0_0_12px_rgba(0,139,255,0.6)] transition-all duration-500"
              />
            </Link>
            <p className="text-[10px] md:text-[11px] text-white/60 uppercase tracking-[0.15em] leading-relaxed max-w-[300px] font-medium">
              Institutional Infrastructure & Brand Sovereignty. <br />
              <span className="text-white/30">Hardening the digital assets of the globally ambitious.</span>
            </p>
          </div>

          {/* COLUMN 2: CONTACT PROTOCOL */}
          <div className="space-y-6">
            <h5 className="text-[10px] font-black uppercase tracking-[0.6em] text-[#008BFF] flex items-center gap-2">
              <Terminal size={12} /> Contact_Protocol
            </h5>
            <ul className="space-y-5 font-mono">
              <li>
                <a href="mailto:info@ersnoblemedia.com" className="flex items-center gap-4 group">
                  <div className="p-2 rounded-sm bg-white/[0.03] border border-white/10 group-hover:border-[#008BFF]/50 transition-colors">
                    <Mail size={14} className="text-white/40 group-hover:text-[#008BFF] transition-colors" />
                  </div>
                  <span className="text-[11px] md:text-[12px] text-white/50 group-hover:text-white transition-colors tracking-tight uppercase">info@ersnoblemedia.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+2348066210504" className="flex items-center gap-4 group">
                  <div className="p-2 rounded-sm bg-white/[0.03] border border-white/10 group-hover:border-[#008BFF]/50 transition-colors">
                    <Phone size={14} className="text-white/40 group-hover:text-[#008BFF] transition-colors" />
                  </div>
                  <span className="text-[11px] md:text-[12px] text-white/50 group-hover:text-white transition-colors tracking-tight uppercase">+234 (0) 806 621 0504</span>
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: PHYSICAL NODE */}
          <div className="space-y-6">
            <h5 className="text-[10px] font-black uppercase tracking-[0.6em] text-[#008BFF]">Physical_Node</h5>
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-sm bg-white/[0.03] border border-white/10">
                <MapPin size={14} className="text-white/40" />
              </div>
              <p className="text-[11px] md:text-[12px] text-white/50 font-mono leading-relaxed uppercase tracking-widest">
                Corporate Suite 09 Inyang Str.<br />
                Uyo, Akwa Ibom State <br />
                Nigeria, West Africa
              </p>
            </div>
          </div>

          {/* COLUMN 4: SYSTEM STATUS */}
          <div className="space-y-6">
            <h5 className="text-[10px] font-black uppercase tracking-[0.6em] text-[#008BFF]">System_Status</h5>
            <div className="p-5 bg-white/[0.02] border border-white/10 rounded-sm space-y-4 backdrop-blur-sm relative overflow-hidden group">
              <div className="flex items-center justify-between relative z-10">
                <span className="text-[9px] font-mono text-white/40 uppercase tracking-tighter">Engine_Uptime</span>
                <span className="text-[9px] font-mono text-[#008BFF] font-black animate-pulse">99.99%</span>
              </div>
              <div className="flex items-center justify-between relative z-10">
                <span className="text-[9px] font-mono text-white/40 uppercase tracking-tighter">Encryption</span>
                <span className="text-[9px] font-mono text-white/70">ACTIVE_AES256</span>
              </div>
              <div className="h-[2px] w-full bg-white/5 overflow-hidden relative z-10">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="h-full w-1/2 bg-gradient-to-r from-transparent via-[#008BFF] to-transparent shadow-[0_0_10px_#008BFF]"
                />
              </div>
              <div className="absolute inset-0 bg-[#008BFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

        </div>

        {/* BOTTOM LEGAL & ARCHIVE */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10 gap-8">
          <div className="flex flex-wrap justify-center md:justify-start gap-8 items-center">
            <span className="text-[9px] font-mono text-white/40 uppercase tracking-[0.3em]">© {currentYear} ERSNOBLE MEDIA</span>
            <Link href="/privacy" className="text-[9px] font-mono text-white/30 hover:text-[#008BFF] uppercase tracking-[0.3em] transition-all">Privacy_Protocol</Link>
          </div>

          <div className="flex items-center gap-8 text-white/10">
            <Shield size={16} className="hover:text-[#008BFF] transition-colors cursor-crosshair" />
            <Globe size={16} className="hover:text-[#008BFF] transition-colors cursor-crosshair" />
            <Zap size={16} className="hover:text-[#008BFF] transition-colors cursor-crosshair" />
          </div>
        </div>
      </div>
    </footer>
  );
}