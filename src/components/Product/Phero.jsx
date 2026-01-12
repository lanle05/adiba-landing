import React from "react";

const Phero = ({ product }) => {
  return (
    <section className="phero">
      <div className="phero__container">
        <h1 className="phero__title">{product.heroTitle}</h1>
        <p className="phero__subtitle">{product.heroSubtitle}</p>
      </div>
    </section>
  );
};

export default Phero;
