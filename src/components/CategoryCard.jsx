import React from 'react';
import { techIconMap } from '../data/techIcons';
 // generic fallback icon
import { FaCode } from "react-icons/fa";
export default function CategoryCard({ emoji, title, items }) {
  return (
    <div className="flip-card w-64 h-96 flex-shrink-0">
      <div className="flip-card-inner relative w-full h-full">
        {/* Front face */}
        <div className="
          front absolute inset-0
          bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-600 animate-gradient
          rounded-lg shadow-xl
          flex flex-col items-center justify-center p-4
        ">
          <span className="text-6xl animate-bounce-slow">{emoji}</span>
          <div className="text-xl md:text-2xl text-white font-bold text-center mt-4 px-2">
            {title}
          </div>
        </div>

        {/* Back face */}
        <div className="back absolute inset-0 glass-panel flex flex-col p-4">
          {/* optional back title */}
          <div className="text-white font-semibold text-lg mb-2 text-center">
            {title}
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className="grid grid-cols-3 gap-3">
              {items.map((item) => {
                const Icon = techIconMap[item] || FaCode;
                return (
                  <div
                    key={item}
                    className="
                      badge-glow cursor-pointer 
                      flex items-center justify-center 
                      px-2 py-1 rounded-full text-xs font-medium
                      transition-transform transform
                      hover:scale-110
                    "
                  >
                    <Icon className="w-5 h-5 text-white mr-1 flex-shrink-0" />
                    <span className="text-white">{item}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
