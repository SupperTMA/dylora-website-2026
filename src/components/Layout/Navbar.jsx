import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import MagneticButton from '../UI/MagneticButton';
import { NAV_LINKS } from '../../utils/constants';

const Navbar = () => {
  const navRef = useRef(null);

  useLayoutEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    
    // 1. Initial State Setup
    if (hasVisited) {
      // Returning user: Show immediately
      gsap.set(navRef.current, { y: 0 });
    } else {
      // First load: Hide initially
      gsap.set(navRef.current, { y: "-100%" });
    }

    // 2. Define the animation to reveal the navbar
    const handleReveal = () => {
      gsap.to(navRef.current, {
        y: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.5 // Optional small delay to sync with Hero text
      });
    };

    // 3. Listen for the custom event
    window.addEventListener('reveal-navbar', handleReveal);

    // Cleanup
    return () => {
      window.removeEventListener('reveal-navbar', handleReveal);
    };
  }, []);

  return (
    <nav 
      ref={navRef} 
      // ... keep your existing className and content ...
      className="fixed top-0 w-full z-40 border-b border-white/5 bg-black/80 backdrop-blur-md nav-anim"
    >
      {/* ... keep the rest of your JSX exactly the same ... */}
      <div className="max-w-[1800px] mx-auto px-6 h-24 flex justify-between items-center">
        {/* LOGO SECTION */}
        <Link to="/" className="flex items-center gap-2 group cursor-pointer hover-trigger">
          <div className="w-3 h-3 bg-accent rounded-sm group-hover:rotate-45 transition-transform duration-300"></div>
          <span className="font-display font-bold text-2xl tracking-tighter scramble-text" data-original="DYLORA">
            DYLORA
          </span>
        </Link>
        
        {/* NAVIGATION LINKS */}
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

        {/* CTA BUTTON */}
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