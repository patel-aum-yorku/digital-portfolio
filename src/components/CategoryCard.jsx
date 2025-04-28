// src/components/CategoryCard.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { techIconMap } from '../data/techIcons';

export default function CategoryCard({ emoji, title, items }) {
  const [flipped, setFlipped] = useState(false);

  // Parent perspective
  const containerStyle = {
    perspective: '1200px',
    WebkitPerspective: '1200px',
  };

  // Flipper with 3D settings
  const flipperStyle = {
    transformStyle: 'preserve-3d',
    WebkitTransformStyle: 'preserve-3d',
    transition: 'transform 0.7s',
    transformOrigin: 'center center',
    WebkitTransformOrigin: 'center center',
    transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
  };

  // Face base style
  const faceStyle = {
    position: 'absolute',
    top: 0, left: 0,
    width: '100%', height: '100%',
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden',
  };

  return (
    <motion.div
      style={containerStyle}
      className="w-64 h-96 snap-center flex-shrink-0 cursor-pointer"
      onClick={() => setFlipped(!flipped)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{ scale: 1.05 }}
    >
      <div style={flipperStyle} className="relative w-full h-full">
        {/* Front face */}
        <div
          style={faceStyle}
          className="bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-600 animate-gradient
                     rounded-lg shadow-xl flex flex-col items-center justify-center p-4"
        >
          <motion.span
            className="text-6xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            {emoji}
          </motion.span>
          <div className="text-xl md:text-2xl text-white font-bold text-center mt-4 px-2">
            {title}
          </div>
        </div>

        {/* Back face with depth-of-field blur */}
        {/* Back face */}
<div
  style={{ ...faceStyle, transform: 'rotateY(180deg)' }}
  className="card-back bg-black/50 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden relative"
>
  {items.map((item, i) => {
    const Icon = techIconMap[item] || (() => <span className="text-xs">{item}</span>);

    // Calculate badge position in % (you can tweak these math formulas)
    const cols = 3;
    const col = i % cols;
    const row = Math.floor(i / cols);
    const cx = 20 + col * 30;   // 3 columns at 20%,50%,80%
    const cy = 20 + row * 40;   // rows at 20%,60%

    return (
      <div
        key={item}
        className="reveal-badge flex items-center space-x-1 bg-white/20 text-white px-2 py-1 rounded-full shadow absolute"
        style={{
          '--i': i,
          '--cx': `${cx}%`,
          '--cy': `${cy}%`,
          /* position the badge at its (cx,cy) point */
          left: `${cx}%`,
          top: `${cy}%`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Icon className="w-4 h-4" />
        <span className="text-xs">{item}</span>
      </div>
    );
  })}
</div>

      </div>
    </motion.div>
  );
}
