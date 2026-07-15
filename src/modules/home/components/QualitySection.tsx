import { ShieldCheck, Award, Factory, ClipboardCheck } from "lucide-react";

export default function QualitySection() {
 const items = [
 { icon: Factory, title: "Registro de Fabricante", desc: "Instalaciones certificadas para la producción agroindustrial." },
 { icon: ClipboardCheck, title: "Registros de Productos", desc: "Fórmulas aprobadas para nutrición animal." },
 { icon: ShieldCheck, title: "BPM", desc: "Aplicación de Buenas Prácticas de Manufactura." },
 { icon: Award, title: "Análisis de Laboratorio", desc: "Resultados bromatológicos verificados." },
 ];

 return (
 <section className="py-20 bg-abu-bg-main text-abu-text">
 <div className="container mx-auto px-4 md:px-8">
 <div className="flex flex-col lg:flex-row items-center gap-12">
 {/* Image side */}
 <div className="w-full lg:w-1/2">
 <div className="relative overflow-hidden aspect-video lg:aspect-square">
 {/* eslint-disable-next-line @next/next/no-img-element */}
 <img 
 src="/images/calidad.jpg" 
 alt="Control de calidad en laboratorio" 
 className="w-full h-full object-cover opacity-80"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-abu-green-dark/80 to-transparent" />
 </div>
 </div>
 
 {/* Content side */}
 <div className="w-full lg:w-1/2">
 <h2 className="text-3xl md:text-4xl font-bold text-abu-primary mb-6">Compromiso con la Calidad</h2>
 <p className="text-abu-text-muted/80 text-lg mb-10 leading-relaxed">
 Trabajamos para mantener la uniformidad en cada lote y entregar alimentos adecuados para las diferentes etapas productivas de tus aves. Respaldados por entidades regulatorias y de control.
 </p>
 
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
 {items.map((item, idx) => (
 <div key={idx} className="flex gap-4">
 <div className="bg-abu-card/10 p-3 shrink-0 h-fit">
 <item.icon className="w-6 h-6 text-abu-primary" />
 </div>
 <div>
 <h4 className="font-bold text-abu-text mb-1">{item.title}</h4>
 <p className="text-sm text-abu-text-muted/60">{item.desc}</p>
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
