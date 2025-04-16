import React, { useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  loadFull
  } from 'tsparticles';
import { useParticles } from 'react-tsparticles';

const Background = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const { particles } = useParticles();

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const options = {
    background: {
      color: {
        value: '#03071e', // Deep space black
      },
    },
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    particles: {
      number: {
        value: isMobile ? 80 : 150, // Adjust particle count for mobile
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: ['#ffffff', '#f0f8ff', '#a9b18f'], // White, Alice Blue, Light Grayish Olive
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: { min: 0.3, max: 0.7 },
        random: true,
        anim: {
          enable: true,
          speed: 0.5,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: { min: 1, max: 3 },
        random: true,
      },
      move: {
        enable: true,
        speed: 0.3,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: 'window',
      events: {
        onhover: {
          enable: true,
          mode: 'trail',
        },
        onclick: {
          enable: false,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        trail: {
          delay: 0.1,
          quantity: 3,
          particles: {
            color: {
              value: ['#6dd5ed', '#2193b0', '#000000'], // Cyan, Dark Cyan, Black
            },
            opacity: {
              value: 0.8,
            },
            size: {
              value: 2,
            },
            move: {
              speed: 1,
              out_mode: 'destroy',
            },
          },
        },
      },
    },
    retina_detect: true,
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
      <React.StrictMode>
        <tsparticles id="tsparticles" init={particlesInit} options={options} />
      </React.StrictMode>
    </div>
  );
};

export default Background;