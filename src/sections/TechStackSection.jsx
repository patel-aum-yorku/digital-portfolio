// src/sections/TechStackSection.jsx
import React, { useRef, useEffect } from 'react';
import SectionHeading from '../components/SectionHeading';
import CategoryCard from '../components/CategoryCard';

export default function TechStackSection() {
  const carouselRef = useRef(null);

  const categories = [
    { emoji: '🌐', title: 'Front End', items: ['HTML','CSS','Tailwind','React.JS'] },
    { emoji: '🛠️', title: 'Back End', items: ['Node.JS','Express.JS','Spring Boot','Servlets','JSP'] },
    { emoji: '💾', title: 'Data', items: ['MongoDB','MySQL','Postgres'] },
    { emoji: '🤖', title: 'AI/ML', items: ['Scikit-Learn','TensorFlow','Pandas','NumPy','Matplotlib','Seaborn','PySpark'] },
    { emoji: '☁️', title: 'DevOps', items: ['Git','GitHub','AWS','Azure','Docker'] },
    { emoji: '🧰', title: 'Tools', items: ['MS Office','Power BI','Weka','Hadoop','Spark','Postman','Jira','Slack'] },
  ];

  // Center the carousel content on mount
  useEffect(() => {
    const c = carouselRef.current;
    if (!c) return;
    const offset = (c.scrollWidth - c.clientWidth) / 2;
    c.scrollTo({ left: offset, behavior: 'smooth' });
  }, []);

  return (
    <section id="tech-stack" className="py-16 px-4">
      <SectionHeading className="mt-16 mb-8 text-glow" id="tech-stack">
        My Tech Stack
      </SectionHeading>

      <div className="relative">
        <div
          ref={carouselRef}
          className="
            flex justify-center space-x-6 overflow-x-auto scroll-smooth snap-x snap-mandatory
            px-4 pb-4 no-scrollbar
          "
        >
          {categories.map((cat) => (
            <CategoryCard
              key={cat.title}
              emoji={cat.emoji}
              title={cat.title}
              items={cat.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
