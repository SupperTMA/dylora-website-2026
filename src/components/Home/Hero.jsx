import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import MagneticButton from '../UI/MagneticButton';

// 1. ACCEPT THE NEW PROP 'isFirstLoad'
const Hero = ({ startAnimation, isFirstLoad }) => {
  const containerRef = useRef(null);
  
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // FORCE INITIAL HIDDEN STATE
      gsap.set(".reveal-text span", { y: "100%" });
      gsap.set(".hero-footer", { opacity: 0, y: 20 });
      gsap.set(".reveal-meta", { opacity: 0 });
      gsap.set(".hero-bg-grid", { opacity: 0 });
      
      if (startAnimation) {
        const tl = gsap.timeline();

        // 2. USE THE PROP FOR PRECISE TIMING
        // First Load: 3.2s (Cinematic)
        // Returning: 0.5s (Snappy)
        const gridDuration = isFirstLoad ? 3.2 : 0.5;
        const textDuration = isFirstLoad ? 1.2 : 0.8;

        tl.to(".reveal-meta", { 
          opacity: 1, 
          duration: 1 
        })
        .to(".hero-bg-grid", {
          opacity: 0.2, 
          duration: gridDuration, // <--- DETERMINISTIC DURATION
          ease: "power2.out"
        }, "<") 
        .to(".reveal-text span", {
          y: "0%",
          duration: textDuration,
          stagger: 0.1,
          ease: "power4.out"
        }, isFirstLoad ? "-=0.8" : "-=0.4") // Faster overlap for returning users
        .to(".hero-footer", {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out"
        }, "-=0.8");
      }
    }, containerRef);

    return () => ctx.revert();
  }, [startAnimation, isFirstLoad]); // Add isFirstLoad to dependency array

  return (
    <header ref={containerRef} className="relative min-h-screen flex flex-col pt-40 pb-12 px-6 overflow-hidden">
      {/* Background Grid */}
      <div className="hero-bg-grid absolute inset-0 z-0 opacity-0" 
           style={{ 
             backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
             backgroundSize: '50px 50px'
           }} />

      {/* Main Content */}
      <div className="max-w-[1800px] mx-auto w-full h-full flex flex-col justify-between flex-grow relative z-10">
        
        {/* Top Meta Data */}
        <div className="flex justify-between font-mono text-xs text-gray-500 mb-12 border-b border-white/10 pb-4 reveal-meta opacity-0">
          <span>TRANSFORMING IDEAS</span>
          <span className="text-accent animate-pulse">● ONLINE</span>
          <span>MUMBAI, IN</span>
        </div>

        {/* Big Headline */}
        <div>
          <h1 className="font-display font-extrabold text-[clamp(4rem,9vw,10rem)] tracking-tighter uppercase text-white mix-blend-difference leading-[0.9] py-4">
            <div className="reveal-text overflow-hidden"><span className="block translate-y-full">Transform</span></div>
            <div className="reveal-text overflow-hidden"><span className="text-outline block translate-y-full">Ideas Into</span></div>
            <div className="reveal-text overflow-hidden"><span className="text-accent block translate-y-full">Digital Reality</span></div>
          </h1>
        </div>

        {/* Footer Area */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-12 border-t border-white/10 pt-12 items-start hero-footer opacity-0 translate-y-5">
          <div className="md:col-span-5">
            <p className="text-xl leading-relaxed text-gray-300">
              We deliver cutting-edge IT solutions including Web Development, Mobile Apps, Game Development, and Digital Marketing for businesses worldwide.
            </p>
            <div className="mt-8 flex gap-4">
              <Link to="/services">
                <MagneticButton className="px-8 py-4 border border-white/20 hover:border-accent hover:text-accent rounded-full transition-all uppercase text-sm tracking-widest hover-trigger">
                  <span className="inline-block pointer-events-none">Explore Services</span>
                </MagneticButton>
              </Link>
              <Link to="/projects">
                <MagneticButton className="px-8 py-4 bg-white text-black rounded-full hover:bg-accent transition-all uppercase text-sm tracking-widest font-bold hover-trigger">
                  <span className="inline-block pointer-events-none">► View Our Work</span>
                </MagneticButton>
              </Link>
            </div>
          </div>
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="glass-panel p-6 flex flex-col justify-between h-40 hover-trigger hover:bg-white/5">
              <span className="font-mono text-xs text-gray-500">SATISFACTION</span>
              <span className="font-display text-5xl">98%</span>
            </div>
            <div className="glass-panel p-6 flex flex-col justify-between h-40 hover-trigger hover:bg-white/5">
              <span className="font-mono text-xs text-gray-500">CLIENTS</span>
              <span className="font-display text-5xl">10+</span>
            </div>
            <div className="glass-panel p-6 flex flex-col justify-between h-40 hover-trigger hover:bg-white/5">
              <span className="font-mono text-xs text-gray-500">EXP</span>
              <span className="font-display text-5xl">2Y+</span>
            </div>
            <div className="glass-panel p-6 flex flex-col justify-between h-40 hover-trigger hover:bg-white/5">
              <span className="font-mono text-xs text-gray-500">SUPPORT</span>
              <span className="font-display text-4xl text-accent">24/7</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;