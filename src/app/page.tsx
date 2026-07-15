import Hero from "@/modules/home/components/Hero";
import Indicators from "@/modules/home/components/Indicators";
import ProductShowcase from "@/modules/home/components/ProductShowcase";
import ProductionProcess from "@/modules/home/components/ProductionProcess";
import QualitySection from "@/modules/home/components/QualitySection";
import ContactCTA from "@/modules/home/components/ContactCTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Indicators />
      <ProductShowcase />
      <ProductionProcess />
      <QualitySection />
      <ContactCTA />
    </main>
  );
}
