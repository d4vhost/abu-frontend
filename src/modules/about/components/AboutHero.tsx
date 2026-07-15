'use client';

import { motion } from "framer-motion";
import { aboutHeroData } from "../data/about-data";

export default function AboutHero() {
  return (
    <section className="pt-28 pb-14 md:pt-36 md:pb-18 bg-abu-bg relative">
      <div className="w-full px-6 md:px-10 lg:px-16 max-w-4xl">
        <motion.div
          className="flex items-center gap-3 mb-5"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="w-6 h-px bg-abu-gold" />
          <span className="text-[11px] uppercase tracking-[0.25em] text-abu-gold font-semibold">A.B.U.</span>
        </motion.div>
        <motion.h1
          className="text-3xl md:text-5xl font-extrabold text-abu-white mb-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {aboutHeroData.title}
        </motion.h1>
        <motion.p
          className="text-base md:text-lg text-abu-gray leading-relaxed max-w-xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {aboutHeroData.subtitle}
        </motion.p>
      </div>
    </section>
  );
}
