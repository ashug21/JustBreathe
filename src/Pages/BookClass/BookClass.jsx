import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./BookClass.css";
import axios from 'axios'
import Footer from "../../components/Footer/Footer";

const BookClass = () => {

    const [name , setName] = useState("");
    const [phone , setPhone] = useState("");
    const [date , setDate] = useState("");
    const [timings , setTimings] = useState("");
    const [center , setCenter] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {

          const response = await axios.post("https://justbreathe-4.onrender.com/book/class",{
                name,
                phone,
                date,
                timings,
                center
            });

            if (!response.data.success) {
                alert(response.data.message || "Something went wrong");
                return;
              }

            setName("");
            setPhone("");
            setDate("");
            setTimings("");
            setCenter("");
            
        } catch (error) {
            console.error(error);
        }
    }   

  return (
    <div className="book-page7">
      <Navbar />
      <br/>  <br/>  <br/>  <br/>
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
              <div className="visual-ornament7">
                <svg
                  width="90"
                  height="90"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M12 2C9 6 5 7 4 11c1 4 5 7 8 9 3-2 7-5 8-9-1-4-5-5-8-9z"
                    stroke="#235656"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
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
                  id="name7"
                  name="name"
                  type="text"
                  className="input7"
                  placeholder=" "
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <label htmlFor="name7" className="label7">
                  Full name
                </label>
              </div>

              <div className="field7">
                <input
                  id="phone7"
                  name="phone"
                  type="text"
                  className="input7"
                  placeholder=" "
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
                <label htmlFor="phone7" className="label7">
                  Phone number
                </label>
              </div>

              <div className="row7">
                <div className="field-row7">
                  <input
                    id="date7"
                    name="date"
                    type="text"
                    className="input7 input-date7"
                    placeholder=" "
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                  />
                  <label htmlFor="date7" className="label7 label-date7">
                    Preferred date
                  </label>
                </div>

                <div className="field-row7">
                  <select
                    id="timings7"
                    name="timings"
                    className="input7 select7"
                    onChange={(e) => setTimings(e.target.value)}
                    value={timings}
                  >
                    <option value="">Select timing</option>
                    <option>6:00 AM - 7:00 AM</option>
                    <option>7:00 AM - 8:00 AM</option>
                    <option>8:00 AM - 9:00 AM</option>
                    <option>6:00 PM - 7:00 PM</option>
                  </select>
                  <label htmlFor="timings7" className="label7">
                    Timing
                  </label>
                </div>
              </div>

              <div className="field7">
                <select id="center7" name="center" className="input7 select7"  onChange={(e) => setCenter(e.target.value)}
                  value={center}>
                  <option value="">Select center</option>
                  <option>Rani Bagh</option>
                  <option>Pitampura</option>
                </select>
                <label htmlFor="center7" className="label7">
                  Center
                </label>
              </div>

              <button type="submit" className="submit7">
                Request Booking
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

        <br/>  <br/>  <br/>  <br/> 
        <br/>  <br/>  <br/>  <br/>
        <br/>  <br/>  <br/>  <br/>
        <br/>  <br/>  <br/>  <br/>
            <Footer/>
    </div>
  );
};

export default BookClass;
