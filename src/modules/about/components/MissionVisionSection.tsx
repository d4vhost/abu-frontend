import { Target, Compass } from "lucide-react";
import { missionVisionData } from "../data/about-data";

export default function MissionVisionSection() {
  return (
    <section className="py-24 bg-abu-white">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-8 h-px bg-abu-primary" />
          <span className="text-xs uppercase tracking-[0.25em] text-abu-primary font-semibold">
            Propósito institucional
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Misión */}
          <div className="group bg-white border border-abu-border-light hover:border-abu-primary/40 transition-all duration-300 p-10 flex flex-col hover:shadow-lg">
            <div className="w-12 h-12 bg-abu-green-light border border-abu-green/20 flex items-center justify-center mb-6 group-hover:bg-abu-primary/10 group-hover:border-abu-primary/30 transition-colors">
              <Target className="w-6 h-6 text-abu-green group-hover:text-abu-primary transition-colors" />
            </div>
            <div className="text-xs uppercase tracking-[0.2em] text-abu-caption font-semibold mb-2">
              Misión
            </div>
            <h3 className="text-2xl font-bold text-abu-heading mb-4">
              {missionVisionData.mission.title}
            </h3>
            <p className="text-abu-body text-base leading-relaxed flex-1">
              {missionVisionData.mission.description}
            </p>
            <div className="mt-8 w-8 h-0.5 bg-abu-primary/30 group-hover:w-16 transition-all duration-500" />
          </div>

          {/* Visión */}
          <div className="group bg-white border border-abu-border-light hover:border-abu-primary/40 transition-all duration-300 p-10 flex flex-col hover:shadow-lg">
            <div className="w-12 h-12 bg-abu-green-light border border-abu-green/20 flex items-center justify-center mb-6 group-hover:bg-abu-primary/10 group-hover:border-abu-primary/30 transition-colors">
              <Compass className="w-6 h-6 text-abu-green group-hover:text-abu-primary transition-colors" />
            </div>
            <div className="text-xs uppercase tracking-[0.2em] text-abu-caption font-semibold mb-2">
              Visión
            </div>
            <h3 className="text-2xl font-bold text-abu-heading mb-4">
              {missionVisionData.vision.title}
            </h3>
            <p className="text-abu-body text-base leading-relaxed flex-1">
              {missionVisionData.vision.description}
            </p>
            <div className="mt-8 w-8 h-0.5 bg-abu-primary/30 group-hover:w-16 transition-all duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
