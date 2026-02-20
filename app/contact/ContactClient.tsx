"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, CheckCircle2, Globe2,
  Lock, Activity, Clock, ShieldCheck, Terminal, Cpu
} from "lucide-react";
import Link from "next/link";

export default function ContactClient() {
  const [phase, setPhase] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const [formData, setFormData] = useState({
    Client_Identity: "",
    email: "",
    phone: "",
    Requirements: [] as string[],
    timeline: "Strategic (30-60 Days)",
    budget: "To be Discussed",
    customBudget: "",
    Mandate_Context: ""
  });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (requirement: string) => {
    setFormData(prev => {
      const exists = prev.Requirements.includes(requirement);
      return {
        ...prev,
        Requirements: exists
          ? prev.Requirements.filter(r => r !== requirement)
          : [...prev.Requirements, requirement]
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const finalBudget = formData.budget === "Custom" ? formData.customBudget : formData.budget;

    try {
      const response = await fetch("https://formspree.io/f/xnjbzpge", {
        method: "POST",
        body: JSON.stringify({
          "PARTNER IDENTITY": formData.Client_Identity,
          "CONTACT EMAIL": formData.email,
          "DIRECT LINE": formData.phone,
          "SERVICES INTERESTED": formData.Requirements.join(", "),
          "PROJECT TIMELINE": formData.timeline,
          "CAPITAL ALLOCATION": finalBudget,
          "ADDITIONAL CONTEXT": formData.Mandate_Context
        }),
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
      });
      if (response.ok) setIsSuccess(true);
    } catch (error) {
      alert("Transmission Interrupted. System Retry Required.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#020202] text-white selection:bg-[#008BFF] pt-32 md:pt-40 pb-20 px-4 md:px-6 overflow-x-hidden relative">

      {/* SHARPER AMBIENCE */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-30 transition-opacity duration-1000 hidden md:block"
        style={{
          background: `radial-gradient(circle 500px at ${mousePos.x}px ${mousePos.y}px, rgba(0, 139, 255, 0.25), transparent 80%)`
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <header className="mb-12 md:mb-24 px-2">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3 mb-6">
            <Terminal size={16} className="text-[#008BFF]" />
            <span className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-[#008BFF]">SECURE_INTAKE_PORTAL</span>
          </motion.div>
          <motion.h1 className="text-4xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] md:leading-[0.85] mb-8 text-white">
            Let's Build Your <br /> <span className="text-[#008BFF] brightness-125">Global Foundation.</span>
          </motion.h1>
          <motion.p className="text-white/80 text-[13px] md:text-[16px] uppercase tracking-[0.1em] leading-relaxed max-w-2xl font-bold border-l-2 border-[#008BFF] pl-4 md:pl-6">
            Ersnoble Media is a Specialized Brand and Software Firm. We engineer high-performance digital infrastructure and brand sovereignty for startups and organizations who demand market authority.
          </motion.p>
        </header>

        <div className="bg-[#0A0A0A] border-2 border-white/20 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_0_80px_rgba(0,139,255,0.1)] relative">
          <div className="absolute top-0 left-0 h-[4px] bg-[#008BFF] transition-all duration-1000 shadow-[0_0_20px_#008BFF]"
            style={{ width: `${(phase / 3) * 100}%` }} />

          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="p-6 sm:p-10 md:p-20 space-y-12 md:space-y-16"
              >

                {phase === 1 && (
                  <div className="space-y-8 md:space-y-12">
                    <h2 className="text-xl md:text-2xl font-black uppercase tracking-widest text-white border-b border-white/10 pb-4">01. Identity Verification</h2>
                    <div className="grid md:grid-cols-2 gap-6 md:gap-10">
                      <div className="space-y-4 md:col-span-2">
                        <label className="text-[10px] md:text-[12px] font-black uppercase tracking-widest text-[#008BFF]">Lead Partner / Company Name</label>
                        <input name="Client_Identity" required type="text" value={formData.Client_Identity} onChange={handleInputChange} placeholder="WHO IS THE STAKEHOLDER?" className="w-full bg-white/5 border-2 border-white/10 rounded-xl md:rounded-2xl p-5 md:p-7 outline-none focus:border-[#008BFF] text-white font-bold transition-all text-[13px] md:text-[14px]" />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] md:text-[12px] font-black uppercase tracking-widest text-[#008BFF]">Email Address</label>
                        <input name="email" required type="email" value={formData.email} onChange={handleInputChange} placeholder="OFFICIAL EMAIL" className="w-full bg-white/5 border-2 border-white/10 rounded-xl md:rounded-2xl p-5 md:p-7 outline-none focus:border-[#008BFF] text-white font-bold transition-all text-[13px] md:text-[14px]" />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] md:text-[12px] font-black uppercase tracking-widest text-[#008BFF]">Direct Line (Phone)</label>
                        <input name="phone" required type="tel" value={formData.phone} onChange={handleInputChange} placeholder="+XXX XXX XXX" className="w-full bg-white/5 border-2 border-white/10 rounded-xl md:rounded-2xl p-5 md:p-7 outline-none focus:border-[#008BFF] text-white font-bold transition-all text-[13px] md:text-[14px]" />
                      </div>
                    </div>
                    <button type="button" onClick={() => setPhase(2)} className="w-full md:w-auto bg-white text-black px-10 md:px-16 py-6 md:py-8 rounded-full text-[10px] md:text-[12px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] hover:bg-[#008BFF] hover:text-white transition-all duration-500 shadow-xl">
                      Select Mission Units <ArrowRight className="inline ml-2 w-4 h-4" />
                    </button>
                  </div>
                )}

                {/* 02. Service Configuration */}
                {phase === 2 && (
                  <div className="space-y-8 md:space-y-12">
                    <h2 className="text-xl md:text-2xl font-black uppercase tracking-widest text-white border-b border-white/10 pb-4">
                      02. Service Configuration
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      {[
                        { id: "Visual Identity", title: "Visual Authority", desc: "Logo, Brand Strategy & Premium Assets. We make you look like a market leader from Day 1." },
                        { id: "Digital Infrastructure", title: "Institutional Website", desc: "Custom-coded, high-performance platforms. No templates. Built for conversion and scale." },
                        { id: "Technical Audit", title: "System Optimization", desc: "We repair and upgrade your existing tech for better speed, security, and lead capture." },
                        { id: "The Full Ecosystem", title: "Total Technical Sovereignty", desc: "Everything from branding to a fully automated digital sales engine. The complete package." }
                      ].map((s) => (
                        <label
                          key={s.id}
                          className={`group p-6 md:p-8 border-2 rounded-2xl md:rounded-3xl cursor-pointer transition-all duration-500 relative overflow-hidden ${formData.Requirements.includes(s.id)
                              ? "bg-[#008BFF]/10 border-[#008BFF] shadow-[0_0_30px_rgba(0,139,255,0.1)]"
                              : "bg-white/5 border-white/10 hover:border-white/30"
                            }`}
                        >
                          <div className="flex justify-between items-start mb-4 relative z-10">
                            {/* UPDATED: Readability & Spacing Hardening */}
                            <h4 className="text-[15px] md:text-base font-black uppercase tracking-[0.05em] leading-snug text-white transition-colors group-hover:text-[#008BFF]">
                              {s.title}
                            </h4>
                            <input
                              type="checkbox"
                              checked={formData.Requirements.includes(s.id)}
                              onChange={() => handleCheckboxChange(s.id)}
                              className="w-5 h-5 md:w-6 md:h-6 accent-[#008BFF] cursor-pointer"
                            />
                          </div>
                          <p className="text-[11px] md:text-[12px] text-white/60 font-medium leading-relaxed uppercase relative z-10">
                            {s.desc}
                          </p>

                          {/* ADDED: Internal Glow transition for better visual authority */}
                          <div className={`absolute inset-0 bg-gradient-to-br from-[#008BFF]/5 to-transparent opacity-0 transition-opacity duration-500 ${formData.Requirements.includes(s.id) ? "opacity-100" : ""}`} />
                        </label>
                      ))}
                    </div>

                    {/* The rest of phase 2 remains unchanged... */}
                    <div className="grid md:grid-cols-2 gap-8 md:gap-10">
                      {/* ... Timeline and Budget sections ... */}
                    </div>
                    <button type="button" onClick={() => setPhase(3)} className="w-full md:w-auto bg-white text-black px-10 md:px-16 py-6 md:py-8 rounded-full text-[10px] md:text-[12px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] hover:bg-[#008BFF] hover:text-white transition-all duration-500 shadow-xl">Confirm Brief</button>
                  </div>
                )}

                {phase === 3 && (
                  <div className="space-y-8 md:space-y-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">Mission Briefing</h2>
                    <textarea name="Mandate_Context" rows={6} required value={formData.Mandate_Context} onChange={handleInputChange} className="w-full bg-white/5 border-2 border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-10 outline-none focus:border-[#008BFF] text-base md:text-lg font-medium text-white placeholder:text-white/10 resize-none" placeholder="DESCRIBE YOUR VISION..." />
                    <button disabled={isSubmitting} type="submit" className="w-full bg-[#008BFF] text-white py-6 md:py-10 rounded-2xl md:rounded-3xl text-[14px] md:text-[16px] font-black uppercase tracking-[0.5em] md:tracking-[1em] transition-all hover:scale-[1.02] shadow-[0_0_50px_rgba(0,139,255,0.4)]">
                      {isSubmitting ? "TRANSMITTING..." : "INITIALIZE MANDATE"}
                    </button>
                  </div>
                )}
              </motion.form>
            ) : (
              <div className="p-10 md:p-40 text-center">
                <CheckCircle2 size={60} className="text-[#008BFF] mx-auto mb-10 drop-shadow-[0_0_30px_#008BFF] md:w-[100px] md:h-[100px]" />
                <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter italic">Mission <br /> Confirmed.</h2>
                <p className="text-white/60 text-[12px] md:text-[14px] uppercase tracking-[0.2em] md:tracking-[0.4em] mt-8 mb-16">Our advisors will contact you within 24 hours.</p>
                <Link href="/" className="text-[10px] md:text-[12px] font-black text-[#008BFF] uppercase tracking-[0.6em] border-b-2 border-[#008BFF] pb-2">[ Return_to_Base ]</Link>
              </div>
            )}
          </AnimatePresence>
        </div>

        <footer className="mt-16 md:mt-20 flex flex-wrap justify-center gap-6 md:gap-12 opacity-40">
          {[{ Icon: Lock, t: "ENCRYPTED_INTAKE" }, { Icon: Activity, t: "PRIORITY_PROCESSING" }, { Icon: ShieldCheck, t: "SVRN_1_PROTOCOL" }].map((f, i) => (
            <div key={i} className="flex items-center gap-2 md:gap-3">
              <f.Icon size={14} className="text-[#008BFF]" />
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest">{f.t}</span>
            </div>
          ))}
        </footer>
      </div>
    </main>
  );
}