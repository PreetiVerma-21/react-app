import React from 'react'
import ImageRing from '../components/ImageRing';
import image1 from "../assets/treading1.png";
import image2 from "../assets/dashbord.jpeg";
import image3 from "../assets/team-2-200h.jpg";
import image4 from "../assets/team-3-200h.jpg";
import image5 from "../assets/team-4-200h.jpg";
import AnimatedBackground from './AnimatedBackground';

const Gallery = () => {
     const images = [
    "https://picsum.photos/id/1015/400/600",
    "https://picsum.photos/id/1016/400/600",
    "https://picsum.photos/id/1018/400/600",
    "https://picsum.photos/id/1020/400/600",
    "https://picsum.photos/id/1021/400/600",
    // "https://picsum.photos/id/1024/400/600",
  ];
  return (
    <div className='public-container'>
        <AnimatedBackground />
         <ImageRing  images={images}
       width={300}
  perspective={2000}
  imageDistance={500}
  initialRotation={180}
  animationDuration={1.5}
  staggerDelay={0.1}
  hoverOpacity={0.5} 
   draggable={true}
  ease={"easeOut"}
  mobileBreakpoint={768}
  mobileScaleFactor={0.8}
  inertiaPower={0.8} // Default power for inertia
  inertiaTimeConstant={300} // Default time constant for inertia
  inertiaVelocityMultiplier={20}
  // backgroundColor={"#111"}
  />
    </div>
  )
}

export default Gallery