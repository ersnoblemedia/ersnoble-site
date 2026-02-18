"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function GlobalHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Navigation Logic: If on home, use anchors. If on other pages, go home first.
  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Ecosystem", href: isHome ? "#ecosystem" : "/#ecosystem" },
    { name: "Works", href: isHome ? "#works" : "/#works" },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] border-b border-white/[0.05] bg-black/60 backdrop-blur-2xl">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24 h-20 md:h-24 flex items-center justify-between">
        
        {/* LOGO & STATUS */}
        <div className="flex items-center gap-8">
          <Link href="/" className="group">
            <img 
              src="/logo.svg" 
              alt="Ersnoble" 
              className="h-7 md:h-8 w-auto brightness-0 invert group-hover:drop-shadow-[0_0_10px_rgba(0,139,255,0.5)] transition-all duration-500" 
            />
          </Link>
          
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 border border-white/10 rounded-full bg-white/[0.02]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#008BFF] animate-pulse" />
            <span className="text-[8px] font-black uppercase tracking-[0.2em] text-white/40">System Online</span>
          </div>
        </div>

        {/* DYNAMIC LINKS */}
        <div className="hidden lg:flex items-center gap-16">
          {navLinks.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className={`text-[10px] font-black uppercase tracking-[0.5em] transition-all hover:text-white ${
                pathname === item.href ? "text-[#008BFF]" : "text-white/30"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* GLOBAL ACTION */}
        <div className="flex items-center gap-6">
          <Link 
            href="/contact" 
            className="bg-[#008BFF] text-white px-6 md:px-10 py-3 md:py-4 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-[#008BFF] transition-all shadow-[0_0_20px_rgba(0,139,255,0.2)]"
          >
            Secure Consultation
          </Link>
        </div>
      </div>
    </nav>
  );
}