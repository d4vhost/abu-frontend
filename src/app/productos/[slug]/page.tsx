import { products } from "@/modules/products/data/products";
import { notFound } from "next/navigation";
import { CheckCircle2, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

type Props = {
 params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
 const { slug } = await params;
 const product = products.find((p) => p.slug === slug);
 if (!product) return { title: "Producto no encontrado" };
 return { title: `${product.name} | A.B.U.` };
}

export default async function ProductDetailPage({ params }: Props) {
 const { slug } = await params;
 const product = products.find((p) => p.slug === slug);

 if (!product) {
 notFound();
 }

 return (
 <div className="pt-24 pb-20 bg-abu-surface min-h-screen">
 <div className="container mx-auto px-4 md:px-8 max-w-6xl">
 <Link href="/productos" className="inline-flex items-center text-sm text-abu-gray hover:text-abu-gold mb-8 transition-colors">
 <ChevronLeft className="w-4 h-4 mr-1" /> Volver al catálogo
 </Link>
 
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
 {/* Image */}
 <div>
 <div className="relative overflow-hidden aspect-square bg-abu-bg-alt border border-abu-line">
 {product.images[0] && (
 // eslint-disable-next-line @next/next/no-img-element
 <img 
 src={product.images[0]} 
 alt={product.name}
 className="w-full h-full object-cover"
 />
 )}
 </div>
 </div>

 {/* Info */}
 <div className="flex flex-col">
 <div className="mb-6">
 <span className="inline-block px-3 py-1 bg-abu-gold/20 text-abu-white text-xs font-bold -full mb-4">
 {product.stage}
 </span>
 <h1 className="text-3xl md:text-4xl font-bold text-abu-white mb-2">{product.name}</h1>
 {product.commercialName && (
 <p className="text-xl text-abu-white/50 font-medium mb-4">{product.commercialName}</p>
 )}
 <p className="text-abu-white/80 text-lg leading-relaxed">{product.description}</p>
 </div>

 <div className="grid grid-cols-2 gap-4 mb-8 bg-abu-bg-alt/50 p-6 border border-abu-line">
 <div>
 <p className="text-xs text-abu-white/50 font-semibold uppercase tracking-wider mb-1">Especies</p>
 <p className="text-abu-white font-medium">{product.species.join(", ")}</p>
 </div>
 {product.recommendedAge && (
 <div>
 <p className="text-xs text-abu-white/50 font-semibold uppercase tracking-wider mb-1">Edad de suministro</p>
 <p className="text-abu-white font-medium">{product.recommendedAge}</p>
 </div>
 )}
 {product.physicalForm && (
 <div>
 <p className="text-xs text-abu-white/50 font-semibold uppercase tracking-wider mb-1">Forma física</p>
 <p className="text-abu-white font-medium capitalize">{product.physicalForm}</p>
 </div>
 )}
 <div>
 <p className="text-xs text-abu-white/50 font-semibold uppercase tracking-wider mb-1">Presentaciones</p>
 <p className="text-abu-white font-medium">{product.presentations.join(", ")}</p>
 </div>
 </div>

 {/* Analysis */}
 <div className="mb-8">
 <h3 className="text-xl font-bold text-abu-white mb-4 border-b border-abu-line pb-2">Análisis Garantizado</h3>
 <ul className="space-y-2">
 {Object.entries(product.guaranteedAnalysis).map(([key, value]) => (
 <li key={key} className="flex justify-between items-center py-1">
 <span className="text-abu-gray capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
 <span className="font-semibold text-abu-white">{value}</span>
 </li>
 ))}
 </ul>
 </div>

 {/* Storage */}
 <div className="mb-8">
 <h3 className="text-xl font-bold text-abu-white mb-4 border-b border-abu-line pb-2">Almacenamiento</h3>
 <div className="flex items-start gap-3">
 <CheckCircle2 className="w-5 h-5 text-abu-gold shrink-0 mt-0.5" />
 <p className="text-abu-white/80 text-sm">{product.storageInstructions}</p>
 </div>
 </div>

 <div className="mt-auto pt-8 flex gap-4">
 <Link 
 href="/contacto" 
 className="flex-1 bg-abu-card text-abu-white text-center py-4 font-bold hover:bg-abu-bg transition-colors"
 >
 Solicitar cotización
 </Link>
 </div>
 </div>
 </div>
 </div>
 </div>
 );
}
