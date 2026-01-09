import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { QuoteUp } from "iconsax-reactjs";

const testimonialsData = [
  {
    id: 1,
    name: "Fabiana Mingrone",
    role: "Kijana Inc",
    quote:
      "We found ADIBA to be an exceptionally cooperative partner—always focused on finding solutions, achieving success together, and delivering great results for the customer.",
    shortQuote: "Fast, secure and simple. This is a game-changer!",
    image: "/testimonial/fabiana.png",
  },
  {
    id: 2,
    name: "David Okeke",
    role: "FinTech NG",
    quote:
      "The integration process was seamless. Adiba provided the infrastructure we needed to scale our lending platform in record time.",
    shortQuote: "Seamless integration and incredible support.",
    image: "/testimonial/david.jpg",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const active = testimonialsData[current];

  const nextSlide = () =>
    setCurrent((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));

  return (
    <section className="testimonials">
      <div className="container">
        {/* ================= Header ================= */}
        <div className="header">
          <p className="subtitle">Client Testimonials</p>
          <h2>Customer Success</h2>

          <div className="content">
            <div className="quote-section">
              <p>“{active.quote}”</p>

              <div className="author">
                <img src={active.image} alt={active.name} />
                <div>
                  <h4>{active.name}</h4>
                  <p>{active.role}</p>
                </div>
              </div>
            </div>

            <div className="nav-buttons">
              <button onClick={prevSlide} aria-label="Previous testimonial">
                <ArrowLeft size={20} />
              </button>

              <button
                className="next"
                onClick={nextSlide}
                aria-label="Next testimonial"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* ================= Map Section ================= */}
        <div className="map-section">
          {/* Map background */}
          <div className="map-bg">
            <img src="/testimonial/map.png" alt="World map" />
          </div>

          {/* Decorative avatars */}
          <div className="avatar a1">
            <img src="/testimonial/person 2.png" alt="" />
          </div>

          <div className="avatar a2">
            <img src="/testimonial/person3.png" alt="" />
          </div>

          <div className="avatar a3">
            <img src="/testimonial/person4.png" alt="" />
          </div>

          <div className="avatar a4">
            <img src="/testimonial/person5.png" alt="" />
          </div>

          <div className="avatar a5">
            <img src="/testimonial/person6.png" alt="" />
          </div>

          <div className="avatar a6">
            <img src="/testimonial/david.png" alt="" />
          </div>

          {/* Center testimonial card */}
          <div className="center-card">
            <div className="avatar-top">
              <img src={active.image} alt={active.name} />
            </div>

            <QuoteUp size={20} color="#EDEEF6" className="center-card__quote"/>

            <h4>{active.name}</h4>
            <p>“{active.shortQuote}”</p>
          </div>
        </div>

        {/* ================= Pagination ================= */}
        <div className="pagination">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              className={current === index ? "active" : ""}
              onClick={() => setCurrent(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
