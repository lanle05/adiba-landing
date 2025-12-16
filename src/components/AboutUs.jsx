import React from "react";
import { ArrowRight } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Network Diagram Image */}
        {/* TIP: Export the 'Circular Network' group from Figma as an SVG for best results */}
        <div className="relative flex justify-center lg:justify-start">
          <div className="relative w-full max-w-lg aspect-square">
            {/* Background Rings (CSS fallback if image fails) */}
            <div className="absolute inset-0 border border-gray-100 rounded-full m-4"></div>
            <div className="absolute inset-0 border border-gray-100 rounded-full m-16"></div>
            <div className="absolute inset-0 border border-gray-100 rounded-full m-32"></div>

            {/* Main Image Placeholder */}
            <img
              src="/api/placeholder/600/600"
              alt="Adiba Network Diagram"
              className="relative z-10 w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-pink-500"></span>
            <p className="text-gold-500 font-bold text-xs uppercase tracking-widest">
              About Us
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 leading-tight">
            The premier platform for embedded finance and digital banking
          </h2>

          <div className="space-y-4 text-gray-500 text-lg leading-relaxed">
            <p>
              ADIBA is revolutionizing global finance with seamless APIs that
              integrate top digital banking services into your products.
            </p>
            <p>
              Partner with us and leverage our advanced technology and banking
              expertise, while we handle the regulatory complexities, so you can
              concentrate on your customers.
            </p>
          </div>

          <button className="mt-4 bg-navy-900 text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-navy-800 transition shadow-lg hover:shadow-xl">
            Talk to us <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
