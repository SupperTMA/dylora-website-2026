import { useRef } from "react";
const useSwipeGesture = (onLeft, onRight) => {
  const startX = useRef(0);
  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;
    if (diff > 60) onLeft();
    if (diff < -60) onRight();
  };
  return { onTouchStart, onTouchEnd };
};
export default useSwipeGesture;
