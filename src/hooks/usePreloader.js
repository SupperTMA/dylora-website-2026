import { useState, useEffect } from 'react';

export const usePreloader = () => {
  // Check session storage immediately
  const hasVisited = sessionStorage.getItem("hasVisited");
  
  // If visited, don't show preloader. If not, show it.
  const [isVisible, setIsVisible] = useState(!hasVisited);

  useEffect(() => {
    if (hasVisited) return;

    // We don't need the interval logic here anymore because 
    // the new Preloader.jsx handles its own timeline completely.
    // This hook now primarily serves as a state manager for the parent layout.

  }, [hasVisited]);

  const handlePreloaderComplete = () => {
    setIsVisible(false);
    sessionStorage.setItem("hasVisited", "true");
  };

  return { isVisible, handlePreloaderComplete };
};