import { valuesData } from "../data/about-data";
import { Handshake, Shield, Star, TrendingUp } from "lucide-react";

const ICONS = [Handshake, Shield, Star, TrendingUp];

export default function ValuesSection() {
  return (
    <section className="py-16 bg-abu-surface border-t border-abu-line">
      <div className="w-full px-6 md:px-10 lg:px-16">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-px bg-abu-gold" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-abu-gold font-semibold">Lo que nos guía</span>
          </div>
          <h2 className="text-2xl font-bold text-abu-white">Nuestros Valores</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {valuesData.map((value, index) => {
            const Icon = ICONS[index];
            return (
              <div key={index} className="group relative bg-abu-card border border-abu-line hover:border-abu-gold/30 p-6 transition-all overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-abu-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
                <div className="w-8 h-8 bg-abu-surface border border-abu-line flex items-center justify-center mb-4 group-hover:border-abu-gold/40 transition-colors">
                  <Icon className="w-4 h-4 text-abu-gold" />
                </div>
                <h3 className="text-sm font-bold text-abu-white mb-2">{value.title}</h3>
                <p className="text-abu-gray text-xs leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
