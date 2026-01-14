import React from 'react';
import { Link } from 'react-router-dom';
import MagneticButton from '../UI/MagneticButton';
import { NAV_LINKS } from '../../utils/constants';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-black/80 backdrop-blur-md transform -translate-y-full nav-anim">
      <div className="max-w-[1800px] mx-auto px-6 h-24 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group cursor-pointer hover-trigger">
          <div className="w-3 h-3 bg-accent rounded-sm group-hover:rotate-45 transition-transform duration-300"></div>
          <span className="font-display font-bold text-2xl tracking-tighter scramble-text" data-original="DYLORA">DYLORA</span>
        </Link>
        <div className="hidden md:flex items-center gap-10 font-mono text-xs uppercase tracking-widest text-gray-400">
          {NAV_LINKS.map((link, index) => (
            <Link 
              key={index} 
              to={link.path} 
              className="hover:text-accent transition-colors hover-trigger"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <Link to="/contact">
          <MagneticButton className="bg-white text-black px-8 py-3 rounded-full font-bold text-sm hover:bg-accent transition-colors border border-transparent hover-trigger">
            <span className="inline-block pointer-events-none">Get Started</span>
          </MagneticButton>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;