import { products } from "@/modules/products/data/products";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProductShowcase() {
  return (
    <section className="py-24 bg-abu-card border-t border-abu-primary/20">
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
            <h2 className="text-3xl md:text-4xl font-bold text-abu-text mb-4 leading-tight">
              Nuestras Líneas de Productos
            </h2>
            <p className="text-abu-text-muted text-lg leading-relaxed">
              Formulaciones específicas para acompañar cada fase del desarrollo
              y producción de tus aves.
            </p>
          </div>
          <Link
            href="/productos"
            className="inline-flex items-center gap-2 text-abu-primary font-semibold hover:text-abu-accent-gold group transition-colors shrink-0"
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
              className="group bg-abu-bg-sec border border-abu-border hover:border-abu-primary/60 transition-all duration-300 flex flex-col hover:shadow-[0_8px_32px_rgba(201,151,26,0.12)]"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-abu-card">
                {product.images[0] && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                  />
                )}
                {/* Stage badge */}
                <div className="absolute top-0 left-0 bg-abu-primary text-abu-bg-main text-[10px] font-black px-3 py-1.5 tracking-widest uppercase">
                  {product.stage}
                </div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-abu-bg-sec/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-abu-text mb-2 leading-snug">
                  {product.name}
                </h3>
                <p className="text-abu-text-muted text-sm mb-4 flex-1 leading-relaxed line-clamp-3">
                  {product.description}
                </p>

                <div className="text-xs text-abu-text-dim mb-4">
                  <span className="font-semibold text-abu-primary">Especies: </span>
                  {product.species.join(", ")}
                </div>

                <div className="flex gap-2 pt-4 border-t border-abu-border">
                  <Link
                    href={`/productos/${product.slug}`}
                    className="flex-1 border border-abu-primary text-abu-primary text-center py-2.5 font-semibold text-sm hover:bg-abu-primary hover:text-abu-bg-main transition-all duration-200"
                  >
                    Ver ficha
                  </Link>
                  <Link
                    href="/contacto"
                    className="flex-1 bg-abu-secondary text-abu-text text-center py-2.5 font-semibold text-sm hover:bg-abu-secondary-hover transition-colors"
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
