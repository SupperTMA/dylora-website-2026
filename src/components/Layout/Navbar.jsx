import React, { useLayoutEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import MagneticButton from '../UI/MagneticButton';
import { NAV_LINKS } from '../../utils/constants';

const Navbar = () => {
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useLayoutEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    
    if (hasVisited) {
      gsap.set(navRef.current, { y: 0 });
    } else {
      gsap.set(navRef.current, { y: "-100%" });
    }

    const handleReveal = () => {
      gsap.to(navRef.current, {
        y: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.5 
      });
    };

    window.addEventListener('reveal-navbar', handleReveal);

    return () => {
      window.removeEventListener('reveal-navbar', handleReveal);
    };
  }, []);

  // MOBILE MENU ANIMATION
  useLayoutEffect(() => {
    if (isMobileMenuOpen) {
      gsap.to(mobileMenuRef.current, { x: "0%", duration: 0.5, ease: "power3.out" });
    } else {
      gsap.to(mobileMenuRef.current, { x: "100%", duration: 0.5, ease: "power3.in" });
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav 
        ref={navRef} 
        className="fixed top-0 w-full z-40 border-b border-white/5 bg-black/80 backdrop-blur-md nav-anim"
      >
        <div className="max-w-[1800px] mx-auto px-6 h-24 flex justify-between items-center">
          {/* LOGO SECTION */}
          <Link to="/" className="flex items-center gap-2 group cursor-pointer hover-trigger">
            <div className="w-3 h-3 bg-accent rounded-sm group-hover:rotate-45 transition-transform duration-300"></div>
            <span className="font-display font-bold text-2xl tracking-tighter scramble-text" data-original="DYLORA">
              DYLORA
            </span>
          </Link>
          
          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center gap-10 font-mono text-xs uppercase tracking-widest text-gray-400">
            {NAV_LINKS.map((link, index) => (
              <Link 
                key={index} 
                to={link.path} 
                className={`transition-colors hover-trigger ${
                  location.pathname === link.path ? "text-accent" : "hover:text-accent"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* DESKTOP CTA BUTTON */}
          <Link to="/contact" state={{ formType: 'quote' }} className="hidden md:block">
            <MagneticButton className="bg-white text-black px-8 py-3 rounded-full font-bold text-sm hover:bg-accent transition-colors border border-transparent hover-trigger">
              <span className="inline-block pointer-events-none">Get Started</span>
            </MagneticButton>
          </Link>

          {/* MOBILE HAMBURGER BUTTON */}
          <button 
            className="md:hidden z-50 text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div 
        ref={mobileMenuRef}
        className="fixed inset-0 z-[35] bg-black flex flex-col justify-center items-center translate-x-full md:hidden"
      >
        <div className="flex flex-col gap-8 text-center">
          {NAV_LINKS.map((link, index) => (
            <Link 
              key={index} 
              to={link.path} 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`font-display text-4xl font-bold uppercase ${
                location.pathname === link.path ? "text-accent" : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" state={{ formType: 'quote' }} onClick={() => setIsMobileMenuOpen(false)} className="mt-8">
            <button className="bg-accent text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;