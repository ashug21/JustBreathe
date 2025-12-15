import React, { useState } from "react";
import "./Footer.css";
import whatsapp_icon from "../../assets/whatsapp.png";
import instagram_icon from "../../assets/instagram.png";
import { Link } from "react-router-dom";
import axios from "axios";
import Logo2 from "../../assets/nobglogo.png";
import toast, { Toaster } from "react-hot-toast";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    try {
      const response = await axios.post(
        "https://justbreathe-4.onrender.com/news/subscribe",
        { email }
      );

      if (!response.data.success) {
        toast.error(response.data.message || "Something went wrong");
        return;
      }

      toast.success("Subscribed successfully");
      setEmail("");
    } catch (error) {
      toast.error("Server error. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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

            <div className="footer-socials13">
              <Link
                to="https://www.instagram.com/just_breathe9107_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="social-link13"
              >
                <img src={instagram_icon} className="instagram_icon-13" />
              </Link>

              <Link
                to="https://wa.me/919871306097"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link13"
              >
                <img src={whatsapp_icon} className="whatsapp_icon-13" />
              </Link>
            </div>
          </div>

          <div className="footer-links-grid13">
            <nav className="footer-col13">
              <h4 className="footer-title13">Quick Links</h4>
              <ul className="footer-list13">
                <li><Link to="/timings">Timings</Link></li>
                <li><Link to="/book-class">Book A Class</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/enquiry">Enquiry</Link></li>
              </ul>
            </nav>

            <div className="footer-col13">
              <h4 className="footer-title13">Contact & Studio</h4>
              <address className="footer-address13">
                <div>
                  <strong>Rani Bagh Branch:</strong> 1926 GF, Multani Mohalla,
                  Rani Bagh, Delhi, 110034
                </div>
                <div>
                  <strong>Contact:</strong>{" "}
                  <Link to="tel:+919871306097">+91 9871306097</Link>
                </div>
                <br />
                <div>
                  <strong>Pitampura Branch:</strong> 9, Rajdhani Enclave,
                  Shakurpur, Delhi, 110034
                </div>
                <div>
                  <strong>Contact:</strong>{" "}
                  <Link to="tel:+919871220895">+91 9871220895</Link>
                </div>
              </address>
            </div>

            <div className="footer-col13">
              <h4 className="footer-title13">Join our Newsletter</h4>
              <p className="footer-note13">
                Weekly tips, new classes and membership offers.
              </p>

              <form className="newsletter-form13" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="you@domain.com"
                  className="newsletter-input13"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className="newsletter-btn13"
                  type="submit"
                  disabled={loading}
                  style={{ opacity: loading ? 0.7 : 1 }}
                >
                  {loading ? "Subscribing..." : "Subscribe"}
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
            <Link to="/privacy" className="legal-link13">Privacy</Link>
            <Link to="/termsandconditions" className="legal-link13">Terms</Link>
          </div>
        </div>
      </footer>

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3800,
          style: {
            background: "#235656",
            color: "#FFF5E9",
            borderRadius: "10px",
            fontSize: "14px",
          },
        }}
      />
    </>
  );
}
