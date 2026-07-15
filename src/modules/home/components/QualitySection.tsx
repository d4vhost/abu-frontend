import { ShieldCheck, Award, Factory, ClipboardCheck } from "lucide-react";

const QUALITY_ITEMS = [
  { icon: Factory, title: "Registro de Fabricante", desc: "Instalaciones certificadas para la producción agroindustrial." },
  { icon: ClipboardCheck, title: "Registros de Productos", desc: "Fórmulas aprobadas para nutrición animal." },
  { icon: ShieldCheck, title: "BPM", desc: "Aplicación de Buenas Prácticas de Manufactura." },
  { icon: Award, title: "Análisis de Laboratorio", desc: "Resultados bromatológicos verificados." },
];

export default function QualitySection() {
  return (
    <section className="py-24 bg-abu-light">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
          {/* Image side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative overflow-hidden h-72 lg:h-full min-h-[300px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/calidad.jpg"
                alt="Control de calidad en instalaciones A.B.U."
                className="w-full h-full object-cover"
              />
              {/* Gold corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-abu-primary" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-abu-primary" />
            </div>
          </div>

          {/* Content side */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-abu-primary" />
              <span className="text-xs uppercase tracking-[0.25em] text-abu-primary font-semibold">
                Respaldo institucional
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-abu-heading mb-5 leading-tight">
              Compromiso con la Calidad
            </h2>
            <p className="text-abu-body text-lg mb-10 leading-relaxed">
              Trabajamos para mantener la uniformidad en cada lote y entregar
              alimentos adecuados para las diferentes etapas productivas de
              tus aves, respaldados por entidades regulatorias.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {QUALITY_ITEMS.map((item, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="shrink-0 w-10 h-10 bg-abu-green-light border border-abu-green/20 flex items-center justify-center group-hover:bg-abu-primary/10 group-hover:border-abu-primary/30 transition-colors">
                    <item.icon className="w-5 h-5 text-abu-green group-hover:text-abu-primary transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-abu-heading mb-1 text-sm">{item.title}</h4>
                    <p className="text-xs text-abu-caption leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
