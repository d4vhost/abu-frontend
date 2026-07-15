import Image from "next/image";
import { historyData } from "../data/about-data";

export default function HistorySection() {
  return (
    <section className="py-20 bg-abu-white">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-px bg-abu-primary" />
            <span className="text-xs uppercase tracking-[0.25em] text-abu-primary font-semibold">
              Quiénes somos
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-abu-heading mb-6">
            Nuestra Historia
          </h2>
          {historyData.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-lg text-abu-body leading-relaxed text-pretty">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="flex-1 w-full relative aspect-[4/3] overflow-hidden bg-abu-light border border-abu-border-light shadow-lg">
          <Image
            src="/images/about/historia-placeholder.webp"
            alt="Instalaciones de A.B.U. - Alimentos Balanceados Uzcátegui"
            fill
            className="object-cover"
          />
          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-abu-primary" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-abu-primary" />
        </div>
      </div>
    </section>
  );
}
