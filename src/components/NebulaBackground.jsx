// src/components/NebulaBackground.jsx
import React from "react";
import { ReactNebula } from "@flodlc/nebula";

export default function NebulaBackground({ config, className }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <ReactNebula config={config} />
    </div>
  );
}

