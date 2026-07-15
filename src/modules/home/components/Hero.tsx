import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Marquee from "@/modules/core/components/Marquee";

export default function Hero() {
 return (
 <section className="relative w-full h-screen min-h-[700px] flex flex-col justify-between overflow-hidden pt-20">
 {/* Background Image with Overlay */}
 <div 
 className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
 style={{ backgroundImage: "url('/images/hero.jpg')" }}
 />
 <div className="absolute inset-0 z-10 bg-abu-bg-main/85" />

 {/* Content */}
 <div className="relative z-20 flex-1 flex items-center">
 <div className="container mx-auto px-4 md:px-8 text-center md:text-left flex flex-col md:flex-row items-center">
 <div className="md:w-2/3 lg:w-1/2">
 <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-abu-text leading-tight mb-6 text-balance">
 Nutrición balanceada para cada etapa de tus aves
 </h1>
 <p className="text-lg text-abu-text-muted mb-10 text-balance leading-relaxed">
 Producimos alimentos balanceados para crecimiento, desarrollo, postura y engorde, respaldados por la experiencia de la familia Uzcátegui en el sector avícola.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
 <Link 
 href="/productos" 
 className="bg-abu-primary text-abu-text px-8 py-4 font-bold text-lg hover:bg-abu-primary-hover transition-colors flex items-center justify-center gap-2"
 >
 Conocer productos <ChevronRight className="w-5 h-5" />
 </Link>
 <Link 
 href="/contacto" 
 className="bg-transparent text-abu-text border-2 border-abu-border px-8 py-4 font-bold text-lg hover:bg-abu-card/10 transition-colors flex items-center justify-center"
 >
 Solicitar cotización
 </Link>
 </div>
 </div>
 </div>
 </div>

 <div className="relative z-20">
 <Marquee />
 </div>
 </section>
 );
}
