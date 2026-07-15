export default function ProductionProcess() {
  const steps = [
    { title: "Selección", desc: "Compra y recepción de materias primas." },
    { title: "Dosificación", desc: "Pesaje según cada fórmula específica." },
    { title: "Molienda", desc: "Reducción del tamaño de los ingredientes." },
    { title: "Mezclado", desc: "Integración uniforme de nutrientes." },
    { title: "Control", desc: "Verificación de la calidad del lote." },
    { title: "Ensacado", desc: "Envasado en presentaciones comerciales." },
    { title: "Almacenaje", desc: "Protección frente a humedad y deterioro." },
    { title: "Distribución", desc: "Despacho a clientes y distribuidores." }
  ];

  return (
    <section className="py-24 bg-abu-cream relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-abu-wheat/20 rounded-l-[100px] -z-10" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-abu-green-dark mb-4">Nuestro Proceso de Producción</h2>
          <p className="text-abu-charcoal/70 text-lg">
            Desde la selección de materias primas hasta la entrega, cuidamos cada detalle para garantizar un alimento inocuo y altamente nutritivo.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="relative bg-white p-6 rounded-xl shadow-sm border border-abu-earth/5 hover:shadow-md transition-shadow group">
              <div className="text-4xl font-black text-abu-corn/20 mb-2 group-hover:text-abu-corn/40 transition-colors">
                {String(idx + 1).padStart(2, '0')}
              </div>
              <h3 className="text-xl font-bold text-abu-green-dark mb-2">{step.title}</h3>
              <p className="text-sm text-abu-charcoal/60 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
