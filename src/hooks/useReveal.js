import { useEffect, useRef, useState } from "react";
const useReveal = (threshold = 0.3) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.unobserve(element);
        }
      },
      { threshold }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, show };
};
export default useReveal;
