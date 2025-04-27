// src/components/PlanetaryMask.jsx
import React from 'react';
export default React.forwardRef(function PlanetaryMask(
  { imageSrc, size = 200, ringColor = "rgba(255,255,255,0.5)" },
  ref
) {
  const containerStyle = { width: size, height: size };
  return (
    <div ref={ref} className="relative mx-auto" style={containerStyle}>
      <img
        src={imageSrc}
        alt="Aum Patel"
        className="w-full h-full rounded-full object-cover shadow-xl"
      />
      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: `4px solid ${ringColor}`,
          animation: "spin 6s linear infinite",
        }}
      />
      <style>
        {`@keyframes spin {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }`}
      </style>
    </div>
  );
});