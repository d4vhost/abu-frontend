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

  // We duplicate the items to create a seamless loop
  const duplicatedItems = [...items, ...items];

  return (
    <div className="w-full overflow-hidden bg-abu-bg-sec border-y border-abu-border py-4">
      <motion.div
        className="flex whitespace-nowrap gap-12 w-max"
        animate={{
          x: ['0%', '-50%']
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 25 // 25 seconds for a full loop
        }}
      >
        {duplicatedItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-12">
            <span className="text-abu-text font-bold text-lg tracking-wider uppercase">
              {item}
            </span>
            <span className="text-abu-primary text-xl">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
