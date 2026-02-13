"use client";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Vanguard Fintech",
    category: "System Architecture",
    result: "+140% Conversion",
    image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800",
    desc: "Rebuilding a legacy financial platform for the modern age."
  },
  {
    title: "Luxe Mobility",
    category: "Brand Identity",
    result: "Global Launch",
    image: "https://images.unsplash.com/photo-1635776062127-d379bfcbb9c8?auto=format&fit=crop&q=80&w=800",
    desc: "A minimalist identity for an EV startup aiming for dominance."
  },
  {
    title: "Aether AI",
    category: "Digital Growth",
    result: "2.4M reach",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    desc: "Aggressive organic growth strategy for a silicon valley AI firm."
  }
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-background text-white">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20">
          <h1 className="text-6xl font-bold tracking-tighter mb-4">Selected Works</h1>
          <p className="text-gray-400 text-xl tracking-tight">Proven systems. Measurable impact.</p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden bg-surface border border-white/10"
            >
              {/* Image Container */}
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-accent text-xs font-bold uppercase tracking-widest mb-2">{project.category}</p>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>
                  <span className="text-[10px] py-1 px-2 border border-white/20 font-mono">{project.result}</span>
                </div>
                <p className="text-gray-400 text-sm mb-6">{project.desc}</p>
                <div className="flex items-center gap-2 text-sm font-bold group-hover:text-accent transition-colors">
                  View Case Study <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}