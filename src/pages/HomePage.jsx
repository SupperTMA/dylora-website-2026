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
  // 1. FREEZE THE STATE ON MOUNT
  // We use a function inside useState(() => ...) so this logic runs ONLY ONCE when the page loads.
  // This value will NOT change even when we update sessionStorage later.
  const [isFirstVisit] = useState(() => {
    const visited = sessionStorage.getItem("hasVisited");
    return !visited; // If not visited, it's the first visit.
  });

  // 2. Initialize visibility based on that frozen state
  const [showPreloader, setShowPreloader] = useState(isFirstVisit);
  const [canStartHero, setCanStartHero] = useState(!isFirstVisit);

  useScrollAnimations();

  const handlePreloaderComplete = () => {
    // We assume the user has now visited
    sessionStorage.setItem("hasVisited", "true");
    
    // Hide Preloader, Start Hero
    setShowPreloader(false);
    setCanStartHero(true);
  };

  return (
    <>
      {/* Only render Preloader if it's the first visit */}
      {showPreloader && (
        <Preloader onComplete={handlePreloaderComplete} />
      )}

      {/* CRITICAL FIX: 
         We pass 'isFirstVisit' (the frozen state). 
         Even though sessionStorage is now "true", 'isFirstVisit' stays TRUE for this session,
         ensuring the Hero plays the LONG animation.
      */}
      <Navbar />
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