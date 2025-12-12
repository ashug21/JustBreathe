import React from 'react';
import './Testimonals.css'

const Testimonials = () => {
  const testimonials = [
    {
      message: "JustBreathe has brought so much calmness and balance into my life. The sessions feel healing — both physically and mentally.",
      author: "Ananya Kapoor",

    },
    {
      message: "The instructors are extremely supportive and knowledgeable. My flexibility and posture have improved more in 3 months than in years.",
      author: "Ritika Sharma",

    },
    {
      message: "The energy in the studio is unmatched. Every class, whether Power Yoga or Aerial Yoga, leaves me feeling grounded and refreshed.",
      author: "Kavya Mehta",

    }
  ];

  return (
    <section className="testimonials10">
      <h2>What Our Members Say</h2>
      <div className="testimonial-list10">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial10">
            <p className="message10">"{t.message}"</p>
            <h4 className="author10">- {t.author}</h4>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
