import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-2xl text-navy-900">
          <div className="w-8 h-8 opacity-80"><img src="/navbar/adiba_logo.png" alt="" /></div>
          <span>adiba</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-navy-900">
            Home
          </a>
          <a href="#" className="hover:text-navy-900">
            About
          </a>
          <a href="#" className="hover:text-navy-900">
            Pricing
          </a>
          <a href="#" className="hover:text-navy-900">
            Applications
          </a>
          <a href="#" className="hover:text-navy-900">
            Developers
          </a>
        </div>

        {/* CTA Button */}
        <button className="hidden md:block bg-navy-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-navy-800 transition">
          Go to Dashboard
        </button>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 flex flex-col items-center gap-4">
          <a href="#" className="text-gray-600">
            Home
          </a>
          <a href="#" className="text-gray-600">
            About
          </a>
          <button className="bg-navy-900 text-white px-6 py-2 rounded-full text-sm">
            Go to Dashboard
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
