import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // 1. Text Sequence
      tl.to(".loading-word, .tech-specs", { opacity: 1, duration: 0.5 })
        .to("#l-text", { text: "HANDSHAKING...", duration: 0.8, delay: 0.2, ease: "none" })
        .to("#l-specs", { text: "ESTABLISHING SECURE CONNECTION", duration: 0.8, ease: "none" }, "<")
        .to("#l-text", { text: "ACCESS GRANTED", color: "#D9F99D", duration: 0.4, delay: 0.2, ease: "none" })
        .to("#l-specs", { opacity: 0, duration: 0.2 }, "<")
        
        // 2. Text Fly Away
        .to(".loading-word", { 
          scale: 1.5, opacity: 0, filter: "blur(20px)", duration: 0.5, ease: "power2.in" 
        }, "+=0.3")

        // 3. Grid Explosion (The Reveal)
        .to(".loader-tile", {
          scale: 0,
          opacity: 0,
          borderRadius: "50%",
          duration: 1.2,
          stagger: { 
            grid: [10, 10], from: "center", amount: 0.8 
          },
          ease: "power3.inOut",
          onStart: () => {
             // TRIGGER: Fire this almost immediately (100ms) after explosion starts.
             // This ensures Hero text starts rising *while* the curtain is opening.
             setTimeout(() => {
                 if(onComplete) onComplete();
             }, 100); 
          }
        }, "-=0.2");

    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  // Create 100 tiles
  const tiles = Array.from({ length: 100 }, (_, i) => i);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[9999] grid grid-cols-10 grid-rows-10 pointer-events-none">
       {/* Tiles */}
      {tiles.map((i) => (
        <div key={i} className="loader-tile bg-[#050505] border-[0.5px] border-white/5 w-full h-full will-change-transform" />
      ))}
      
      {/* Centered Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full z-20">
        <div id="l-text" className="loading-word font-display font-bold text-4xl md:text-6xl tracking-[0.3em] text-white opacity-0 uppercase">
          SYSTEM CHECK
        </div>
        <div id="l-specs" className="tech-specs font-mono text-xs md:text-sm text-gray-500 mt-4 opacity-0">
          RAM: OK // GPU: OK
        </div>
      </div>
    </div>
  );
};

export default Preloader;