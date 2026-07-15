import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { experienceCTAData } from "../data/about-data";

export default function ExperienceCTA() {
  return (
    <section className="py-24 bg-abu-card-elevated border-t border-abu-border">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-abu-text mb-6">
          {experienceCTAData.title}
        </h2>
        <p className="text-lg md:text-xl text-abu-text-muted mb-10 leading-relaxed text-balance">
          {experienceCTAData.description}
        </p>
        <Link 
          href={experienceCTAData.buttonLink}
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-abu-primary text-abu-bg-main font-bold rounded-sm hover:bg-abu-primary-hover transition-colors shadow-lg shadow-abu-primary/20"
        >
          {experienceCTAData.buttonText}
          <ChevronRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
