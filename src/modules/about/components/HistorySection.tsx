import Image from "next/image";
import { historyData } from "../data/about-data";

export default function HistorySection() {
  return (
    <section className="py-16 bg-abu-surface border-t border-abu-line">
      <div className="w-full px-6 md:px-10 lg:px-16 flex flex-col lg:flex-row gap-10 items-center">
        <div className="flex-1 space-y-5">
          <h2 className="text-2xl md:text-3xl font-bold text-abu-white">Origen</h2>
          {historyData.paragraphs.map((p, i) => (
            <p key={i} className="text-sm text-abu-gray leading-relaxed">{p}</p>
          ))}
        </div>
        <div className="flex-1 w-full relative aspect-[4/3] overflow-hidden bg-abu-card">
          <Image src="/images/about/historia-placeholder.webp" alt="Instalaciones A.B.U." fill className="object-cover" />
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-abu-gold" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-abu-gold" />
        </div>
      </div>
    </section>
  );
}
