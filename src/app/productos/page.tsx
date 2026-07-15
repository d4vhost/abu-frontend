import { Metadata } from "next";
import { products } from "@/data/products";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Productos | A.B.U.",
  description: "Conoce nuestra línea completa de alimentos balanceados para aves.",
};

export default function ProductosPage() {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-abu-green-dark mb-4 text-center">Catálogo de Productos</h1>
        <p className="text-abu-charcoal/70 text-lg text-center max-w-2xl mx-auto mb-16">
          Desarrollamos y producimos alimentos balanceados para aves, formulados para acompañar sus diferentes etapas productivas: inicio, desarrollo, postura y engorde.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link 
              href={`/productos/${product.slug}`} 
              key={product.slug} 
              className="group flex flex-col bg-abu-cream rounded-xl overflow-hidden border border-abu-earth/10 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden bg-gray-200">
                {product.images[0] && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img 
                    src={product.images[0]} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute top-4 left-4 bg-abu-corn text-abu-charcoal text-xs font-bold px-3 py-1 rounded-full">
                  {product.stage}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-abu-green-dark mb-2 group-hover:text-abu-green transition-colors">{product.name}</h3>
                <p className="text-abu-charcoal/70 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="mt-auto flex items-center justify-between text-abu-green font-semibold text-sm border-t border-abu-earth/10 pt-4">
                  Ver especificaciones técnicas
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
