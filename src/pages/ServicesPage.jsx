import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Import icons from same directory (pages/icons)
import WebDevIcon from './icons/WebDev.png';
import AppDevIcon from './icons/AppDev.png';
import UIUXDesIcon from './icons/UIUXDes.png';
import CloudSolIcon from './icons/CloudSol.png';
import CyberSeIcon from './icons/CyberSe.png';
import ITSupIcon from './icons/ITSup.png';

const ServicesPage = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);
  const scrollContainerRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Modern websites\nPerformance focused",
      icon: WebDevIcon,
      bgImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
      tools: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Secure"],
      deliveryTime: "2-4 weeks"
    },
    {
      id: 2,
      title: "App Development",
      description: "Android & iOS\nScalable architecture",
      icon: AppDevIcon,
      bgImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      tools: ["React Native", "Flutter", "Firebase", "Swift", "Kotlin"],
      features: ["Cross-platform", "Native Performance", "Push Notifications", "Offline Mode"],
      deliveryTime: "3-6 weeks"
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "User-centered design\nHigh conversion layouts",
      icon: UIUXDesIcon,
      bgImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      tools: ["Figma", "Adobe XD", "Sketch", "Illustrator", "Protopie"],
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
      deliveryTime: "1-3 weeks"
    },
    {
      id: 4,
      title: "Cloud Solutions",
      description: "AWS / Azure\nSecure deployment",
      icon: CloudSolIcon,
      bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      tools: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"],
      features: ["Auto Scaling", "High Availability", "Cost Optimization", "24/7 Monitoring"],
      deliveryTime: "1-2 weeks"
    },
    {
      id: 5,
      title: "Cyber Security",
      description: "Data protection\nSecure systems",
      icon: CyberSeIcon,
      bgImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
      tools: ["Firewall", "VPN", "SSL/TLS", "Penetration Testing", "SIEM"],
      features: ["Threat Detection", "Data Encryption", "Compliance", "Risk Assessment"],
      deliveryTime: "Ongoing"
    },
    {
      id: 6,
      title: "IT Support",
      description: "Maintenance\n24/7 monitoring",
      icon: ITSupIcon,
      bgImage: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80",
      tools: ["ServiceNow", "Jira", "Zendesk", "Slack", "Teams"],
      features: ["24/7 Support", "Remote Assistance", "System Updates", "Backup & Recovery"],
      deliveryTime: "24/7"
    }
  ];

  const projects = [
    {
      title: "Web Development",
      description: "Modern websites\nperformance secure",
      rating: 5,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80"
    },
    {
      title: "App Development",
      description: "Android & iOS\n5-star protective",
      rating: 5,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80"
    },
    {
      title: "IT Support",
      description: "Maintenance\n24/7 monitoring",
      rating: 5,
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&q=80"
    },
    {
      title: "UI/UX Design",
      description: "Beautiful interfaces\nUser experience focused",
      rating: 5,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80"
    },
    {
      title: "Game Development",
      description: "Immersive gaming\nCross-platform",
      rating: 5,
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&q=80"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable infrastructure\nAWS & Azure",
      rating: 5,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80"
    }
  ];

  const clientStories = [
    {
      icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Busts%20in%20Silhouette.png",
      title: "Experienced Team",
      description: "Skilled IT professionals"
    },
    {
      icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Symbols/Check%20Mark%20Button.png",
      title: "Proven Results",
      description: "Always on schedule"
    },
    {
      icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png",
      title: "Cutting-Edge Technology",
      description: "Cost effective solutions"
    }
  ];

  // Scroll functions for arrow buttons
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      setIsAutoScrolling(false);
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
      setTimeout(() => setIsAutoScrolling(true), 3000);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      setIsAutoScrolling(false);
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
      setTimeout(() => setIsAutoScrolling(true), 3000);
    }
  };

  // Magnetic Button Component
  const MagneticButton = ({ children, onClick, className }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    
    const springConfig = { damping: 10, stiffness: 200 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);

    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      const maxDistance = 150;
      
      if (distance < maxDistance) {
        const strength = (maxDistance - distance) / maxDistance;
        x.set(distanceX * strength * 0.6);
        y.set(distanceY * strength * 0.6);
      }
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <motion.button
        style={{ x: xSpring, y: ySpring }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        className={className}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.button>
    );
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-8 text-center"
      >
        <motion.h1 
          className="font-display font-extrabold text-[clamp(1.5rem,4.5vw,5rem)] tracking-tighter uppercase mix-blend-difference leading-[0.9] px-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-[#B5E77D] hover:text-transparent hover:[-webkit-text-stroke:2px_#B5E77D] transition-all duration-300 inline-block cursor-pointer">OUR </span>
          <span className="text-white">SERVICES</span>
          <br />
          <span className="text-[#B5E77D]">& </span>
          <span className="text-white">SOLUTIONS</span>
        </motion.h1>
        
        <motion.p 
          className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Comprehensive IT services designed to build, scale, and secure your digital presence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <MagneticButton
            onClick={() => navigate('/contact')}
            className="px-6 sm:px-8 py-3 bg-[#B5E77D] text-black font-semibold rounded-lg hover:bg-[#A3D96C] transition-all duration-300 cursor-pointer text-sm sm:text-base shadow-lg shadow-[#B5E77D]/30"
          >
            Get Free Consultation
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Services Section */}
      <div className="relative z-10 px-2 sm:px-4 md:px-8 lg:px-20 pb-12 sm:pb-20 overflow-visible">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 mb-4 flex-wrap px-2">
            <div className="h-px bg-gradient-to-r from-transparent via-[#B5E77D] to-transparent w-8 sm:w-16 md:w-24 lg:w-48"></div>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center px-2">
              Comprehensive IT Solutions
            </h2>
            <div className="h-px bg-gradient-to-r from-transparent via-[#B5E77D] to-transparent w-8 sm:w-16 md:w-24 lg:w-48"></div>
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
              }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative bg-[#1a1a1a] border border-gray-800 rounded-lg p-4 sm:p-6 md:p-8 text-center hover:border-[#B5E77D] transition-all duration-300 group cursor-pointer overflow-visible"
              style={{ zIndex: hoveredCard === service.id ? 110 : 1 }}
            >
              <div className="absolute inset-0 overflow-hidden rounded-lg">
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.bgImage})` }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/95 via-[#1a1a1a]/90 to-[#1a1a1a]/95 group-hover:from-[#1a1a1a]/98 group-hover:via-[#1a1a1a]/95 group-hover:to-[#1a1a1a]/98 transition-all duration-500" />
              </div>

              {/* 3D Icon with Curves */}
              <motion.div 
                className="relative z-10 mb-4 sm:mb-6 inline-block"
                whileHover={{ 
                  scale: 1.12,
                  y: -8,
                  rotateY: 8,
                }}
                transition={{ duration: 0.4 }}
                style={{ perspective: "1000px" }}
              >
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mx-auto">
                  {/* Bottom shadow for 3D depth */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-3 sm:w-20 sm:h-4 bg-[#B5E77D]/20 blur-lg rounded-full" />
                  
                  {/* Icon container with curved edges */}
                  <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-black/20 to-black/40 p-2 sm:p-3 backdrop-blur-sm">
                    {/* Top light reflection for 3D */}
                    <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/10 to-transparent rounded-t-3xl pointer-events-none z-10" />
                    
                    {/* Icon with glow */}
                    <img 
                      src={service.icon} 
                      alt={service.title}
                      className="relative w-full h-full object-contain drop-shadow-[0_8px_20px_rgba(141,184,118,0.4)] group-hover:drop-shadow-[0_12px_30px_rgba(141,184,118,0.6)] transition-all duration-500"
                      style={{
                        filter: "brightness(1.1) contrast(1.05)",
                        transform: "translateZ(10px)"
                      }}
                    />
                    
                    {/* Bottom shadow overlay for depth */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/30 to-transparent rounded-b-3xl pointer-events-none" />
                    
                    {/* Subtle border glow */}
                    <div className="absolute inset-0 rounded-3xl border border-[#B5E77D]/20 group-hover:border-[#B5E77D]/40 transition-all duration-500" />
                  </div>
                  
                  {/* Single sparkle */}
                  <motion.div
                    className="absolute top-1 right-1 sm:top-2 sm:right-2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#B5E77D] rounded-full"
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.5, 0.9, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </motion.div>

              <h3 className="relative z-10 text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 group-hover:text-[#B5E77D] transition-colors duration-300">
                {service.title}
              </h3>

              <p className="relative z-10 text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 md:mb-6 whitespace-pre-line leading-relaxed">
                {service.description}
              </p>

              <motion.button
                onClick={() => navigate('/contact')}
                className="relative z-10 text-[#B5E77D] text-xs sm:text-sm font-semibold inline-flex items-center gap-2 cursor-pointer bg-transparent border-none"
                whileHover={{ x: 5 }}
              >
                Learn More
                <motion.span 
                  className="inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  →
                </motion.span>
              </motion.button>

              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-[#B5E77D]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"
              />

              {/* Popup Card on Hover - Desktop Only */}
              {hoveredCard === service.id && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                  className="hidden md:block absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-[340px] lg:w-[380px] bg-gradient-to-br from-[#1a1a1a] via-[#0a0a0a] to-black border-2 border-[#B5E77D] rounded-2xl p-4 lg:p-6 shadow-2xl shadow-[#B5E77D]/30 z-[100]"
                  style={{
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {/* Arrow pointing down to card */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#B5E77D] rotate-45" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Title with icon */}
                    <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[#B5E77D]/30">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-[#B5E77D]/10 flex items-center justify-center flex-shrink-0">
                        <img src={service.icon} alt="" className="w-6 h-6 lg:w-8 lg:h-8 object-contain" />
                      </div>
                      <h4 className="text-base lg:text-lg font-bold text-[#B5E77D]">{service.title}</h4>
                    </div>

                    {/* Tools/Technologies */}
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Technologies</p>
                      <div className="flex flex-wrap gap-2">
                        {service.tools.map((tool, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs bg-[#B5E77D]/20 text-[#B5E77D] rounded-full border border-[#B5E77D]/40 font-medium"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Key Features</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs lg:text-sm text-gray-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B5E77D] flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Delivery Time */}
                    <div className="pt-3 border-t border-[#B5E77D]/30 flex items-center justify-between">
                      <span className="text-xs text-gray-400">Delivery Time</span>
                      <span className="text-sm font-bold text-[#B5E77D]">{service.deliveryTime}</span>
                    </div>
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B5E77D]/5 to-transparent rounded-2xl pointer-events-none" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Projects Section with Arrow Buttons */}
      <div className="relative z-10 px-2 sm:px-4 md:px-8 lg:px-20 pb-12 sm:pb-20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 mb-4 flex-wrap px-2">
            <div className="h-px bg-gradient-to-r from-transparent via-[#B5E77D] to-transparent w-8 sm:w-16 md:w-24 lg:w-48"></div>
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-center px-2">
              Projects Delivered Under Our Services
            </h2>
            <div className="h-px bg-gradient-to-r from-transparent via-[#B5E77D] to-transparent w-8 sm:w-16 md:w-24 lg:w-48"></div>
          </div>
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          {/* Left Arrow Button */}
          <motion.button
            onClick={scrollLeft}
            whileHover={{ scale: 1.1, x: -3 }}
            whileTap={{ scale: 0.95 }}
            className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-20 bg-[#B5E77D] hover:bg-[#A3D96C] text-black rounded-full p-2 sm:p-3 shadow-lg shadow-[#B5E77D]/30 transition-all duration-300"
          >
            <svg 
              className="w-4 h-4 sm:w-5 sm:h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          {/* Right Arrow Button */}
          <motion.button
            onClick={scrollRight}
            whileHover={{ scale: 1.1, x: 3 }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-20 bg-[#B5E77D] hover:bg-[#A3D96C] text-black rounded-full p-2 sm:p-3 shadow-lg shadow-[#B5E77D]/30 transition-all duration-300"
          >
            <svg 
              className="w-4 h-4 sm:w-5 sm:h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide scroll-smooth px-10 sm:px-12"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <motion.div 
              className="flex gap-3 sm:gap-4 md:gap-6"
              animate={isAutoScrolling ? {
                x: [0, -2400]
              } : {}}
              transition={isAutoScrolling ? {
                x: {
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear"
                }
              } : {}}
            >
              {[...projects, ...projects].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % projects.length) * 0.1 }}
                  whileHover={{ y: -15, scale: 1.03 }}
                  className="relative bg-[#1a1a1a] border border-gray-800 rounded-lg overflow-hidden hover:border-[#B5E77D] transition-all duration-300 group cursor-pointer flex-shrink-0 w-[240px] sm:w-[280px] md:w-[320px] lg:w-[350px]"
                >
                  <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/50 to-transparent" />
                    <motion.div 
                      className="absolute inset-0 bg-[#B5E77D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>

                  <div className="p-3 sm:p-4 md:p-6">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 group-hover:text-[#B5E77D] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 whitespace-pre-line">
                      {project.description}
                    </p>

                    <div className="flex gap-1">
                      {[...Array(project.rating)].map((_, i) => (
                        <motion.span 
                          key={i}
                          className="text-[#B5E77D] text-sm sm:text-base"
                          whileHover={{ scale: 1.3, rotate: 15 }}
                        >
                          ⭐
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B5E77D] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="absolute top-0 left-0 w-8 sm:w-12 h-full bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 right-0 w-8 sm:w-12 h-full bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
        </div>
      </div>

      {/* Client Stories Section */}
      <div className="relative z-10 px-2 sm:px-4 md:px-8 lg:px-20 pb-12 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 mb-4 flex-wrap px-2">
            <div className="h-px bg-gradient-to-r from-transparent via-[#B5E77D] to-transparent w-8 sm:w-16 md:w-24 lg:w-48"></div>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center px-2">
              Client Stories?
            </h2>
            <div className="h-px bg-gradient-to-r from-transparent via-[#B5E77D] to-transparent w-8 sm:w-16 md:w-24 lg:w-48"></div>
          </div>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {clientStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, x: 10 }}
              className="flex items-start gap-3 sm:gap-4 cursor-pointer"
            >
              <motion.div 
                className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
                whileHover={{ 
                  scale: 1.2,
                  rotate: 5
                }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={story.icon} 
                  alt={story.title}
                  className="w-full h-full object-contain drop-shadow-2xl"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </motion.div>
              <div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2">
                  {story.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm">
                  {story.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-4 sm:px-8 pb-20 sm:pb-32 text-center"
      >
        <motion.h2 
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 px-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Let's build powerful digital solutions together
        </motion.h2>
        <motion.p 
          className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Transform your business with our expertise
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <MagneticButton
            onClick={() => navigate('/contact')}
            className="px-6 sm:px-8 py-3 bg-[#B5E77D] text-black font-bold rounded-lg hover:bg-[#A3D96C] transition-all duration-300 cursor-pointer shadow-lg shadow-[#B5E77D]/20 hover:shadow-[#B5E77D]/40 text-sm sm:text-base"
          >
            Get Started Today
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Floating Glow Effects */}
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          opacity: [0.15, 0.35, 0.15],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 right-10 sm:right-20 w-32 h-32 sm:w-64 sm:h-64 bg-[#B5E77D]/10 rounded-full blur-3xl pointer-events-none"
      />
      
      <motion.div
        animate={{ 
          y: [0, 30, 0],
          opacity: [0.15, 0.35, 0.15],
          scale: [1, 1.3, 1]
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-1/3 left-10 sm:left-20 w-32 h-32 sm:w-64 sm:h-64 bg-[#B5E77D]/10 rounded-full blur-3xl pointer-events-none"
      />
    </div>
  );
};  // new one 

export default ServicesPage;