import React, { useRef, useEffect, useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import CategoryCard from '../components/CategoryCard';

export default function TechStackSection() {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    { emoji: '🌐', title: 'Front End', items: ['HTML','CSS','Tailwind','React.JS'] },
    { emoji: '🛠️', title: 'Back End', items: ['Node.JS','Express.JS','Spring Boot','Servlets','JSP'] },
    { emoji: '💾', title: 'Data', items: ['MongoDB','MySQL','Postgres'] },
    { emoji: '🤖', title: 'AI/ML', items: ['Scikit-Learn','TensorFlow','Pandas','NumPy','Matplotlib','Seaborn','PySpark'] },
    { emoji: '☁️', title: 'DevOps', items: ['Git','GitHub','AWS','Azure','Docker'] },
    { emoji: '🧰', title: 'Tools', items: ['MS Office','Power BI','Weka','Hadoop','Spark','Postman','Jira','Slack'] },
  ];

  // Refs for each card
  const cardRefs = useRef([]);

  // Center the initial card on mount
  useEffect(() => {
    if (!carouselRef.current || cardRefs.current.length === 0) return;
    const mid = Math.floor(categories.length / 2);
    setCurrentIndex(mid);
  }, []);

  // Whenever currentIndex changes, scroll that card into view
  useEffect(() => {
    const node = cardRefs.current[currentIndex];
    if (node) {
      node.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
      });
    }
  }, [currentIndex]);

  // Handlers for Prev/Next
  const prev = () => setCurrentIndex(i => Math.max(0, i - 1));
  const next = () => setCurrentIndex(i => Math.min(categories.length - 1, i + 1));

  return (
    <section id="tech-stack" className="py-16 px-4">
      <SectionHeading className="mt-16 mb-8 text-glow" id="tech-stack">
        My Tech Stack
      </SectionHeading>

      <div className="relative">
        {/* Prev/Next Buttons */}
        <button
          onClick={prev}
          disabled={currentIndex === 0}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/20 rounded-full hover:bg-white/30 disabled:opacity-50"
        >‹</button>
        <button
          onClick={next}
          disabled={currentIndex === categories.length - 1}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/20 rounded-full hover:bg-white/30 disabled:opacity-50"
        >›</button>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="
            flex justify-center space-x-6 overflow-x-auto scroll-smooth
            snap-x snap-mandatory px-4 pb-4 no-scrollbar
          "
        >
          {categories.map((cat, idx) => (
            <div
              key={cat.title}
              ref={el => (cardRefs.current[idx] = el)}
              className="snap-center"
            >
              <CategoryCard
                emoji={cat.emoji}
                title={cat.title}
                items={cat.items}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
