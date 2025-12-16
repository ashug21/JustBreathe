import React, { useState } from "react";
import "./Enquiry.css";
import Navbar from "../../components/Navbar/Navbar";
import instaIcon from "../../assets/instagram.png";
import WhatsappIcon from "../../assets/whatsapp.png";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import toast, { Toaster } from "react-hot-toast";

const Enquiry = () => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const sendEnquiry = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://justbreathe-4.onrender.com/api/enquiry",
        { fullname, email, phone, message }
      );

      if (!response.data.success) {
        toast.error(response.data.message || "Something went wrong");
        return;
      }

      toast.success("Enquiry sent successfully");
      setFullName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      toast.error("Server error. Please try again.");
      console.error(error);
    }
  };

  return (
    <>
      <div className="enquiry-wrapper8">
        <Navbar />

        <section className="enquiry-hero8">
          <div className="enquiry-left8">
            <h1 className="enquiry-heading8">We’d Love to Hear From You</h1>
            <p className="enquiry-text8">
              Share your details and our team will connect with guidance for your
              personalised yoga journey.
            </p>

            <form className="enquiry-form8" onSubmit={sendEnquiry}>
              <div className="enquiry-field8">
                <label className="enquiry-label8">Full Name</label>
                <input
                  className="enquiry-input8"
                  type="text"
                  placeholder="Your Name"
                  value={fullname}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              <div className="enquiry-field8">
                <label className="enquiry-label8">Email</label>
                <input
                  className="enquiry-input8"
                  type="text"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="enquiry-field8">
                <label className="enquiry-label8">Phone Number</label>
                <input
                  className="enquiry-input8"
                  type="text"
                  placeholder="Your Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="enquiry-field8">
                <label className="enquiry-label8">Message</label>
                <textarea
                  className="enquiry-textarea8"
                  placeholder="How can we help you?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <button className="enquiry-button8" type="submit">
                Send Enquiry
              </button>
            </form>
          </div>

          <div className="enquiry-right8">
            <div className="enquiry-image8"></div>
          </div>
        </section>



        <section id="map-section">
          <h1 className="before-map-8">Find Us At</h1>
          <section className="enquiry-map-wrap8">
            <div className="enquiry-map-block8">
              <h3 className="map-heading8">Rani Bagh Branch</h3>
              <iframe
                className="map-frame8"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.1247357612606!2d77.13112297572857!3d28.685915081653974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0305d637f2e9%3A0xf941e5345e6391df!2sJustbreathe%20yoga%20studio!5e0!3m2!1sen!2sin!4v1765476483641!5m2!1sen!2sin"
                loading="lazy"
              ></iframe>
            </div>

            <div className="enquiry-map-block8">
              <h3 className="map-heading8">Pitampura Branch</h3>
              <iframe
                className="map-frame8"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.203605039493!2d77.13740204614744!3d28.68355544367227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03c574b41d75%3A0xd20d7cc5403d8d4b!2sJUSTBREATHE%20YOGA%20STUDIO!5e0!3m2!1sen!2sin!4v1765476675960!5m2!1sen!2sin"
                loading="lazy"
              ></iframe>
            </div>
          </section>
        </section>


        <section className="enquiry-social-panel8">
          <h3 className="social-heading8">Connect With Us</h3>

          <div className="social-card-row8">
            <Link
              to="https://www.instagram.com/just_breathe9107_"
              className="social-card8"
              target="_blank"
            >
              <img src={instaIcon} className="social-icon8" />
              <p>Instagram</p>
            </Link>

            <Link
              to="https://wa.me/919871306097"
              className="social-card8"
              target="_blank"
            >
              <img src={WhatsappIcon} className="social-icon8" />
              <p>Whatsapp</p>
            </Link>
          </div>

          <section className="enquiry-contact-number8">
            <h3 className="contact-heading8">Or Call Us at</h3>
            <p className="contact-number8">
              +91 9871306097 / +91 9871220895
            </p>
          </section>
        </section>
    <br/>  <br/>  <br/>  <br/>  <br/>

    <br/>  <br/>  
        <Footer />
      </div>


      <Toaster
        position="top-right"
        containerStyle={{ position: "fixed", zIndex: 9999 }}
      />
    </>
  );
};

export default Enquiry;
