export default function ProductionProcess() {
 const PROCESS_STEPS = [
 {
 title: "Selección",
 description: "Compra y recepción de materias primas.",
 image: "/images/proceso-01.jpg"
 },
 {
 title: "Dosificación",
 description: "Pesaje según cada fórmula específica.",
 image: "/images/proceso-02.jpg"
 },
 {
 title: "Molienda",
 description: "Reducción del tamaño de los ingredientes.",
 image: "/images/proceso-03.jpg"
 },
 {
 title: "Mezclado",
 description: "Integración uniforme de nutrientes.",
 image: "/images/proceso-04.jpg"
 },
 {
 title: "Control",
 description: "Verificación de la calidad del lote.",
 image: "/images/proceso-05.jpg"
 },
 {
 title: "Ensacado",
 description: "Envasado en presentaciones comerciales.",
 image: "/images/proceso-06.jpg"
 },
 {
 title: "Almacenaje",
 description: "Protección frente a humedad y deterioro.",
 image: "/images/proceso-07.jpg"
 },
 {
 title: "Distribución",
 description: "Despacho a clientes y distribuidores.",
 image: "/images/proceso-08.jpg"
 }
 ];

 return (
 <section className="py-24 bg-abu-cream relative overflow-hidden">
 <div className="absolute top-0 right-0 w-1/2 h-full bg-abu-wheat/20 -z-10" />
 
 <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
 <div className="text-center mb-16">
 <h2 className="text-3xl md:text-5xl font-bold text-abu-green-dark mb-4">Nuestro Proceso</h2>
 <p className="text-abu-charcoal/70 text-lg max-w-2xl mx-auto">
 Desde la selección del grano hasta la entrega en tu granja, controlamos cada paso para garantizar inocuidad y nutrición superior.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
 {PROCESS_STEPS.map((step, idx) => (
 <div key={idx} className="relative bg-abu-green-dark p-6 h-64 shadow-sm border border-abu-earth/5 hover:shadow-md transition-shadow group overflow-hidden flex flex-col justify-end">
 <div 
 className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110 z-0 opacity-50 group-hover:opacity-40"
 style={{ backgroundImage: `url(${step.image})` }}
 />
 <div className="absolute inset-0 bg-gradient-to-t from-abu-green-dark via-abu-green-dark/80 to-transparent z-0" />
 
 <div className="relative z-10">
 <div className="text-abu-corn font-black text-5xl mb-2 opacity-50 group-hover:opacity-100 transition-opacity">
 {String(idx + 1).padStart(2, '0')}
 </div>
 <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
 <p className="text-abu-cream/80 text-sm">{step.description}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
}
