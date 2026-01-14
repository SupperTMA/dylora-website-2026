import { useState, useEffect } from 'react';
import gsap from 'gsap';

export const usePreloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let count = 0;
    const updateCounter = setInterval(() => {
      count += 2;
      if (count > 100) count = 100;
      
      setCounter(count);
      
      if (count >= 100) {
        clearInterval(updateCounter);
        finishPreloader();
      }
    }, 15);

    // Inside Preloader.jsx useEffect...
function finishPreloader() {
  const tl = gsap.timeline();
  // Only animate the preloader curtain and the nav
  tl.to('.preloader', { 
    y: "-100%", 
    duration: 1, 
    ease: "power4.inOut",
    onComplete: () => setIsVisible(false)
  })
  .to('.nav-anim', { y: 0, duration: 1, ease: "power3.out" }, "-=0.5");
  
  // REMOVED: .to('.reveal-text span'...) 
  // REMOVED: .to('.hero-footer'...)
  // The Hero component will now handle these animations itself when it mounts.
}

    return () => clearInterval(updateCounter);
  }, []);

  return { isVisible, counter };
};