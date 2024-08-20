import React from 'react';
import { Link } from 'react-router-dom';
import './OurServices.css'; // Import the CSS file

const OurServices = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="dropdown">
        <button className="dropbtn">Services</button>
        <div className="dropdown-content">
          <Link to="/services/2d-planning">2D Planning</Link>
          <Link to="/services/3d-planning">3D Planning</Link>
          <Link to="/services/cost-estimation">Cost Estimation</Link>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
