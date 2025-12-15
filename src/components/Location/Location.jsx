import React from "react";
import "./Location.css";
import { Link } from "react-router-dom";

const Location = () => {
  return (
    <section className="location-cta21">
      <div className="location-cta-container21">
        <div className="location-cta-content21">
          <h3 className="location-cta-title21">
            Visit Our Yoga Studios
          </h3>
          <p className="location-cta-text21">
            Find locations of our yoga centers — Rani Bagh & Pitampura
          </p>
        </div>

        <div className="location-cta-buttons21">
        <Link to="/enquiry#map-section" className="location-btn21 primary21">
  Get Map Directions
</Link>
         
        </div>
      </div>
    </section>
  );
};

export default Location;
