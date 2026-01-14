import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

const Preloader = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let currentCount = 0;
    
    // Exact logic from your HTML script
    const updateCounter = setInterval(() => {
      currentCount += 2;
      if (currentCount > 100) currentCount = 100;
      
      setCount(currentCount);
      
      if (currentCount >= 100) {
        clearInterval(updateCounter);
        
        // EXIT ANIMATION
        const tl = gsap.timeline();
        tl.to('.preloader', { 
          y: "-100%", 
          duration: 1, 
          ease: "power4.inOut" 
        })
        .to('.nav-anim', { y: 0, duration: 1, ease: "power3.out" }, "-=0.5")
        .to('.reveal-text span', { 
          y: 0, 
          duration: 1.5, 
          stagger: 0.2, 
          ease: "power4.out" 
        }, "-=0.8")
        .to('.hero-footer', { opacity: 1, y: 0, duration: 1 }, "-=1");
      }
    }, 15);

    return () => clearInterval(updateCounter);
  }, []);

  return (
    <div className="preloader">
      <div className="counter font-mono text-5xl font-bold">{count}%</div>
    </div>
  );
};

export default Preloader;