import React from "react";
import {
  MessageProgramming,
  CloudLightning,
  Data,
  Command,
} from "iconsax-reactjs";

const FeatureItem = ({ icon: Icon, title, desc }) => (
  <div className="feature-card">
    <div className="feature-header">
      <div className="icon-wrapper">
        <Icon size={20} variant="Bulk" />
      </div>
      <h3 className="feature-title">{title}</h3>
    </div>
    <p className="feature-desc">{desc}</p>
  </div>
);

const BankingTech = () => {
  return (
    <section className="banking-tech">
      <div className="bg-overlay" />

      <div className="container">
        <p className="subtitle">Technical Features</p>
        <h2 className="title">Banking tech reimagined</h2>

        <div className="layout">
          {/* Phone */}
          <div className="phone">
            <img src="/banking/phone.png" alt="App Interface" />
          </div>

          {/* Desktop floating cards */}
          <div className="feature feature--tl">
            <FeatureItem
              icon={MessageProgramming}
              title="Cutting-edge Technology"
              desc="Our innovative Banking Cloud platform features some of the most advanced RESTful APIs in the global market. These APIs are designed to support scalability and facilitate international expansion."
            />
          </div>

          <div className="feature feature--tr">
            <FeatureItem
              icon={Data}
              title="Powerful APIs"
              desc="With our smart API accessible services, you can easily manage the data of your users in real-time throughout the entire customer lifecycle: from onboarding to long-term support."
            />
          </div>

          <div className="feature feature--bl">
            <FeatureItem
              icon={CloudLightning}
              title="Cloud-based Banking"
              desc="Our entire banking infrastructure operates in the cloud, enabling us to deliver outstanding banking experiences for our partners' customers. We are at the forefront of developing innovative and fully digital financial products."
            />
          </div>

          <div className="feature feature--br">
            <FeatureItem
              icon={Command}
              title="Data Mesh Architecture"
              desc="Utilise our advanced data mesh architecture to harness critical data for informed decision-making, strategic planning, forecasting, and meeting regulatory requirements."
            />
          </div>

          {/* Mobile stacked cards */}
          <div className="mobile-features">
            <FeatureItem
              icon={MessageProgramming}
              title="Cutting-edge Technology"
              desc="Innovation at its core."
            />
            <FeatureItem
              icon={Data}
              title="Powerful APIs"
              desc="Scalable microservices."
            />
            <FeatureItem
              icon={CloudLightning}
              title="Cloud-based Banking"
              desc="Cloud-native financial infrastructure."
            />
            <FeatureItem
              icon={Command}
              title="Data Mesh Architecture"
              desc="Smarter decisions through data."
            />
          </div>
        </div>

        <button className="cta">See our API Doc</button>
      </div>
    </section>
  );
};

export default BankingTech;
