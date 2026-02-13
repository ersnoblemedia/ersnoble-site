"use client";
import { motion } from "framer-motion";
import { Shield, Rocket, Layers, BarChart3, CheckCircle2 } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Brand Architecture",
    description: "We don't just design logos; we build visual and strategic foundations that command authority in your market.",
    features: ["Visual Identity Systems", "Brand Positioning", "Market Analysis"]
  },
  {
    icon: Rocket,
    title: "Digital Growth",
    description: "Data-backed scaling strategies designed to put your brand in front of the right eyes at the right time.",
    features: ["Performance Marketing", "SEO Dominance", "Conversion Optimization"]
  },
  {
    icon: Layers,
    title: "Full-Stack Systems",
    description: "High-performance digital products built with modern tech stacks for speed, security, and infinite scale.",
    features: ["Next.js Applications", "API Integrations", "Cloud Infrastructure"]
  },
  {
    icon: BarChart3,
    title: "Strategic Content",
    description: "Content that works as a business asset. We produce high-fidelity media that drives trust and equity.",
    features: ["Video Production", "Copywriting", "Social Authority"]
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-background text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <h1 className="text-6xl font-bold tracking-tighter mb-6">Strategic Pillars</h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            We architect end-to-end digital systems that transform brands into market leaders.
          </p>
        </motion.div>

        <div className="grid gap-12">
          {pillars.map((pillar, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 md:p-12 border border-white/10 bg-surface hover:border-accent/40 transition-all flex flex-col md:flex-row gap-12 items-start"
            >
              <div className="bg-background p-4 border border-white/5">
                <pillar.icon className="w-12 h-12 text-accent" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4">{pillar.title}</h2>
                <p className="text-gray-400 text-lg mb-6 max-w-2xl">{pillar.description}</p>
                <ul className="grid grid-cols-2 gap-3">
                  {pillar.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-accent" /> {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}