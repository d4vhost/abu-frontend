import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Marquee from "@/modules/core/components/Marquee";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex flex-col justify-between overflow-hidden bg-abu-dark">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-abu-dark/95 via-abu-dark/80 to-abu-dark-sec/70" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-abu-dark via-transparent to-transparent" />

      {/* Decorative vertical gold line */}
      <div className="absolute left-8 md:left-16 top-32 bottom-32 w-px bg-gradient-to-b from-transparent via-abu-primary/40 to-transparent z-20 hidden lg:block" />

      {/* Content */}
      <div className="relative z-30 flex-1 flex items-center pt-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl lg:pl-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-abu-primary" />
              <span className="text-xs uppercase tracking-[0.3em] text-abu-primary font-semibold">
                Ecuador · Sector Avícola
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6 text-balance">
              Nutrición balanceada para{" "}
              <span className="text-abu-accent-gold">cada etapa</span>{" "}
              de tus aves
            </h1>

            <p className="text-lg md:text-xl text-abu-text-muted mb-10 max-w-xl leading-relaxed">
              Producimos alimentos balanceados para crecimiento, desarrollo,
              postura y engorde, respaldados por la experiencia de la familia
              Uzcátegui en el sector avícola.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/productos"
                className="inline-flex items-center justify-center gap-2 bg-abu-primary text-white px-8 py-4 font-bold text-base hover:bg-abu-primary-hover transition-colors shadow-lg shadow-abu-primary/25"
              >
                Conocer productos
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-8 py-4 font-bold text-base text-white border border-white/30 hover:border-abu-primary hover:text-abu-accent-gold transition-colors"
              >
                Solicitar cotización
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-30">
        <Marquee />
      </div>
    </section>
  );
}
