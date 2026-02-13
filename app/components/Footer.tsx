import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p className="text-sm text-gray-500 font-medium tracking-tight">
            © 2026 ERSNOBLE DIGITAL MEDIA. <span className="text-accent/50 hidden md:inline">|</span> ARCHITECTING FOR SCALE.
          </p>
        </div>
        <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">
          <Link href="/services" className="hover:text-accent transition-colors">Services</Link>
          <Link href="/case-studies" className="hover:text-accent transition-colors">Work</Link>
          <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
}