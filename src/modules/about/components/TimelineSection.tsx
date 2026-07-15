import { timelineItems } from "../data/about-data";

export default function TimelineSection() {
  return (
    <section className="py-16 bg-abu-bg-alt border-t border-abu-line">
      <div className="w-full px-6 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row gap-6 justify-between relative">
          <div className="absolute hidden md:block top-5 left-0 w-full h-px bg-abu-line z-0" />
          <div className="absolute block md:hidden top-0 left-5 w-px h-full bg-abu-line z-0" />
          {timelineItems.map((item, index) => (
            <div key={index} className="relative z-10 flex flex-row md:flex-col gap-5 md:gap-3 flex-1">
              <div className="flex-none">
                <div className="w-3 h-3 rounded-full bg-abu-gold border-[3px] border-abu-bg-alt relative md:mx-auto ml-[14px] md:ml-auto md:mt-3" />
              </div>
              <div className="flex-1 text-left md:text-center">
                <h3 className="text-sm font-bold text-abu-white mb-1">{item.title}</h3>
                <p className="text-abu-gray-dark text-xs leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
