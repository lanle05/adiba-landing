import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

//Navlinks
const navLinks = [
  {
    name: "About Us",
    href: "#",
    dropdown: [
      { name: "Origin", href: "#" },
      { name: "Partnerships", href: "#" },
    ],
  },
  {
    name: "Products",
    href: "#",
    dropdown: [
      { name: "Digital Banking", href: "#" },
      { name: "Open Banking", href: "#" },
      { name: "Embedded Finance", href: "#" },
    ],
  },
  {
    name: "Developers",
    href: "#",
    dropdown: [
      { name: "API Documentation", href: "#" },
      { name: "Guides", href: "#" },
      { name: "E-learning", href: "#" },
    ],
  },
  {name: "Demo", href: "#" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md py-4 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-2xl text-navy-900 cursor-pointer">
          <div className="w-8 h-8 opacity-80"><img src="/navbar/adiba_logo.png" alt="adiba logo" /></div>
          <span>adiba</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {/* Main Link */}
              <a
                href={link.href}
                className="flex items-center gap-1 hover:text-navy-900 transition py-2"
              >
                {link.name}
                {/* Chevron for dropdowns */}
                {link.dropdown && (
                  <ChevronDown
                    size={14}
                    className="group-hover:rotate-180 transition-transform duration-300"
                  />
                )}
              </a>

              {/* Dropdown Menu*/}
              {link.dropdown && (
                <div className="absolute top-full -left-4 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-4 min-w-50 flex flex-col gap-2">
                    {link.dropdown.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-gray-500 hover:text-navy-900 hover:bg-gray-50 rounded-lg transition"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className="hidden md:block bg-navy-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-navy-800 transition shadow-lg hover:shadow-xl">
          Get Started
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-navy-900"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown (Simplified for mobile) */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-6 flex flex-col items-center gap-6 border-t border-gray-100">
          {navLinks.map((link) => (
            <div key={link.name} className="text-center">
              <a
                href={link.href}
                className="text-lg font-medium text-navy-900 block mb-2"
              >
                {link.name}
              </a>
              {/* Simple stacked list for mobile sub-links */}
              {link.dropdown && (
                <div className="flex flex-col gap-2 text-sm text-gray-500">
                  {link.dropdown.map((sub) => (
                    <a key={sub.name} href={sub.href}>
                      {sub.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button className="bg-navy-900 text-white px-8 py-3 rounded-full text-sm font-semibold w-[90%]">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
