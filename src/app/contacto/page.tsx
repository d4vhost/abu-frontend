import { Metadata } from "next";
import { Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto | A.B.U.",
  description: "Ponte en contacto con A.B.U. Alimentos Balanceados.",
};

export default function ContactoPage() {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-abu-green-dark mb-4">Contacto</h1>
          <p className="text-lg text-abu-charcoal/70 max-w-2xl mx-auto">
            Estamos listos para asesorarte en la nutrición de tu granja. Déjanos tus datos o contáctanos directamente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-abu-cream p-6 rounded-sm border border-abu-earth/10 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-abu-green rounded-full flex items-center justify-center text-white mb-4">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-abu-green-dark mb-2">Teléfonos Comerciales</h3>
            <p className="text-abu-charcoal/70">03 284 1870</p>
            <p className="text-abu-charcoal/70">098 611 494</p>
          </div>
          <div className="bg-abu-cream p-6 rounded-sm border border-abu-earth/10 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-abu-green rounded-full flex items-center justify-center text-white mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-abu-green-dark mb-2">Planta de Producción</h3>
            <p className="text-abu-charcoal/70">Provincia de Santo Domingo</p>
            <p className="text-abu-charcoal/70">Km 5 vía a Colorados del Búa</p>
          </div>
          <div className="bg-abu-cream p-6 rounded-sm border border-abu-earth/10 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-abu-green rounded-full flex items-center justify-center text-white mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-abu-green-dark mb-2">Oficina Principal</h3>
            <p className="text-abu-charcoal/70">Huachi Loreto, Ambato</p>
            <p className="text-abu-charcoal/70">Cádiz 021 y Av. Los Shyris</p>
          </div>
        </div>

        <div className="bg-abu-cream/30 p-8 rounded-sm border border-abu-earth/10 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-abu-green-dark mb-6 text-center">Formulario de Cotización</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-abu-charcoal/70 mb-1">Nombre Completo</label>
                <input type="text" className="w-full px-4 py-2 bg-white border border-abu-earth/20 rounded-sm focus:outline-none focus:border-abu-green" />
              </div>
              <div>
                <label className="block text-sm font-medium text-abu-charcoal/70 mb-1">Empresa o Granja</label>
                <input type="text" className="w-full px-4 py-2 bg-white border border-abu-earth/20 rounded-sm focus:outline-none focus:border-abu-green" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-abu-charcoal/70 mb-1">Teléfono o WhatsApp</label>
                <input type="text" className="w-full px-4 py-2 bg-white border border-abu-earth/20 rounded-sm focus:outline-none focus:border-abu-green" />
              </div>
              <div>
                <label className="block text-sm font-medium text-abu-charcoal/70 mb-1">Provincia</label>
                <input type="text" className="w-full px-4 py-2 bg-white border border-abu-earth/20 rounded-sm focus:outline-none focus:border-abu-green" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-abu-charcoal/70 mb-1">Producto de interés</label>
                <select className="w-full px-4 py-2 bg-white border border-abu-earth/20 rounded-sm focus:outline-none focus:border-abu-green">
                  <option>Seleccione un producto</option>
                  <option>Alimento Inicial</option>
                  <option>Crecimiento y Desarrollo</option>
                  <option>Producción y Postura</option>
                  <option>Broiler Engorde</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-abu-charcoal/70 mb-1">Cantidad estimada</label>
                <input type="text" className="w-full px-4 py-2 bg-white border border-abu-earth/20 rounded-sm focus:outline-none focus:border-abu-green" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-abu-charcoal/70 mb-1">Mensaje adicional</label>
              <textarea rows={4} className="w-full px-4 py-2 bg-white border border-abu-earth/20 rounded-sm focus:outline-none focus:border-abu-green"></textarea>
            </div>

            <div className="pt-4 text-center">
              <button type="button" className="px-12 bg-abu-corn text-abu-charcoal font-bold py-3 rounded-sm hover:bg-abu-wheat transition-colors">
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
