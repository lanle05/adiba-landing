import React from "react";
import { ArrowRight } from "lucide-react";

const Benefits = () => {
  return (
    <>
      <section className="BenefitSection">
        <div className="benefits">
          <p className="benefits__title">Benefits</p>
          <h2 className="benefits__subtitle">Innovative Banking Technology</h2>

          <div className="benefits__cards">
            {[
              {
                title: "Faster Time to Market",
                desc: "ADIBA's pre-built infrastructure and streamlined development process significantly reduce the time needed to launch new financial initiatives. This allows institutions to seize market opportunities quickly and stay ahead of the competition",
                image: "/benefits/card-tick.png",
              },
              {
                title: "Effortless Administration",
                desc: "ADIBA's back office admin console is designed to be user-friendly and intuitive. This allows financial institutions to easily manage user accounts, system settings, and monitor platform activity without the need for extensive technical expertise.",
                image: "/benefits/favorite-chart.png",
              },
              {
                title: "Real-time Visibility",
                desc: "With real-time data dashboards and reports, institutions can gain immediate insights into their financial performance, allowing for quicker adjustments and improved decision-making.",
                image: "/benefits/status-up.png",
              },
              {
                title: "Simplified Compliance",
                desc: "Effective data analysis is crucial for regulatory compliance. ADIBA's pre-built reports can help streamline compliance efforts by providing readily available data for regulatory reporting needs.",
                image: "/benefits/chart-success.png",
              },
            ].map((item, i) => (
              <div key={i} className="benefits__card">
                <div className="benefits__card__icon">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="benefits__card__icon-image"
                  />
                </div>
                <div>
                  <h4 className="benefits__card__title">{item.title}</h4>
                  <p className="benefits__card__desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="benefits__cta-button">
            <button className="benefits__cta-button__inner">
              Get Started <ArrowRight size={18} />
            </button>
          </div>
        </div>
        <div className="benefits__images-grid">
          <div className="benefits__images-grid-item item-left">
            <img src="/benefits/woman.png" className="benefits__images" />
          </div>
          <div className="benefits__images-grid-item item-right">
            <img src="/benefits/womangroup.png" className="benefits__images" />
          </div>
          <div className="benefits__images-grid-item item-bottom">
            <img src="/benefits/manoncall.png" className="benefits__images" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefits;
