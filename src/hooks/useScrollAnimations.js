import { useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimations = () => {
  useLayoutEffect(() => {
    let lenis;
    
    const ctx = gsap.context(() => {
      
      // 1. ULTRA SMOOTH SCROLL SETTINGS
      lenis = new Lenis({
        duration: 2.0, // Increased from 1.2 to 2.0 for "heavier" smooth feel
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
      });
      
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      // 2. MARQUEE
      gsap.to(".marquee-inner", { 
        xPercent: -50, 
        repeat: -1, 
        duration: 20, 
        ease: "linear" 
      });

      // 3. SERVICES FADE UP
      const serviceItems = gsap.utils.toArray('.service-item');
      if (serviceItems.length > 0) {
        serviceItems.forEach(item => {
          gsap.fromTo(item, 
            { opacity: 0, y: 50 }, 
            {
              opacity: 1, 
              y: 0, 
              duration: 1,
              scrollTrigger: { 
                trigger: item, 
                start: "top 85%" 
              }
            }
          );
        });
      }

      // 4. PROJECT PARALLAX
      const projects = gsap.utils.toArray('.project-card');
      projects.forEach(card => {
        const img = card.querySelector('.parallax-img');
        if(img) {
          gsap.to(img, {
            y: "20%",
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          });
        }
      });

      // 5. TESTIMONIALS
      const testimonials = gsap.utils.toArray(".testimonial-card");
      if (testimonials.length > 0) {
        testimonials.forEach((card) => {
          gsap.fromTo(card,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1.5,
              ease: "power4.out",
              scrollTrigger: { 
                trigger: card, 
                start: "top 85%" 
              }
            }
          );
        });
      }
    });

    return () => {
      ctx.revert();
      if (lenis) lenis.destroy();
    };
  }, []);
};