import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
const useIdleAutoScroll = (delay = 3500) => {
  const timer = useRef(null);
  useEffect(() => {
    const autoScroll = () => {
      timer.current = setTimeout(() => {
        const scrollY = window.scrollY;
        const maxScroll =
          document.documentElement.scrollHeight - window.innerHeight;
        if (scrollY < maxScroll) {
          gsap.to(window, {
            scrollTo: {
              y: scrollY + window.innerHeight * 0.6,
              autoKill: true,
            },
            duration: 1.2,
            ease: "power2.out",
          });
        }
      }, delay);
    };
    const resetTimer = () => {
      clearTimeout(timer.current);
      autoScroll();
    };
    autoScroll();
    window.addEventListener("wheel", resetTimer, { passive: true });
    window.addEventListener("touchstart", resetTimer, { passive: true });
    return () => {
      clearTimeout(timer.current);
      window.removeEventListener("wheel", resetTimer);
      window.removeEventListener("touchstart", resetTimer);
    };
  }, [delay]);
};
export default useIdleAutoScroll;
