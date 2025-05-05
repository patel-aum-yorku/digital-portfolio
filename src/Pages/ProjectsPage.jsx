import React, { useState, useEffect, useMemo } from 'react';
import { FiSearch } from 'react-icons/fi';
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
      <section className="pt-32 px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-2 text-glow">
          My Projects
        </h2>
        <p className="text-gray-300 mb-8">
          Flipping Through My Digital Album
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-full bg-white/10 backdrop-blur-lg text-white placeholder-gray-400 focus:outline-none"
            />
          </div>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`
                px-4 py-1 rounded-full text-sm font-medium
                ${filter === cat
                  ? 'bg-amber-400 text-gray-900'
                  : 'bg-white/10 text-gray-200 hover:bg-white/20'}
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Polaroid‑Style Grid */}
      <ProjectsPolaroidGrid projects={filtered} />
    </div>
  );
}
