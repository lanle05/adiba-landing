import React from "react";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <>
      <section className="footer">
        {/* ... Benefits Section (Unchanged) ... */}
        <div className="benefits">
          <p className="benefits__title">Benefits</p>
          <h2 className="benefits__subtitle">Innovative Banking Technology</h2>

          <div className="benefits__cards">
            {[
              {
                title: "Faster Time to Market",
                desc: "ADIBA's pre-built infrastructure and streamlined development process significantly reduce the time needed to launch new financial initiatives.",
                image: "/benefits/card-tick.png",
              },
              {
                title: "Effortless Administration",
                desc: "ADIBA's back office admin console is designed to be user-friendly and intuitive.",
                image: "/benefits/favorite-chart.png",
              },
              {
                title: "Real-time Visibility",
                desc: "With real-time data dashboards and reports, institutions can gain immediate insights into their financial performance.",
                image: "/benefits/status-up.png",
              },
              {
                title: "Simplified Compliance",
                desc: "Effective data analysis is crucial for regulatory compliance.",
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
        </div>
        <div className="benefits__images-grid">
          <div className="benefits__images-grid-item">
            <img src="/benefits/woman.png" className="benefits__images" />
          </div>
          <div className="benefits__images-grid-item">
            <img src="/benefits/womangroup.png" className="benefits__images" />
          </div>
          <div className="benefits__images-grid-item">
            <img src="/benefits/manoncall.png" className="benefits__images" />
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="footer-section">
        <div className="footer-section__card">
          <h3 className="footer-section__card-heading">
            Start building your own banking service
          </h3>
          <button className="footer-section__card-button">
            Get Started <ArrowRight size={16} />
          </button>
        </div>

        <div className="footer-section__body">
          <div className="footer-section__body__container">
            {/* Column 1 */}
            <div className="footer-section__body__container-column1">
              <h4 className="footer-section__body__container-header">
                Products
              </h4>
              <ul className="footer-section__body__container-list">
                <li>
                  <a href="#">All Services</a>
                </li>
                <li>
                  <a href="#">Digital Banking</a>
                </li>
                <li>
                  <a href="#">Open Banking</a>
                </li>
                <li>
                  <a href="#">Embedded Finance</a>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="footer-section__body__container-header">
                About Us
              </h4>
              <ul className="footer-section__body__container-list">
                <li>
                  <a href="#">Origin</a>
                </li>
                <li>
                  <a href="#">Partnerships</a>
                </li>
              </ul>
            </div>

            {/* Column 3: Developers (Swapped position to match grid) */}
            <div>
              <h4 className="footer-section__body__container-header">
                Developers
              </h4>
              <ul className="footer-section__body__container-list">
                <li>
                  <a href="#">API Documentation</a>
                </li>
                <li>
                  <a href="#">Guides</a>
                </li>
                <li>
                  <a href="#">E-learning</a>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h4 className="footer-section__body__container-header">
                <a href="#">Contact</a>
              </h4>
              <h4 className="footer-section__body__container-header">
                <a href="#">Demo</a>
              </h4>
            </div>

            {/* Column 5: Newsletter */}
            <div className="footer-section__body__container-newsletter">
              <h4>Subscribe to our newsletter</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit phasellus
                amet dui quam vitae quis leo velit.
              </p>
              <div className="input-group">
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          <div className="footer-section__body__copyright">
            <div className="logo-area">
              <img src="/navbar/logo.svg" alt="adiba logo" />
            </div>
            <p>Copyright © Adiba Organization</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
