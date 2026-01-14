import React from 'react';
import { TECH_STACK } from '../../utils/constants';

const Marquee = () => {
  return (
    <div className="border-y border-white/10 py-8 bg-[#0a0a0a] overflow-hidden">
      <div className="marquee-inner flex gap-12 whitespace-nowrap text-gray-500 font-mono text-sm uppercase">
        {TECH_STACK.map((tech, index) => (
          <React.Fragment key={index}>
            <span className={tech.includes('Three.js') || tech.includes('WebGL') ? 'text-accent' : ''}>
              {tech}
            </span>
            {index < TECH_STACK.length - 1 && <span>★</span>}
          </React.Fragment>
        ))}
        {/* Duplicate for seamless loop */}
        {TECH_STACK.map((tech, index) => (
          <React.Fragment key={`dup-${index}`}>
            <span className={tech.includes('Three.js') || tech.includes('WebGL') ? 'text-accent' : ''}>
              {tech}
            </span>
            <span>★</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Marquee;