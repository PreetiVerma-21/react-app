import React from "react";
import AnimatedBackground from "../pages/AnimatedBackground";

const GlassFolder = ({ icon, className = "" }) => {
  return (
    <>
    <AnimatedBackground/>
    <section className={`glass-folder ${className}`}>
      <div className="folder-container">
        {/* Top tab */}
        <div className="folder-tab"></div>

        {/* Folder layers */}
        <div className="folder-layer layer1"></div>
        <div className="folder-layer layer2"></div>
        <div className="folder-layer layer3"></div>

        {/* Front folder layer with icon */}
        <div className="folder-front">
          <div className="icon">{icon}- Folder</div>
        </div>
      </div>
    </section>
    </>
  );
};

export default GlassFolder;
