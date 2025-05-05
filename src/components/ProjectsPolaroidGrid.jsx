import React, { useState } from 'react';
import GitHubButton from './GitHubButton';

export default function ProjectsPolaroidGrid({ projects }) {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? projects : projects.slice(0, 6);

  // cycle through small rotations
  const rotations = ['-rotate-3','rotate-3','-rotate-6','rotate-6','-rotate-2','rotate-2'];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center px-4">
        {displayed.map((proj, idx) => {
          const rot = rotations[idx % rotations.length];
          return (
            <div
              key={proj.title}
              className={`transform ${rot} hover:rotate-0 hover:scale-105 transition duration-300`}
            >
              <div className="bg-white rounded-lg shadow-xl overflow-hidden w-64">
                {/* Image */}
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-40 object-cover"
                />
                {/* Content */}
                <div className="p-4 flex flex-col gap-2">
                  <h3 className="text-gray-800 font-semibold text-lg">
                    {proj.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {proj.description[0]}
                  </p>
                  {/* Skills */}
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
                  <div className="mt-4">
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
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </>
  );
}
