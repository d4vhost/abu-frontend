import { aboutHeroData } from "../data/about-data";

export default function AboutHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-abu-dark relative overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-abu-dark-sec to-abu-dark opacity-60" />
      <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          {aboutHeroData.title}
        </h1>
        <p className="text-xl md:text-2xl text-abu-text-muted leading-relaxed">
          {aboutHeroData.subtitle}
        </p>
      </div>
    </section>
  );
}
