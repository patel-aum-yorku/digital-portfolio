import React, { useRef, useState,useEffect, useCallback } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import RocketIcon from '../assets/rocket.svg';
import image1 from '../assets/myimg1.jpg'; 
import PlanetaryMask from '../components/PlanetaryMask.jsx'; 
import HeroText from '../components/HeroText.jsx'; 



export default function HomeSection() {
  const [docked, setDocked] = useState(false);

  // orbit radii
  const radiusX = 400;
  const radiusY = 250;

  // angle motion value
  const angle = useMotionValue(0);
  const x = useTransform(angle, a => radiusX * Math.cos(a));
  const y = useTransform(angle, a => radiusY * Math.sin(a));
  const rotate = useTransform(angle, a => {
    const dx = -radiusX * Math.sin(a);
    const dy =  radiusY * Math.cos(a);
    const deg = (Math.atan2(dy, dx) * 180) / Math.PI;
    return `${deg + 45}deg`;
  });

  // start a fresh orbit, then dock
  const startOrbit = useCallback(() => {
    setDocked(false);
    angle.set(0);
    animate(angle, 2 * Math.PI, {
      duration: 8,
      ease: 'easeInOut',
      onComplete: () => setDocked(true),
    });
  }, [angle]);

  // trigger the first orbit on mount
  useEffect(() => {
    startOrbit();
  }, [startOrbit]);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center">
      {/* 1. Animated greetings, name & tagline */}
      <div className="z-10 mb-8">
        <HeroText />
      </div>

      {/* 2. Portrait + docked rocket container */}
      <div className="relative z-10">
        <PlanetaryMask
          imageSrc={image1}
          size={220}
          ringColor="rgba(255,224,102,0.7)"
        />
        {docked && (
          <img
            src={RocketIcon}
            alt="Rocket docked"
            onClick={startOrbit}
            className="
              absolute
              top-full      
              mt-4         
              left-1/2     
              -translate-x-1/2
              w-8 h-8
              rotate-45deg 
              cursor-pointer
            "
          />
        )}
      </div>

      {/* 3. Orbiting rocket during its flight */}
      {!docked && (
        <motion.img
          src={RocketIcon}
          alt="Rocket orbiting"
          onClick={startOrbit}
          className="absolute w-12 h-12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          style={{ x, y, rotate }}
        />
      )}
    </section>
  );
}