import React, { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import navLinks from "../utils/navbar-links";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileOpenIndex, setMobileOpenIndex] = useState(null);

  const toggleMobileDropdown = (index) => {
    if (mobileOpenIndex === index) {
      setMobileOpenIndex(null);
    } else {
      setMobileOpenIndex(index);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        {/* Logo */}
        <Link className="navbar__logo" to="/">
          <img src="/navbar/logo.svg" alt="adiba logo" fetchPriority="high" />
        </Link>

        <div className="navbar__menu-items-container">
          {/* Desktop Menu */}
          <div className="navbar__menu-items">
            {navLinks.map((link) => (
              <div key={link.name} className="navbar__menu-item">
                {/* Main Link */}
                <div className="navbar__menu-link">
                  {link.href ? (
                    <Link to={link.href}>{link.name}</Link>
                  ) : (
                    link.name
                  )}
                  {/* Chevron for dropdowns */}
                  {link.dropdown && (
                    <ChevronDown size={14} className="navbar__chevron-icon" />
                  )}
                </div>

                {/* Dropdown Menu*/}
                {link.dropdown && (
                  <div className="navbar__dropdown-container">
                    <div className="navbar__dropdown-menu">
                      {link.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="navbar__dropdown-link"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="navbar__cta-button-container">
            <button className="navbar__cta-button">Get Started</button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="navbar__mobile-menu-button"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="navbar__mobile-menu-dropdown-container">
          <div className="navbar__mobile-menu-list">
            {navLinks.map((link, index) => (
              <div key={link.name} className="navbar__mobile-menu-item">
                {link.href && !link.dropdown ? (
                  <Link
                    to={link.href}
                    className="navbar__mobile-menu-header"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="navbar__mobile-link-text">
                      {link.name}
                    </span>
                  </Link>
                ) : (
                  <div
                    className="navbar__mobile-menu-header"
                    onClick={() => link.dropdown && toggleMobileDropdown(index)}
                  >
                    <span className="navbar__mobile-link-text">
                      {link.name}
                    </span>
                    {link.dropdown &&
                      (mobileOpenIndex === index ? (
                        <ChevronDown size={20} />
                      ) : (
                        <ChevronRight size={20} />
                      ))}
                  </div>
                )}

                {/* mobile sub-links */}
                {link.dropdown && mobileOpenIndex === index && (
                  <div className="navbar__mobile-menu-sublinks">
                    {link.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.href}
                        className="navbar__mobile-sublink-text"
                        onClick={() => setIsOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <button className="navbar__mobile-cta-button">Get Started</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
