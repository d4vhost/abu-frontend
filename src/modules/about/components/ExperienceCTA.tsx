import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { experienceCTAData } from "../data/about-data";

export default function ExperienceCTA() {
  return (
    <section className="py-24 bg-abu-dark">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-px bg-abu-primary" />
          <span className="text-xs uppercase tracking-[0.25em] text-abu-primary font-semibold">
            Nuestros productos
          </span>
          <div className="w-8 h-px bg-abu-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {experienceCTAData.title}
        </h2>
        <p className="text-lg md:text-xl text-abu-text-muted mb-10 leading-relaxed text-balance">
          {experienceCTAData.description}
        </p>
        <Link
          href={experienceCTAData.buttonLink}
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-abu-primary text-white font-bold hover:bg-abu-primary-hover transition-colors shadow-lg shadow-abu-primary/25"
        >
          {experienceCTAData.buttonText}
          <ChevronRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
