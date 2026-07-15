import { timelineItems } from "../data/about-data";

export default function TimelineSection() {
  return (
    <section className="py-20 bg-abu-bg-main relative">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-8 justify-between relative">
          {/* Horizontal line for desktop, vertical line for mobile (via border on container or pseudo elements) */}
          <div className="absolute hidden md:block top-6 left-0 w-full h-px bg-abu-border z-0"></div>
          <div className="absolute block md:hidden top-0 left-6 w-px h-full bg-abu-border z-0"></div>

          {timelineItems.map((item, index) => (
            <div key={index} className="relative z-10 flex flex-row md:flex-col gap-6 md:gap-4 flex-1">
              <div className="flex-none">
                <div className="w-4 h-4 rounded-full bg-abu-primary border-4 border-abu-bg-main relative md:mx-auto ml-[1.125rem] md:ml-auto md:mt-4 shadow-sm" />
              </div>
              <div className="flex-1 text-left md:text-center mt-[-4px] md:mt-0">
                <h3 className="text-xl font-bold text-abu-text mb-2">{item.title}</h3>
                <p className="text-abu-text-muted text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
