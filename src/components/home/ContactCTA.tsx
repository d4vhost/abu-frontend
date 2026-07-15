import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="py-20 bg-abu-wheat">
      <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-abu-green-dark mb-6">
          Lleva nuestros productos a más productores avícolas
        </h2>
        <p className="text-abu-charcoal/80 text-lg mb-10">
          Únete a nuestra red de distribuidores y ofrece en tu localidad alimentos balanceados respaldados por trayectoria y calidad.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/distribuidores" 
            className="bg-abu-green text-white px-8 py-4 rounded-sm font-bold hover:bg-abu-green-dark transition-colors flex items-center justify-center gap-2"
          >
            Quiero ser distribuidor <ArrowRight className="w-5 h-5" />
          </Link>
          <Link 
            href="/contacto" 
            className="bg-transparent border-2 border-abu-green text-abu-green px-8 py-4 rounded-sm font-bold hover:bg-abu-green/5 transition-colors flex items-center justify-center"
          >
            Contactar a un asesor
          </Link>
        </div>
      </div>
    </section>
  );
}
