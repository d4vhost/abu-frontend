import { aboutHeroData } from "../data/about-data";

export default function AboutHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 text-center container mx-auto px-4 md:px-8 max-w-4xl">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-abu-text mb-6">
        {aboutHeroData.title}
      </h1>
      <p className="text-xl md:text-2xl text-abu-text-muted leading-relaxed">
        {aboutHeroData.subtitle}
      </p>
    </section>
  );
}
