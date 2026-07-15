import { Metadata } from "next";
import ProductionProcess from "@/modules/home/components/ProductionProcess";

export const metadata: Metadata = {
 title: "Nuestro Proceso | A.B.U.",
 description: "Conoce el proceso de producción de alimentos balanceados de A.B.U.",
};

export default function ProcesoPage() {
 return (
 <div className="pt-24 pb-20 bg-abu-card min-h-screen">
 <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center mb-12">
 <h1 className="text-4xl md:text-5xl font-bold text-abu-text mb-6">Nuestro Proceso</h1>
 <p className="text-lg text-abu-text-muted">
 En nuestra planta de Santo Domingo procesamos cuidadosamente las materias primas para asegurar una nutrición de calidad.
 </p>
 </div>
 <ProductionProcess />
 </div>
 );
}
