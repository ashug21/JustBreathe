import React from "react";
import "./WhyUs.css";

export default function WhyUs() {
  return (
    <section className="whyus-section3">
      <div className="whyus-container3">
        <h2 className="whyus-title3">WHY JUST BREATHE?</h2>

        <div className="whyus-cards3">
          <div className="whyus-card3">
            <h3 className="whyus-card-title3">Personal Guidance</h3>
            <p className="whyus-card-text3">
              Our instructors focus on you, helping you practice at your own comfort and level.
            </p>
          </div>

          <div className="whyus-card3">
            <h3 className="whyus-card-title3">Mind–Body Balance</h3>
            <p className="whyus-card-text3">
              We combine yoga postures, breathing and relaxation to support overall well-being.
            </p>
          </div>

          <div className="whyus-card3">
            <h3 className="whyus-card-title3">Calm & Supportive Space</h3>
            <p className="whyus-card-text3">
              A peaceful studio where you can feel safe, relaxed and confident in your practice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
