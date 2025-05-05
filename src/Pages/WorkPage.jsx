// src/pages/WorkPage.jsx
import React from 'react';
import WorkTimeline from '../components/WorkTimeline';
import NebulaBackground from '../components/NebulaBackground';
import SectionHeading from '../components/SectionHeading';

export default function WorkPage() {
  return (
    <div className="relative w-full min-h-screen">
      {/* NebulaBackground should be applied at App or Layout level */}
        <NebulaBackground />
       
      <section id="work" className="pt-32 py-16 px-4">
        <SectionHeading className="text-glow mb-12" id="work">
          My Work And Leadership Experience
        </SectionHeading>
        <WorkTimeline />
      </section>
    </div>
  );
}
