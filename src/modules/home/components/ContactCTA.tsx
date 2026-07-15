import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative py-28 bg-abu-dark overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-abu-dark via-abu-dark-sec to-abu-dark opacity-90" />
      {/* Gold corner accents */}
      <div className="absolute top-0 right-0 w-64 h-64 border-t border-r border-abu-primary/15 hidden md:block" />
      <div className="absolute bottom-0 left-0 w-64 h-64 border-b border-l border-abu-primary/15 hidden md:block" />

      <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl relative z-10">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-px bg-abu-primary" />
          <span className="text-xs uppercase tracking-[0.25em] text-abu-primary font-semibold">
            Red de distribución
          </span>
          <div className="w-8 h-px bg-abu-primary" />
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight text-balance">
          Lleva nuestros productos a más{" "}
          <span className="text-abu-accent-gold">productores avícolas</span>
        </h2>
        <p className="text-abu-text-muted text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          Únete a nuestra red de distribuidores y ofrece en tu localidad
          alimentos balanceados respaldados por trayectoria y calidad.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/distribuidores"
            className="inline-flex items-center justify-center gap-2 bg-abu-primary text-white px-8 py-4 font-bold text-base hover:bg-abu-primary-hover transition-colors shadow-xl shadow-abu-primary/25"
          >
            Quiero ser distribuidor
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center gap-2 border border-white/25 text-white px-8 py-4 font-bold text-base hover:border-abu-primary hover:text-abu-accent-gold transition-colors"
          >
            <Phone className="w-4 h-4" />
            Contactar a un asesor
          </Link>
        </div>
      </div>
    </section>
  );
}
