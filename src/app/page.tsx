import Hero from "@/modules/home/components/Hero";
import Indicators from "@/modules/home/components/Indicators";
import ProductShowcase from "@/modules/home/components/ProductShowcase";
import ProductionProcess from "@/modules/home/components/ProductionProcess";
import QualitySection from "@/modules/home/components/QualitySection";
import ContactCTA from "@/modules/home/components/ContactCTA";
import Reveal from "@/modules/core/components/Reveal";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Reveal><Indicators /></Reveal>
      <Reveal><ProductShowcase /></Reveal>
      <Reveal><ProductionProcess /></Reveal>
      <Reveal><QualitySection /></Reveal>
      <Reveal><ContactCTA /></Reveal>
    </main>
  );
}
