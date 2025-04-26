// Importing necessary libraries and components
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import HomeSection from "./sections/HomeSection.jsx";
import NebulaBackground from "./components/NebulaBackground";
import AboutSection from "./sections/AboutSection.jsx";
//

// Nebula configurations
const fullConfig = {
  starsCount: 400,
  starsRotationSpeed: 3,
  nebulasIntensity: 10,
  cometFrequence: 100,
  sunScale: 2,
  planetsScale: 1,
  solarSystemSpeedOrbit: 40
};

const minimalConfig = {
  ...fullConfig,
  sunScale: 0,        // hides the sun
  planetsScale: 0,    // hides all planets
};

function App() {
  // Observe Home section visibility
  const { ref: homeRef, inView: isHomeVisible } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

    // State for current nebula config
  const [nebulaConfig, setNebulaConfig] = useState(fullConfig);

  // Update config when Home appears/disappears
  useEffect(() => {
    setNebulaConfig(isHomeVisible ? fullConfig : minimalConfig);
  }, [isHomeVisible]);
 

  return (
    <div className="relative">
      {/* Persistent Nebula */}
      <NebulaBackground config={nebulaConfig} />

      {/* Content Sections */}
      <div ref={homeRef}>
        <HomeSection />
      </div>
      <AboutSection />
      {/* ...other sections */}
    </div>
  );

}

export default App;
