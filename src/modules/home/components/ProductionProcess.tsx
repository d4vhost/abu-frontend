export default function ProductionProcess() {
  const PROCESS_STEPS = [
    { title: "Selección", description: "Compra y recepción de materias primas.", image: "/images/proceso-01.jpg" },
    { title: "Dosificación", description: "Pesaje según cada fórmula específica.", image: "/images/proceso-02.jpg" },
    { title: "Molienda", description: "Reducción del tamaño de los ingredientes.", image: "/images/proceso-03.jpg" },
    { title: "Mezclado", description: "Integración uniforme de nutrientes.", image: "/images/proceso-04.jpg" },
    { title: "Control", description: "Verificación de la calidad del lote.", image: "/images/proceso-05.jpg" },
    { title: "Ensacado", description: "Envasado en presentaciones comerciales.", image: "/images/proceso-06.jpg" },
    { title: "Almacenaje", description: "Protección frente a humedad y deterioro.", image: "/images/proceso-07.jpg" },
    { title: "Distribución", description: "Despacho a clientes y distribuidores.", image: "/images/proceso-08.jpg" },
  ];

  return (
    <section className="py-24 bg-abu-bg-main border-t border-abu-primary/20 relative overflow-hidden">
      {/* Background texture stripe */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-abu-surface/40 hidden lg:block" />
      <div className="absolute right-1/3 top-0 bottom-0 w-px bg-abu-border hidden lg:block" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-abu-primary" />
            <span className="text-xs uppercase tracking-[0.25em] text-abu-primary font-semibold">
              Cómo trabajamos
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-abu-text mb-4 leading-tight">
            Nuestro Proceso
          </h2>
          <p className="text-abu-text-muted text-lg leading-relaxed">
            Desde la selección del grano hasta la entrega en tu granja,
            controlamos cada paso para garantizar inocuidad y nutrición consistente.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="group relative h-60 overflow-hidden bg-abu-card border border-abu-border hover:border-abu-primary/50 transition-all duration-300 cursor-default"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-30 group-hover:opacity-50"
                style={{ backgroundImage: `url(${step.image})` }}
              />
              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-abu-bg-main via-abu-bg-main/70 to-transparent" />
              {/* Gold left border on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-abu-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />

              {/* Content */}
              <div className="absolute inset-0 p-5 flex flex-col justify-end z-10">
                <div className="text-abu-primary font-black text-4xl leading-none mb-2 opacity-40 group-hover:opacity-80 transition-opacity duration-300">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <h3 className="text-base font-bold text-abu-text mb-1">{step.title}</h3>
                <p className="text-abu-text-muted text-xs leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
