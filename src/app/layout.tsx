import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/modules/core/components/Navbar";
import Footer from "@/modules/core/components/Footer";

export const metadata: Metadata = {
 title: "A.B.U. - Alimentos Balanceados Uzcátegui",
 description: "Nutrición balanceada para cada etapa de tus aves. Producimos alimentos balanceados para crecimiento, desarrollo, postura y engorde.",
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
 <html lang="es">
 <body className="font-sans min-h-screen flex flex-col">
 <Navbar />
 <main className="flex-1">{children}</main>
 <Footer />
 </body>
 </html>
 );
}
