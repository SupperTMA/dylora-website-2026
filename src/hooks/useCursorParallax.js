import gsap from "gsap";
const useCursorParallax = () => {
  const onMove = (e, ref) => {
    if (!ref?.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(ref.current, {
      x: x * 0.05,
      y: y * 0.05,
      duration: 0.4,
      ease: "power3.out",
    });
  };
  const onLeave = (ref) => {
    if (!ref?.current) return;

    gsap.to(ref.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "power3.out",
    });
  };
  return { onMove, onLeave };
};
export default useCursorParallax;
