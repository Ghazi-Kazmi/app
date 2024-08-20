import React from 'react';
import heroImage from '../assets/images/test.jpg';

function Hero() {
  const scrollToForm = () => {
    document.getElementById('rapid-quote').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <img src={heroImage} alt="Miami 3D Architectural Renderings" />
      <button className="scroll-button" onClick={scrollToForm}>Get a Quote</button>
    </section>
  );
}

export default Hero;
