import React from 'react';
import { techIconMap } from '../data/techIcons';
import { FaCode } from 'react-icons/fa'; // generic fallback

export default function CategoryCard({ emoji, title, items }) {
  return (
    <div className="flip-card w-72 h-80 flex-shrink-0">
      <div className="flip-card-inner relative w-full h-full">
        {/* Front face */}
        <div className="
          front absolute inset-0
          bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-600 animate-gradient
          rounded-lg shadow-xl
          flex flex-col items-center justify-center p-6
        ">
          <span className="text-7xl animate-bounce-slow">{emoji}</span>
          <h3 className="mt-4 text-2xl font-bold text-white text-center px-2">
            {title}
          </h3>
        </div>

        {/* Back face */}
        <div className="back absolute inset-0 glass-panel flex flex-col p-6 overflow-hidden">
          <h4 className="text-lg font-semibold text-white text-center mb-4">
            {title}
          </h4>
          <div className="flex-1 overflow-y-auto">
            <div className="grid grid-cols-2 gap-2 p-2">
              {items.map((item) => {
                const Icon = techIconMap[item] || FaCode;
                return (
                  <div
                    key={item}
                    className="
                      badge-glow cursor-pointer
                      flex items-center justify-center
                      bg-neutral-800 px-3 py-2 rounded-lg
                      text-sm font-medium text-white
                      transition-transform transform hover:shadow-lg
                    "
                  >
                    <Icon className="w-6 h-6 flex-shrink-0 mr-2" />
                    <span className="whitespace-normal">{item}</span>
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
