import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./BookClass.css";
import axios from "axios";
import Footer from "../../components/Footer/Footer";
import toast, { Toaster } from "react-hot-toast";

const BookClass = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [timings, setTimings] = useState("");
  const [center, setCenter] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    try {
      const response = await axios.post(
        "https://justbreathe-4.onrender.com/book/class",
        { name, phone, date, timings, center }
      );

      if (!response.data.success) {
        toast.error(response.data.message || "Something went wrong");
        return;
      }

      toast.success("Booking successful. We will contact you soon.");

      setName("");
      setPhone("");
      setDate("");
      setTimings("");
      setCenter("");
    } catch (error) {
      toast.error("Server error. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="book-page7">
      <Navbar />
      <br /><br /><br /><br />

      <main className="book-hero7">
        <section
          className="book-visual7"
          aria-hidden="true"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&w=1200&q=80')",
          }}
        >
          <div className="visual-overlay7">
            <div className="visual-content7">
              <h3 className="visual-title7">JustBreathe</h3>
              <p className="visual-sub7">
                Reserve your spot at <strong>Rani Bagh</strong> or{" "}
                <strong>Pitampura</strong> — space is limited.
              </p>
            </div>
          </div>
        </section>

        <section className="book-card7">
          <div className="card-inner7">
            <h2 className="card-heading7">Book a Transformative Session</h2>
            <p className="card-lead7">
              Personalised attention · Small groups · Certified instructors
            </p>

            <form className="form7" noValidate onSubmit={handleSubmit}>
              <div className="field7">
                <input
                  type="text"
                  className="input7"
                  placeholder=" "
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label className="label7">Full name</label>
              </div>

              <div className="field7">
                <input
                  type="text"
                  className="input7"
                  placeholder=" "
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <label className="label7">Phone number</label>
              </div>

              <div className="row7">
                <div className="field-row7">
                  <input
                    type="date"
                    className="input7 input-date7"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                  <label className="label7 label-date7">
                    Preferred date
                  </label>
                </div>

                <div className="field-row7">
                  <select
                    className="input7 select7"
                    value={timings}
                    onChange={(e) => setTimings(e.target.value)}
                  >
                    <option value="">Select timing</option>
                    <option>6:00 AM - 7:00 AM</option>
                    <option>7:00 AM - 8:00 AM</option>
                    <option>8:00 AM - 9:00 AM</option>
                    <option>6:00 PM - 7:00 PM</option>
                  </select>
                  <label className="label7">Timing</label>
                </div>
              </div>

              <div className="field7">
                <select
                  className="input7 select7"
                  value={center}
                  onChange={(e) => setCenter(e.target.value)}
                >
                  <option value="">Select center</option>
                  <option>Multani mohlla, Rani bagh</option>
                  <option>Rajdhani enclave, Pitampura</option>
                </select>
                <label className="label7">Center</label>
              </div>

              <button
                type="submit"
                className="submit7"
                disabled={loading}
                style={{ opacity: loading ? 0.7 : 1 }}
              >
                {loading ? "Booking..." : "Request Booking"}
              </button>

              <div className="card-foot7">
                <p className="foot-note7">
                  We will confirm your booking via phone within 24 hours.
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
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

export default BookClass;
