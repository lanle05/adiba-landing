import React from "react";
import { Smartphone, Cloud, Zap, Database, ArrowRight } from "lucide-react";

const FeatureItem = ({ icon: Icon, title, desc }) => (
  <div className="bg-white p-6 rounded-2xl shadow-soft max-w-xs z-10">
    <div className="w-10 h-10 bg-peach rounded-full flex items-center justify-center mb-4 text-gold-500">
      <Icon size={20} />
    </div>
    <h3 className="text-gold-500 font-bold mb-2">{title}</h3>
    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
  </div>
);

const BankingTech = () => {
  return (
    <section className="py-20 bg-gray-light relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-gray-50 to-purple-50 opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <p className="text-gold-500 font-bold text-xs uppercase tracking-widest mb-2">
          Technical Features
        </p>
        <h2 className="text-4xl font-bold mb-16 text-navy-900">
          Banking tech reimagined
        </h2>

        {/* Central Layout */}
        <div className="relative flex flex-col items-center justify-center min-h-150">
          <div className="relative z-20 w-64 md:w-80">
            <img
              src="/banking/phone.png"
              alt="App Interface"
              className="shadow-2xl"
            />
          </div>

          <div className="hidden lg:block absolute top-10 left-20">
            <FeatureItem
              icon={Smartphone}
              title="Cutting-edge Technology"
              desc="Our innovative banking cloud platform ensures seamless integration."
            />
          </div>
          <div className="hidden lg:block absolute top-10 right-20">
            <FeatureItem
              icon={Zap}
              title="Powerful APIs"
              desc="Microservices architecture allows you to scale manageably."
            />
          </div>
          <div className="hidden lg:block absolute bottom-10 left-20">
            <FeatureItem
              icon={Cloud}
              title="Cloud-based Banking"
              desc="Cloud-native technology ensures outstanding reliability."
            />
          </div>
          <div className="hidden lg:block absolute bottom-10 right-20">
            <FeatureItem
              icon={Database}
              title="Data Mesh Architecture"
              desc="Advanced mesh architecture helps harness critical data."
            />
          </div>

          {/* Mobile*/}
          <div className="grid md:grid-cols-2 gap-4 mt-12 lg:hidden">
            <FeatureItem
              icon={Smartphone}
              title="Cutting-edge Technology"
              desc="Innovation at its core."
            />
            <FeatureItem
              icon={Zap}
              title="Powerful APIs"
              desc="Scalable microservices."
            />
          </div>
        </div>

        <button className="mt-12 bg-navy-900 text-white px-8 py-3 rounded-full flex items-center gap-2 mx-auto hover:bg-navy-800">
          See our API Doc <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
};

export default BankingTech;
