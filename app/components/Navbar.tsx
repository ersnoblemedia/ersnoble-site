"use client"; // This tells Next.js this component is interactive

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="text-xl font-bold tracking-tighter">
          ERSNOBLE<span className="text-accent">.</span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-medium">
          <Link href="/services" className="hover:text-accent transition-colors">Services</Link>
          <Link href="/case-studies" className="hover:text-accent transition-colors">Case Studies</Link>
          <Link href="/about" className="hover:text-accent transition-colors">About</Link>
          <Link href="/contact" className="px-5 py-2 bg-white text-black hover:bg-accent hover:text-white transition-all">
            Start a Project
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
}