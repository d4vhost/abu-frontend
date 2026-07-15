import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1628189680385-d6e8e89574e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
      />
      <div className="absolute inset-0 z-10 bg-abu-green-dark/75" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 md:px-8 text-center md:text-left flex flex-col md:flex-row items-center pt-20">
        <div className="md:w-2/3 lg:w-1/2">
          <span className="inline-block px-4 py-1.5 rounded-full bg-abu-corn/20 text-abu-corn text-sm font-semibold tracking-wider mb-6 border border-abu-corn/30">
            NUEVA IMAGEN, MISMA CALIDAD
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
            Nutrición balanceada para cada etapa de tus aves
          </h1>
          <p className="text-lg text-abu-cream/90 mb-10 text-balance leading-relaxed">
            Producimos alimentos balanceados para crecimiento, desarrollo, postura y engorde, respaldados por la experiencia de la familia Uzcátegui en el sector avícola.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link 
              href="/productos" 
              className="bg-abu-corn text-abu-charcoal px-8 py-4 rounded-md font-bold text-lg hover:bg-abu-wheat transition-colors flex items-center justify-center gap-2"
            >
              Conocer productos <ChevronRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/contacto" 
              className="bg-transparent text-white border-2 border-white/30 px-8 py-4 rounded-md font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              Solicitar cotización
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
