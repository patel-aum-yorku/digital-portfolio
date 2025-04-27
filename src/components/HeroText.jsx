// src/components/HeroText.jsx
import React from "react";
import { motion } from "framer-motion";
import TextScramble from "@skits/react-text-scramble";
import ScrambleText from "./ScrambleText"; // Import your custom ScrambleText component

const greetings = ["Hello", "Bonjour", "Hola", "नमस्ते", "નમસ્તે"];

// Variants for rotating greetings in/out
const rotateVariant = {
  initial: { opacity: 0, y: 20 },
  animate: (i) => ({
    opacity: [0, 1, 0],
    y: [20, 0, -20],
    transition: {
      delay: i * 1.5,
      duration: 2,
      repeat: Infinity,
      repeatDelay: greetings.length * 1.5 - 2,
    },
  }),
};

// Variants for staggered name
const nameContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1 } },
};
const nameChild = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function HeroText({ nameRef }) {
  return (
    <div className="flex flex-col items-center space-y-4 z-10">
      {/* 1. Rotating multilingual greetings */}
      <div className="relative h-8 w-44 overflow-hidden">
        {greetings.map((word, i) => (
          <motion.div
            key={word}
            custom={i}
            variants={rotateVariant}
            initial="initial"
            animate="animate"
            className="absolute inset-0 flex items-center justify-center text-xl font-medium
    bg-clip-text text-transparent
    bg-gradient-to-r from-gray-200 via-gray-100 to-white
    drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]"
          >
            {`${word}, I am `}
          </motion.div>
        ))}
      </div>

      {/* 2. Name with staggered fade (one span per word) */}
      {/* HERE we forward the ref to the <h1> */}
      <motion.h1
        ref={nameRef}
        className="flex text-5xl md:text-7xl font-bold text-white text-glow flicker"
        variants={nameContainer}
        initial="initial"
        animate="animate"
      
  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {"Aum Patel".split(" ").map((word, idx) => (
          <motion.span key={idx} variants={nameChild} className="mx-1">
            {word}
          </motion.span>
        ))}
      </motion.h1>

     {/* ScrambleText  */}
     <ScrambleText
        text='Coding tomorrow’s intelligence, today !'
        speed={60}
        step={1}
        className="
    text-xl font-medium
    bg-clip-text text-transparent
    bg-gradient-to-r from-gray-200 via-gray-100 to-white
    drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]
  "
      />
    </div>
  );
}
