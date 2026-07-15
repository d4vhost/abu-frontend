import { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
 title: "Red de Distribuidores | A.B.U.",
 description: "Únete a la red de distribuidores de A.B.U. Alimentos Balanceados.",
};

export default function DistribuidoresPage() {
 return (
 <div className="pt-24 pb-20 bg-abu-bg-alt min-h-screen">
 <div className="container mx-auto px-4 md:px-8 max-w-6xl">
 <div className="flex flex-col lg:flex-row gap-12">
 
 {/* Info */}
 <div className="lg:w-1/2">
 <h1 className="text-4xl md:text-5xl font-bold text-abu-white mb-6">Únete a nuestra Red</h1>
 <p className="text-lg text-abu-white/80 mb-8 leading-relaxed">
 Buscamos socios comerciales estratégicos en todo el Ecuador. Si tienes un almacén veterinario, un centro agrícola o eres un distribuidor provincial, A.B.U. te ofrece una línea completa de alimentos balanceados de alta rotación.
 </p>

 <h3 className="text-xl font-bold text-abu-white mb-4">¿Por qué distribuir A.B.U.?</h3>
 <ul className="space-y-4 mb-8">
 <li className="flex gap-3 items-start">
 <div className="w-6 h-6 -full bg-abu-gold flex items-center justify-center shrink-0 mt-0.5"><ArrowRight className="w-3 h-3 text-abu-white" /></div>
 <p className="text-abu-white/80">Productos respaldados por registros de Agrocalidad y formulados para excelentes conversiones.</p>
 </li>
 <li className="flex gap-3 items-start">
 <div className="w-6 h-6 -full bg-abu-gold flex items-center justify-center shrink-0 mt-0.5"><ArrowRight className="w-3 h-3 text-abu-white" /></div>
 <p className="text-abu-white/80">Condiciones comerciales competitivas y volumen de despacho flexible.</p>
 </li>
 <li className="flex gap-3 items-start">
 <div className="w-6 h-6 -full bg-abu-gold flex items-center justify-center shrink-0 mt-0.5"><ArrowRight className="w-3 h-3 text-abu-white" /></div>
 <p className="text-abu-white/80">Asesoramiento técnico y material de apoyo publicitario.</p>
 </li>
 </ul>
 </div>

 {/* Form */}
 <div className="lg:w-1/2">
 <div className="bg-abu-surface p-8 shadow-sm border border-abu-line">
 <h2 className="text-2xl font-bold text-abu-white mb-6">Solicitud de Distribuidor</h2>
 <form className="space-y-4">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 <div>
 <label className="block text-sm font-medium text-abu-gray mb-1">Nombre o Razón Social</label>
 <input type="text" className="w-full px-4 py-2 bg-abu-bg-alt/30 border border-abu-line focus:outline-none focus:border-abu-gold transition-colors" />
 </div>
 <div>
 <label className="block text-sm font-medium text-abu-gray mb-1">RUC</label>
 <input type="text" className="w-full px-4 py-2 bg-abu-bg-alt/30 border border-abu-line focus:outline-none focus:border-abu-gold transition-colors" />
 </div>
 </div>
 
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 <div>
 <label className="block text-sm font-medium text-abu-gray mb-1">Provincia y Ciudad</label>
 <input type="text" className="w-full px-4 py-2 bg-abu-bg-alt/30 border border-abu-line focus:outline-none focus:border-abu-gold transition-colors" />
 </div>
 <div>
 <label className="block text-sm font-medium text-abu-gray mb-1">Teléfono</label>
 <input type="text" className="w-full px-4 py-2 bg-abu-bg-alt/30 border border-abu-line focus:outline-none focus:border-abu-gold transition-colors" />
 </div>
 </div>

 <div>
 <label className="block text-sm font-medium text-abu-gray mb-1">Volumen mensual estimado (Sacos)</label>
 <select className="w-full px-4 py-2 bg-abu-bg-alt/30 border border-abu-line focus:outline-none focus:border-abu-gold transition-colors">
 <option>Menos de 100</option>
 <option>100 a 500</option>
 <option>500 a 1000</option>
 <option>Más de 1000</option>
 </select>
 </div>

 <div>
 <label className="block text-sm font-medium text-abu-gray mb-1">Mensaje o consulta adicional</label>
 <textarea rows={4} className="w-full px-4 py-2 bg-abu-bg-alt/30 border border-abu-line focus:outline-none focus:border-abu-gold transition-colors"></textarea>
 </div>

 <button type="button" className="w-full bg-abu-card text-abu-white font-bold py-3 hover:bg-abu-bg transition-colors">
 Enviar Solicitud
 </button>
 </form>
 </div>
 </div>
 </div>
 </div>
 </div>
 );
}
