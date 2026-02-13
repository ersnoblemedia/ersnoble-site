"use client";
import { motion } from "framer-motion";
import { Shield, Rocket, Layers, BarChart3 } from "lucide-react"; // Import Icons
import ServiceCard from "./components/ServiceCard"; // Import your new component

export default function Home() {
  return (
    <main className="bg-background text-white">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-accent uppercase tracking-[0.3em] text-sm font-bold mb-4">
              Future-Proof Your Brand
            </h2>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight mb-8">
              We Architect Brands & <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                Digital Systems for Scale.
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <ServiceCard 
            Icon={Shield} 
            title="Brand Architecture" 
            desc="Defining the structural integrity and visual soul of your brand identity." 
          />
          <ServiceCard 
            Icon={Rocket} 
            title="Digital Growth" 
            desc="Scaling your presence through data-driven performance marketing." 
          />
          <ServiceCard 
            Icon={Layers} 
            title="Full-Stack Systems" 
            desc="Custom software solutions built for reliability and massive scale." 
          />
          <ServiceCard 
            Icon={BarChart3} 
            title="Strategic Content" 
            desc="High-authority media production that converts attention into equity." 
          />
        </motion.div>
      </section>
      {/* ABOUT PREVIEW */}
      <section className="py-24 bg-surface border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-6">Our Philosophy</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">
              We don't just build websites. We build <span className="text-gray-500">Revenue Engines.</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Ersnoble Digital Media was founded on the principle that digital presence should be a measurable asset, not a line-item expense. We combine deep technical engineering with high-level brand strategy.
            </p>
            <button className="text-white font-bold border-b-2 border-accent pb-2 hover:text-accent transition-all">
              Learn about our methodology →
            </button>
          </div>
          
          {/* Abstract Visual Placeholder */}
          <div className="relative h-[400px] bg-gradient-to-br from-accent/20 to-transparent border border-white/10 flex items-center justify-center">
             <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
             <span className="text-white/20 font-mono tracking-tighter text-8xl select-none">ERSNOBLE</span>
          </div>
        </div>
      </section>
    </main>
  );
}