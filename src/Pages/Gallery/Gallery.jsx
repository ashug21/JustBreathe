import React from "react";
import './Gallery.css'
import Navbar from "../../components/Navbar/Navbar";
import g1 from "../../assets/MainGallery/1.jpeg";
import g2 from "../../assets/MainGallery/2.jpeg";
import g3 from "../../assets/MainGallery/3.jpeg";
import g4 from "../../assets/MainGallery/4.jpeg";
import g5 from "../../assets/MainGallery/5.jpeg";
import g6 from "../../assets/MainGallery/6.jpeg";
import g7 from "../../assets/MainGallery/7.jpeg";
import g8 from "../../assets/MainGallery/8.jpeg";
import g9 from "../../assets/MainGallery/9.jpeg";
import g10 from "../../assets/MainGallery/10.jpeg";
import g11 from "../../assets/MainGallery/11.jpeg";
import v1 from "../../assets/videos/1.mp4";
import v2 from "../../assets/videos/2.mp4";
import v3 from "../../assets/videos/3.mp4";
import v4 from "../../assets/videos/4.mp4";
import Footer from "../../components/Footer/Footer";


export default function GalleryPage() {
  return (
    <div className="gallery-container-12">
        <Navbar/>

         <section className="galleryPage12">
      <h1 className="galleryPage-title12">Gallery</h1>
      <p className="galleryPage-sub12">Photos & Videos from JustBreathe Studios</p>

      <div className="galleryPage-grid12">

        <figure className="galleryPage-item12">
          <img src={g1} className="galleryPage-media12" alt="gallery" />
        </figure>

        <figure className="galleryPage-item12">
          <img src={g2} className="galleryPage-media12" alt="gallery" />
        </figure>

        <figure className="galleryPage-item12">
          <img src={g3} className="galleryPage-media12" alt="gallery" />
        </figure>

        <figure className="galleryPage-item12">
          <video className="galleryPage-media12" controls>
            <source src={v1} type="video/mp4" />
          </video>
        </figure>

        <figure className="galleryPage-item12">
          <video className="galleryPage-media12" controls>
            <source src={v2} type="video/mp4" />
          </video>
        </figure>

        <figure className="galleryPage-item12">
          <img src={g4} className="galleryPage-media12" alt="gallery" />
        </figure>

        <figure className="galleryPage-item12">
          <img src={g5} className="galleryPage-media12" alt="gallery" />
        </figure>

        <figure className="galleryPage-item12">
          <video className="galleryPage-media12" controls>
            <source src={v3} type="video/mp4" />
          </video>
        </figure>

        <figure className="galleryPage-item12">
          <img src={g6} className="galleryPage-media12" alt="gallery" />
        </figure>

        <figure className="galleryPage-item12">
          <video className="galleryPage-media12" controls>
            <source src={v4} type="video/mp4" />
          </video>
        </figure>


        <figure className="galleryPage-item12">
          <img src={g7} className="galleryPage-media12" alt="gallery" />
        </figure>

        <figure className="galleryPage-item12">
          <img src={g8} className="galleryPage-media12" alt="gallery" />
        </figure>

        <figure className="galleryPage-item12">
          <img src={g9} className="galleryPage-media12" alt="gallery" />
        </figure>

        <figure className="galleryPage-item12">
          <img src={g10} className="galleryPage-media12" alt="gallery" />
        </figure>


        <figure className="galleryPage-item12">
          <img src={g11} className="galleryPage-media12" alt="gallery" />
        </figure>

      </div>
    </section>
     <br/>  <br/>  <br/>  <br/>
     <br/>  <br/>  <br/>  <br/>
     <br/>  <br/>  <br/>  <br/>
     <br/>  <br/>  <br/>  <br/>
                <Footer/>
    </div>
   
  );
}
