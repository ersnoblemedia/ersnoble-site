"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { 
  ArrowRight, ArrowUpRight, Monitor, Smartphone, 
  PenTool, Globe, Layers, Search, Rocket, Activity, 
  ShieldCheck, Code2, Terminal, Cpu
} from "lucide-react"; 
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

export default function ErsnobleMasterBuild() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleLine = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // FIXED: Explicit type casting for 'ease' to pass Vercel Build
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { 
      duration: 0.7, 
      ease: [0.22, 1, 0.36, 1] as any 
    }
  };

  return (
    <main ref={containerRef} className="bg-[#020202] text-white selection:bg-[#008BFF] font-sans antialiased overflow-x-hidden">
      
      {/* 1. ATMOSPHERIC LAYER - Adaptive Glow */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40 hidden md:block"
        style={{ background: `radial-gradient(circle 600px at ${mousePos.x}px ${mousePos.y}px, rgba(0, 139, 255, 0.12), transparent 80%)` }}
      />
      {/* Mobile-Specific Ambient Glow (Static for Performance) */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20 md:hidden bg-[radial-gradient(circle_at_50%_50%,rgba(0,139,255,0.15),transparent_70%)]" />

      {/* 2. NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/[0.05] bg-black/60 backdrop-blur-2xl">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24 h-20 md:h-24 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="group">
              <img 
                src="/logo.svg" 
                alt="Ersnoble" 
                className="h-6 md:h-8 w-auto brightness-0 invert group-hover:drop-shadow-[0_0_10px_rgba(0,139,255,0.5)] transition-all duration-500" 
              />
            </Link>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 border border-white/10 rounded-full bg-white/[0.02]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#008BFF] animate-pulse" />
              <span className="text-[8px] font-black uppercase tracking-[0.2em] text-white/40">System Online</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-16">
            {[
              { name: "About", href: "/about" },
              { name: "Ecosystem", href: "#ecosystem" },
              { name: "Works", href: "#works" }
            ].map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <Link 
            href="/contact" 
            className="bg-[#008BFF] text-white px-5 md:px-10 py-3 md:py-4 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-[#008BFF] transition-all shadow-[0_0_20px_rgba(0,139,255,0.2)]"
          >
            Secure Consultation
          </Link>
        </div>
      </nav>

      {/* 3. HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 pb-20">
        <div className="max-w-[1800px] mx-auto w-full grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative z-10">
            <motion.div {...fadeInUp} className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="w-12 h-px bg-[#008BFF]" />
              <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-[#008BFF]">High-Performance Digital Infrastructure</span>
            </motion.div>
            
            <motion.h2 {...fadeInUp} className="text-[14vw] md:text-7xl lg:text-[100px] font-black tracking-tighter uppercase leading-[0.95] md:leading-[0.9] mb-10 md:mb-12">
              <span className="block text-white/20">Not for Everyone.</span>
              <span className="block text-white">Built for the</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#008BFF] italic">Ambitious.</span>
            </motion.h2>
            
            <motion.p {...fadeInUp} className="max-w-xl text-white/40 font-medium leading-relaxed mb-12 md:mb-16 border-l-2 border-[#008BFF]/20 pl-6 md:pl-10 uppercase tracking-widest text-[11px] md:text-[13px]">
              Ersnoble is a systems firm that engineers visual authority and technical power. We build the digital engines for leaders who refuse to settle for standard solutions.
            </motion.p>
            
            <motion.div {...fadeInUp}>
              <Link href="/contact" className="group relative inline-flex items-center gap-8 bg-white text-black px-8 md:px-12 py-5 md:py-6 hover:bg-[#008BFF] hover:text-white transition-all duration-500 w-full sm:w-auto justify-between">
                  <div className="flex flex-col items-start text-left">
                    <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] opacity-50 mb-1">Availability: Limited</span>
                    <span className="text-lg md:text-xl font-black uppercase tracking-tight">Begin Mandate</span>
                  </div>
                  <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* DASHBOARD COMPONENT */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="relative block group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#008BFF] to-[#00D1FF] rounded-xl blur-xl lg:blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000 animate-pulse" />
            
            <div className="bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden relative z-10 shadow-2xl">
              <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 bg-white/5 border-b border-white/10 font-mono text-[9px] md:text-[10px] text-white/30">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500/30"/>
                  <div className="w-2 h-2 rounded-full bg-[#008BFF] animate-pulse"/>
                </div>
                <span className="tracking-widest">SYSTEM_CORE_v2.6</span>
              </div>
              
              <div className="p-6 md:p-10 space-y-6 md:space-y-8 font-mono">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-[#008BFF] text-[10px] font-black uppercase tracking-widest">
                    <Terminal size={14}/> Operational_Logic
                  </div>
                  <pre className="text-[10px] md:text-xs text-white/40 leading-relaxed bg-black/40 p-4 md:p-6 rounded border border-white/5 relative overflow-hidden">
                    <code>{`const Ersnoble = {
  standard: "Institutional",
  velocity: "45_Days",
  scaling: "Unlimited"
};`}</code>
                    <motion.div 
                      animate={{ top: ['-100%', '200%'] }} 
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="absolute left-0 w-full h-10 bg-gradient-to-b from-transparent via-[#008BFF]/5 to-transparent pointer-events-none" 
                    />
                  </pre>
                </div>

                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="bg-white/5 p-4 md:p-6 border border-white/5">
                    <div className="text-[8px] md:text-[9px] text-white/20 uppercase mb-1 md:mb-2">Security</div>
                    <div className="text-sm md:text-xl font-black text-[#008BFF]">SVRN_1</div>
                  </div>
                  <div className="bg-white/5 p-4 md:p-6 border border-white/5 relative overflow-hidden">
                    <div className="text-[8px] md:text-[9px] text-white/20 uppercase mb-1 md:mb-2">Traffic</div>
                    <div className="text-sm md:text-xl font-black text-white">OPTIMAL</div>
                    <motion.div 
                      animate={{ x: ['-100%', '100%'] }} 
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }} 
                      className="absolute bottom-0 left-0 h-[2px] w-full bg-[#008BFF] shadow-[0_0_10px_#008BFF]" 
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -inset-10 bg-[#008BFF]/5 blur-[80px] md:blur-[120px] rounded-full z-0 pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* 4. ECOSYSTEM */}
      <section id="ecosystem" className="py-24 md:py-40 bg-[#050505] border-y border-white/5 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">The <br /> <span className="text-[#008BFF]">Ecosystem.</span></h2>
            <p className="max-w-md text-white/30 text-[9px] md:text-[10px] uppercase tracking-[0.4em] leading-loose">
              A unified system where professional branding and high-end engineering merge to create your most valuable business asset.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 overflow-hidden rounded-sm">
            {[
              { icon: <PenTool />, title: "Identity", desc: "Expert design systems that establish immediate professional authority in your market." },
              { icon: <Activity />, title: "UI Strategy", desc: "Behavioral engineering designed to turn visitors into committed, paying clients." },
              { icon: <Smartphone />, title: "App Systems", desc: "Custom mobile software built on secure, unhackable institutional foundations." },
              { icon: <Globe />, title: "Web Architecture", desc: "Full-stack web deployment built to handle global traffic with zero slowdown." }
            ].map((s, i) => (
              <motion.div key={i} {...fadeInUp} className="bg-black p-10 md:p-16 group hover:bg-[#080808] transition-all relative">
                <div className="mb-8 md:mb-12 text-white/20 group-hover:text-[#008BFF] transition-colors">{s.icon}</div>
                <h4 className="text-lg md:text-xl font-black uppercase mb-4 md:mb-6 tracking-widest">{s.title}</h4>
                <p className="text-[10px] md:text-[11px] text-white/40 leading-relaxed uppercase tracking-widest">{s.desc}</p>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#008BFF] group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. VELOCITY GRAPH */}
      <section className="py-24 md:py-40 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent p-8 md:p-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5"><Cpu size={150} /></div>
          <div className="relative z-10 text-center md:text-left">
            <span className="text-[10px] font-black uppercase tracking-[0.8em] text-[#008BFF] mb-6 block">Time to Market</span>
            <h3 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mb-16 italic text-white">Ersnoble Speed <br/> vs. Industry Standard.</h3>
            
            <div className="h-64 md:h-80 w-full mt-20 flex items-end gap-3 md:gap-4 px-2 md:px-4 border-l border-b border-white/10 relative">
              <div className="absolute -left-10 md:-left-16 top-0 h-full flex flex-col justify-between text-[8px] md:text-[9px] font-mono text-white/20 uppercase tracking-widest">
                <span>Scale</span><span>Launch</span><span>Audit</span>
              </div>
              <div className="flex-1 bg-white/5 h-[35%] relative group">
                <div className="absolute -top-12 left-0 text-[8px] md:text-[10px] font-mono opacity-20 uppercase tracking-tighter leading-tight">Typical Agency <br/> (6 Months+)</div>
              </div>
              <motion.div 
                initial={{ height: 0 }} 
                whileInView={{ height: '90%' }} 
                transition={{ duration: 1.5, ease: "circOut" }} 
                className="flex-1 bg-gradient-to-t from-[#008BFF] to-[#00D1FF] relative shadow-[0_0_40px_rgba(0,139,255,0.2)]"
              >
                <div className="absolute -top-12 left-0 text-[8px] md:text-[10px] font-mono text-[#008BFF] font-black uppercase tracking-widest animate-pulse whitespace-nowrap">Ersnoble <br/> (45 Days)</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SELECTED WORKS */}
      <section id="works" className="py-24 md:py-40 px-6 md:px-12 lg:px-24 bg-[#020202]">
        <div className="max-w-[1800px] mx-auto">
          <div className="mb-16 md:mb-20">
            <span className="text-[10px] font-black uppercase tracking-[0.8em] text-[#008BFF] mb-4 block">Archive</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Selected <br/> Engagements.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            {[
              {
                id: "ersnoble-ecosystem",
                title: "Ersnoble Digital Sovereignty",
                category: "Fullstack Redesign // Institutional",
                year: "2026",
                img: "/Ersnoble_Media.png" 
              },
              {
                id: "infoware-limited",
                title: "Infoware Limited Systems",
                category: "Infrastructure // Enterprise Tech",
                year: "2024",
                img: "/infowarelimited.png"
              }
            ].map((work) => (
              <Link key={work.id} href={`/works/${work.id}`} className="group cursor-pointer block">
                <motion.div {...fadeInUp}>
                  <div className="relative aspect-[16/11] w-full overflow-hidden border border-white/10 bg-white/5 rounded-sm">
                    <div className="w-full h-full relative">
                      <img 
                        src={work.img} 
                        alt={work.title}
                        className="absolute top-0 left-0 w-full h-auto min-h-full object-top grayscale opacity-60 
                                  group-hover:grayscale-0 group-hover:opacity-100 
                                  transition-all duration-[4000ms] ease-in-out transform
                                  group-hover:translate-y-[calc(-100%+250px)] md:group-hover:translate-y-[calc(-100%+500px)]"
                      />
                    </div>
                    <div className="absolute inset-0 pointer-events-none border-[8px] md:border-[12px] border-[#020202] z-10" />
                    <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none
                                    bg-gradient-to-b from-[#008BFF]/5 via-transparent to-[#008BFF]/5" />
                    <div className="absolute bottom-6 right-6 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                      <div className="bg-[#008BFF] text-white p-3 rounded-full shadow-[0_0_20px_rgba(0,139,255,0.6)]">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-between items-end border-l-2 border-white/5 pl-6 group-hover:border-[#008BFF] transition-all duration-500">
                    <div>
                      <h5 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-2">{work.title}</h5>
                      <p className="text-[9px] md:text-[10px] text-white/30 uppercase tracking-[0.4em]">{work.category}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] font-mono text-white/20 block mb-1">RELEASE_VER</span>
                      <span className="text-[10px] md:text-[11px] font-mono text-[#008BFF]">{work.year}</span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ROADMAP */}
      <section id="roadmap" className="py-24 md:py-40 px-6 md:px-12 lg:px-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-20 md:mb-32">The Protocol.</h2>
          <div className="relative">
            <div className="absolute left-[23px] top-0 bottom-0 w-px bg-white/10 hidden md:block">
              <motion.div style={{ scaleY: scaleLine, originY: 0 }} className="w-full h-full bg-[#008BFF] shadow-[0_0_20px_#008BFF]" />
            </div>
            <div className="space-y-20 md:space-y-40">
              {[
                { step: "01", title: "Diagnostic Audit", desc: "We analyze your brand and tech to find the fastest path to market dominance.", icon: <Search /> },
                { step: "02", title: "Architecture", desc: "Creating the visual language and technical roadmap that defines your power.", icon: <Layers /> },
                { step: "03", title: "Technical Build", desc: "Building your software and identity simultaneously for maximum efficiency.", icon: <Cpu /> },
                { step: "04", title: "Deployment", desc: "Launching your new digital system within our guaranteed 45-day window.", icon: <Rocket /> }
              ].map((item, i) => (
                <motion.div key={i} {...fadeInUp} className="relative flex flex-col md:flex-row gap-8 md:gap-16 group">
                  <div className="relative z-10 h-12 w-12 rounded-full bg-black border border-white/20 flex items-center justify-center group-hover:border-[#008BFF] transition-all flex-shrink-0">
                    <span className="text-[10px] font-black group-hover:text-[#008BFF]">{item.step}</span>
                  </div>
                  <div className="flex-1 bg-white/[0.02] border border-white/5 p-8 md:p-12 group-hover:border-[#008BFF]/20 transition-all">
                    <div className="flex items-center gap-6 mb-4 md:mb-6">
                      <div className="text-white/20 group-hover:text-[#008BFF] transition-colors">{item.icon}</div>
                      <h3 className="text-xl md:text-3xl font-black uppercase tracking-tighter group-hover:translate-x-2 transition-transform">{item.title}</h3>
                    </div>
                    <p className="text-white/30 text-[12px] md:text-lg leading-relaxed uppercase tracking-[0.15em] md:tracking-[0.2em]">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section className="py-32 md:py-64 px-6 md:px-12 text-center bg-white text-black relative">
        <motion.h2 {...fadeInUp} className="text-5xl md:text-[140px] font-black uppercase tracking-tighter leading-tight md:leading-none mb-16">
          Execute <br /> 
          <span className="font-light italic lowercase text-black/30">the</span> Vision.
        </motion.h2>
        <Link href="/contact" className="group flex flex-col items-center gap-6">
            <div className="flex items-center gap-6 md:gap-12 border-b-4 md:border-b-8 border-black pb-4 group-hover:gap-16 transition-all">
              <span className="text-xl md:text-7xl font-black uppercase tracking-tighter">Initialize Partnership</span>
              <ArrowRight className="w-8 h-8 md:w-16 md:h-16 text-[#008BFF]" />
            </div>
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] opacity-40">Engineering High-Stake Assets // 2026 Engagement</span>
        </Link>
      </section>

    </main>
  );
}