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
    <section className="py-20 bg-abu-bg border-t border-abu-line">
      <div className="w-full px-6 md:px-10 lg:px-16">
        <div className="mb-12 max-w-lg">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-px bg-abu-gold" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-abu-gold font-semibold">
              Cómo trabajamos
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-abu-white mb-3">
            Nuestro Proceso
          </h2>
          <p className="text-abu-gray text-sm leading-relaxed">
            Desde la selección del grano hasta la entrega en tu granja,
            controlamos cada paso.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="group relative h-56 overflow-hidden bg-abu-card cursor-default hover:shadow-lg transition-all duration-300"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-30 group-hover:opacity-50"
                style={{ backgroundImage: `url(${step.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-abu-bg via-abu-bg/60 to-transparent" />
              <div className="absolute left-0 top-0 bottom-0 w-px bg-abu-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom z-10" />

              <div className="absolute inset-0 p-4 flex flex-col justify-end z-10">
                <div className="text-abu-gold font-extrabold text-3xl leading-none mb-1.5 opacity-30 group-hover:opacity-70 transition-opacity">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <h3 className="text-sm font-bold text-abu-white mb-0.5">{step.title}</h3>
                <p className="text-abu-gray text-[11px] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
