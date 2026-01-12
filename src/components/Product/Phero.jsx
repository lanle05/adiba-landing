import React from "react";
import { products } from "../../utils/products";


const Phero = () => {
  return (
    <section className="hero">
          <h1>{products.heroTitle}</h1>
          <p>{products.heroSubtitle}</p>
    </section>
  );
};

export default Phero;
