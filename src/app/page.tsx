import Hero from "@/components/home/Hero";
import Indicators from "@/components/home/Indicators";
import ProductShowcase from "@/components/home/ProductShowcase";
import ProductionProcess from "@/components/home/ProductionProcess";
import QualitySection from "@/components/home/QualitySection";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Indicators />
      <ProductShowcase />
      <ProductionProcess />
      <QualitySection />
      <ContactCTA />
    </>
  );
}
