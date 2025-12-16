import React from 'react';
import { ArrowRight, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <>
      <section className="py-20 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <p className="text-gold-500 font-bold text-xs uppercase tracking-widest">Benefits</p>
          <h2 className="text-4xl font-bold text-navy-900">Innovative Banking Technology</h2>
          
          <div className="space-y-6">
            {[
              { title: 'Faster Time to Market', desc: 'Pre-built infrastructure reduces launch time.' },
              { title: 'Effortless Administration', desc: 'User-friendly back office console.' },
              { title: 'Real-time Visibility', desc: 'Gain immediate insights into financial performance.' },
              { title: 'Simplified Compliance', desc: 'Effective data analysis for regulatory needs.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-peach shrink-0 flex items-center justify-center text-gold-500">
                  <div className="w-2 h-2 bg-current rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-navy-900">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
           <img src="/benefits/woman.png" className="rounded-2xl mt-8" />
           <img src="/benefits/womangroup.png" className="rounded-2xl" />
           <img src="/benefits/manoncall.png" className="rounded-2xl col-span-2" />
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="relative bg-navy-900 text-white pt-32 pb-10 mt-20">
        
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl bg-white text-navy-900 p-8 rounded-3xl shadow-xl flex flex-col md:flex-row justify-between items-center gap-6">
           <h3 className="text-2xl font-bold">Start building your own banking service</h3>
           <button className="bg-navy-900 text-white px-8 py-3 rounded-full flex items-center gap-2">
             Talk to us <ArrowRight size={16} />
           </button>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16 border-b border-gray-800 pb-12">
            
            {/* Column 1 */}
            <div className="col-span-2 lg:col-span-1">
               <h4 className="font-bold mb-6">Products</h4>
               <ul className="space-y-3 text-sm text-gray-400">
                 <li>All Services</li>
                 <li>Digital Banking</li>
                 <li>Accounts</li>
                 <li>Cards</li>
                 <li>Payment Flows</li>
               </ul>
            </div>
            
            {/* Column 2 */}
             <div>
               <h4 className="font-bold mb-6">Company</h4>
               <ul className="space-y-3 text-sm text-gray-400">
                 <li>About</li>
                 <li>Licenses</li>
                 <li>Press & Media</li>
                 <li>Careers</li>
               </ul>
            </div>

            {/* Column 3 */}
            <div>
               <h4 className="font-bold mb-6">Contact</h4>
               <ul className="space-y-3 text-sm text-gray-400">
                 <li>Help Center</li>
                 <li>Report Fraud</li>
                 <li>Working With Us</li>
               </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div className="col-span-2 bg-navy-800 p-6 rounded-2xl">
              <h4 className="font-bold mb-2">Subscribe to our newsletter</h4>
              <p className="text-xs text-gray-400 mb-4">Lorem ipsum dolor sit amet consectetur.</p>
              <div className="flex bg-white rounded-full p-1 pl-4">
                <input type="email" placeholder="Enter your email" className="bg-transparent text-navy-900 outline-none flex-1 text-sm" />
                <button className="bg-navy-900 text-white px-4 py-2 rounded-full text-xs">Subscribe</button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <div className="flex items-center gap-2 font-bold text-white text-xl">
               <div className="w-6 h-6 opacity-90"><img src="/navbar/adiba_logo.png" alt="adiba logo" /></div> adiba
            </div>
            <p>Copyright © Adiba Organization</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;