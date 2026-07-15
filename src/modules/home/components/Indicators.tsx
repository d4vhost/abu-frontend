const STATS = [
  { value: "4", label: "Etapas nutricionales", suffix: "" },
  { value: "20", label: "Años de experiencia", suffix: "+" },
  { value: "2", label: "Provincias de distribución", suffix: "" },
  { value: "BPM", label: "Certificación de calidad", suffix: "" },
];

export default function Indicators() {
  return (
    <section className="bg-abu-surface border-t border-abu-primary/20 border-b border-abu-border">
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4">
          {STATS.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center md:border-r md:border-abu-border last:border-0 px-4"
            >
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl md:text-5xl font-black text-abu-primary leading-none">
                  {stat.value}
                </span>
                {stat.suffix && (
                  <span className="text-2xl font-black text-abu-primary-hover">
                    {stat.suffix}
                  </span>
                )}
              </div>
              <span className="text-xs uppercase tracking-widest text-abu-text-muted font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
