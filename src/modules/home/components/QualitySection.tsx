'use client';

import { ShieldCheck, Award, Factory, ClipboardCheck } from "lucide-react";
import Reveal from "@/modules/core/components/Reveal";
import Stagger, { StaggerItem } from "@/modules/core/components/Stagger";

const QUALITY_ITEMS = [
  { icon: Factory, title: "Registro de Fabricante", desc: "Instalaciones certificadas para la producción agroindustrial." },
  { icon: ClipboardCheck, title: "Registros de Productos", desc: "Fórmulas aprobadas para nutrición animal." },
  { icon: ShieldCheck, title: "BPM", desc: "Aplicación de Buenas Prácticas de Manufactura." },
  { icon: Award, title: "Análisis de Laboratorio", desc: "Resultados bromatológicos verificados." },
];

export default function QualitySection() {
  return (
    <section className="py-20 bg-abu-surface border-t border-abu-line">
      <div className="w-full px-6 md:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row items-stretch gap-10">
          {/* Image with reveal from left */}
          <Reveal direction="left" className="w-full lg:w-1/2">
            <div className="relative overflow-hidden h-72 lg:h-full min-h-[280px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/calidad.jpg"
                alt="Control de calidad en instalaciones A.B.U."
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-abu-gold" />
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-abu-gold" />
            </div>
          </Reveal>

          {/* Content with reveal from right */}
          <Reveal direction="right" className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-abu-gold" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-abu-gold font-semibold">
                Respaldo institucional
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-abu-white mb-4">
              Compromiso con la Calidad
            </h2>
            <p className="text-abu-gray text-sm mb-8 leading-relaxed">
              Trabajamos para mantener la uniformidad en cada lote y entregar
              alimentos adecuados para las diferentes etapas productivas.
            </p>

            <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-5" stagger={0.1}>
              {QUALITY_ITEMS.map((item, idx) => (
                <StaggerItem key={idx}>
                  <div className="flex gap-3 group">
                    <div className="shrink-0 w-9 h-9 bg-abu-card border border-abu-line flex items-center justify-center group-hover:border-abu-gold/40 transition-all duration-300">
                      <item.icon className="w-4 h-4 text-abu-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-abu-white mb-0.5 text-xs">{item.title}</h4>
                      <p className="text-[11px] text-abu-gray leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
