import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../../utils/constants';

const Services = () => {
  return (
    <section className="py-32 px-6 max-w-[1800px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4 sticky top-32 h-fit service-title-anim">
          <span className="font-mono text-accent text-xs uppercase mb-4 block">(02) — Services</span>
          <h2 className="font-display text-6xl font-bold leading-tight mb-8">
            Comprehensive <br /> IT Solutions.
          </h2>
          <p className="text-gray-400 mb-8">
            Comprehensive IT solutions designed to drive your business forward in the digital age.
          </p>
          <Link to="/services" className="hover-trigger inline-flex items-center gap-2 text-white border-b border-white pb-1 hover:text-accent hover:border-accent transition-colors">
            → View All Services
          </Link>
        </div>
        <div className="md:col-span-8 flex flex-col">
          {SERVICES.map((service, index) => (
            // CHANGED: Wrapped in Link to make it clickable
            <Link 
              to="/services" 
              key={index} 
              className="service-item border-t border-white/10 py-12 px-4 hover:bg-white/5 transition-colors group cursor-pointer hover-trigger block"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-display text-4xl group-hover:translate-x-4 transition-transform duration-300">
                  {service.title}
                </h3>
                {/* CHANGED: Added transform translate classes for the 'shoot' animation */}
                <i className={`fas fa-arrow-right -rotate-45 text-gray-600 group-hover:text-accent transition-all duration-300 text-2xl group-hover:translate-x-2 group-hover:-translate-y-2`}></i>
              </div>
              <p className="text-gray-500 max-w-lg">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;