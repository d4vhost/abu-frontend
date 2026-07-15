import { products } from "@/modules/products/data/products";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProductShowcase() {
  return (
    <section className="py-24 bg-abu-light">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-abu-primary" />
              <span className="text-xs uppercase tracking-[0.25em] text-abu-primary font-semibold">
                Líneas de nutrición
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-abu-heading mb-4 leading-tight">
              Nuestras Líneas de Productos
            </h2>
            <p className="text-abu-body text-lg leading-relaxed">
              Formulaciones específicas para acompañar cada fase del desarrollo
              y producción de tus aves.
            </p>
          </div>
          <Link
            href="/productos"
            className="inline-flex items-center gap-2 text-abu-primary font-semibold hover:text-abu-primary-hover group transition-colors shrink-0"
          >
            Ver catálogo completo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.slug}
              className="group bg-white border border-abu-border-light hover:border-abu-primary/40 transition-all duration-300 flex flex-col hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-abu-light">
                {product.images[0] && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute top-0 left-0 bg-abu-primary text-white text-[10px] font-black px-3 py-1.5 tracking-widest uppercase">
                  {product.stage}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-abu-heading mb-2 leading-snug">
                  {product.name}
                </h3>
                <p className="text-abu-body text-sm mb-4 flex-1 leading-relaxed line-clamp-3">
                  {product.description}
                </p>

                <div className="text-xs text-abu-caption mb-4">
                  <span className="font-semibold text-abu-primary">Especies: </span>
                  {product.species.join(", ")}
                </div>

                <div className="flex gap-2 pt-4 border-t border-abu-border-light">
                  <Link
                    href={`/productos/${product.slug}`}
                    className="flex-1 border border-abu-primary text-abu-primary text-center py-2.5 font-semibold text-sm hover:bg-abu-primary hover:text-white transition-all duration-200"
                  >
                    Ver ficha
                  </Link>
                  <Link
                    href="/contacto"
                    className="flex-1 bg-abu-green text-white text-center py-2.5 font-semibold text-sm hover:bg-abu-green/90 transition-colors"
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
