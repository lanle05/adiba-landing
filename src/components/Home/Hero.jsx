import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-section__content-top">
        {/* Left Text */}

        <div className="hero-section__text-container">
          <h1 className="hero-section__title">
            Empowering you <br /> to offer integrated <br />
            <span className="hero-section__title__span">
              financial services
            </span>
          </h1>

          <p className="hero-section__description">
            Maximise your financial services with our Banking Cloud. It's packed
            with tools to help you create and customize innovative banking
            products.
          </p>

          <div className="hero-section__cta-button">
            <button className="hero-section__cta-button__inner">
              Get Started <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="hero-section__image-wrapper">
          <div className="hero-section__image-container">
            <img
              src="/hero/man_and_companies.png"
              alt="Hero"
              className="hero-section__image"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>

      {/* Logos Strip */}

      <div className="hero-section__partners-strip">
        <div className="hero-section__partners-strip__inner">
          <div className="hero-section__partners-strip__text-container">
            <p className="hero-section__partners-strip__text">
              We have partnered with leading financial institutions.
            </p>
          </div>

          <div className="hero-section__partners-strip__logos-container">
            <div className="hero-section__partners-strip__logo-item">
              <div className="hero-section__partners-strip__logo-joined">
                <img
                  src="/hero/partners/vfd-alone.png"
                  alt="VFD Group"
                  className="hero-section__partners-strip__logo-item__img "
                />
                <img
                  src="/hero/partners/naija-Flag.png"
                  alt="nigeria"
                  className="hero-section__partners-strip__logo-item__country-img"
                />
              </div>
            </div>

            <div className="hero-section__partners-strip__logo-item">
              <div className="hero-section__partners-strip__logo-joined">
                <img
                  src="/hero/partners/rexalogo.png"
                  alt="Rexa"
                  className="hero-section__partners-strip__logo-item__img"
                />
                <img
                  src="/hero/partners/naija-Flag.png"
                  alt="nigeria"
                  className="hero-section__partners-strip__logo-item__country-img"
                />
              </div>
            </div>

            <div className="hero-section__partners-strip__logo-item">
              <div className="hero-section__partners-strip__logo-joined">
                <img
                  src="/hero/partners/vfd-alone.png"
                  alt="VFD Ghana"
                  className="hero-section__partners-strip__logo-item__img"
                />
                <img
                  src="/hero/partners/ghana-flag.png"
                  alt="ghana"
                  className="hero-section__partners-strip__logo-item__country-img"
                />
              </div>
            </div>

            <div className="hero-section__partners-strip__logo-item">
              <div className="hero-section__partners-strip__logo-joined">
                <img
                  src="/hero/partners/kijana-flag.png"
                  alt="Kijana"
                  className="hero-section__partners-strip__logo-item__img"
                />
                <img
                  src="/hero/partners/Rwanda-Flag.png"
                  alt="Rwanda"
                  className="hero-section__partners-strip__logo-item__country-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
