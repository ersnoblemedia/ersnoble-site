import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  desc: string;
  Icon: LucideIcon;
}

export default function ServiceCard({ title, desc, Icon }: Props) {
  return (
    <div className="p-8 border border-white/10 bg-surface hover:border-accent/50 transition-all group">
      <Icon className="w-12 h-12 text-accent mb-6 group-hover:scale-110 transition-transform" />
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}