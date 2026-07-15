'use client';

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Marquee from "@/modules/core/components/Marquee";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex flex-col justify-between overflow-hidden bg-abu-bg">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-abu-bg/95 via-abu-bg/85 to-abu-bg/70" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-abu-bg via-transparent to-transparent" />

      {/* Animated vertical gold line */}
      <motion.div
        className="absolute left-8 md:left-16 top-32 bottom-32 w-px bg-gradient-to-b from-transparent via-abu-gold/40 to-transparent z-20 hidden lg:block"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.8 }}
        style={{ transformOrigin: 'top' }}
      />

      <div className="relative z-30 flex-1 flex items-center pt-16">
        <div className="w-full px-6 md:px-10 lg:px-16">
          <div className="max-w-3xl">
            {/* Animated label */}
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-6 h-px bg-abu-gold" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-abu-gold font-semibold">
                Ecuador · Sector Avícola
              </span>
            </motion.div>

            {/* Animated headline */}
            <motion.h1
              className="text-4xl md:text-6xl lg:text-[72px] font-extrabold text-abu-white leading-[1.05] tracking-tight mb-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Nutrición balanceada para{" "}
              <span className="text-abu-gold">cada etapa</span>{" "}
              de tus aves
            </motion.h1>

            {/* Animated paragraph */}
            <motion.p
              className="text-base md:text-lg text-abu-gray mb-8 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Producimos alimentos balanceados para crecimiento, desarrollo,
              postura y engorde, respaldados por la experiencia de la familia
              Uzcátegui en el sector avícola.
            </motion.p>

            {/* Animated buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <Link
                href="/productos"
                className="inline-flex items-center justify-center gap-2 bg-abu-gold text-abu-bg px-7 py-3.5 font-semibold text-sm hover:bg-abu-gold-hover transition-all duration-300 hover:shadow-lg hover:shadow-abu-gold/20 hover:-translate-y-0.5"
              >
                Conocer productos
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-7 py-3.5 font-semibold text-sm text-abu-white border border-abu-line hover:border-abu-gold hover:text-abu-gold transition-all duration-300"
              >
                Solicitar cotización
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative z-30">
        <Marquee />
      </div>
    </section>
  );
}
