"use client";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Globe, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left Side: Text & Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold tracking-tighter mb-8">
              Let's Architect <br /> <span className="text-accent">Something Great.</span>
            </h1>
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              Ready to scale your digital presence? We're currently accepting select new partners for 2026.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center border border-white/10">
                  <Mail className="text-accent w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500">Email Us</p>
                  <p className="text-white font-medium">hello@ersnoble.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center border border-white/10">
                  <Globe className="text-accent w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500">Location</p>
                  <p className="text-white font-medium">Remote / Global</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: The Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-8 md:p-12 rounded-2xl"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-accent transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-accent transition-colors" placeholder="john@company.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-accent transition-colors" placeholder="How can we help scale your brand?"></textarea>
              </div>
              <button className="w-full py-4 bg-accent hover:bg-accent-dark text-white font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all">
                Send Inquiry <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </main>
  );
}