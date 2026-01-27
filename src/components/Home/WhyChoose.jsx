import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FAN_CARDS = [
  {
    title: "Fast Delivery",
    desc: "Quick turnaround times without compromising quality.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80"
  },
  {
    title: "Secure Solutions",
    desc: "Enterprise-grade security for all your applications.",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80"
  },
  {
    title: "Innovative Tech", 
    desc: "Cutting-edge tools like Three.js and AI integration.",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80"
  },
  {
    title: "Continuous Support",
    desc: "24/7 monitoring and maintenance services.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
  },
  {
    title: "Growth Focused",
    desc: "Solutions designed to scale with your business.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
  }
];

const WhyChoose = () => {
  const containerRef = useRef(null);
  const isIntroComplete = useRef(false);
  
  useLayoutEffect(() => {
    // Determine screen size for calculations
    const isMobile = window.innerWidth < 768;
    
    // FIX 1: Tighter rotation on mobile to prevent corner clipping
    const spacingRot = isMobile ? 4 : 6; 
    const spacingX = isMobile ? 30 : 60; 

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.fan-card');
      const centerIndex = Math.floor(cards.length / 2);
      const config = { spacingX, spacingRot, spreadX: 140, spreadRot: 12, centerIndex };
      const getBaseZIndex = (index) => 10 - Math.abs(index - centerIndex);

      let currentActive = null;

      function updateCards(activeIndex) {
        if (!isIntroComplete.current) return;

        cards.forEach((card, index) => {
          const offset = index - config.centerIndex;
          const text = card.querySelector('p');
          const bg = card.querySelector('.card-bg');
          
          gsap.killTweensOf(card); gsap.killTweensOf(text); gsap.killTweensOf(bg);

          if (activeIndex === null) {
            // NEUTRAL STATE
            gsap.to(card, {
              duration: 0.6, overwrite: true, ease: "power3.out",
              x: offset * config.spacingX,
              y: Math.abs(offset) * 15,
              rotate: offset * config.spacingRot,
              scale: index === centerIndex ? (isMobile ? 1 : 1.05) : (isMobile ? 0.9 : 0.9), 
              zIndex: getBaseZIndex(index)
            });
            
            gsap.to(bg, { opacity: 0.2, duration: 0.3 });
            gsap.to(text, { opacity: 0, y: 10, duration: 0.2 });
          } 
          else {
            if (index === activeIndex) {
              // ACTIVE STATE
              gsap.to(card, {
                duration: 0.4, overwrite: true, ease: "back.out(1.4)",
                x: offset * config.spacingX, 
                // FIX 2: Set Y to 0 on mobile. (Was -30, which pushed it off screen top)
                y: isMobile ? 0 : -60, 
                rotate: 0, 
                scale: 1.15, 
                zIndex: 100
              });
              
              gsap.to(bg, { opacity: 0.6, duration: 0.3 });
              gsap.to(text, { opacity: 1, y: 0, duration: 0.3, delay: 0.1 });
            } else {
              // SIBLING STATE
              const direction = index < activeIndex ? -1 : 1;
              gsap.to(card, {
                duration: 0.4, overwrite: true, ease: "power2.out",
                x: (offset * config.spacingX) + (config.spreadX * direction),
                y: Math.abs(offset) * 15 + 40,
                rotate: (offset * config.spacingRot) + (config.spreadRot * direction),
                scale: 0.85,
                zIndex: getBaseZIndex(index)
              });
              gsap.to(bg, { opacity: 0.1, duration: 0.3 });
              gsap.to(text, { opacity: 0, y: 10, duration: 0.2 });
            }
          }
        });
      }

      // Initial State
      gsap.set(cards, {
        x: 0,
        y: 100,
        rotate: 0,
        scale: 0.9,
        zIndex: (i) => getBaseZIndex(i)
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 70%",
        onEnter: () => {
          cards.forEach((card, index) => {
            const offset = index - config.centerIndex;
            
            gsap.to(card, {
              duration: 1.75,
              ease: "elastic.out(1, 0.6)",
              delay: index * 0.05,
              x: offset * config.spacingX,
              y: Math.abs(offset) * 15,
              rotate: offset * config.spacingRot,
              scale: index === centerIndex ? 1.05 : 0.9,
              onComplete: () => {
                if (index === cards.length - 1) {
                  isIntroComplete.current = true;
                }
              }
            });
            const bg = card.querySelector('.card-bg');
            gsap.to(bg, { opacity: 0.2, duration: 0.5 });
          });
        }
      });

      cards.forEach((card, index) => {
        card.addEventListener('mouseenter', () => {
          if (currentActive !== index) { currentActive = index; updateCards(index); }
        });
        card.addEventListener('click', () => {
          if (currentActive !== index) { currentActive = index; updateCards(index); }
          else { currentActive = null; updateCards(null); }
        });
      });

      const handleGlobalMouseOver = (e) => {
        if (!e.target.closest('.fan-card') && currentActive !== null) {
          currentActive = null; updateCards(null);
        }
      };
      document.addEventListener('mouseover', handleGlobalMouseOver);
      return () => document.removeEventListener('mouseover', handleGlobalMouseOver);
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-20 md:py-32 border-t border-white/10 bg-[#050505] overflow-hidden min-h-[100vh] flex flex-col justify-center relative">
      <div className="max-w-[1800px] mx-auto px-6 mb-12 md:mb-24 text-center relative z-0 pointer-events-none">
        <h2 className="font-display text-4xl md:text-6xl mb-4 text-white">Why Choose Dylora?</h2>
        <p className="text-gray-400 text-sm md:text-base">Technical precision meets creative innovation.</p>
      </div>

      {/* FIX 3: Increased Height on mobile (h-[600px]) so rotated cards don't clip at bottom */}
      <div ref={containerRef} className="relative w-full h-[600px] md:h-[450px] flex justify-center items-center perspective-1000 pointer-events-none">
        {FAN_CARDS.map((card, index) => (
          <div 
            key={index} 
            // Mobile: slightly narrower (60vw) to prevent side clipping during rotation
            className="fan-card absolute w-[60vw] md:w-[280px] h-[360px] md:h-[460px] rounded-[20px] p-6 bg-[#0a0a0a] border border-[#D9F99D]/20 hover:border-[#D9F99D] shadow-2xl flex flex-col justify-end pointer-events-auto cursor-pointer will-change-transform origin-bottom-center transition-colors duration-300"
          >
            <img 
              className="card-bg absolute top-0 left-0 w-full h-full object-cover rounded-[20px] pointer-events-none" 
              src={card.img} 
              alt={card.title}
            />
            
            <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none rounded-b-[20px]" />

            <div className="relative z-10 pointer-events-none">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 font-display">{card.title}</h3>
              <p className="text-xs md:text-sm text-[#D9F99D] opacity-0 translate-y-2 leading-relaxed font-mono">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;