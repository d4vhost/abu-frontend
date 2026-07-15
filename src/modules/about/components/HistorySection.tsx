import Image from "next/image";
import { historyData } from "../data/about-data";

export default function HistorySection() {
  return (
    <section className="py-16 bg-abu-bg-sec border-y border-abu-border">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-abu-text mb-6">
            Nuestra Historia
          </h2>
          {historyData.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-lg text-abu-text-muted leading-relaxed text-pretty">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="flex-1 w-full relative aspect-[4/3] rounded-sm overflow-hidden bg-abu-card border border-abu-border shadow-lg">
          {/* We use unoptimized for the placeholder just in case, but ideally it should be standard Image */}
          <Image 
            src="/images/about/historia-placeholder.webp" 
            alt="Instalaciones de A.B.U. - Alimentos Balanceados Uzcátegui" 
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
