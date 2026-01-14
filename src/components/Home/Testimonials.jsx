import React from 'react';
import { TESTIMONIALS } from '../../utils/constants';

const Testimonials = () => {
  return (
    <section className="py-32 px-6 max-w-[1800px] mx-auto border-t border-white/10">
      <div className="flex justify-between items-end mb-16">
        <h2 className="font-display text-6xl scramble-text" data-original="Client Stories">
          Client Stories
        </h2>
        <div className="hidden md:block w-32 h-[1px] bg-white/20"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((testimonial, index) => (
          <div key={index} className="glass-panel p-8 hover:bg-white/5 transition-all group hover-trigger relative overflow-hidden testimonial-card">
            <div className="absolute top-0 right-0 p-4 opacity-20 text-[6rem] leading-none font-serif text-accent">"</div>
            <div className="relative z-10">
              <div className="flex items-center gap-6 mb-8">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-accent transition-colors duration-300">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-white">{testimonial.name}</h4>
                  <p className="text-xs font-mono text-gray-500">{testimonial.role}</p>
                  <span className="text-accent text-xs mt-2 block">{testimonial.rating}</span>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                {testimonial.quote}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;