import React from 'react';
import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/Screenshot (8).png';
import image3 from '../assets/images/Screenshot (9).png';

function Gallery() {
  return (
    <section className="gallery">
      <div className="gallery-item">
        <img src={image1} alt="2D Planning" />
      </div>
      <div className="gallery-item">
        <img src={image2} alt="Rendering 2" />
      </div>
      <div className="gallery-item">
        <img src={image3} alt="Rendering 3" />
      </div>
    </section>
  );
}

export default Gallery;
