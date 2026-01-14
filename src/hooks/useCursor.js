import { useEffect } from 'react';
import gsap from 'gsap';

export const useCursor = () => {
  useEffect(() => {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    if (!cursorDot || !cursorOutline) return;

    // GSAP quickTo for smooth cursor movement
    let xTo = gsap.quickTo(cursorOutline, "left", {duration: 0.2, ease: "power3"});
    let yTo = gsap.quickTo(cursorOutline, "top", {duration: 0.2, ease: "power3"});
    let xToDot = gsap.quickTo(cursorDot, "left", {duration: 0.1, ease: "power3"});
    let yToDot = gsap.quickTo(cursorDot, "top", {duration: 0.1, ease: "power3"});

    const mouseMoveHandler = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
      xToDot(e.clientX);
      yToDot(e.clientY);
    };

    const hoverTriggers = document.querySelectorAll('.hover-trigger');
    
    const mouseEnterHandler = () => {
      document.body.classList.add('hovering');
    };
    
    const mouseLeaveHandler = () => {
      document.body.classList.remove('hovering');
    };

    window.addEventListener('mousemove', mouseMoveHandler);
    hoverTriggers.forEach(link => {
      link.addEventListener('mouseenter', mouseEnterHandler);
      link.addEventListener('mouseleave', mouseLeaveHandler);
    });

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
      hoverTriggers.forEach(link => {
        link.removeEventListener('mouseenter', mouseEnterHandler);
        link.removeEventListener('mouseleave', mouseLeaveHandler);
      });
    };
  }, []);
};