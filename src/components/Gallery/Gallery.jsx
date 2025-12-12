import React from "react";
import "./Gallery.css";
import img_1 from '../../assets/GalleryComponent/1.jpeg'
import img_2 from '../../assets/GalleryComponent/2.jpeg'
import img_3 from '../../assets/GalleryComponent/3.jpeg'
import img_4 from '../../assets/GalleryComponent/4.jpeg'
import img_5 from '../../assets/GalleryComponent/5.jpeg'
import img_6 from '../../assets/GalleryComponent/6.jpeg'
import img_7 from '../../assets/GalleryComponent/7.jpeg'
import img_8 from '../../assets/GalleryComponent/8.jpeg'
import img_9 from '../../assets/GalleryComponent/9.jpeg'
import img_10 from '../../assets/GalleryComponent/10.jpeg'
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <section className="gallery10">
      <div className="gallery-wrapper10">
        <div className="gallery-header10">
          <h2 className="gallery-title10">JustBreathe Studios Images</h2>
          <p className="gallery-sub10">A calm collection of moments — add your images below.</p>
        </div>

        <div className="gallery-masonry10">
          <figure className="gallery-item10"><img src={img_1} alt="gallery image 1" className="gallery-img10" /></figure>
          <figure className="gallery-item10"><img src={img_2} alt="gallery image 2" className="gallery-img10" /></figure>
          <figure className="gallery-item10"><img src={img_3} alt="gallery image 3" className="gallery-img10" /></figure>
          <figure className="gallery-item10"><img src={img_4} alt="gallery image 4" className="gallery-img10" /></figure>
          <figure className="gallery-item10"><img src={img_5} alt="gallery image 5" className="gallery-img10" /></figure>
          <figure className="gallery-item10"><img src={img_6} alt="gallery image 6" className="gallery-img10" /></figure>
          <figure className="gallery-item10"><img src={img_10} alt="gallery image 7" className="gallery-img10" /></figure>
          <figure className="gallery-item10"><img src={img_8} alt="gallery image 8" className="gallery-img10" /></figure>
          <figure className="gallery-item10"><img src={img_9} alt="gallery image 9" className="gallery-img10" /></figure>
        </div>

        <div className="gallery-cta-row10">
          <Link to="/gallery"><button className="gallery-cta10">View All</button></Link> 
        </div>
      </div>
    </section>
  );
};

export default Gallery;
