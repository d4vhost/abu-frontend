"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Productos", href: "/productos" },
  { name: "Nutrición avícola", href: "/nutricion-avicola" },
  { name: "Proceso", href: "/proceso" },
  { name: "Calidad", href: "/calidad" },
  { name: "Distribuidores", href: "/distribuidores" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-abu-bg/95 backdrop-blur-xl border-b border-abu-line py-2.5"
          : "bg-transparent py-4"
      )}
    >
      <div className="w-full px-6 md:px-10 lg:px-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-xl font-extrabold tracking-tight text-abu-gold">A.B.U.</span>
          <span className="hidden sm:inline-block text-[11px] uppercase tracking-[0.2em] text-abu-gray">
            Alimentos Balanceados
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative px-3 py-2 text-[13px] font-medium text-abu-gray hover:text-abu-white transition-colors group"
            >
              {link.name}
              <span className="absolute bottom-0 left-3 right-3 h-px bg-abu-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          ))}
          <Link
            href="/contacto"
            className="ml-3 bg-abu-gold text-abu-bg px-5 py-2 font-semibold text-[13px] hover:bg-abu-gold-hover transition-colors"
          >
            Contacto
          </Link>
        </nav>

        <button
          className="lg:hidden p-2 text-abu-gray hover:text-abu-gold transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menú"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-abu-bg/98 backdrop-blur-xl border-t border-abu-line">
          <div className="px-6 py-4 flex flex-col gap-0.5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-abu-gray hover:text-abu-gold px-3 py-2.5 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="mt-3 bg-abu-gold text-abu-bg text-center px-5 py-3 font-semibold text-sm hover:bg-abu-gold-hover transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
