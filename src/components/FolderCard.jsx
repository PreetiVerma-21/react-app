import React from "react";

const GlassFolder = ({ icon, className = "" }) => {
  return (
    <>
    <section className={`glass-folder ${className}`}>
      <div className="folder-container">
        <div className="folder-tab"></div>

        <div className="folder-layer layer1"></div>
        <div className="folder-layer layer2"></div>
        <div className="folder-layer layer3"></div>

        <div className="folder-front">
          <div className="icon">{icon}- Folder</div>
        </div>
      </div>
    </section>
    </>
  );
};

export default GlassFolder;
