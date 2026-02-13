"use client";
import { motion } from "framer-motion";
import { Target, Zap, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Precision Engineering",
      desc: "We don't guess. We use data-driven insights to architect every pixel and every line of code for maximum conversion."
    },
    {
      icon: Zap,
      title: "Velocity & Scale",
      desc: "In the digital economy, speed is a feature. Our systems are built to deploy fast and scale infinitely."
    },
    {
      icon: ShieldCheck,
      title: "Brand Integrity",
      desc: "We guard your brand’s reputation by ensuring every digital touchpoint reflects premium quality and authority."
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-24 bg-background text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Hero Section */}
        <section className="mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-6"
          >Our Mission</motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight max-w-4xl"
          >
            We bridge the gap between <span className="text-gray-500">raw ambition</span> and <span className="text-accent">digital dominance.</span>
          </motion.h1>
        </section>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-start mb-32">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-400 text-lg leading-relaxed"
          >
            <p>Ersnoble Digital Media emerged from a simple observation: most agencies focus on aesthetics while ignoring the underlying systems that drive growth. We chose a different path.</p>
            <p>By combining high-end design with full-stack engineering, we create "Digital Architectures." These aren't just websites; they are business assets designed to outperform competitors and capture market share.</p>
          </motion.div>
          
          <div className="border-l border-white/10 pl-8 space-y-12">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <value.icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-surface p-12 md:p-24 text-center border border-white/5"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-8">Ready to architect your digital legacy?</h2>
          <a href="/contact" className="inline-block px-10 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-all">Let's Talk Strategy</a>
        </motion.section>

      </div>
    </main>
  );
}