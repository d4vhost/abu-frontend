import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Nutrición Avícola | A.B.U.",
  description: "Artículos y recursos sobre la correcta alimentación y nutrición de las aves de corral.",
};

const ARTICLES = [
  {
    title: "Diferencias entre alimento inicial, crecimiento y engorde",
    excerpt: "Conoce por qué es fundamental respetar las etapas de alimentación para lograr el peso ideal.",
  },
  {
    title: "Qué alimento necesita una gallina ponedora",
    excerpt: "La relación entre calcio, fósforo y proteína para una cáscara resistente y un pico de postura sostenido.",
  },
  {
    title: "Cómo almacenar correctamente los sacos",
    excerpt: "Evita la humedad y los hongos con buenas prácticas de almacenamiento en tu bodega o granja.",
  }
];

export default function NutricionAvicolaPage() {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-abu-green-dark mb-4">Nutrición Avícola</h1>
          <p className="text-lg text-abu-charcoal/70 max-w-2xl mx-auto">
            Recursos y guías técnicas para ayudarte a optimizar la alimentación en tu granja, mejorando el rendimiento y la salud de tus aves.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {ARTICLES.map((article, idx) => (
            <div key={idx} className="bg-abu-cream rounded-xl p-6 border border-abu-earth/10 flex flex-col hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 text-abu-corn shadow-sm">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-abu-green-dark mb-3">{article.title}</h3>
              <p className="text-abu-charcoal/70 mb-6 flex-1">{article.excerpt}</p>
              <Link href="#" className="flex items-center text-abu-green font-semibold text-sm group-hover:text-abu-green-dark transition-colors">
                Leer artículo <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-abu-green-dark rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold text-abu-corn mb-4">¿Tienes dudas sobre formulación?</h2>
          <p className="text-abu-cream/80 text-lg mb-8 max-w-2xl mx-auto">
            Nuestro equipo técnico está dispuesto a asesorarte en la transición alimenticia y en el cálculo de consumo de tu lote.
          </p>
          <Link href="/contacto" className="inline-block bg-white text-abu-green-dark px-8 py-3 rounded-md font-bold hover:bg-abu-cream transition-colors">
            Contactar al equipo técnico
          </Link>
        </div>
      </div>
    </div>
  );
}
