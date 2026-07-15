'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  duration?: number;
  distance?: number;
  className?: string;
}

const directionMap = {
  up:    { x: 0, y: 40 },
  down:  { x: 0, y: -40 },
  left:  { x: 40, y: 0 },
  right: { x: -40, y: 0 },
};

export default function Reveal({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.6,
  distance,
  className,
}: RevealProps) {
  const offset = directionMap[direction];
  const d = distance ?? Math.abs(offset.x || offset.y);
  const initial = {
    opacity: 0,
    x: offset.x > 0 ? d : offset.x < 0 ? -d : 0,
    y: offset.y > 0 ? d : offset.y < 0 ? -d : 0,
  };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, ease: [0.25, 0.1, 0.25, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
