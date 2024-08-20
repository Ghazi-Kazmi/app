import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="dropdown">
            <Link to="/services" className="dropbtn">
              Our Services
            </Link>
            <ul className="dropdown-content">
              <li>
                <Link to="/services/2d-planning">2D Planning</Link>
              </li>
              <li>
                <Link to="/services/3d-planning">3D Planning</Link>
              </li>
              <li>
                <Link to="/services/cost-estimation">Cost Estimation</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
