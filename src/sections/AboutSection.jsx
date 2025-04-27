import React from 'react'
import AboutMe from '../components/AboutMe';
import imageSrc2 from '../assets/myimg2.jpg';
import SectionHeading from '../components/SectionHeading.jsx';
import CoursesCarousel from '../components/CoursesCarousel.jsx';


const AboutSection = () => {

  const summary = `I’m Aum Patel, a Full Stack Developer and AI enthusiast who loves turning 
  data into insights and concepts into code. On a mission to engineer tomorrow’s 
  intelligence, today.`;

  const education = [
    {
      degree: 'B.Sc. Computer Science Specialized Honors',
      institution: 'Lassonde School of Engineering, York University',
      start: 'Sep 2020',
      end: 'Dec 2024',
    },
  ];
  return (
    <section id="about" className="py-16 px-4">
      {/* animated, underlined, glowing heading */}
      <SectionHeading className="text-glow mb-12" id="about-me">
        About Me!
      </SectionHeading>

      {/* AboutMe component */}
      <AboutMe
        photoSrc={imageSrc2}
        summary={summary}
        education={education}
      />

      {/* TODO: subsections (Courses, Tech Stack, Certificates) go here */}
      <SectionHeading className="mt-16 mb-8 text-glow" id="courses">
  Courses I Took!
</SectionHeading>
<CoursesCarousel />
<SectionHeading className="mt-16 mb-8 text-glow" id="tech-stack">
  My Tech Stack
</SectionHeading>

<SectionHeading className="mt-16 mb-8 text-glow" id="certificates">
  Certificates
</SectionHeading>

    </section>
  );
}
export default AboutSection