import { missionVisionData } from "../data/about-data";
import { Target, Compass } from "lucide-react";

export default function MissionVisionSection() {
  return (
    <section className="py-20 bg-abu-bg-sec border-y border-abu-border">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-abu-card p-10 border border-abu-border shadow-md rounded-sm flex flex-col h-full">
            <div className="w-12 h-12 bg-abu-primary/10 rounded-sm flex items-center justify-center mb-6 border border-abu-primary/20">
              <Target className="w-6 h-6 text-abu-primary" />
            </div>
            <h3 className="text-2xl font-bold text-abu-text mb-4">
              {missionVisionData.mission.title}
            </h3>
            <p className="text-abu-text-muted text-lg leading-relaxed flex-1">
              {missionVisionData.mission.description}
            </p>
          </div>

          <div className="bg-abu-card p-10 border border-abu-border shadow-md rounded-sm flex flex-col h-full">
            <div className="w-12 h-12 bg-abu-primary/10 rounded-sm flex items-center justify-center mb-6 border border-abu-primary/20">
              <Compass className="w-6 h-6 text-abu-primary" />
            </div>
            <h3 className="text-2xl font-bold text-abu-text mb-4">
              {missionVisionData.vision.title}
            </h3>
            <p className="text-abu-text-muted text-lg leading-relaxed flex-1">
              {missionVisionData.vision.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
