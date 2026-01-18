import React, { useState } from 'react';
import { useScrollAnimations } from '../hooks/useScrollAnimations';

import Preloader from '../components/Layout/Preloader';
import Navbar from '../components/Layout/Navbar';
import Hero from '../components/Home/Hero';
import Marquee from '../components/Home/Marquee';
import Services from '../components/Home/Services';
import Projects from '../components/Home/Projects';
import Testimonials from '../components/Home/Testimonials';
import WhyChoose from '../components/Home/WhyChoose';



const HomePage = () => {
  // Remove the stray <Navbar /> line here if it exists in your actual file, 
  // it doesn't do anything inside the function body like that.

  const [isFirstVisit] = useState(() => {
    const visited = sessionStorage.getItem("hasVisited");
    return !visited;
  });

  const [showPreloader, setShowPreloader] = useState(isFirstVisit);
  const [canStartHero, setCanStartHero] = useState(!isFirstVisit);

  useScrollAnimations();

  const handlePreloaderComplete = () => {
    // 1. Mark as visited
    sessionStorage.setItem("hasVisited", "true");
    
    // 2. Hide Preloader, Start Hero
    setShowPreloader(false);
    setCanStartHero(true);

    // 3. TRIGGER NAVBAR REVEAL (This is the fix)
    window.dispatchEvent(new Event('reveal-navbar'));
  };

  return (
    <>
      {showPreloader && (
        <Preloader onComplete={handlePreloaderComplete} />
      )}
      
      <Hero startAnimation={canStartHero} isFirstLoad={isFirstVisit} />

      <Marquee />
      <Services />
      <Projects />
      <Testimonials />
      <WhyChoose />
    </>
  );
};

export default HomePage;