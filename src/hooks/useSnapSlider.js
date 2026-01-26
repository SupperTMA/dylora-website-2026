import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const useSnapSlider = (containerRef, panelsRef) => {
  useEffect(() => {
    if (!containerRef.current || !panelsRef.current.length) return;
    const ctx = gsap.context(() => {
      gsap.to(panelsRef.current, {
        xPercent: -100 * (panelsRef.current.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panelsRef.current.length - 1),
        },
      });
    });
    return () => ctx.revert();
  }, []);
};
export default useSnapSlider;
