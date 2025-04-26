import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import RocketIcon from '../assets/rocket.svg';

const HomeSection = () => {
  const sectionRef = useRef(null);

  // Scroll-to-next-section handler
  const handleScroll = () => {
    const next = sectionRef.current.nextElementSibling;
    next?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden"
    >
    

      {/* Floating Text Bubbles 
      <FloatingText
        texts={["Aum Patel", "Full Stack Developer"]}
        className="absolute top-1/3"
      />
      */}
      {/* Hero Title 
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-white text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to My Digital Portfolio
      </motion.h1>
*/}
      {/* Scroll-triggered Rocket*/} 
      <motion.img
        src={RocketIcon}
        alt="scroll down"
        className="absolute bottom-10 w-12 h-12 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={handleScroll}
        
      />
    </section>
  );
};

export default HomeSection;