import Link from "next/link";
import { Phone, MapPin, ChevronRight } from "lucide-react";

const COMPANY_LINKS = [
  { name: "Nosotros", href: "/nosotros" },
  { name: "Proceso", href: "/proceso" },
  { name: "Calidad", href: "/calidad" },
  { name: "Distribuidores", href: "/distribuidores" },
];

const PRODUCT_LINKS = [
  { name: "Alimento Inicial", href: "/productos/inicial" },
  { name: "Crecimiento", href: "/productos/desarrollo" },
  { name: "Postura", href: "/productos/postura" },
  { name: "Broiler Engorde", href: "/productos/broiler-engorde" },
];

export default function Footer() {
  return (
    <footer className="bg-abu-bg border-t border-abu-gold/30">
      <div className="w-full px-6 md:px-10 lg:px-16 pt-14 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <span className="text-2xl font-extrabold text-abu-gold block mb-4">A.B.U.</span>
            <p className="text-[10px] uppercase tracking-[0.2em] text-abu-gray-dark font-medium mb-3">
              Alimentos Balanceados Uzcátegui
            </p>
            <p className="text-xs text-abu-gray leading-relaxed">
              Nutrición balanceada para cada etapa de tus aves.
            </p>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-abu-gray mb-5">Empresa</h3>
            <ul className="space-y-2">
              {COMPANY_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-xs text-abu-gray-dark hover:text-abu-gold transition-colors flex items-center gap-1.5 group">
                    <ChevronRight className="w-2.5 h-2.5 opacity-40 group-hover:opacity-100 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-abu-gray mb-5">Productos</h3>
            <ul className="space-y-2">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-xs text-abu-gray-dark hover:text-abu-gold transition-colors flex items-center gap-1.5 group">
                    <ChevronRight className="w-2.5 h-2.5 opacity-40 group-hover:opacity-100 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-abu-gray mb-5">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-abu-gold shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-medium text-abu-white mb-0.5">Oficina</p>
                  <p className="text-abu-gray-dark leading-relaxed">Cádiz 021, Huachi Loreto, Ambato.</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-abu-gold shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-medium text-abu-white mb-0.5">Planta</p>
                  <p className="text-abu-gray-dark leading-relaxed">Santo Domingo, km 5 vía Colorados del Búa.</p>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-abu-gold shrink-0" />
                <p className="text-xs text-abu-gray-dark">03 284 1870 / 098 611 494</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-abu-line flex flex-col md:flex-row justify-between items-center gap-3 text-[10px] text-abu-gray-dark">
          <p>© {new Date().getFullYear()} A.B.U. Alimentos Balanceados Uzcátegui.</p>
          <div className="flex items-center gap-5">
            <Link href="/terminos" className="hover:text-abu-gray transition-colors">Términos</Link>
            <Link href="/privacidad" className="hover:text-abu-gray transition-colors">Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
