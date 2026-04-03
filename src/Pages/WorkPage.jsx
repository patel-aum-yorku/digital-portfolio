// src/pages/WorkPage.jsx
import React from 'react';
import WorkTimeline from '../components/WorkTimeline';
import NebulaBackground from '../components/NebulaBackground';
import SectionHeading from '../components/SectionHeading';
import { workExperiences, leadershipExperiences } from '../data/experiences';

export default function WorkPage() {
  return (
    <div className="relative w-full min-h-screen">
      <NebulaBackground />
       
      <section id="work" className="pt-32 py-16 px-4">
        <SectionHeading className="text-glow mb-16">
          My Work Experience
        </SectionHeading>
        <div className="mb-24">
          <WorkTimeline experiences={workExperiences} />
        </div>

        <SectionHeading className="text-glow mb-16">
          Leadership Experience
        </SectionHeading>
        <div>
          <WorkTimeline experiences={leadershipExperiences} />
        </div>
      </section>
    </div>
  );
}
