import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ServicesPage = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Modern websites\nPerformance focused",
      icon: "💻",
      bgImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80"
    },
    {
      id: 2,
      title: "App Development",
      description: "Android & iOS\nScalable architecture",
      icon: "📱",
      bgImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "User-centered design\nHigh conversion layouts",
      icon: "🎨",
      bgImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
    },
    {
      id: 4,
      title: "Cloud Solutions",
      description: "AWS / Azure\nSecure deployment",
      icon: "☁️",
      bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
    },
    {
      id: 5,
      title: "Cyber Security",
      description: "Data protection\nSecure systems",
      icon: "🛡️",
      bgImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
    },
    {
      id: 6,
      title: "IT Support",
      description: "Maintenance\n24/7 monitoring",
      icon: "⚙️",
      bgImage: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80"
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
      icon: "📦",
      title: "Experienced Team",
      description: "Skilled IT professionals"
    },
    {
      icon: "✅",
      title: "Proven Results",
      description: "Always on schedule"
    },
    {
      icon: "🚀",
      title: "Cutting-Edge Technology",
      description: "Cost effective solutions"
    }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Stars Background */}
      <div className="absolute inset-0 bg-black">
        {[...Array(150)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 pt-32 pb-20 px-8 text-center"
      >
        <motion.h1 
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-[#D9F99D]">OUR </span>
          <span className="text-white">SERVICES</span>
          <br />
          <span className="text-[#D9F99D]">& </span>
          <span className="text-white">SOLUTIONS</span>
        </motion.h1>
        
        <motion.p 
          className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Comprehensive IT services designed to build, scale,
          <br />
          and secure your digital presence.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/contact')}
          className="px-8 py-3 bg-transparent border-2 border-[#D9F99D] text-[#D9F99D] font-semibold rounded-lg hover:bg-[#D9F99D] hover:text-black transition-all duration-300 cursor-pointer"
        >
          Get Free Consultation
        </motion.button>
      </motion.div>

      {/* Services Section */}
      <div className="relative z-10 px-8 md:px-20 pb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          <span className="border-b-2 border-gray-700 pb-2">
            Comprehensive IT Solutions
          </span>
        </motion.h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                rotateY: 5,
                rotateX: 5
              }}
              style={{ 
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
              className="relative bg-[#1a1a1a] border border-gray-800 rounded-lg p-8 text-center hover:border-[#D9F99D] transition-all duration-300 group cursor-pointer overflow-hidden"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 overflow-hidden rounded-lg">
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.bgImage})` }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/95 via-[#1a1a1a]/90 to-[#1a1a1a]/95 group-hover:from-[#1a1a1a]/98 group-hover:via-[#1a1a1a]/95 group-hover:to-[#1a1a1a]/98 transition-all duration-500" />
              </div>

              {/* Icon with 3D effect */}
              <motion.div 
                className="relative z-10 text-6xl mb-4 inline-block"
                whileHover={{ 
                  scale: 1.3, 
                  rotateY: 360,
                  rotateZ: [0, -10, 10, -10, 0]
                }}
                transition={{ 
                  rotateY: { duration: 0.8 },
                  rotateZ: { duration: 0.5 },
                  scale: { duration: 0.3 }
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center text-4xl border border-gray-700 group-hover:border-[#D9F99D] group-hover:shadow-lg group-hover:shadow-[#D9F99D]/30 transition-all duration-300"
                  style={{ 
                    transform: "translateZ(20px)",
                    // Updated RGBA for D9F99D (217, 249, 157)
                    boxShadow: "0 10px 30px rgba(217, 249, 157, 0)"
                  }}
                >
                  {service.icon}
                </div>
              </motion.div>

              {/* Title with 3D effect */}
              <motion.h3 
                className="relative z-10 text-xl font-bold mb-3 group-hover:text-[#D9F99D] transition-colors duration-300"
                style={{ transform: "translateZ(10px)" }}
              >
                {service.title}
              </motion.h3>

              {/* Description */}
              <p className="relative z-10 text-gray-400 text-sm mb-6 whitespace-pre-line leading-relaxed">
                {service.description}
              </p>

              {/* Learn More with arrow animation */}
              <motion.button
                onClick={() => navigate('/contact')}
                className="relative z-10 text-[#D9F99D] text-sm font-semibold inline-flex items-center gap-2 group/link cursor-pointer bg-transparent border-none"
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

              {/* Animated Glow Effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-[#D9F99D]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />

              {/* 3D Corner decoration */}
              <motion.div 
                className="absolute top-0 right-0 w-20 h-20 bg-[#D9F99D]/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                whileHover={{ scale: 1.2 }}
              />

              {/* Animated particles */}
              <motion.div
                className="absolute top-2 right-2 w-2 h-2 bg-[#D9F99D] rounded-full opacity-0 group-hover:opacity-100"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              />
              <motion.div
                className="absolute bottom-2 left-2 w-2 h-2 bg-[#D9F99D] rounded-full opacity-0 group-hover:opacity-100"
                animate={{
                  y: [0, 20, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2 + 0.5
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="relative z-10 px-8 md:px-20 pb-20 overflow-hidden">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          <span className="border-b-2 border-gray-700 pb-2">
            Projects Delivered Under Our Services
          </span>
        </motion.h2>

        {/* Horizontal Scrolling Container */}
        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden">
            <motion.div 
              className="flex gap-6"
              animate={{
                x: [0, -2000]
              }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            >
              {/* Double the projects array for seamless loop */}
              {[...projects, ...projects].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % projects.length) * 0.1 }}
                  whileHover={{ y: -15, scale: 1.03 }}
                  className="relative bg-[#1a1a1a] border border-gray-800 rounded-lg overflow-hidden hover:border-[#D9F99D] transition-all duration-300 group cursor-pointer flex-shrink-0 w-[350px]"
                >
                  {/* Image with zoom effect */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/50 to-transparent" />
                    
                    {/* Overlay glow effect */}
                    <motion.div 
                      className="absolute inset-0 bg-[#D9F99D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-[#D9F99D] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 whitespace-pre-line">
                      {project.description}
                    </p>

                    {/* Rating with stagger animation */}
                    <div className="flex gap-1">
                      {[...Array(project.rating)].map((_, i) => (
                        <motion.span 
                          key={i}
                          className="text-[#D9F99D] text-lg"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: (index % projects.length) * 0.1 + i * 0.1 }}
                          whileHover={{ scale: 1.3, rotate: 15 }}
                        >
                          ⭐
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom glow line */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D9F99D] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Gradient Fade Edges */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
        </div>
      </div>

      {/* Client Stories Section */}
      <div className="relative z-10 px-8 md:px-20 pb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          <span className="border-b-2 border-gray-700 pb-2">
            Client Stories?
          </span>
        </motion.h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {clientStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, x: 10 }}
              className="flex items-start gap-4 cursor-pointer"
            >
              <motion.div 
                className="text-4xl flex-shrink-0"
                whileHover={{ 
                  scale: 1.3,
                  rotate: [0, -15, 15, -15, 0]
                }}
                transition={{ duration: 0.5 }}
              >
                {story.icon}
              </motion.div>
              <div>
                <h3 className="text-lg font-bold mb-2">
                  {story.title}
                </h3>
                <p className="text-gray-400 text-sm">
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
        className="relative z-10 px-8 pb-32 text-center"
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Let's build powerful digital solutions together
        </motion.h2>
        <motion.p 
          className="text-gray-400 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Transform your business with our expertise
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/contact')}
          // Updated hover to a darker lime (bef264) to match the D9F99D theme
          className="px-8 py-3 bg-[#D9F99D] text-black font-bold rounded-lg hover:bg-[#bef264] transition-all duration-300 cursor-pointer shadow-lg shadow-[#D9F99D]/20 hover:shadow-[#D9F99D]/40"
        >
          Get Started Today
        </motion.button>
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
        className="absolute top-1/4 right-20 w-64 h-64 bg-[#D9F99D]/10 rounded-full blur-3xl pointer-events-none"
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
        className="absolute bottom-1/3 left-20 w-64 h-64 bg-[#D9F99D]/10 rounded-full blur-3xl pointer-events-none"
      />

      <motion.div
        animate={{ 
          x: [-20, 20, -20],
          opacity: [0.1, 0.25, 0.1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#D9F99D]/5 rounded-full blur-3xl pointer-events-none"
      />
    </div>
  );
};

export default ServicesPage;