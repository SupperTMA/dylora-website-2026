import React, { useRef, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

import Preloader from './Preloader';
import Navbar from './Navbar';
import Footer from './Footer';
import { useCursor } from '../../hooks/useCursor';

const Layout = ({ children }) => {
  // 1. Hooks
  useCursor();
  const location = useLocation();
  const mainRef = useRef(null);

  // 2. Page Transition Logic
  useLayoutEffect(() => {
    // Whenever the route (location.pathname) changes, run this animation
    const ctx = gsap.context(() => {
      // Immediate quick fade-out/reset (optional, but ensures clean state)
      gsap.set(mainRef.current, { opacity: 0, y: 20 });

      // Smooth fade-in and slide-up
      gsap.to(mainRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.1 // Slight delay to let React render the new DOM
      });
      
      // Scroll to top instantly on page change
      window.scrollTo(0, 0);
      
    }, mainRef);

    return () => ctx.revert();
  }, [location.pathname]); // Dependency on pathname triggers this effect

  return (
    <>
      <Preloader />
      
      {/* Cursor Elements */}
      <div className="cursor-dot"></div>
      <div className="cursor-outline"></div>

      {/* Noise Background */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.05]" 
           style={{ background: `url('data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)" opacity="1"/%3E%3C/svg%3E')` }}>
      </div>

      <Navbar />
      
      {/* 3. Wrap children in a ref for animation */}
      <main ref={mainRef} className="min-h-screen">
        {children}
      </main>
      
      <Footer />
    </>
  );
};

export default Layout;