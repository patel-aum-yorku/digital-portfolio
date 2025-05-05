// src/components/NebulaBackground.jsx
import React from "react";
import { ReactNebula } from "@flodlc/nebula";
// Nebula configurations
const fullConfig = {
  starsCount: 1000,
  starsRotationSpeed: 3,
  nebulasIntensity: 7,
  cometFrequence: 100,
  sunScale: 5,
  planetsScale: 2.9,
  solarSystemOrbite: 90,
  solarSystemSpeedOrbit: 100,
  
};
export default function NebulaBackground() {
  return (
    <div className={`fixed inset-0 overflow-hidden -z-10`} 
    style={{ width: "100%", height: "100%" }}>
      <ReactNebula config={fullConfig} />
    </div>
  );
}

