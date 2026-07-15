import { valuesData } from "../data/about-data";

const ICONS = ["⊕", "⊙", "⊚", "⊛"];

export default function ValuesSection() {
  return (
    <section className="py-24 bg-abu-bg-main border-t border-abu-primary/20">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-abu-primary" />
            <span className="text-xs uppercase tracking-[0.25em] text-abu-primary font-semibold">
              Lo que nos guía
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-abu-text">
            Nuestros Valores
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuesData.map((value, index) => (
            <div
              key={index}
              className="group relative bg-abu-card border border-abu-border hover:border-abu-primary/50 p-8 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(201,151,26,0.08)] overflow-hidden"
            >
              {/* Animated left border */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-abu-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-400 origin-bottom" />

              {/* Icon / number */}
              <div className="text-3xl text-abu-primary/20 group-hover:text-abu-primary/50 font-black mb-4 transition-colors duration-300 select-none">
                {ICONS[index]}
              </div>

              <h3 className="text-lg font-bold text-abu-primary mb-3">{value.title}</h3>
              <p className="text-abu-text-muted text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
