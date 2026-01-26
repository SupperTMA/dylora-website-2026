import React, { useState, useEffect } from "react";
import { projects } from "../data/projects";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import StatsSection from "../components/StatsSection";
import { useNavigate } from "react-router-dom";
import InnovationSection from "../components/InnovationSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import MagneticButton from "../components/UI/MagneticButton";

/* ======================
   Marquee Animation
====================== */
const marqueeVariants = {
  animate: {
    x: ["0%", "-50%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 40,
        ease: "linear",
      },
    },
  },
};

/* ======================
   Project Card
====================== */
const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="
        group relative bg-[#111] rounded-xl overflow-hidden
        border border-white/10 transition-all duration-500
        hover:border-[var(--accent)]/40
        hover:shadow-[0_0_40px_rgba(217,249,157,0.15)]
      "
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
            w-full h-48 object-cover
            transform group-hover:scale-110
            transition-transform duration-700 ease-out
          "
        />
      </div>

      <div className="p-5">
        <p className="text-sm text-gray-400 mb-1">{project.category}</p>
        <h3 className="text-lg font-semibold text-[var(--accent)]">
          {project.title}
        </h3>
        <p className="text-sm text-gray-400 mt-2">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

/* ======================
   Projects Page
====================== */
const ProjectsPage = () => {
  const controls = useAnimation();
  const [activeFilter, setActiveFilter] = useState("All");
  const navigate = useNavigate();

  const filters = ["All", "Web Development", "Web App", "UI/UX"];

  useEffect(() => {
    controls.start("animate");
  }, [controls]);

  // PARALLAX
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 300], [0, 60]);

  // Move LEFT
  const moveLeft = () => {
    controls.stop();
    controls.start({
      x: "-=320",
      transition: { duration: 0.8, ease: "easeOut" },
    });
    setTimeout(() => controls.start("animate"), 900);
  };

  // Move RIGHT
  const moveRight = () => {
    controls.stop();
    controls.start({
      x: "+=320",
      transition: { duration: 0.8, ease: "easeOut" },
    });
    setTimeout(() => controls.start("animate"), 900);
  };

  return (
    <div className="bg-black min-h-screen text-white px-6 md:px-16 py-24">

      {/* HERO HEADER */}
      <motion.div
        style={{ y: parallaxY }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto mb-20"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-block mb-4 text-xs tracking-widest uppercase text-[var(--accent)]"
        >
          Our Work
        </motion.span>

        {/* ✅ HERO STYLE HEADING */}
        <h1 className="font-display font-extrabold uppercase tracking-tighter text-[clamp(3.5rem,8vw,7rem)] leading-[0.9]">
          <span className="text-[var(--accent)]">Our </span>
          <span className="text-white text-outline">Projects</span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-400 mt-6 text-base md:text-lg leading-relaxed"
        >
          A curated selection of impactful digital projects crafted to solve
          real-world problems and deliver meaningful results.
        </motion.p>

        <div className="flex justify-center mt-8">
          <MagneticButton
            onClick={() => navigate("/contact")}
            className="
              px-10 py-3 rounded-full font-medium text-black
              bg-[var(--accent)]
              transition-all duration-300
              hover:shadow-[0_0_30px_rgba(217,249,157,0.6)]
            "
          >
            <span>Let’s Create</span>
          </MagneticButton>
        </div>
      </motion.div>

      {/* FILTER BAR */}
      <div className="flex flex-col items-center mb-14">
        <span className="text-xs tracking-widest uppercase text-gray-500 mb-4">
          Project Category
        </span>

        <div className="flex flex-wrap justify-center gap-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm transition-all ${
                activeFilter === filter
                  ? "bg-[var(--accent)] text-black"
                  : "bg-[#1a1a1a] text-gray-300 hover:bg-[#222]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* SLIDER */}
      <div className="relative overflow-hidden">
        <button onClick={moveLeft} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white text-xl backdrop-blur-md transition-all duration-300 hover:bg-[var(--accent)] hover:text-black hover:scale-110 hover:shadow-[0_0_25px_rgba(217,249,157,0.8)] active:scale-95">‹</button>

        <button onClick={moveRight} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white text-xl backdrop-blur-md transition-all duration-300 hover:bg-[var(--accent)] hover:text-black hover:scale-110 hover:shadow-[0_0_25px_rgba(217,249,157,0.8)] active:scale-95">›</button>

        <motion.div variants={marqueeVariants} animate={controls} className="flex gap-10 w-max px-16">
          {[...projects, ...projects]
            .filter((p) => activeFilter === "All" || p.category === activeFilter)
            .map((project, index) => (
              <div key={index} className="w-[320px] flex-shrink-0">
                <ProjectCard project={project} />
              </div>
            ))}
        </motion.div>
      </div>

      <div className="flex justify-center mt-20 mb-6">
        <MagneticButton
          onClick={() => navigate("/services")}
          className="px-8 py-3 rounded-full font-medium text-black bg-[var(--accent)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(217,249,157,0.6)]"
        >
          <span>View Our Services</span>
        </MagneticButton>
      </div>

      <StatsSection />
      <InnovationSection />
      <WhyChooseUsSection />

    </div>
  );
};

export default ProjectsPage;
