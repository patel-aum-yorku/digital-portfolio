// src/components/CoursesCarousel.jsx
import React, { useRef } from 'react';
import CourseCard from './CourseCard';
import { courses } from '../data/courses';

export default function CoursesCarousel() {
  const carouselRef = useRef(null);
  const CARD_WIDTH = 256; // Tailwind w-64 = 16rem = 256px

  const scrollNext = () =>
    carouselRef.current?.scrollBy({ left: CARD_WIDTH + 24, behavior: 'smooth' });
  const scrollPrev = () =>
    carouselRef.current?.scrollBy({ left: -(CARD_WIDTH + 24), behavior: 'smooth' });

  return (
    <div className="relative py-4">
      {/* Prev/Next Buttons */}
      <button
        onClick={scrollPrev}
        aria-label="Previous"
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white/20 rounded-full"
      >
        ‹
      </button>
      <button
        onClick={scrollNext}
        aria-label="Next"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white/20 rounded-full"
      >
        ›
      </button>

      {/* Scrollable Courses */}
      <div
    ref={carouselRef}
    className="flex space-x-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 no-scrollbar"
  >
    {courses.map((c) => (
      <CourseCard key={c.code} code={c.code} name={c.name} desc={c.desc} />
    ))}
  </div>
</div>
  );
}
