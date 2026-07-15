import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="py-24 bg-abu-bg-alt border-t border-abu-line relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 border-t border-r border-abu-gold/10 hidden md:block" />
      <div className="absolute bottom-0 left-0 w-48 h-48 border-b border-l border-abu-gold/10 hidden md:block" />

      <div className="w-full px-6 md:px-10 lg:px-16 text-center max-w-4xl mx-auto relative z-10">
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="w-6 h-px bg-abu-gold" />
          <span className="text-[11px] uppercase tracking-[0.25em] text-abu-gold font-semibold">
            Red de distribución
          </span>
          <div className="w-6 h-px bg-abu-gold" />
        </div>

        <h2 className="text-2xl md:text-4xl font-bold text-abu-white mb-5 text-balance">
          Lleva nuestros productos a más{" "}
          <span className="text-abu-gold">productores avícolas</span>
        </h2>
        <p className="text-abu-gray text-sm mb-10 max-w-xl mx-auto leading-relaxed">
          Únete a nuestra red de distribuidores y ofrece en tu localidad
          alimentos balanceados respaldados por trayectoria y calidad.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link
            href="/distribuidores"
            className="inline-flex items-center justify-center gap-2 bg-abu-gold text-abu-bg px-7 py-3.5 font-semibold text-sm hover:bg-abu-gold-hover transition-colors"
          >
            Quiero ser distribuidor
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center gap-2 border border-abu-line text-abu-white px-7 py-3.5 font-semibold text-sm hover:border-abu-gold hover:text-abu-gold transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            Contactar a un asesor
          </Link>
        </div>
      </div>
    </section>
  );
}
