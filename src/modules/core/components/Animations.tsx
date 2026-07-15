'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CountUpProps {
  value: string;
  suffix?: string;
  className?: string;
}

export function CountUp({ value, suffix = '', className }: CountUpProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {value}{suffix}
    </motion.span>
  );
}

interface FadeLineProps {
  className?: string;
  delay?: number;
  direction?: 'horizontal' | 'vertical';
}

export function FadeLine({ className, delay = 0, direction = 'horizontal' }: FadeLineProps) {
  const isH = direction === 'horizontal';
  return (
    <motion.div
      initial={{ [isH ? 'scaleX' : 'scaleY']: 0, opacity: 0 }}
      whileInView={{ [isH ? 'scaleX' : 'scaleY']: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay }}
      className={className}
      style={{ transformOrigin: isH ? 'left' : 'top' }}
    />
  );
}

interface TextRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function TextReveal({ children, delay = 0, className }: TextRevealProps) {
  return (
    <div className={`overflow-hidden ${className || ''}`}>
      <motion.div
        initial={{ y: '100%' }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}
