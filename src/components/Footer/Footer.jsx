import Logo from "../../assets/Logo.png";
import React,{useState , useEffect} from "react";
import "./Footer.css";
import whatsapp_icon from "../../assets/whatsapp.png";
import instagram_icon from "../../assets/instagram.png";
import { Link } from "react-router-dom";
import axios from "axios";
import Logo2 from '../../assets/nobglogo.png'
import Terms from "../Terms/Terms";
import Privacy from "../Privacy/Privacy";

export default function Footer() {

  const [email , setEmail] = useState("");

  const handleSubscribe = async(e) => {
    e.preventDefault();

    try {

      const response = await axios.post("https://justbreathe-4.onrender.com/news/subscribe",{
        email,
    });

    if (!response.data.success) {
        alert(response.data.message || "Something went wrong");
        return;
      }
      setEmail("");
    } catch (error) {
      console.error(error);
    }

  }

  return (
    <footer className="footer13" role="contentinfo" aria-label="Site footer">
      <div className="footer-container13">
        <div className="footer-brand13">
          <img
            src={Logo2}
            alt="Studio logo"
            className="footer-logo13"
            width="140"
            height="40"
          />
          <p className="footer-desc13">
            Mindful movement, stronger body — classes, coaching and wellness
            programs crafted for every level.
          </p>
          <div className="footer-socials13" aria-label="Social media links">
            <Link
              to="https://www.instagram.com/just_breathe9107_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="social-link13"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img className="instagram_icon-13" src={instagram_icon} />
            </Link>
            <Link
              to="https://wa.me/919871306097"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link13"
              aria-label="Facebook"
            >
              <img className="whatsapp_icon-13" src={whatsapp_icon} />
            </Link>
          </div>
        </div>

        <div className="footer-links-grid13">
          <nav className="footer-col13" aria-label="Quick links">
            <h4 className="footer-title13">Quick Links</h4>
            <ul className="footer-list13">
              <li>
                <Link to="/timings">Timings</Link>
              </li>
              <li>
                <Link to="/book-class">Book A Class</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/enquiry">Enquiry</Link>
              </li>
              {/* <div className="footer-hours13">
              <strong>Hours</strong>
              <div>Mon–Fri: 7:30am – 8:00pm</div>
              <div>Sat–Sun: Closed</div>
            </div> */}
            </ul>
          </nav>

          {/* <div className="footer-col13" aria-label="Classes & services">
            <h4 className="footer-title13">Classes & Services</h4>
            <ul className="footer-list13">
              <li>
                <a href="#">Yoga & Flow</a>
              </li>
              <li>
                <a href="#">Strength & Conditioning</a>
              </li>
              <li>
                <a href="#">Meditation</a>
              </li>
              <li>
                <a href="#">Personal Training</a>
              </li>
            </ul>
          </div> */}
        


     
          <div className="footer-col13" aria-label="Contact">
            <h4 className="footer-title13">Contact & Studio</h4>
            <address className="footer-address13">
              <div> <strong>  Rani Bagh Branch : </strong> 1926 GF, Multani Mohalla, Rani Bagh, Shakurpur, Delhi, 110034</div>
              <div>
               <strong>Contact :</strong> <Link to="tel:+919871306097">+91 9871306097</Link>
              
              </div>
              <br/>
              <div> <strong>  PitamPura Branch : </strong> 9, Rajdhani Enclave, Shree Nagar, Rajdhani Enclave, Shakurpur, Delhi, 110034</div>
              <div>
             <strong>Contact :</strong> <Link to="tel:+919871220895">+91 9871220895</Link>
              </div>
            </address>
            {/* <div className="footer-hours13">
              <strong>Hours</strong>
              <div>Mon–Fri: 6:00–21:00</div>
              <div>Sat–Sun: 7:00–16:00</div>
            </div> */}
          </div>

          <div className="footer-spacer13" aria-hidden="true" role="presentation" />

          <div className="footer-col13" aria-label="Newsletter signup">
            <h4 className="footer-title13">Join our Newsletter</h4>
            <p className="footer-note13">
              Weekly tips, new classes and membership offers.
            </p>
            <form
              className="newsletter-form13"
              action="#"
              onSubmit={handleSubscribe}
            >
              <label htmlFor="email13" className="visually-hidden13">
                Email
              </label>
              <input
                id="email13"
                type="email"
                placeholder="you@domain.com"
                className="newsletter-input13"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <button className="newsletter-btn13" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>



      <div className="footer-bottom13">
        <div className="footer-legal13">
          <small>
          © {new Date().getFullYear()} JustBreathe Studios. All rights reserved.

          </small>
          <Link to="/privacy" className="legal-link13">
            Privacy
          </Link>
          <Link to="/termsandconditions" className="legal-link13">
            Terms
          </Link>
        </div>
       
      </div>
    </footer>
  );
}
