import { products } from "@/modules/products/data/products";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProductShowcase() {
 return (
 <section className="py-20 bg-abu-card">
 <div className="container mx-auto px-4 md:px-8">
 <div className="mb-12 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
 <div className="max-w-2xl">
 <h2 className="text-3xl md:text-4xl font-bold text-abu-text mb-4">Nuestras Líneas de Productos</h2>
 <p className="text-abu-text-muted text-lg">
 Desarrollamos formulaciones específicas para acompañar cada fase del desarrollo y producción de tus aves.
 </p>
 </div>
 <Link href="/productos" className="inline-flex items-center gap-2 text-abu-primary font-semibold hover:text-abu-text group">
 Ver catálogo completo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
 </Link>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
 {products.map((product) => (
 <div key={product.slug} className="group bg-abu-bg-sec overflow-hidden border border-abu-border hover:shadow-xl transition-all duration-300 flex flex-col h-full">
 {/* Product Image */}
 <div className="relative h-48 overflow-hidden bg-gray-200">
 {product.images[0] && (
 // eslint-disable-next-line @next/next/no-img-element
 <img 
 src={product.images[0]} 
 alt={product.name}
 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
 />
 )}
 <div className="absolute top-4 left-4 bg-abu-primary text-abu-text text-xs font-bold px-3 py-1 -full">
 {product.stage}
 </div>
 </div>
 
 {/* Content */}
 <div className="p-6 flex flex-col flex-1">
 <h3 className="text-xl font-bold text-abu-text mb-2">{product.name}</h3>
 <p className="text-abu-text-muted text-sm mb-4 flex-1 line-clamp-3">
 {product.description}
 </p>
 <div className="space-y-3">
 <div className="flex gap-2 text-xs text-abu-text-muted">
 <span className="font-semibold text-abu-primary">Especies:</span>
 <span>{product.species.join(", ")}</span>
 </div>
 <div className="flex gap-2 mt-4 pt-4 border-t border-abu-border">
 <Link 
 href={`/productos/${product.slug}`}
 className="flex-1 bg-abu-card border border-abu-primary text-abu-primary text-center py-2 font-medium text-sm hover:bg-abu-secondary hover:text-abu-text transition-colors"
 >
 Ver ficha
 </Link>
 <Link 
 href="/contacto"
 className="flex-1 bg-abu-secondary text-abu-text text-center py-2 font-medium text-sm hover:bg-abu-bg-main transition-colors"
 >
 Cotizar
 </Link>
 </div>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
}
