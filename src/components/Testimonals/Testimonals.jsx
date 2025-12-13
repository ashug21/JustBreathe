import React from 'react';
import './Testimonals.css'

const Testimonials = () => {
  const testimonials = [
    {
      message: "JustBreathe has brought calmness and balance into my daily routine. Each session feels deeply restorative.",
      author: "Ananya Kapoor",
      img: "/users/user1.jpg"
    },
    {
      message: "The instructors pay close attention to posture and breathing. I’ve seen real improvement in my flexibility.",
      author: "Ritika Sharma",
      img: "/users/user2.jpg"
    },
    {
      message: "Every class leaves me feeling lighter and more focused. The studio energy is peaceful yet motivating.",
      author: "Kavya Mehta",
      img: "/users/user3.jpg"
    },
    {
      message: "I joined for fitness but stayed for the mental clarity. Yoga here has become my daily anchor.",
      author: "Neha Verma",
      img: "/users/user4.jpg"
    },
    {
      message: "The guided breathing and slow flow sessions helped me manage stress far better than expected.",
      author: "Priya Malhotra",
      img: "/users/user5.jpg"
    },
    {
      message: "Clean space, expert guidance, and a welcoming atmosphere. JustBreathe truly lives up to its name.",
      author: "Shreya Nair",
      img: "/users/user6.jpg"
    }
  ];

  return (
    <section className="testimonials10">
      <h2>What Our Members Say</h2>

      <div className="testimonial-list10">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial10">
            <div className="testimonial-header10">
              <img src={t.img} alt={t.author} className="testimonial-img10" />
              <h4 className="author10">{t.author}</h4>
            </div>

            <p className="message10">"{t.message}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
