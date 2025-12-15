import React from "react";
import "./Class.css";
import aeriel from '../../assets/Banner.png';
import zumba from '../../assets/zumba.png';
import power2 from '../../assets/power2.png'
import power from '../../assets/power.png'
import cardio from '../../assets/cardio.png'

export default function Class() {
  return (
    <section className="classes-section4" aria-labelledby="classes-title">
      <div className="classes-container4">
        <h2 id="classes-title" className="classes-title4">What we Offer !</h2>

        <div className="classes-grid4">

          <div className="class-card4">
            <div className="card-inner4">
              <img src={power} alt="Power Yoga" className="class-image4" />
              <h3 className="class-name4">Power Yoga</h3>
              <p className="class-text4">
                Strength-building flows designed to energise your body and improve endurance.
              </p>
            </div>
          </div>

          <div className="class-card4">
            <div className="card-inner4">
              <img src={aeriel} alt="Aerial Yoga" className="class-image4" />
              <h3 className="class-name4">Aerial Yoga</h3>
              <p className="class-text4">
                Anti-gravity movements that improve flexibility and offer a fun, uplifting experience.
              </p>
            </div>
          </div>

          <div className="class-card4">
            <div className="card-inner4">
              <img src={cardio} alt="Cardio Yoga" className="class-image4" />
              <h3 className="class-name4">Cardio Yoga</h3>
              <p className="class-text4">
                A dynamic blend of yoga and cardio for fat-burning and improved stamina.
              </p>
            </div>
          </div>

          <div className="class-card4">
            <div className="card-inner4">
              <img src={zumba} alt="Zumba" className="class-image4" />
              <h3 className="class-name4">Zumba</h3>
              <p className="class-text4">
                A rhythm-based full-body workout that boosts mood and improves cardiovascular health.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
