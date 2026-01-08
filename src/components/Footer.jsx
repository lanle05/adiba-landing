import React from "react";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <>
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
              <img src="/navbar/peach-logo.svg" alt="adiba logo" />
            </div>
            <p>Copyright © Adiba Organization</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
