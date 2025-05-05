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
          const rot = rotations[idx % rotations.length];
          return (
            <div
              key={proj.title}
              className={`
                transform ${rot}
                hover:rotate-0 hover:scale-105
                hover:shadow-[0_0_15px_rgba(255,224,102,0.6)]
                transition duration-300
              `}
            >
              {/* 
                Card container:
                - w-88 h-98 for uniform size (adjust in Tailwind config or use w-[22rem] h-[24.5rem])
                - border + shadow for polaroid feel
              */}
              <div className="relative rounded-lg shadow-xl overflow-hidden border border-white/5 w-88 h-98">
                {/* Project screenshot */}
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-40 object-fill object-center bg-black/10"
                />

                {/* Translucent info pane */}
                <div className="absolute bottom-0 left-0 right-0
                                bg-white/10 backdrop-blur-md
                                p-4 flex flex-col gap-2
                                h-[calc(100%-10rem)]">
                  <h3 className="text-xl font-bold
    bg-clip-text text-transparent text-center
    bg-gradient-to-r from-gray-200 via-gray-100 to-white
    drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]">
                    {proj.title}
                  </h3>
                  <p className="text-gray-200 text-sm italic">
                    {proj.description[0]}
                  </p>
                  {/* Skill badges */}
                  <div className="flex flex-wrap gap-2 mt-1">
                    {proj.skills.map(skill => (
                      <span
                        key={skill}
                        className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  {/* GitHub button */}
                  <div className="mt-auto self-center">
                    <GitHubButton link={proj.link} />
                  </div>
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
