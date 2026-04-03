import React, { useRef } from 'react';
import SectionHeading from '../components/SectionHeading';
import CategoryCard from '../components/CategoryCard';

export default function TechStackSection() {
  const carouselRef = useRef(null);
  const scrollStep = 288 + 24; // 18rem (288px) + 1.5rem gap (24px) = 312px

  const categories = [
    { emoji: '💻', title: 'Languages',   items: ['Python','Java','JavaScript','TypeScript','C','SQL'] },
    { emoji: '🌐', title: 'Front End',   items: ['HTML','CSS','Tailwind','React.JS'] },
    { emoji: '🛠️', title: 'Back End',    items: ['Node.JS','Express.JS','FastAPI','Spring Boot'] },
    { emoji: '💾', title: 'Data',        items: ['MongoDB','MySQL','Postgres','MariaDB'] },
    { emoji: '🤖', title: 'AI',          items: ['LangChain','RAG','LLMs','AWS Bedrock','AWS Sagemaker'] },
    { emoji: '🧠', title: 'ML',          items: ['TensorFlow','Scikit-Learn','Pandas','NumPy','MLflow','Matplotlib','Seaborn'] },
    { emoji: '☁️', title: 'Cloud & DevOps', items: ['AWS','Azure','Docker','Git','GitHub'] },
    { emoji: '🧰', title: 'Tools',       items: ['Power BI','Postman','Jira','Slack','PySpark','Hadoop','Spark'] },
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
            px-4 pt-4 pb-4 no-scrollbar
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
