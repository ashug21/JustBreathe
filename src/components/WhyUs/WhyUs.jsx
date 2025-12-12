import React from "react";
import "./WhyUs.css";

export default function WhyUs() {
  return (
    <section className="whyus-section3">
      <div className="whyus-container3">
        <h2 className="whyus-title3">Why Just Breathe</h2>

        <div className="whyus-cards3">
          <div className="whyus-card3">
            <h3 className="whyus-card-title3">Personalised Attention</h3>
            <p className="whyus-card-text3">
              Every session is tailored to your pace, energy and goals.
            </p>
          </div>

          <div className="whyus-card3">
            <h3 className="whyus-card-title3">Holistic Approach</h3>
            <p className="whyus-card-text3">
              We blend movement, breathwork and mindfulness for complete well-being.
            </p>
          </div>

          <div className="whyus-card3">
            <h3 className="whyus-card-title3">Safe, Welcoming Space</h3>
            <p className="whyus-card-text3">
              A supportive environment where everyone feels comfortable to grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
