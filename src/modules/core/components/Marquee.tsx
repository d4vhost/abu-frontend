'use client';

import { motion } from 'framer-motion';

export default function Marquee() {
  const items = [
    "Nutrición por etapas",
    "Producción ecuatoriana",
    "Especialización avícola",
    "Atención a productores",
    "Distribución mayorista"
  ];

  const duplicatedItems = [...items, ...items];

  return (
    <div className="w-full overflow-hidden border-t border-abu-line py-2.5">
      <motion.div
        className="flex whitespace-nowrap gap-8 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      >
        {duplicatedItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-8">
            <span className="text-abu-gray text-[11px] font-semibold tracking-[0.2em] uppercase">
              {item}
            </span>
            <span className="text-abu-gold-dim text-[10px]">◆</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
