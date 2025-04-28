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
        <div
          style={{ ...faceStyle, transform: 'rotateY(180deg)' }}
          className="bg-black/50 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden"
        >
          <div className="relative w-full h-full">
            {items.map((item, i) => {
              const Icon = techIconMap[item] || (() => <span>{item}</span>);
              // Compute depth blur: nearer badges have z ~30, far ones ~30 + N*20
              const z = 30 + i * 20;
              const blur = Math.min(z / 50, 2); // cap blur at 2px
              return (
                <motion.div
                  key={item}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) translateZ(${z}px)`,
                    WebkitTransform: `translate(-50%, -50%) translateZ(${z}px)`,
                    filter: `blur(${blur}px)`,
                    WebkitFilter: `blur(${blur}px)`,
                  }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={flipped ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ delay: i * 0.1, type: 'spring', stiffness: 200, damping: 20 }}
                  className="flex items-center space-x-2 bg-white/20 text-white px-3 py-1 rounded-full shadow-lg"
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-xs font-medium">{item}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
