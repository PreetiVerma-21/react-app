import React from 'react'
import ImageRing from '../components/ImageRing';
import image1 from "../assets/herosection.png";
import image2 from "../assets/dashbord.jpeg";

const Gallery = () => {
     const images = [
    image1,
    image2
  ];
  return (
    <div>
         <ImageRing images={images} radius={100} width={100} height={100} />
    </div>
  )
}

export default Gallery