import React from 'react';
import { Link } from 'react-router-dom';
import MagneticButton from '../UI/MagneticButton';
import { SOCIAL_LINKS, COMPANY_INFO } from '../../utils/constants';

const Footer = ({title}) => {
  return (
    <footer className="bg-black pt-32 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <span className="text-accent font-mono text-sm mb-4 block">READY TO START?</span>
            <h2 className="font-display text-7xl md:text-8xl font-bold tracking-tight mb-8">
  {title || (
    <>
      Let's build <br /> the future.
    </>
  )}
</h2>

            <div className="flex gap-4">
              <Link to="/contact">
                <MagneticButton className="bg-accent text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform hover-trigger">
                  <span className="inline-block pointer-events-none">Get Free Consultation</span>
                </MagneticButton>
              </Link>
              <Link to="/contact">
                <MagneticButton className="border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-colors hover-trigger">
                  <span className="inline-block pointer-events-none">Contact Us Now</span>
                </MagneticButton>
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-end md:text-right">
            <h3 className="text-2xl text-white mb-2 font-display font-bold">{COMPANY_INFO.name}</h3>
            <p className="text-2xl text-white mb-2">{COMPANY_INFO.email}</p>
            <p className="text-gray-500 mb-6">
              {COMPANY_INFO.address}<br />
              {COMPANY_INFO.hours}
            </p>
            <div className="flex md:justify-end gap-6 text-xl">
              {SOCIAL_LINKS.map((social, index) => (
                <a key={index} href={social.url} className="text-gray-500 hover:text-white transition-colors hover-trigger">
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-gray-600 uppercase">
          <div className="flex gap-8 mb-4 md:mb-0">
            <Link to="/" className="hover:text-white">Home</Link>
            <Link to="/services" className="hover:text-white">Services</Link>
            <Link to="/projects" className="hover:text-white">Projects</Link>
          </div>
          <p>&copy; 2025 DYLORA. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
      <div className="absolute bottom-[-4vw] left-0 w-full text-center pointer-events-none opacity-[0.03]">
        <span className="font-display text-[25vw] font-bold leading-none tracking-tighter">DYLORA</span>
      </div>
    </footer>
  );
};

export default Footer;