import Link from "next/link";
import { Phone, MapPin, ChevronRight } from "lucide-react";

const COMPANY_LINKS = [
  { name: "Nosotros", href: "/nosotros" },
  { name: "Proceso de producción", href: "/proceso" },
  { name: "Garantía de Calidad", href: "/calidad" },
  { name: "Distribuidores", href: "/distribuidores" },
];

const PRODUCT_LINKS = [
  { name: "Alimento Inicial", href: "/productos/inicial" },
  { name: "Crecimiento y Desarrollo", href: "/productos/desarrollo" },
  { name: "Producción / Postura", href: "/productos/postura" },
  { name: "Broiler Engorde", href: "/productos/broiler-engorde" },
];

export default function Footer() {
  return (
    <footer className="bg-abu-bg-main text-abu-text-muted border-t-2 border-abu-primary">
      <div className="container mx-auto px-4 md:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="text-3xl font-black text-abu-primary">A.B.U.</span>
              <span className="w-1.5 h-1.5 rounded-full bg-abu-accent-gold animate-pulse" />
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-abu-text-dim font-medium mb-4">
              Alimentos Balanceados Uzcátegui
            </p>
            <p className="text-sm text-abu-text-muted leading-relaxed">
              Nutrición balanceada para cada etapa de tus aves. Respaldados
              por la experiencia de la familia Uzcátegui en el sector avícola ecuatoriano.
            </p>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-abu-text mb-6">
              Empresa
            </h3>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-abu-text-muted hover:text-abu-primary transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Productos */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-abu-text mb-6">
              Líneas de Productos
            </h3>
            <ul className="space-y-3">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-abu-text-muted hover:text-abu-primary transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-abu-text mb-6">
              Contacto
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-abu-primary shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-abu-text mb-0.5">Oficina Principal</p>
                  <p className="text-abu-text-muted leading-relaxed">
                    Cádiz 021 y av. Los Shyris, Huachi Loreto, Ambato.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-abu-primary shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-abu-text mb-0.5">Planta de Procesamiento</p>
                  <p className="text-abu-text-muted leading-relaxed">
                    Santo Domingo, km 5 vía Colorados del Búa.
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-abu-primary shrink-0" />
                <p className="text-sm text-abu-text-muted">
                  03 284 1870 / 098 611 494
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-abu-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-abu-text-dim">
          <p>© {new Date().getFullYear()} A.B.U. Alimentos Balanceados Uzcátegui. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <Link href="/terminos" className="hover:text-abu-text-muted transition-colors">Términos de servicio</Link>
            <Link href="/privacidad" className="hover:text-abu-text-muted transition-colors">Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
