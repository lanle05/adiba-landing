import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const testimonialsData = [
  {
    id: 1,
    name: "Fabiana Mingrone",
    role: "Kijana Inc",
    quote: "We found ADIBA to be an exceptionally cooperative partner—always focused on finding solutions, achieving success together, and delivering great results for the customer.",
    shortQuote: "Fast, secure and simple. This is a game-changer!",
    image: "/testimonial/fabiana.png" 
  },
  {
    id: 2,
    name: "David Okeke",
    role: "FinTech NG",
    quote: "The integration process was seamless. Adiba provided the infrastructure we needed to scale our lending platform in record time.",
    shortQuote: "Seamless integration and incredible support.",
    image: "/testimonial/david.jpg"
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const activeData = testimonialsData[current];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-gold-500 font-bold text-xs uppercase tracking-widest mb-2">Client Testimonials</p>
          <h2 className="text-4xl font-bold text-navy-900 mb-8">Customer Success</h2>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="max-w-2xl">
              <p className="text-gray-500 text-lg italic leading-relaxed">
                "{activeData.quote}"
              </p>
              
              <div className="flex items-center gap-4 mt-6">
                <img src={activeData.image} alt={activeData.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-navy-900">{activeData.name}</h4>
                  <p className="text-xs text-gray-400">{activeData.role}</p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-4">
              <button onClick={prevSlide} className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 text-navy-900 transition">
                <ArrowLeft size={20} />
              </button>
              <button onClick={nextSlide} className="p-3 rounded-full bg-navy-900 text-white hover:bg-navy-800 transition shadow-lg">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Map Visualization Section */}
        <div className="relative mt-20 h-100 w-full flex justify-center items-center">
          
          {/* World Map Background Image */}
          <div className="absolute inset-0 z-0 opacity-90">
             <img src="/testimonial/map.png" alt="World Map" className="w-full h-full object-contain" />
          </div>

          {/* Random Avatars Scattered on Map (Decorative) */}
          <div className="absolute top-10 left-1/4 w-10 h-10 rounded-full"><img src="/testimonial/person3.png" alt="" /></div>
          <div className="absolute top-20 right-1/3 w-12 h-12 rounded-full"><img src="/testimonial/person4.png" alt="" /></div>
          <div className="absolute bottom-10 left-1/3 w-8 h-8 rounded-full"><img src="/testimonial/person5.png" alt="" /></div>
          <div className="absolute bottom-20 right-1/4 w-10 h-10 rounded-full"><img src="/testimonial/person6.png" alt="" /></div>

          {/* Center Focus Card (The Active Testimonial Popover) */}
          <div className="relative z-10 bg-white p-6 rounded-2xl shadow-xl max-w-sm text-center transform transition-all duration-500">
             <div className="absolute -top-6 left-1/2 -translate-x-1/2">
               <img src={activeData.image} alt={activeData.name} className="w-12 h-12 rounded-full border-4 border-white shadow-sm" />
             </div>
             <div className="mt-4">
               <Quote size={20} className="text-gray-300 mx-auto mb-2" />
               <h4 className="font-bold text-navy-900 mb-1">{activeData.name}</h4>
               <p className="text-sm text-gray-500 italic">"{activeData.shortQuote}"</p>
             </div>
          </div>

        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonialsData.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-2 h-2 rounded-full transition-all ${current === idx ? 'bg-gold-500 w-4' : 'bg-gray-300'}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;