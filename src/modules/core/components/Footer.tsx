import Link from "next/link";
import { Phone, MapPin, Mail, ChevronRight } from "lucide-react";

export default function Footer() {
 return (
 <footer className="bg-abu-bg-main text-abu-text-muted border-t border-abu-primary pt-16 pb-8">
 <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
 {/* Brand */}
 <div>
 <h2 className="text-3xl font-bold text-abu-primary mb-4">A.B.U.</h2>
 <p className="text-abu-text-muted/80 mb-6 text-sm leading-relaxed">
 Nutrición balanceada para cada etapa de tus aves. Respaldados por la experiencia de la familia Uzcátegui en el sector avícola ecuatoriano.
 </p>
 </div>

 {/* Links */}
 <div>
 <h3 className="text-lg font-semibold mb-4 border-b border-white/10 pb-2 inline-block">Empresa</h3>
 <ul className="space-y-3">
 {[
 { name: "Nosotros", href: "/nosotros" },
 { name: "Proceso de producción", href: "/proceso" },
 { name: "Garantía de Calidad", href: "/calidad" },
 { name: "Distribuidores", href: "/distribuidores" },
 ].map((link) => (
 <li key={link.name}>
 <Link href={link.href} className="text-sm text-abu-text-muted/70 hover:text-abu-primary transition-colors flex items-center gap-1 group">
 <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /> {link.name}
 </Link>
 </li>
 ))}
 </ul>
 </div>

 {/* Products */}
 <div>
 <h3 className="text-lg font-semibold mb-4 border-b border-white/10 pb-2 inline-block">Líneas de Productos</h3>
 <ul className="space-y-3">
 {[
 { name: "Alimento Inicial", href: "/productos/inicial" },
 { name: "Crecimiento y Desarrollo", href: "/productos/desarrollo" },
 { name: "Producción / Postura", href: "/productos/postura" },
 { name: "Broiler Engorde", href: "/productos/broiler-engorde" },
 ].map((link) => (
 <li key={link.name}>
 <Link href={link.href} className="text-sm text-abu-text-muted/70 hover:text-abu-primary transition-colors flex items-center gap-1 group">
 <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /> {link.name}
 </Link>
 </li>
 ))}
 </ul>
 </div>

 {/* Contact */}
 <div>
 <h3 className="text-lg font-semibold mb-4 border-b border-white/10 pb-2 inline-block">Contacto</h3>
 <ul className="space-y-4">
 <li className="flex items-start gap-3">
 <MapPin className="w-5 h-5 text-abu-primary shrink-0 mt-0.5" />
 <div className="text-sm text-abu-text-muted/80">
 <p className="font-medium text-abu-text">Oficina Principal</p>
 <p>Cádiz 021 y avenida Los Shyris, Huachi Loreto, Ambato.</p>
 </div>
 </li>
 <li className="flex items-start gap-3">
 <MapPin className="w-5 h-5 text-abu-primary shrink-0 mt-0.5" />
 <div className="text-sm text-abu-text-muted/80">
 <p className="font-medium text-abu-text">Planta de Procesamiento</p>
 <p>Provincia de Santo Domingo, km 5 vía a Colorados del Búa.</p>
 </div>
 </li>
 <li className="flex items-center gap-3">
 <Phone className="w-5 h-5 text-abu-primary shrink-0" />
 <div className="text-sm text-abu-text-muted/80">
 <p>03 284 1870 / 098 611 494</p>
 </div>
 </li>
 </ul>
 </div>
 </div>

 <div className="container mx-auto px-4 md:px-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-abu-text-muted/50">
 <p>© {new Date().getFullYear()} A.B.U. Alimentos Balanceados Uzcátegui. Todos los derechos reservados.</p>
 <div className="flex items-center gap-4">
 <Link href="/terminos" className="hover:text-abu-text transition-colors">Términos de servicio</Link>
 <Link href="/privacidad" className="hover:text-abu-text transition-colors">Políticas de privacidad</Link>
 </div>
 </div>
 </footer>
 );
}
