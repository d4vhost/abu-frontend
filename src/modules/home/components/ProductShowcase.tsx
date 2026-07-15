import { products } from "@/modules/products/data/products";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProductShowcase() {
  return (
    <section className="py-20 bg-abu-bg-alt">
      <div className="w-full px-6 md:px-10 lg:px-16">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-px bg-abu-gold" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-abu-gold font-semibold">
                Líneas de nutrición
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-abu-white mb-3">
              Nuestras Líneas de Productos
            </h2>
            <p className="text-abu-gray text-sm leading-relaxed">
              Formulaciones específicas para acompañar cada fase del desarrollo
              y producción de tus aves.
            </p>
          </div>
          <Link
            href="/productos"
            className="inline-flex items-center gap-2 text-abu-gold font-semibold text-sm hover:text-abu-gold-hover group transition-colors"
          >
            Ver catálogo completo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.slug}
              className="group bg-abu-surface border border-abu-line hover:border-abu-gold/30 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden bg-abu-card">
                {product.images[0] && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                )}
                <div className="absolute top-0 left-0 bg-abu-gold text-abu-bg text-[10px] font-bold px-2.5 py-1 tracking-widest uppercase">
                  {product.stage}
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-sm font-bold text-abu-white mb-1.5">{product.name}</h3>
                <p className="text-abu-gray text-xs mb-3 flex-1 leading-relaxed line-clamp-3">
                  {product.description}
                </p>
                <div className="text-[10px] text-abu-gray-dark mb-3">
                  <span className="font-semibold text-abu-gold">Especies: </span>
                  {product.species.join(", ")}
                </div>
                <div className="flex gap-2 pt-3 border-t border-abu-line">
                  <Link
                    href={`/productos/${product.slug}`}
                    className="flex-1 border border-abu-gold/60 text-abu-gold text-center py-2 font-semibold text-xs hover:bg-abu-gold hover:text-abu-bg transition-all"
                  >
                    Ver ficha
                  </Link>
                  <Link
                    href="/contacto"
                    className="flex-1 bg-abu-card text-abu-white text-center py-2 font-semibold text-xs hover:bg-abu-card-hover transition-colors"
                  >
                    Cotizar
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
