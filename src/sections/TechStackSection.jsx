import React, { useRef } from 'react';
import SectionHeading from '../components/SectionHeading';
import CategoryCard from '../components/CategoryCard';

export default function TechStackSection() {
  const carouselRef = useRef(null);
  const scrollStep = 288 + 24; // 18rem (288px) + 1.5rem gap (24px) = 312px

  const categories = [
    { emoji: '🌐', title: 'Front End',   items: ['HTML','CSS','Tailwind','React.JS'] },
    { emoji: '🛠️', title: 'Back End',    items: ['Node.JS','Express.JS','Spring Boot','JSP','Servlets'] },
    { emoji: '💾', title: 'Data',        items: ['MongoDB','MySQL','Postgres'] },
    { emoji: '🤖', title: 'AI/ML',       items: ['NumPy','Scikit-Learn','TensorFlow','Pandas','Matplotlib','Seaborn','PySpark'] },
    { emoji: '☁️', title: 'DevOps',      items: ['Git','GitHub','AWS','Azure','Docker'] },
    { emoji: '🧰', title: 'Tools',       items: ['MS Office','Power BI','Weka','Hadoop','Spark','Postman','Jira','Slack'] },
  ];

  const prev = () => {
    carouselRef.current?.scrollBy({ left: -scrollStep, behavior: 'smooth' });
  };
  const next = () => {
    carouselRef.current?.scrollBy({ left: scrollStep, behavior: 'smooth' });
  };

  return (
    <section id="tech-stack" className="py-4 px-4">
      

      <div className="relative">
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/20 rounded-full hover:bg-white/30"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/20 rounded-full hover:bg-white/30"
        >
          ›
        </button>

        <div
          ref={carouselRef}
          className="
            flex justify-start space-x-6
            overflow-x-auto scroll-smooth snap-x snap-mandatory
            px-4 pb-4 no-scrollbar
          "
        >
          {categories.map((cat) => (
            <div key={cat.title} className="snap-center">
              <CategoryCard {...cat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
