import React from "react";
import CardSlider from "../components/CardSlider";
import AnimatedBackground from "./AnimatedBackground";

function SliderSection() {
  return (
    <>
    <AnimatedBackground/>
    <div className="card-slider-container">
      <CardSlider />
    </div>
    </>
  );
}

export default SliderSection;
