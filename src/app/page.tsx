import Hero from "@/modules/home/components/Hero";
import Indicators from "@/modules/home/components/Indicators";
import ProductShowcase from "@/modules/home/components/ProductShowcase";
import ProductionProcess from "@/modules/home/components/ProductionProcess";
import QualitySection from "@/modules/home/components/QualitySection";
import ContactCTA from "@/modules/home/components/ContactCTA";

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
