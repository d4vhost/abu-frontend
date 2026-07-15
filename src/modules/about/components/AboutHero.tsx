import { aboutHeroData } from "../data/about-data";

export default function AboutHero() {
  return (
    <section className="pt-28 pb-14 md:pt-36 md:pb-18 bg-abu-bg relative">
      <div className="w-full px-6 md:px-10 lg:px-16 max-w-4xl">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-6 h-px bg-abu-gold" />
          <span className="text-[11px] uppercase tracking-[0.25em] text-abu-gold font-semibold">A.B.U.</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-abu-white mb-4">
          {aboutHeroData.title}
        </h1>
        <p className="text-base md:text-lg text-abu-gray leading-relaxed max-w-xl">
          {aboutHeroData.subtitle}
        </p>
      </div>
    </section>
  );
}
