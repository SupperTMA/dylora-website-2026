import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const useProgressBar = (barRef) => {
  useEffect(() => {
    if (!barRef?.current) return;
    const trigger = ScrollTrigger.create({
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        gsap.set(barRef.current, {
          scaleX: self.progress,
          transformOrigin: "left center",
        });
      },
    });
    return () => trigger.kill();
  }, []);
};
export default useProgressBar;
