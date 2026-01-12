import React from 'react';
import { products } from '../../utils/products';

const Features = () => {
  return (
    <>
      <section>
        {product.feature.map((feature, index) => (
          <div key={index} >
            <h3>{feature.title}</h3>
            <img src={feature.image} alt={feature.title} />
            <p>{feature.description}</p>
            <p>{feature.details}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default Features
