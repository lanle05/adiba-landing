import React from 'react';
import { ArrowRight } from 'lucide-react';

const SolutionCard = ({ title, desc, img }) => (
  <div className="trusted-container__cards-container">
    <div className="trusted-container__cards__image">
      <img src={img} alt={title} className="trusted-container__cards__image-item" />
    </div>
    <h3 className="trusted-container__cards__title">{title}</h3>
    <p className="trusted-container__cards__desc">{desc}</p>
    <div className="trusted-container__cards__button-container">
    <button className="trusted-container__cards__button">Learn More</button>
    </div>
  </div>
);

const TrustedSolutions = () => {
  return (
    <section className="trusted">
      <div className="trusted-container">
        <div className="trusted-container__header">
          <p className="trusted-container__header-text">
            Trusted Solutions
          </p>
          <h2 className="trusted-container__header-title">
            Complete embedded finance solutions for your retail business.
          </h2>
          <p className="trusted-container__header-desc">
            Integrate banking seamlessly into your customer journey with our
            retail engine and omnichannel API.
          </p>
        </div>

        <div className="trusted-container__cards">
          <SolutionCard
            title="Digital Banking"
            img="/trusted/digital.png"
            desc="Create your own neobank and digital bank with diverse account options, using our Digital Banking and Accounts APIs to customize and scale your financial services."
          />
          <SolutionCard
            title="Payment"
            img="/trusted/payment.png"
            desc="Our APIs enable seamless integration of payment gateways, mobile wallets, and peer-to-peer transactions, ensuring quick and secure payments for your users."
          />
          <SolutionCard
            title="Lending"
            img="/trusted/lending.png"
            desc="With our APIs, you can provide personalized loan options, competitive interest rates, and efficient loan processing to your customers."
          />
          <SolutionCard
            title="Identification"
            img="/trusted/identification.png"
            desc="Our identity management APIs offer robust identification services, including verification methods, , and biometric authentication to protect your customers' identities."
          />
        </div>

        <div className="trusted-container__button-container">
          <button className="trusted-container__button">
            All Services <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrustedSolutions;