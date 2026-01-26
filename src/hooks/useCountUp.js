import { useEffect, useRef, useState } from "react";
const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const endValue = parseInt(end);
    if (isNaN(endValue)) return;
    const totalFrames = 60;
    const increment = endValue / totalFrames;
    const intervalTime = duration / totalFrames;
    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, intervalTime);
    return () => clearInterval(timer);
  }, [isVisible, end, duration]);
  // Yahan ref aur count return ho raha hai
  return { ref, count };
};
export default useCountUp;