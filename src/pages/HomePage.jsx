import React from 'react';
import { useScrollAnimations } from '../hooks/useScrollAnimations';

// Components
import Hero from '../components/Home/Hero'; // Renamed from Header.jsx
import Marquee from '../components/Home/Marquee';
import Services from '../components/Home/Services';
import Projects from '../components/Home/Projects';
import Testimonials from '../components/Home/Testimonials';
import WhyChoose from '../components/Home/WhyChoose';

const HomePage = () => {
  // Initialize Animations (Lenis, ScrollTrigger)
  useScrollAnimations();

  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Projects />
      <Testimonials />
      <WhyChoose />
    </>
  );
};

export default HomePage;