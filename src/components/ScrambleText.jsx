// src/components/ScrambleText.jsx
import React, { useState, useEffect, useRef } from 'react';

const RANDOM_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export default function ScrambleText({
  text,
  speed = 30,    // ms between each “reveal” step
  step = 1, 
  className      // letters revealed per step
}) {
  const [displayed, setDisplayed] = useState('');
  const iteration = useRef(0);

  useEffect(() => {
    iteration.current = 0;
    let rafId;

    function update() {
      // build the next frame by showing real chars up to iteration,
      // and random gibberish for the rest
      const next = text
        .split('')
        .map((ch, i) =>
          i < iteration.current 
            ? ch 
            : RANDOM_CHARS[Math.floor(Math.random() * RANDOM_CHARS.length)]
        )
        .join('');
      setDisplayed(next);

      if (iteration.current < text.length) {
        iteration.current += step;
        // queue next frame after `speed` ms
        rafId = window.setTimeout(update, speed);
      }
    }

    update();
    return () => window.clearTimeout(rafId);
  }, [text, speed, step]);

  return (
    <div className={className}>
      {displayed}
    </div>
  );
}
