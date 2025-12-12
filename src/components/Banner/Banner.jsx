import React from "react";
import "./Banner.css";
import img_1 from '../../assets/banner/1.png'
import img_2 from '../../assets/banner/2.png'
import img_3 from '../../assets/banner/3.png'
import img_4 from '../../assets/banner/4.png'
import img_5 from '../../assets/banner/5.jpg'
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section className="hero10">

      <div className="hero-slides10">
        <img src={img_1} alt="" className="hero-img10" />
        <img src={img_2} alt="" className="hero-img10" />
        <img src={img_3} alt="" className="hero-img10" />
        <img src={img_4} alt="" className="hero-img10" />
        <img src={img_5} alt="" className="hero-img10" />
      </div>

      <div className="hero-overlay10">
        <h1 className="hero-title10">Just Breathe Yoga Studio</h1>
        <p className="hero-sub10">A calm space to pause, realign and reconnect.</p>

        <div className="hero-btns10">
          <Link to="/book-class" className="hero-btn-primary10">Book A Class</Link>
          <Link to="/gallery" className="hero-btn-secondary10">Gallery</Link>
        </div>
      </div>

    </section>
  );
}
