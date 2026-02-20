"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, Terminal, ArrowRight } from "lucide-react";

export default function GlobalHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation Logic - Focused on Engineering Authority
  const navLinks = [
    { name: "About", href: "/about", sub: "Institutional Identity" },
    { name: "Ecosystem", href: isHome ? "#ecosystem" : "/#ecosystem", sub: "Operational Power" },
    { name: "Works", href: isHome ? "#works" : "/#works", sub: "Project Archives" },
  ];

  // Animation Variants with TS Fixes for Vercel Builds
  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as any }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as any }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, x: -20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.1 + i * 0.1, duration: 0.5, ease: "easeOut" as any }
    })
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-[100] border-b border-white/[0.05] bg-black/80 backdrop-blur-2xl transition-all duration-500">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24 h-20 md:h-24 flex items-center justify-between">

          {/* LOGO & STATUS */}
          <div className="flex items-center gap-4 md:gap-8 z-[110]">
            <Link href="/" className="group flex-shrink-0">
              <img
                src="/logo.svg"
                alt="Ersnoble"
                className="h-5 md:h-8 w-auto brightness-0 invert group-hover:drop-shadow-[0_0_15px_rgba(0,139,255,0.8)] transition-all duration-500"
              />
            </Link>

            <div className="hidden sm:flex items-center gap-2 px-3 py-1 border border-white/20 rounded-full bg-[#008BFF]/5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#008BFF] animate-pulse shadow-[0_0_8px_#008BFF]" />
              <span className="text-[8px] font-black uppercase tracking-[0.2em] text-white/80">System_Active</span>
            </div>
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-12 xl:gap-16">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-[10px] font-black uppercase tracking-[0.5em] transition-all hover:text-white hover:drop-shadow-[0_0_5px_#fff] ${pathname === item.href ? "text-[#008BFF] drop-shadow-[0_0_8px_rgba(0,139,255,0.5)]" : "text-white/40"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* ACTIONS & MOBILE TRIGGER */}
          <div className="flex items-center gap-4 md:gap-6 z-[110]">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <X size={20} />
              ) : (
                <span className="text-[9px] font-black uppercase tracking-widest text-white/60 border border-white/10 px-3 py-2 rounded bg-white/5 active:scale-90 transition-transform">
                  Menu
                </span>
              )}
            </button>

            <Link
              href="/contact"
              className="bg-[#008BFF] text-white px-5 md:px-10 py-3 md:py-4 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] hover:bg-white hover:text-[#008BFF] transition-all shadow-[0_0_30px_rgba(0,139,255,0.3)] whitespace-nowrap active:scale-95"
            >
              <span className="hidden xs:inline">Initialize Mandate</span>
              <span className="xs:hidden">Start Build</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* FULL SCREEN MOBILE OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[90] bg-[#020202] flex flex-col justify-center px-8 lg:hidden"
          >
            {/* Background Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#008BFF]/20 blur-[120px] rounded-full" />

            <div className="relative z-10 space-y-12">
              <div className="flex items-center gap-3 text-[#008BFF] font-mono text-[10px] tracking-[0.5em] uppercase mb-8">
                <Terminal size={14} className="animate-pulse" /> System_Menu
              </div>

              <div className="flex flex-col gap-8">
                {[...navLinks, { name: "Contact", href: "/contact", sub: "Initialize Mandate" }].map((item, i) => (
                  <motion.div key={item.name} custom={i} variants={linkVariants}>
                    <Link href={item.href} onClick={() => setIsMenuOpen(false)} className="group block">
                      <span className="text-[10px] font-mono text-white/40 block mb-2 uppercase tracking-widest">{item.sub}</span>
                      <div className="flex items-center justify-between border-b border-white/10 pb-4 group-hover:border-[#008BFF] transition-colors">
                        <span className="text-4xl font-black uppercase tracking-tighter group-hover:text-[#008BFF] transition-colors">{item.name}</span>
                        <ArrowRight size={20} className="text-[#008BFF] group-hover:translate-x-2 transition-transform" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}