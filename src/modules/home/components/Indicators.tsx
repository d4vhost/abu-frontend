const STATS = [
  { value: "4", label: "Etapas nutricionales", suffix: "" },
  { value: "20", label: "Años de experiencia", suffix: "+" },
  { value: "2", label: "Provincias", suffix: "" },
  { value: "BPM", label: "Calidad certificada", suffix: "" },
];

export default function Indicators() {
  return (
    <section className="bg-abu-surface border-b border-abu-line">
      <div className="w-full px-6 md:px-10 lg:px-16 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center lg:border-r lg:border-abu-line lg:last:border-0"
            >
              <div className="flex items-baseline gap-0.5 mb-1.5">
                <span className="text-3xl md:text-4xl font-extrabold text-abu-gold leading-none">
                  {stat.value}
                </span>
                {stat.suffix && (
                  <span className="text-xl font-extrabold text-abu-gold-dim">{stat.suffix}</span>
                )}
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-abu-gray font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
