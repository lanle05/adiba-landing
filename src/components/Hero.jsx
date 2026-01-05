import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-12 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <div className="space-y-8 z-10">
          <h1 className="text-5xl md:text-6xl font-bold leading-[1.1]">
            Empowering you to offer integrated{" "}
            <span className="text-gold-500">financial services</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-md leading-relaxed">
            Maximise your financial services with our Banking Cloud. It's packed
            with tools to help you create and customize innovative banking
            products.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3 bg-peach text-navy-900 font-semibold rounded-full hover:bg-orange-200 transition flex items-center gap-2">
              Get Started <ArrowRight size={18} />
            </button>
          </div>
        </div>
        
        <div className="relative"> 
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden">
            <img
              src="/hero/man_and_companies.png"
              alt="Hero"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Logos Strip */}
      <div className="max-w-7xl mx-auto px-6 mt-20 flex justify-around">
        <p className="text-gray-400 text-sm mb-6">
          We have partnered with leading financial institutions.
        </p>
        <div className="flex flex-wrap gap-8  grayscale hover:grayscale-0 transition-all duration-500">
          <div className="h-8 w-24 ">
            <img src="/hero/partners/vfd.png" alt="" />
          </div>
          <div className="h-8 w-24">
            <img src="/hero/partners/rexalogo.png" alt="" />
          </div>
          <div className="h-8 w-24">
            <img src="/hero/partners/vfd.png" alt="" />
          </div>
          <div className="h-8 w-24">
            <img src="/hero/partners/kijana-flag.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;