import React, { useEffect, useRef } from 'react';

const ScrambleText = ({ text, className = '' }) => {
  const textRef = useRef(null);
  const originalText = text;

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    const mouseOverHandler = () => {
      let iteration = 0;
      clearInterval(element.interval);
      
      element.interval = setInterval(() => {
        element.innerText = element.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) return originalText[index];
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");
        
        if (iteration >= originalText.length) {
          clearInterval(element.interval);
        }
        
        iteration += 1 / 3;
      }, 30);
    };

    element.addEventListener("mouseover", mouseOverHandler);

    return () => {
      clearInterval(element.interval);
      element.removeEventListener("mouseover", mouseOverHandler);
    };
  }, [originalText]);

  return (
    <span ref={textRef} className={`scramble-text ${className}`} data-original={originalText}>
      {originalText}
    </span>
  );
};

export default ScrambleText;