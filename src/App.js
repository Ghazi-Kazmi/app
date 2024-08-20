// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import OurServices from "./components/OurServices";
import Planning2D from "./components/Planning2D";
import Planning3D from "./components/Planning3D";
import CostEstimation from "./components/CostEstimation";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/our-services">Our Services</Link>
              <ul>
                <li>
                  <Link to="/our-services/planning-2d">2D Planning</Link>
                </li>
                <li>
                  <Link to="/our-services/planning-3d">3D Planning</Link>
                </li>
                <li>
                  <Link to="/our-services/cost-estimation">
                    Cost Estimation
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/our-services" element={<OurServices />} />
          <Route path="/our-services/planning-2d" element={<Planning2D />} />
          <Route path="/our-services/planning-3d" element={<Planning3D />} />
          <Route
            path="/our-services/cost-estimation"
            element={<CostEstimation />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
