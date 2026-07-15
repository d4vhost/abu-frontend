import { valuesData } from "../data/about-data";
import { Handshake, Shield, Star, TrendingUp } from "lucide-react";

const ICONS = [Handshake, Shield, Star, TrendingUp];

export default function ValuesSection() {
  return (
    <section className="py-24 bg-abu-light">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-abu-primary" />
            <span className="text-xs uppercase tracking-[0.25em] text-abu-primary font-semibold">
              Lo que nos guía
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-abu-heading">
            Nuestros Valores
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuesData.map((value, index) => {
            const Icon = ICONS[index];
            return (
              <div
                key={index}
                className="group relative bg-white border border-abu-border-light hover:border-abu-primary/40 p-8 transition-all duration-300 hover:shadow-lg overflow-hidden"
              >
                {/* Animated left border */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-abu-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-400 origin-bottom" />

                <div className="w-10 h-10 bg-abu-green-light border border-abu-green/20 flex items-center justify-center mb-5 group-hover:bg-abu-primary/10 group-hover:border-abu-primary/30 transition-colors">
                  <Icon className="w-5 h-5 text-abu-green group-hover:text-abu-primary transition-colors" />
                </div>

                <h3 className="text-lg font-bold text-abu-heading mb-3">{value.title}</h3>
                <p className="text-abu-body text-sm leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
