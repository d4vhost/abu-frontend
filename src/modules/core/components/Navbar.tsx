"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
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
 const handleScroll = () => setIsScrolled(window.scrollY > 20);
 window.addEventListener("scroll", handleScroll);
 return () => window.removeEventListener("scroll", handleScroll);
 }, []);

 return (
 <header
 className={cn(
 "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
 isScrolled
 ? "bg-abu-green text-abu-cream shadow-md py-3"
 : "bg-abu-green/95 backdrop-blur-sm text-abu-cream py-5"
 )}
 >
 <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
 <Link href="/" className="flex items-center gap-2 group">
 <span className="text-2xl font-bold tracking-tight text-abu-corn">A.B.U.</span>
 <span className="hidden sm:inline-block text-xs uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">
 Alimentos Balanceados
 </span>
 </Link>

 {/* Desktop Nav */}
 <nav className="hidden lg:flex items-center gap-6">
 {NAV_LINKS.map((link) => (
 <Link
 key={link.name}
 href={link.href}
 className="text-sm font-medium hover:text-abu-corn transition-colors"
 >
 {link.name}
 </Link>
 ))}
 <Link
 href="/contacto"
 className="ml-4 bg-abu-corn text-abu-charcoal px-5 py-2 font-semibold text-sm hover:bg-abu-wheat transition-colors flex items-center gap-1"
 >
 Contacto <ChevronRight className="w-4 h-4" />
 </Link>
 </nav>

 {/* Mobile Toggle */}
 <button
 className="lg:hidden p-2 text-abu-cream hover:text-abu-corn"
 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
 >
 {mobileMenuOpen ? <X /> : <Menu />}
 </button>
 </div>

 {/* Mobile Nav */}
 {mobileMenuOpen && (
 <div className="lg:hidden absolute top-full left-0 right-0 bg-abu-green-dark border-t border-white/10 shadow-xl flex flex-col p-4">
 {NAV_LINKS.map((link) => (
 <Link
 key={link.name}
 href={link.href}
 className="py-3 px-4 text-abu-cream hover:bg-white/5 hover:text-abu-corn transition-colors"
 onClick={() => setMobileMenuOpen(false)}
 >
 {link.name}
 </Link>
 ))}
 <Link
 href="/contacto"
 className="mt-4 bg-abu-corn text-abu-charcoal text-center px-5 py-3 font-semibold hover:bg-abu-wheat transition-colors"
 onClick={() => setMobileMenuOpen(false)}
 >
 Contacto
 </Link>
 </div>
 )}
 </header>
 );
}
