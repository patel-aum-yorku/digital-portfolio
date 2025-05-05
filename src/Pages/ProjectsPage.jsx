import React, { useState, useEffect, useMemo } from 'react';
import { FiSearch } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../data/projects';
import ProjectsPolaroidGrid from '../components/ProjectsPolaroidGrid';
import NebulaBackground from '../components/NebulaBackground';
const categories = ['All', 'Software Development', 'AI / Data Science'];

export default function ProjectsPage() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [debounced, setDebounced] = useState(search);

  useEffect(() => {
    const id = setTimeout(() => setDebounced(search), 300);
    return () => clearTimeout(id);
  }, [search]);

  const filtered = useMemo(() => {
    return projects.filter(p => {
      const matchCat = filter === 'All' || p.category === filter;
      const hay = [
        p.title,
        ...p.description,
        ...p.skills
      ].join(' ').toLowerCase();
      const matchSearch = hay.includes(debounced.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [debounced, filter]);

  return (
    <div className="relative w-full min-h-screen">
      <NebulaBackground />
      {/* Header & Controls */}
      <section className="pt-32 py-16 px-4 text-center" id ="projects">
      <SectionHeading className="text-glow mb-12" id="projects">
        My Projects !
      </SectionHeading>
        <h2 className="
    text-xl font-medium
    bg-clip-text text-transparent
    bg-gradient-to-r from-gray-200 via-gray-100 to-white
    drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]
  ">
          Flipping through my digital album.
        </h2>
        <br/>
        <div className="flex flex-col items-center gap-4 mb-12">
        
      {/* Search Input */}
      <div className="relative w-full max-w-md">
      <FiSearch
    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white z-10" // Changed to 'text-white' for better visibility
    size={20}
  />
            <input
              type="text"
              placeholder="Search projects, skills, tools..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 w-full rounded-full bg-white/10 backdrop-blur-lg text-white placeholder-gray-400 outline-yellow-500 focus:outline-2"
            />
          </div>
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-2 justify-center">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`
                px-4 py-1 rounded-full 
                ${filter === cat
                  ? 'bg-amber-400 text-gray-900'
                  : 'bg-white/10 text-gray-200 hover:bg-white/20'}
              `}
            >
              {cat}
            </button>
          ))}
          </div>
        </div>
      </section>

      {/* Polaroid‑Style Grid */}
      <ProjectsPolaroidGrid projects={filtered} />
    </div>
  );
}
