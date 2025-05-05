// src/components/SectionHeading.jsx
import React from 'react';
import { motion } from 'framer-motion';

/**
 * A heading with fade+slide animation and a gradient underline.
 * 
 * Props:
 *  - children: the heading text
 *  - id (optional): for anchor links
 *  - className (optional): extra Tailwind classes (e.g. "text-glow")
 */
export default function SectionHeading({ children, id, className = '' }) {
  if (!children) return null;
  return (
    <motion.h2
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`
        relative text-4xl md:text-5xl font-bold text-white text-center
        ${className}
      `}
    >
      {children}

      {/* animated gradient underline */}
      <motion.span
        className="absolute left-1/2 top--4  -translate-x-1/2 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: '5rem' }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
      />
    </motion.h2>
  );
}
