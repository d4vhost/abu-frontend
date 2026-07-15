import { CheckCircle2 } from "lucide-react";

const INDICATORS = [
 "Nutrición por etapas",
 "Producción ecuatoriana",
 "Especialización avícola",
 "Atención a productores",
 "Distribución mayorista"
];

export default function Indicators() {
 return (
 <section className="bg-abu-bg-sec border-b border-abu-border">
 <div className="container mx-auto px-4 md:px-8 py-8 md:py-12">
 <div className="flex flex-wrap justify-center md:justify-between items-center gap-6">
 {INDICATORS.map((indicator, index) => (
 <div key={index} className="flex items-center gap-2">
 <CheckCircle2 className="w-5 h-5 text-abu-primary" />
 <span className="text-abu-text font-medium text-sm md:text-base">{indicator}</span>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
}
