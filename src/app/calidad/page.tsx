import { Metadata } from "next";
import QualitySection from "@/components/home/QualitySection";

export const metadata: Metadata = {
  title: "Garantía de Calidad | A.B.U.",
  description: "Nuestros estándares de calidad en la producción agroindustrial avícola.",
};

export default function CalidadPage() {
  return (
    <div className="pt-24 pb-0 bg-white min-h-screen flex flex-col">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-abu-green-dark mb-6">Garantía de Calidad</h1>
        <p className="text-lg text-abu-charcoal/70">
          Implementamos rigurosos controles en cada etapa productiva para asegurar que el balanceado llegue en óptimas condiciones a tu granja.
        </p>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <QualitySection />
      </div>
    </div>
  );
}
