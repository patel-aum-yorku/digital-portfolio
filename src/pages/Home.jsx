// src/pages/Home.jsx
import React from 'react';
import Background from '../components/Background.jsx';

const Home = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate-900">
      {/* Background component (particles) */}
      <Background />

      {/* Hero Section */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Aum <span className="text-cyan-500">.dev</span>
        </h1>
        <p className="text-xl md:text-2xl mb-6">
          Exploring the digital world of AI, Web Development, and more!
        </p>
        <a
          href="#projects"
          className="bg-cyan-500 px-6 py-3 text-lg rounded-lg text-white hover:bg-cyan-400 transition-all duration-300"
        >
          Explore My Work
        </a>
      </div>
    </div>
  );
};

export default Home;
