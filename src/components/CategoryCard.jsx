import React from 'react';
import { techIconMap } from '../data/techIcons';
import { FaCode } from 'react-icons/fa';

export default function CategoryCard({ emoji, title, items }) {
  return (
    <div className="relative group w-72 h-[22rem] flex flex-col justify-between overflow-visible
                    bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6
                    hover:border-amber-400/50 hover:shadow-[0_0_30px_rgba(255,193,7,0.3)]
                    transition-all duration-500 transform hover:-translate-y-2">
      {/* Background Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/0 via-transparent to-amber-500/0 
                      group-hover:from-amber-500/10 group-hover:to-transparent transition-all duration-500" />
      
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center z-10 transition-transform duration-500 group-hover:-translate-y-2">
        <span className="text-6xl drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] mb-3">{emoji}</span>
        <h3 className="text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 group-hover:from-amber-200 group-hover:to-amber-500 transition-colors duration-300">
          {title}
        </h3>
      </div>

      {/* Items Section - Fades in and slides up on hover */}
      <div className="z-10 mt-4 opacity-50 group-hover:opacity-100 transition-all duration-500 flex-1 flex flex-col justify-end">
        <div className="flex flex-wrap gap-2 justify-center">
          {items.map((item) => {
            const Icon = techIconMap[item] || FaCode;
            return (
              <div
                key={item}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full
                           bg-black/40 border border-white/5 text-gray-300 text-xs 
                           group-hover:border-amber-500/30 group-hover:text-white
                           transition-colors duration-300 shadow-inner"
              >
                <Icon className="w-4 h-4 text-amber-400/70 group-hover:text-amber-400" />
                <span>{item}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
