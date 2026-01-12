import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SolutionCard = ({ title, desc, img, link }) => (
  <div className="trusted-container__cards-container">
    <div className="trusted-container__cards__image">
      <img
        src={img}
        alt={title}
        className="trusted-container__cards__image-item"
      />
    </div>
    <h3 className="trusted-container__cards__title">{title}</h3>
    <p className="trusted-container__cards__desc">{desc}</p>
    <div className="trusted-container__cards__button-container">
      <Link to={link} className="trusted-container__cards__button">
        Learn More
      </Link>
    </div>
  </div>
);

const TrustedSolutions = () => {
  const solutions = [
    {
      title: "Digital Banking",
      desc: "Create your own neobank and digital bank with diverse account options, using our Digital Banking and Accounts APIs to customize and scale your financial services.",
      img: "/trusted/digital.png",
      link: "/product/digital-banking",
    },
    {
      title: "Open Banking",
      desc: "Our APIs enable seamless integration of payment gateways, mobile wallets, and peer-to-peer transactions, ensuring quick and secure payments for your users.",
      img: "/trusted/payment.png",
      link: "/product/open-banking",
    },
    {
      title: "Embedded Finance",
      desc: "With our APIs, you can provide personalized loan options, competitive interest rates, and efficient loan processing to your customers.",
      img: "/trusted/lending.png",
      link: "/product/embedded-finance",
    },
    // {
    //   title: "Identification",
    //   desc: "Our identity management APIs offer robust identification services, including verification methods, and biometric authentication to protect your customers' identities.",
    //   img: "/trusted/identification.png",
    //   link: "/product/identification",
    // },
  ];

  return (
    <section className="trusted">
      <div className="trusted-container">
        <div className="trusted-container__header">
          <p className="trusted-container__header-text">Trusted Solutions</p>
          <h2 className="trusted-container__header-title">
            Complete embedded finance solutions for your retail business.
          </h2>
          <p className="trusted-container__header-desc">
            Integrate banking seamlessly into your customer journey with our
            retail engine and omnichannel API.
          </p>
        </div>

        <div className="trusted-container__cards">
          {solutions.map((solution, i) => (
            <SolutionCard
              key={i}
              title={solution.title}
              img={solution.img}
              desc={solution.desc}
              link={solution.link}
            />
          ))}
        </div>

        {/* <div className="trusted-container__button-container">
          <Link to="/products" className="trusted-container__button">
            All Services <ArrowRight size={16} />
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default TrustedSolutions;
