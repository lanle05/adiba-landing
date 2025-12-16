import React from 'react';
import { ArrowRight } from 'lucide-react';

const SolutionCard = ({ title, desc, img }) => (
  <div className="flex flex-col gap-4 group cursor-pointer">
    <div className="rounded-2xl overflow-hidden h-48 bg-gray-100">
      <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
    </div>
    <h3 className="text-gold-500 font-bold text-lg">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    <button className="w-fit px-4 py-1.5 bg-peach text-xs font-bold rounded text-navy-900 uppercase tracking-wide">Learn More</button>
  </div>
);

const TrustedSolutions = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold-500 font-bold text-xs uppercase tracking-widest mb-2">
            Trusted Solutions
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Complete embedded finance solutions for your retail business.
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed text-center">
            Integrate banking seamlessly into your customer journey with our
            retail engine and omnichannel API.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SolutionCard
            title="Digital Banking"
            img="/trusted/digital.png"
            desc="Create your own neobank and digital bank with diverse account options, using our Digital Banking and Accounts APIs to customize and scale your financial services."
          />
          <SolutionCard
            title="Payment"
            img="/trusted/payment.png"
            desc="Our APIs enable seamless integration of payment gateways, mobile wallets, and peer-to-peer transactions, ensuring quick and secure payments for your users."
          />
          <SolutionCard
            title="Lending"
            img="/trusted/lending.png"
            desc="With our APIs, you can provide personalized loan options, competitive interest rates, and efficient loan processing to your customers."
          />
          <SolutionCard
            title="Identification"
            img="/trusted/identification.png"
            desc="Our identity management APIs offer robust identification services, including verification methods, , and biometric authentication to protect your customers' identities."
          />
        </div>

        <div className="mt-12 flex justify-center">
          <button className="bg-navy-900 text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-navy-800">
            All Services <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrustedSolutions;