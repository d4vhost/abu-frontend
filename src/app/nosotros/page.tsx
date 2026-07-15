import { Metadata } from "next";

export const metadata: Metadata = {
 title: "Nosotros | A.B.U.",
 description: "Conoce la historia, misión y visión de A.B.U. Alimentos Balanceados Uzcátegui.",
};

export default function NosotrosPage() {
 return (
 <div className="pt-24 pb-20 bg-abu-cream min-h-screen">
 <div className="container mx-auto px-4 md:px-8 max-w-4xl">
 <h1 className="text-4xl md:text-5xl font-bold text-abu-green-dark mb-8">Nuestra Historia</h1>
 
 <div className="prose prose-lg prose-headings:text-abu-green-dark text-abu-charcoal/80">
 <p>
 <strong>A.B.U. Alimentos Balanceados Uzcátegui</strong> nació de la experiencia de la familia Uzcátegui en la producción avícola y de la necesidad de desarrollar una alimentación especializada para aves.
 </p>
 <p>
 Desde nuestros primeros años, la empresa ha trabajado arduamente en la fabricación de alimentos adaptados a las diferentes etapas de crecimiento, desarrollo, postura y engorde. Entendemos de primera mano los desafíos del productor avícola porque venimos de ese mismo entorno, lo que nos permite formular soluciones nutricionales que realmente funcionan en campo.
 </p>

 <h2 className="text-2xl font-bold mt-12 mb-4">Misión</h2>
 <p className="bg-white p-6 border-l-4 border-abu-corn shadow-sm -r-md">
 Elaborar y comercializar alimentos balanceados para aves, mediante procesos controlados y fórmulas adaptadas a cada etapa productiva, buscando satisfacer las necesidades de productores y distribuidores con productos de alto rendimiento.
 </p>

 <h2 className="text-2xl font-bold mt-12 mb-4">Visión</h2>
 <p className="bg-white p-6 border-l-4 border-abu-corn shadow-sm -r-md">
 Consolidar la presencia de A.B.U. en el mercado ecuatoriano de nutrición avícola mediante productos confiables, atención cercana y mejora continua de nuestros procesos agroindustriales.
 </p>
 </div>
 </div>
 </div>
 );
}
