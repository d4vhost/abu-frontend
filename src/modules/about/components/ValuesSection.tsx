import { valuesData } from "../data/about-data";

export default function ValuesSection() {
  return (
    <section className="py-20 bg-abu-bg-main">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-abu-text mb-4">Nuestros Valores</h2>
          <div className="w-16 h-1 bg-abu-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuesData.map((value, index) => (
            <div key={index} className="bg-abu-card border border-abu-border p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-abu-primary mb-3">{value.title}</h3>
              <p className="text-abu-text-muted text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
