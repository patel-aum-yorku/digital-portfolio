// src/components/AboutMe.jsx
import React from 'react';

/**
 * Props:
 *  - photoSrc: URL/string path to your portrait
 *  - summary:  brief “About me” paragraph
 *  - education: array of { degree, institution, start, end }
 */
export default function AboutMe({ photoSrc, summary, education }) {
    return (
      <div
        className="
          max-w-4xl mx-auto 
          bg-white/10 backdrop-blur-lg border border-white/20 
          rounded-xl p-8 
          flex flex-col md:flex-row items-center gap-8
        "
      >
        {/* 1. Your photo */}
        <img
          src={photoSrc}
          alt="Aum Patel"
          className="w-32 h-32 rounded-full object-cover flex-shrink-0"
        />
  
        {/* 2. Text block: summary + education */}
        <div className="flex-1 text-gray-200 space-y-6">
          {/* 2a. Bio summary */}
          <p className="text-lg leading-relaxed">
            {summary}
          </p>
  
          {/* 2b. Education list */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Education
            </h3>
            <ul className="space-y-4">
              {education.map((edu) => (
                <li key={edu.degree} className="space-y-1">
                  <div className="font-medium text-white">
                    {edu.degree}
                  </div>
                  <div className="text-sm">
                    {edu.institution}
                  </div>
                  <div className="text-sm text-gray-400">
                    {edu.start} – {edu.end}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }