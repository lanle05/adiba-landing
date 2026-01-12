import React from "react";

const Features = ({ product }) => {
  return (
    <section className="features">
      <div className="features__container">
        {product.feature.map((feature, index) => (
          <div key={index} className="features__card">
            <div className="features__image-wrapper">
              <img
                src={feature.image}
                alt={feature.title}
                className="features__image"
              />
            </div>
            <div className="features__content">
              <h3 className="features__title">{feature.title}</h3>
              <p className="features__description">{feature.description}</p>
              <p className="features__details">{feature.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
