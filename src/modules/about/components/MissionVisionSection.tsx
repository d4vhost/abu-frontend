import { Target, Compass } from "lucide-react";
import { missionVisionData } from "../data/about-data";

export default function MissionVisionSection() {
  return (
    <section className="py-16 bg-abu-bg border-t border-abu-line">
      <div className="w-full px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="group bg-abu-surface border border-abu-line hover:border-abu-gold/30 p-8 flex flex-col transition-all">
            <div className="w-9 h-9 bg-abu-card border border-abu-line flex items-center justify-center mb-5 group-hover:border-abu-gold/40 transition-colors">
              <Target className="w-4 h-4 text-abu-gold" />
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-abu-gray-dark font-semibold mb-1.5">Misión</div>
            <h3 className="text-lg font-bold text-abu-white mb-3">{missionVisionData.mission.title}</h3>
            <p className="text-abu-gray text-sm leading-relaxed flex-1">{missionVisionData.mission.description}</p>
          </div>
          <div className="group bg-abu-surface border border-abu-line hover:border-abu-gold/30 p-8 flex flex-col transition-all">
            <div className="w-9 h-9 bg-abu-card border border-abu-line flex items-center justify-center mb-5 group-hover:border-abu-gold/40 transition-colors">
              <Compass className="w-4 h-4 text-abu-gold" />
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-abu-gray-dark font-semibold mb-1.5">Visión</div>
            <h3 className="text-lg font-bold text-abu-white mb-3">{missionVisionData.vision.title}</h3>
            <p className="text-abu-gray text-sm leading-relaxed flex-1">{missionVisionData.vision.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
