import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-16 pb-16 lg:pt-28 lg:pb-28 overflow-hidden">
      <div className="max-w-300 mx-auto px-6 grid lg:grid-cols-[0.95fr_1.05fr] gap-6 lg:gap-16 items-center">
        {/* Left Text */}
        <div className="space-y-6 lg:space-y-8 z-10">
          <h1 className="text-4xl lg:text-5xl xl:text-5xl font-bold leading-[1.1]">
            Empowering you to offer integrated{" "}
            <span className="text-gold-500">financial services</span>
          </h1>
          <p className="text-gray-500 text-base lg:text-[17px] max-w-sm leading-relaxed">
            Maximise your financial services with our Banking Cloud. It's packed
            with tools to help you create and customize innovative banking
            products.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-peach text-navy-900 font-semibold rounded-full hover:bg-orange-200 transition flex items-center gap-2">
              Get Started <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10 w-full max-w-xl xl:max-w-2xl rounded-[2.5rem] overflow-hidden -translate-y-2">
            <img
              src="/hero/man_and_companies.png"
              alt="Hero"
              className="w-full h-auto object-cover"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>

      {/* Logos Strip */}
      <div className="max-w-275 mx-auto px-6 mt-16 lg:mt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-10">
          <div className="col-span-1 lg:col-span-4">
            <p className="text-gray-400 text-base font-medium leading-relaxed text-center lg:text-left max-w-55 mx-auto lg:mx-0">
              We have partnered with leading financial institutions.
            </p>
          </div>

          <div className="col-span-1 lg:col-span-8 flex flex-wrap justify-center lg:justify-between items-center gap-8 lg:gap-0 opacity-90">

            <div className="w-24 h-9 flex items-center justify-center">
              <img
                src="/hero/partners/vfd.png"
                alt="VFD Group"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="w-24 h-9 flex items-center justify-center">
              <img
                src="/hero/partners/rexalogo.png"
                alt="Rexa"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="w-24 h-9 flex items-center justify-center">
              <img
                src="/hero/partners/vfd.png"
                alt="VFD Ghana"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="w-24 h-9 flex items-center justify-center">
              <img
                src="/hero/partners/kijana-flag.png"
                alt="Kijana"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;