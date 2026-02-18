"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe, Shield, Zap } from "lucide-react";
import Link from "next/link";

export default function ErsnobleMasterFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#020202] border-t border-white/5 pt-24 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Subtle Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#008BFF]/50 to-transparent shadow-[0_0_30px_#008BFF]" />

      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-8 mb-24">
          
          {/* COLUMN 1: BRAND IDENTITY */}
          <div className="space-y-8">
            <Link href="/" className="inline-block group">
              <img 
                src="/logo.svg" 
                alt="Ersnoble" 
                className="h-6 md:h-7 brightness-0 invert opacity-80 group-hover:opacity-100 transition-all group-hover:drop-shadow-[0_0_8px_rgba(0,139,255,0.4)]" 
              />
            </Link>
            <p className="text-[10px] md:text-[11px] text-white/50 uppercase tracking-[0.1em] leading-relaxed max-w-[280px]">
              Institutional Infrastructure & Brand Sovereignty. Engineering the assets of the global ambitious.
            </p>
          </div>

          {/* COLUMN 2: CONTACT PROTOCOL */}
          <div className="space-y-6">
            <h5 className="text-[10px] font-black uppercase tracking-[0.6em] text-[#008BFF]">Contact_Protocol</h5>
            <ul className="space-y-4 font-mono">
              <li>
                <a href="mailto:intelligence@ersnoble.com" className="flex items-center gap-3 group">
                  <Mail size={14} className="text-white/20 group-hover:text-[#008BFF] transition-colors" />
                  <span className="text-[11px] md:text-[12px] text-white/50 group-hover:text-white transition-colors tracking-tight">INFO@ERSNOBLEMEDIA.COM</span>
                </a>
              </li>
              <li>
                <a href="tel:+2348100000000" className="flex items-center gap-3 group">
                  <Phone size={14} className="text-white/20 group-hover:text-[#008BFF] transition-colors" />
                  <span className="text-[11px] md:text-[12px] text-white/50 group-hover:text-white transition-colors tracking-tight">+234 (0) 806 621 0504</span>
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: GLOBAL NODE */}
          <div className="space-y-6">
            <h5 className="text-[10px] font-black uppercase tracking-[0.6em] text-[#008BFF]">Physical_Node</h5>
            <div className="flex items-start gap-3">
              <MapPin size={14} className="text-white/20 mt-1" />
              <p className="text-[11px] md:text-[12px] text-white/50 font-mono leading-relaxed uppercase tracking-tight">
                Corporate Suite 402 <br />
                Uyo, Akwa Ibom State <br />
                Nigeria, West Africa
              </p>
            </div>
          </div>

          {/* COLUMN 4: SYSTEM STATUS */}
          <div className="space-y-6">
            <h5 className="text-[10px] font-black uppercase tracking-[0.6em] text-[#008BFF]">System_Status</h5>
            <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-mono text-white/40 uppercase">Global_Uptime</span>
                <span className="text-[9px] font-mono text-[#008BFF]">99.9%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-mono text-white/40 uppercase">Encryption</span>
                <span className="text-[9px] font-mono text-white/60">ACTIVE_AES256</span>
              </div>
              <div className="h-1 w-full bg-white/5 overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="h-full w-1/3 bg-[#008BFF] shadow-[0_0_10px_#008BFF]"
                />
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM LEGAL & LOGISTICS */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
          <div className="flex gap-8 items-center">
            <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">© {currentYear} ERSNOBLE DIGITAL MEDIA</span>
            <Link href="/privacy" className="text-[9px] font-mono text-white/30 hover:text-white uppercase tracking-widest transition-colors">Privacy_Legal</Link>
          </div>
          
          <div className="flex items-center gap-6 text-white/10">
            <Shield size={16} />
            <Globe size={16} />
            <Zap size={16} />
          </div>
        </div>
      </div>
    </footer>
  );
}