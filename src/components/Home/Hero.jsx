import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import MagneticButton from '../UI/MagneticButton';

const Hero = ({ startAnimation, isFirstLoad }) => {
  const containerRef = useRef(null);
   
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".reveal-text span", { y: "120%" });
      gsap.set(".hero-footer", { opacity: 0, y: 20 });
      gsap.set(".reveal-meta", { opacity: 0 });
      gsap.set(".hero-bg-grid", { opacity: 0 });
      
      if (startAnimation) {
        const tl = gsap.timeline();
        const gridDuration = isFirstLoad ? 3.2 : 0.5;
        const textDuration = isFirstLoad ? 1.2 : 0.8;

        tl.to(".reveal-meta", { 
          opacity: 1, 
          duration: 1 
        })
        .to(".hero-bg-grid", {
          opacity: 0.2, 
          duration: gridDuration,
          ease: "power2.out"
        }, "<") 
        .to(".reveal-text span", {
          y: "0%", 
          duration: textDuration,
          stagger: 0.1,
          ease: "power4.out" 
        }, isFirstLoad ? "-=0.8" : "-=0.4")
        .to(".hero-footer", {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out"
        }, "-=0.8");
      }
    }, containerRef);

    return () => ctx.revert();
  }, [startAnimation, isFirstLoad]);

  return (
    <header ref={containerRef} className="relative min-h-screen flex flex-col pt-32 md:pt-40 pb-12 px-4 md:px-6 overflow-hidden">
      {/* Background Grid */}
      <div className="hero-bg-grid absolute inset-0 z-0 opacity-0" 
           style={{ 
             backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
             backgroundSize: '50px 50px'
           }} />

      {/* Main Content */}
      <div className="max-w-[1800px] mx-auto w-full h-full flex flex-col justify-between flex-grow relative z-10">
        
        {/* Top Meta Data */}
        <div className="flex justify-between font-mono text-[10px] md:text-xs text-gray-500 mb-8 md:mb-12 border-b border-white/10 pb-4 reveal-meta opacity-0">
          <span>TRANSFORMING IDEAS</span>
          <span className="text-accent animate-pulse">● ONLINE</span>
          <span>MUMBAI, IN</span>
        </div>

        {/* Big Headline */}
        <div>
          
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,9vw,10rem)] tracking-tighter uppercase text-white mix-blend-difference leading-tight md:leading-[0.95] py-4">
            
            
            <div className="reveal-text overflow-hidden pb-3 -mb-3">
              <span className="block translate-y-full">Transform</span>
            </div>
            
            <div className="reveal-text overflow-hidden pb-3 -mb-3">
              <span className="text-outline block translate-y-full">Ideas Into</span>
            </div>
            
            <div className="reveal-text overflow-hidden pb-3 -mb-3">
              <span className="text-accent block translate-y-full">Digital Reality</span>
            </div>
          </h1>
        </div>

        {/* Footer Area */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mt-8 md:mt-12 border-t border-white/10 pt-8 md:pt-12 items-start hero-footer opacity-0 translate-y-5">
          <div className="md:col-span-5">
            <p className="text-base md:text-xl leading-relaxed text-gray-300">
              We deliver cutting-edge IT solutions including Web Development, Mobile Apps, Game Development, and Digital Marketing for businesses worldwide.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/services">
                <MagneticButton className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 border border-white/20 hover:border-accent hover:text-accent rounded-full transition-all uppercase text-xs md:text-sm tracking-widest hover-trigger flex justify-center">
                  <span className="inline-block pointer-events-none">Explore Services</span>
                </MagneticButton>
              </Link>
              <Link to="/projects">
                <MagneticButton className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-white text-black rounded-full hover:bg-accent transition-all uppercase text-xs md:text-sm tracking-widest font-bold hover-trigger flex justify-center">
                  <span className="inline-block pointer-events-none">► View Our Work</span>
                </MagneticButton>
              </Link>
            </div>
          </div>
          
          {/* Stats Grid */}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <div className="glass-panel p-4 md:p-6 flex flex-col justify-between h-32 md:h-40 hover-trigger hover:bg-white/5">
              <span className="font-mono text-[10px] md:text-xs text-gray-500">SATISFACTION</span>
              <span className="font-display text-3xl md:text-5xl">98%</span>
            </div>
            <div className="glass-panel p-4 md:p-6 flex flex-col justify-between h-32 md:h-40 hover-trigger hover:bg-white/5">
              <span className="font-mono text-[10px] md:text-xs text-gray-500">CLIENTS</span>
              <span className="font-display text-3xl md:text-5xl">10+</span>
            </div>
            <div className="glass-panel p-4 md:p-6 flex flex-col justify-between h-32 md:h-40 hover-trigger hover:bg-white/5">
              <span className="font-mono text-[10px] md:text-xs text-gray-500">EXP</span>
              <span className="font-display text-3xl md:text-5xl">2Y+</span>
            </div>
            <div className="glass-panel p-4 md:p-6 flex flex-col justify-between h-32 md:h-40 hover-trigger hover:bg-white/5">
              <span className="font-mono text-[10px] md:text-xs text-gray-500">SUPPORT</span>
              <span className="font-display text-2xl md:text-4xl text-accent">24/7</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;