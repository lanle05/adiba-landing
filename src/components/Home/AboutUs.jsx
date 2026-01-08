import React from "react";
import { ArrowRight } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-us__container">
        <div className="about-us__image-col">
          <div className="about-us__image-wrapper">
            <img
              src="/aboutus/groupimg.svg"
              alt="Adiba Network Diagram"
              className="about-us__image"
            />
          </div>
        </div>

        <div className="about-us__content-col">
          <div className="about-us__header">
            <p className="about-us__header-text">
              About Us
            </p>
          </div>

          <h2 className="about-us__title">
            The premier platform for embedded finance and digital banking
          </h2>

          <div className="about-us__description">
            <p className="about-us__description-spacer">
              ADIBA is revolutionizing global finance with seamless APIs that
              integrate top digital banking services into your products.
            </p>
            <div>
              Partner with us and leverage our advanced technology and banking
              expertise, while we handle the regulatory complexities, so you can
              concentrate on your customers.
            </div>
          </div>

          <button className="about-us__cta-button">
            Get Started <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
