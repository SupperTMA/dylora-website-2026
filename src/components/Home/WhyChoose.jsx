import React from 'react';
import { FEATURES } from '../../utils/constants';

const WhyChoose = () => {
  return (
    <section className="py-32 border-t border-white/10 bg-[#080808]">
      <div className="max-w-[1800px] mx-auto px-6">
        <div className="mb-16">
          <h2 className="font-display text-5xl mb-4 scramble-text" data-original="Why Choose Dylora?">
            Why Choose Dylora?
          </h2>
          <p className="text-gray-400">We combine technical expertise with innovative solutions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {FEATURES.map((feature, index) => (
            <div key={index} className="bg-[#080808] p-8 hover:bg-[#111] transition-colors group hover-trigger">
              <i className={`${feature.icon} text-2xl text-accent mb-6`}></i>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;