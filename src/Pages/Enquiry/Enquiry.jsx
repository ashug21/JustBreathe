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
  const [loading, setLoading] = useState(false);

  const sendEnquiry = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    try {
      const response = await axios.post(
        "https://justbreathe-4.onrender.com/api/enquiry",
        { fullname, email, phone, message }
      );

      if (!response.data.success) {
        toast.error(response.data.message || "Something went wrong");
        return;
      }

      toast.success("Enquiry sent. We'll contact you soon.");

      setFullName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      toast.error("Server error. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
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

            <button
              className="enquiry-button8"
              type="submit"
              disabled={loading}
              style={{ opacity: loading ? 0.7 : 1 }}
            >
              {loading ? "Sending..." : "Send Enquiry"}
            </button>
          </form>
        </div>

        <div className="enquiry-right8">
          <div className="enquiry-image8"></div>
        </div>
      </section>

      {/* MAPS & SOCIAL SECTIONS UNCHANGED */}

      <Footer />

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
    </div>
  );
};

export default Enquiry;
