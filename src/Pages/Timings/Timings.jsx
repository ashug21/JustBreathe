import React from "react";
import "./Timings.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";


const Timings = () => {
  return (
    <div>
      <Navbar/>
 <section className="timings-section20">
      <div className="timings-container20">
        <div className="timings-header20">

          <h1 className="timings-sub20">
          Rani Bagh Branch
          </h1>
        </div>

        <div className="timings-grid20">
          <div className="timing-card20">
            <h4 className="timing-day20">Monday – Friday</h4>
            <ul className="timing-list20">
              <li>
                <span>Schedule</span>
                <span>7:30 AM – 8:00 PM</span>
              </li>
            </ul>
          </div>

          <div className="timing-card20 ">
            <h4 className="timing-day20">Saturday - Sunday</h4>
            <ul className="timing-list20">
              <li>

                <span>Closed</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>

    <section className="timings-section20">
      <div className="timings-container20">
        <div className="timings-header20">

          <h1 className="timings-sub20">
           PitamPura Branch
          </h1>
        </div>

        <div className="timings-grid20">
          <div className="timing-card20">
            <h4 className="timing-day20">Monday – Friday</h4>
            <ul className="timing-list20">
              <li>
                <span>Schedule</span>
                <span>6:30 am - 9 pm</span>
              </li>
             
            </ul>
          </div>

          <div className="timing-card20">
            <h4 className="timing-day20">Saturday</h4>
            <ul className="timing-list20">
              <li>
                <span>Schedule</span>
                <span>9:00 AM – 11:00 AM</span>
              </li>
            
            </ul>
          </div>

          <div className="timing-card20">
            <h4 className="timing-day20">Sunday</h4>
            <ul className="timing-list20">
              <li>
               
                <span> off</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <section className="timings-cta20">
  <div className="timings-cta-container20">
    <h3 className="timings-cta-title20">
      Want to take the next step?
    </h3>

    <div className="timings-cta-buttons20">
      <Link to="/book-class" className="timings-btn20 primary20">
        Book a Class
      </Link>
      
      <Link to="/enquiry" className="timings-btn20">
        Enquiry
      </Link>
    </div>
  </div>
</section>



    <div className="gap-section-20">

    </div>
  <Footer />
    </div>
   
  );
};

export default Timings;
