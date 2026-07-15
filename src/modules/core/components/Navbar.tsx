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
          ? "bg-white/95 backdrop-blur-xl border-b border-abu-border-light shadow-sm py-3"
          : "bg-abu-dark/90 backdrop-blur-sm py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <span className={cn(
            "text-2xl font-black tracking-tight transition-colors",
            isScrolled ? "text-abu-primary" : "text-abu-accent-gold"
          )}>
            A.B.U.
          </span>
          <span className={cn(
            "hidden sm:inline-block text-xs uppercase tracking-[0.2em] transition-colors",
            isScrolled ? "text-abu-caption" : "text-abu-text-muted"
          )}>
            Alimentos Balanceados
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "relative px-3 py-2 text-sm font-medium transition-colors group",
                isScrolled
                  ? "text-abu-body hover:text-abu-primary"
                  : "text-abu-text-muted hover:text-white"
              )}
            >
              {link.name}
              <span className="absolute bottom-0 left-3 right-3 h-px bg-abu-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          ))}
          <Link
            href="/contacto"
            className="ml-4 bg-abu-primary text-white px-6 py-2.5 font-bold text-sm hover:bg-abu-primary-hover transition-colors"
          >
            Contacto
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "lg:hidden p-2 transition-colors",
            isScrolled ? "text-abu-heading hover:text-abu-primary" : "text-white hover:text-abu-accent-gold"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-abu-border-light shadow-xl">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-medium text-abu-body hover:text-abu-primary hover:bg-abu-light px-4 py-3 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="mt-3 bg-abu-primary text-white text-center px-5 py-3.5 font-bold hover:bg-abu-primary-hover transition-colors"
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
