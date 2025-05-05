// src/pages/ContactPage.jsx
import React from 'react';
import ContactForm from '../components/ContactForm';
import NebulaBackground from '../components/NebulaBackground';
import SectionHeading from '../components/SectionHeading';

export default function ContactPage() {
  return (
    <div className="relative w-full min-h-screen">
        <NebulaBackground />
        <section className="pt-32 py-16 px-4 text-center" id ="contact">
        <SectionHeading className="text-glow mb-12" >
        🚀 Ready to Launch Your Message?
        </SectionHeading>
        <p className="text-xl font-medium
    bg-clip-text text-transparent
    bg-gradient-to-r from-gray-200 via-gray-100 to-white
    drop-shadow-[0_0_4px_rgba(255,255,255,0.6)] mb-12 italic">
          (Drop me a line, unless it's a pickup line—then keep it classy!)
        </p>
        <ContactForm />
      </section>
    </div>
  );
}
