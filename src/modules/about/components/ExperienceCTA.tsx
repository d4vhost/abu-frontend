import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { experienceCTAData } from "../data/about-data";

export default function ExperienceCTA() {
  return (
    <section className="py-20 bg-abu-bg-alt border-t border-abu-line">
      <div className="w-full px-6 md:px-10 lg:px-16 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-abu-white mb-4">{experienceCTAData.title}</h2>
        <p className="text-abu-gray text-sm mb-8 leading-relaxed">{experienceCTAData.description}</p>
        <Link href={experienceCTAData.buttonLink} className="inline-flex items-center gap-2 bg-abu-gold text-abu-bg px-7 py-3.5 font-semibold text-sm hover:bg-abu-gold-hover transition-colors">
          {experienceCTAData.buttonText}
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
