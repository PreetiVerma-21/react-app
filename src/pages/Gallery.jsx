import React from 'react'
import ImageRing from '../components/ImageRing';
import image1 from "../assets/treading1.png";
import image2 from "../assets/dashbord.jpeg";
import image3 from "../assets/team-2-200h.jpg";
import image4 from "../assets/team-3-200h.jpg";
import image5 from "../assets/team-4-200h.jpg";

const Gallery = () => {
     const images = [
    
    image3,
    image4,
    image4,
    image4,
    image5,
    image5,
    image5,
  ];
  return (
    <div className='public-container'>
         <ImageRing images={images} radius={300} width={200} height={200} />
    </div>
  )
}

export default Gallery