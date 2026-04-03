// src/components/ProjectsPolaroidGrid.jsx
import React, { useState } from 'react';
import GitHubButton from './GitHubButton';

import { MdExpandMore,  MdExpandLess} from "react-icons/md";
export default function ProjectsPolaroidGrid({ projects }) {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? projects : projects.slice(0, 6);
  const rotations = ['-rotate-3','rotate-3','-rotate-6','rotate-6','-rotate-2','rotate-2'];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center px-4">
        {displayed.map((proj, idx) => {
          return (
            <div
              key={proj.title}
              className="group relative w-80 h-[26rem] flex flex-col rounded-2xl overflow-hidden
                         bg-white/5 backdrop-blur-md border border-white/10
                         hover:border-amber-400/50 hover:shadow-[0_0_30px_rgba(255,193,7,0.2)]
                         transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 
                              group-hover:to-amber-900/40 transition-colors duration-500 z-10" />

              {/* Project screenshot */}
              <img
                src={proj.image}
                alt={proj.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"
              />

              {/* Content pane */}
              <div className="relative z-20 flex flex-col h-full justify-end p-6">
                <h3 className="text-2xl font-bold mb-2
                               bg-clip-text text-transparent
                               bg-gradient-to-r from-gray-100 to-white
                               group-hover:from-amber-200 group-hover:to-amber-400 transition-colors duration-300">
                  {proj.title}
                </h3>
                
                {/* Description scrolls up or becomes visible on hover */}
                <div className="overflow-hidden mb-3">
                  <p className="text-gray-300 text-sm line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                    {proj.description[0]}
                  </p>
                </div>

                {/* Skill badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.skills.slice(0, 4).map(skill => (
                    <span
                      key={skill}
                      className="text-xs font-semibold bg-white/10 border border-white/10 text-gray-200 px-2 py-1 rounded-md shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                  {proj.skills.length > 4 && (
                    <span className="text-xs font-semibold bg-white/5 border border-white/10 text-gray-400 px-2 py-1 rounded-md">
                      +{proj.skills.length - 4}
                    </span>
                  )}
                </div>

                {/* GitHub button */}
                <div className="mt-auto">
                  <GitHubButton link={proj.link} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {projects.length > 6 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(prev => !prev)}
            className="px-6 py-2 bg-amber-400 text-gray-900 font-medium rounded-full hover:bg-amber-500 transition"
          >
            {showAll ? <MdExpandLess/> :  <MdExpandMore />}
          </button>
          
        </div>
      )}
    </>
  );
}
