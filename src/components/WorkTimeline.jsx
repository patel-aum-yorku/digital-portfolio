// src/components/WorkTimeline.jsx
import React from 'react';
import { Slide } from 'react-awesome-reveal';
import { experiences } from '../data/experiences';

export default function WorkTimeline() {
    return (
      <div className="relative max-w-4xl mx-auto">
        {/* Central vertical line with glow */}
        <div
          className="
            absolute left-1/2 top-0 h-full w-px bg-white/20
            transform -translate-x-1/2
            before:absolute before:inset-0 before:w-full before:h-full
            before:bg-amber-400 before:blur-sm before:opacity-30
          "
        />
        <ul className="space-y-12">
          {experiences.map((exp, idx) => (
            <Slide key={idx} direction="up" cascade triggerOnce>
              <li className="relative flex items-start space-x-6">
                {/* Timeline dot */}
                <div className="flex-shrink-0">
                  <div className="w-4 h-4 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(255,193,7,0.8)]" />
                </div>
                {/* Card */}
                <div
                  className="
                    bg-white/10 backdrop-blur-lg rounded-lg p-6 flex-1
                    hover:shadow-[0_0_15px_rgba(255,224,102,0.6)]
                    transition-shadow duration-300
                  "
                >
                  <div className="text-sm font-mono text-amber-300 mb-1">
                    {exp.date}
                  </div>
                  <h3 className="text-xl font- text-white mb-2 text-glow">
                    {exp.title}
                  </h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {exp.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </li>
            </Slide>
          ))}
        </ul>
      </div>
    );
  }