import { useEffect } from 'react';
import gsap from 'gsap';

export const useMagneticButton = (buttonRef) => {
  useEffect(() => {
    const btn = buttonRef.current;
    if (!btn) return;

    const mouseMoveHandler = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      gsap.to(btn, { 
        x: x * 0.3, 
        y: y * 0.3, 
        duration: 0.3, 
        ease: "power2.out" 
      });
      
      const span = btn.querySelector("span");
      if (span) {
        gsap.to(span, { 
          x: x * 0.2, 
          y: y * 0.2, 
          duration: 0.3, 
          ease: "power2.out" 
        });
      }
    };
    
    const mouseLeaveHandler = () => {
      gsap.to(btn, { 
        x: 0, 
        y: 0, 
        duration: 0.5, 
        ease: "elastic.out(1, 0.3)" 
      });
      
      const span = btn.querySelector("span");
      if (span) {
        gsap.to(span, { 
          x: 0, 
          y: 0, 
          duration: 0.5, 
          ease: "elastic.out(1, 0.3)" 
        });
      }
    };

    btn.addEventListener("mousemove", mouseMoveHandler);
    btn.addEventListener("mouseleave", mouseLeaveHandler);

    return () => {
      btn.removeEventListener("mousemove", mouseMoveHandler);
      btn.removeEventListener("mouseleave", mouseLeaveHandler);
    };
  }, [buttonRef]);
};