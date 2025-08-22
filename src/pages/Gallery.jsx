import React from 'react'
import ImageRing from '../components/ImageRing';
import image1 from "../assets/treading1.png";
import image2 from "../assets/dashbord.jpeg";
import image3 from "../assets/team-2-200h.jpg";
import image4 from "../assets/team-3-200h.jpg";
import image5 from "../assets/team-4-200h.jpg";
import AnimatedBackground from './AnimatedBackground';
import HoverGallery from '../components/HoverGallery';
import Carousel3D from '../components/Carousel';

const Gallery = () => {
     const images = [
    "https://picsum.photos/id/1015/400/600",
    "https://picsum.photos/id/1016/400/600",
    "https://picsum.photos/id/1018/400/600",
    "https://picsum.photos/id/1020/400/600",
    "https://picsum.photos/id/1021/400/600",
    // "https://picsum.photos/id/1024/400/600",
  ];

  const carouselItems = [
  {
    id: 1,
    title: "Smart Wearable Fabric",
    brand: "TechTex",
    description: "Revolutionary fabric with embedded textile sensors for healthcare monitoring.",
    tags: ["Wearables", "Healthcare", "Sensors"],
    imageUrl: "https://picsum.photos/id/1015/400/600", // replace with your image
    link: "/case-study/1"
  },
  {
    id: 2,
    title: "Automotive Interior",
    brand: "AutoTex",
    description: "Intelligent fabric that adapts to comfort and temperature in vehicles.",
    tags: ["Automotive", "Comfort"],
    imageUrl: "https://picsum.photos/id/1015/400/600",
    link: "/case-study/2"
  },
  {
    id: 3,
    title: "Smart Home Integration",
    brand: "HomeTex",
    description: "Textile-based sensors powering next-gen smart homes.",
    tags: ["Smart Home", "IoT"],
    imageUrl: "https://picsum.photos/id/1015/400/600",
    link: "/case-study/3"
  },
  {
    id: 4,
    title: "Smart Home Integration",
    brand: "HomeTex",
    description: "Textile-based sensors powering next-gen smart homes.",
    tags: ["Smart Home", "IoT"],
    imageUrl: "https://picsum.photos/id/1015/400/600",
    link: "/case-study/4"
  },
  {
    id: 5,
    title: "Smart Home Integration",
    brand: "HomeTex",
    description: "Textile-based sensors powering next-gen smart homes.",
    tags: ["Smart Home", "IoT"],
    imageUrl: "https://picsum.photos/id/1015/400/600",
    link: "/case-study/5"
  },
];

  return (
    // <div className='public-container'>
     <div className='carousel3d-cont'> 
        <AnimatedBackground />
        {/* 3d image ring */}
         {/* <ImageRing  images={images}
       width={300}
  perspective={2000}
  imageDistance={350}
  initialRotation={180}
  animationDuration={1.5}
  staggerDelay={0.1}
  hoverOpacity={0.5} 
   draggable={true}
  ease={"easeOut"}
  mobileBreakpoint={768}
  mobileScaleFactor={0.8}
  inertiaPower={0.8} 
  inertiaTimeConstant={300} 
  inertiaVelocityMultiplier={20}
  /> */}

    {/* 3d hover image gallery */}
   {/* <HoverGallery
        images={[
          "https://images.pexels.com/photos/26797335/pexels-photo-26797335/free-photo-of-scenic-view-of-mountains.jpeg",
          "https://images.pexels.com/photos/12194487/pexels-photo-12194487.jpeg",
          "https://images.pexels.com/photos/32423809/pexels-photo-32423809.jpeg",
          "https://images.pexels.com/photos/32296519/pexels-photo-32296519.jpeg",
        ]}
        autoPlay={false}
        autoPlayDelay={4000}
        enableKeyboardNavigation={true}
        onImageClick={(index, img) => console.log("Clicked:", index, img)}
      /> */}

      {/* 3d hover image ring */}
       <div>
      <Carousel3D items={carouselItems} cardHeight={400} />
    </div>

    </div>
  )
}

export default Gallery