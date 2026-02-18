"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, CheckCircle2, Globe2, 
  ChevronRight, Lock, Activity, Phone, Clock
} from "lucide-react";
import Link from "next/link";

export default function ErsnobleContactPortal() {
  const [phase, setPhase] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    Client_Identity: "",
    email: "",
    phone: "",
    Requirements: [] as string[],
    timeline: "Strategic (30-60 Days)",
    Mandate_Context: ""
  });

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnjbzpge";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (requirement: string) => {
    setFormData(prev => {
      const exists = prev.Requirements.includes(requirement);
      if (exists) {
        return { ...prev, Requirements: prev.Requirements.filter(r => r !== requirement) };
      }
      return { ...prev, Requirements: [...prev.Requirements, requirement] };
    });
  };

  const nextPhase = () => setPhase((p) => p + 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: JSON.stringify({
          "PARTNER IDENTITY": formData.Client_Identity,
          "CONTACT EMAIL": formData.email,
          "DIRECT LINE": formData.phone,
          "SERVICES INTERESTED": formData.Requirements.join(", "),
          "PROJECT TIMELINE": formData.timeline,
          "ADDITIONAL CONTEXT": formData.Mandate_Context
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        alert("Transmission Interrupted. Please check your connection.");
      }
    } catch (error) {
      alert("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <main className="min-h-screen bg-[#020202] text-white selection:bg-[#008BFF] font-sans pt-32 pb-20 px-6 overflow-x-hidden relative">
      
      {/* GLOW AMBIENCE */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[70vw] h-[70vw] bg-[#008BFF]/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#008BFF]/3 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* REFINED ACCESSIBLE HERO */}
        <header className="mb-16 md:mb-24">
          <motion.div {...fadeInUp} className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#008BFF] shadow-[0_0_10px_#008BFF]" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 italic">Inquiry Protocol</span>
          </motion.div>
          <motion.h1 {...fadeInUp} className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
            Let’s Build Your <br /> <span className="text-[#008BFF] drop-shadow-[0_0_20px_rgba(0,139,255,0.4)]">Global Foundation.</span>
          </motion.h1>
          <motion.p {...fadeInUp} className="text-white/40 text-[11px] md:text-[13px] uppercase tracking-[0.2em] leading-relaxed max-w-xl font-medium">
            Our process is built for clarity and speed. Whether you are a startup founder or an institutional leader, we bridge the gap between vision and global execution.
          </motion.p>
        </header>

        <div className="bg-white/[0.02] border border-white/10 rounded-[2rem] md:rounded-[3rem] overflow-hidden backdrop-blur-3xl shadow-2xl relative transition-all duration-700">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form 
                key="intake-form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleSubmit}
                className="p-8 md:p-16 space-y-12"
              >
                {/* PROGRESS TRACKER */}
                <div className="flex items-center gap-4 mb-16">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className={`h-1 flex-1 rounded-full transition-all duration-700 ${phase >= i ? "bg-[#008BFF] shadow-[0_0_15px_#008BFF]" : "bg-white/10"}`} />
                  ))}
                  <span className="text-[9px] font-mono text-[#008BFF] ml-4 uppercase tracking-widest font-black">STEP_0{phase}</span>
                </div>

                {/* PHASE 01: ACCESSIBLE IDENTITY */}
                {phase === 1 && (
                  <motion.div {...fadeInUp} className="space-y-10">
                    <div className="grid md:grid-cols-2 gap-10">
                      <div className="space-y-4 md:col-span-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-[#008BFF]">Full Name or Company</label>
                        <input name="Client_Identity" required type="text" value={formData.Client_Identity} onChange={handleInputChange} placeholder="HOW SHOULD WE CALL YOU?" className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 outline-none focus:border-[#008BFF] focus:bg-[#008BFF]/5 transition-all uppercase text-[11px] tracking-widest placeholder:text-white/10" />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-widest text-[#008BFF]">Email Address</label>
                        <input name="email" required type="email" value={formData.email} onChange={handleInputChange} placeholder="YOUR BEST EMAIL" className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 outline-none focus:border-[#008BFF] focus:bg-[#008BFF]/5 transition-all uppercase text-[11px] tracking-widest placeholder:text-white/10" />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-widest text-[#008BFF]">Phone Number</label>
                        <input name="phone" required type="tel" value={formData.phone} onChange={handleInputChange} placeholder="+XXX XXX XXX" className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 outline-none focus:border-[#008BFF] transition-all uppercase text-[11px] tracking-widest" />
                      </div>
                    </div>
                    <button type="button" onClick={nextPhase} className="group flex items-center gap-6 bg-white text-black px-12 py-6 rounded-full text-[10px] font-black uppercase tracking-[0.4em] hover:bg-[#008BFF] hover:text-white transition-all duration-500 shadow-xl">
                      Choose Your Services <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                  </motion.div>
                )}

                {/* PHASE 02: SERVICES & TIMELINE */}
                {phase === 2 && (
                  <motion.div {...fadeInUp} className="space-y-12">
                    <div className="space-y-6">
                      <label className="text-[10px] font-black uppercase tracking-widest text-[#008BFF]">How can we help you grow?</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { label: "Visual Identity", sub: "Logo, professional colors, and brand style." },
                          { label: "Digital Infrastructure", sub: "Custom, high-speed websites and portals." },
                          { label: "Technical Audit", sub: "Checking your current tech for better performance." },
                          { label: "The Full Ecosystem", sub: "We build everything you need from scratch." }
                        ].map((item) => (
                          <label key={item.label} className="p-6 border border-white/10 rounded-2xl bg-white/5 hover:border-[#008BFF] hover:bg-[#008BFF]/5 transition-all group cursor-pointer flex justify-between items-center">
                            <div className="pr-4">
                              <h4 className="text-[11px] font-black uppercase tracking-widest mb-1">{item.label}</h4>
                              <p className="text-[9px] text-white/30 uppercase tracking-wider leading-relaxed">{item.sub}</p>
                            </div>
                            <input type="checkbox" checked={formData.Requirements.includes(item.label)} onChange={() => handleCheckboxChange(item.label)} className="w-4 h-4 accent-[#008BFF] shrink-0" />
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-6">
                      <label className="text-[10px] font-black uppercase tracking-widest text-[#008BFF] flex items-center gap-2">
                        <Clock size={12} /> When do you want to launch?
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {[
                          { l: "High-Speed", v: "ASAP", s: "Urgent/Fastest" },
                          { l: "Balanced", v: "30-60 Days", s: "Standard Project" },
                          { l: "Foundation", v: "90 Days+", s: "Long-term Planning" }
                        ].map((t) => (
                          <button 
                            key={t.l} type="button" 
                            onClick={() => setFormData({ ...formData, timeline: t.v })} 
                            className={`p-5 rounded-xl border text-center transition-all ${formData.timeline === t.v ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]" : "bg-white/5 border-white/10 text-white/40 hover:text-white"}`}
                          >
                            <div className="text-[10px] font-black uppercase tracking-widest">{t.l}</div>
                            <div className="text-[7px] uppercase tracking-widest opacity-60 mt-1">{t.s}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <button type="button" onClick={nextPhase} className="group flex items-center gap-6 bg-white text-black px-12 py-6 rounded-full text-[10px] font-black uppercase tracking-[0.4em] hover:bg-[#008BFF] hover:text-white transition-all duration-500">
                      Almost Done <ArrowRight size={16} />
                    </button>
                  </motion.div>
                )}

                {/* PHASE 03: CONTEXT */}
                {phase === 3 && (
                  <motion.div {...fadeInUp} className="space-y-10">
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-widest text-[#008BFF]">Tell us your vision</label>
                      <textarea 
                        name="Mandate_Context" 
                        rows={5} 
                        required 
                        value={formData.Mandate_Context}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 rounded-3xl p-8 outline-none focus:border-[#008BFF] focus:bg-[#008BFF]/5 transition-all uppercase text-[11px] tracking-widest placeholder:text-white/10 resize-none" 
                        placeholder="TELL US ABOUT YOUR PROJECT AND GOALS..."
                      />
                    </div>
                    <button disabled={isSubmitting} type="submit" className="w-full bg-[#008BFF] text-white py-8 rounded-2xl text-[12px] font-black uppercase tracking-[0.8em] transition-all hover:shadow-[0_0_40px_rgba(0,139,255,0.4)] disabled:opacity-50 relative overflow-hidden group">
                      <span className="relative z-10">{isSubmitting ? "SENDING..." : "SEND TO ERSNOBLE"}</span>
                    </button>
                  </motion.div>
                )}
              </motion.form>
            ) : (
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="p-16 md:p-32 text-center">
                <div className="w-24 h-24 bg-[#008BFF]/10 rounded-full flex items-center justify-center mx-auto mb-10 border border-[#008BFF]/20 shadow-[0_0_30px_#008BFF]/20">
                  <CheckCircle2 size={40} className="text-[#008BFF]" />
                </div>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 italic">Message <br /> Received.</h2>
                <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] max-w-sm mx-auto leading-loose mb-12">
                  Thank you. An advisor will review your information and contact you within 24 hours to schedule a meeting.
                </p>
                <Link href="/" className="inline-block text-[10px] font-black text-[#008BFF] uppercase tracking-[0.5em] hover:text-white transition-all">
                  [ Back to Home ]
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* STATUS FOOTER */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 opacity-30">
          <div className="flex items-center gap-4">
             <Lock size={14} />
             <span className="text-[8px] font-mono uppercase tracking-[0.4em]">Secure Connection</span>
          </div>
          <div className="flex items-center gap-4">
             <Activity size={14} />
             <span className="text-[8px] font-mono uppercase tracking-[0.4em]">Direct Response Priority</span>
          </div>
          <div className="flex items-center gap-4">
             <Globe2 size={14} />
             <span className="text-[8px] font-mono uppercase tracking-[0.4em]">System Status: Ready</span>
          </div>
        </div>
      </div>
    </main>
  );
}