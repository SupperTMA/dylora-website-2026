import React, { useState, useEffect, useRef } from "react";
import { projects } from "../data/projects";
import {
  motion,
  useAnimation,
  useScroll,
  useTransform,
} from "framer-motion";
import StatsSection from "../components/StatsSection";
import { useNavigate } from "react-router-dom";
import InnovationSection from "../components/InnovationSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import MagneticButton from "../components/UI/MagneticButton";

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
            w-full h-28 sm:h-36 md:h-48 object-cover
            transform group-hover:scale-110
            transition-transform duration-700 ease-out
          "
        />
      </div>

      <div className="p-3 sm:p-4 md:p-5">
        <p className="text-xs sm:text-sm text-gray-400 mb-1">
          {project.category}
        </p>
        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-[var(--accent)] line-clamp-1">
          {project.title}
        </h3>
        <p className="text-[10px] sm:text-xs md:text-sm text-gray-400 mt-2 line-clamp-2">
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
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);

  const [dimensions, setDimensions] = useState({
    cardWidth: window.innerWidth < 640 ? 160 : window.innerWidth < 768 ? 220 : 320,
    gap: window.innerWidth < 768 ? 24 : 40,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        cardWidth:
          window.innerWidth < 640
            ? 160
            : window.innerWidth < 768
            ? 220
            : 320,
        gap: window.innerWidth < 768 ? 24 : 40,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalCardSpace = dimensions.cardWidth + dimensions.gap;
  const setWidth = projects.length * totalCardSpace;

  const [currentX, setCurrentX] = useState(-setWidth);
  const containerRef = useRef(null);

  const filters = ["All", "Web Development", "Web App", "UI/UX"];
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 300], [0, 60]);

  useEffect(() => {
    if (activeFilter === "All" && !isPaused) {
      controls.start({
        x: [currentX, currentX - setWidth],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        },
      });
    } else {
      controls.stop();
      if (activeFilter !== "All") {
        setCurrentX(0);
        controls.start({
          x: 0,
          transition: { type: "spring", stiffness: 100, damping: 20 },
        });
      }
    }
  }, [activeFilter, isPaused, controls, setWidth, currentX]);

  const handleInfiniteMove = async (direction) => {
    if (activeFilter !== "All") return;

    setIsPaused(true);
    controls.stop();

    let startX = currentX;
    if (containerRef.current) {
      const style = window.getComputedStyle(containerRef.current);
      const matrix = new DOMMatrixReadOnly(style.transform);
      startX = matrix.m41;
    }

    let newX =
      direction === "left"
        ? startX + totalCardSpace
        : startX - totalCardSpace;

    if (newX > -totalCardSpace) newX -= setWidth;
    else if (newX < -(setWidth * 2)) newX += setWidth;

    setCurrentX(newX);

    await controls.start({
      x: newX,
      transition: { type: "spring", stiffness: 200, damping: 25 },
    });

    setIsPaused(false);
  };

  const handleMouseEnter = () => {
    if (activeFilter !== "All") return;
    setIsPaused(true);
    if (containerRef.current) {
      const style = window.getComputedStyle(containerRef.current);
      const matrix = new DOMMatrixReadOnly(style.transform);
      setCurrentX(matrix.m41);
    }
  };

  const filteredProjects =
    activeFilter === "All"
      ? [...projects, ...projects, ...projects]
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="bg-black min-h-screen text-white px-6 md:px-16 py-16">
      {/* HERO */}
      <motion.div
        style={{ y: parallaxY }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto mb-12"
      >
        <span className="inline-block mb-3 text-xs tracking-widest uppercase text-[var(--accent)]">
          Our Work
        </span>

        <h1 className="w-full flex flex-col items-center justify-center text-center font-display font-extrabold uppercase tracking-tighter leading-[0.95]
          text-[2.6rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[7rem]">
          <span className="block text-white">OUR</span>
          <span className="block text-white text-outline">PROJECTS</span>
        </h1>

        <p className="text-gray-400 mt-4 text-base md:text-lg leading-relaxed">
          A curated selection of impactful digital projects crafted to solve
          real-world problems and deliver meaningful results.
        </p>

        <div className="flex justify-center mt-6">
          <MagneticButton
            onClick={() => navigate("/contact")}
            className="px-10 py-3 rounded-full font-medium text-black bg-[var(--accent)]"
          >
            <span>Let’s Create</span>
          </MagneticButton>
        </div>
      </motion.div>

      {/* FILTER */}
      <div className="flex flex-col items-center mb-8">
        <span className="text-xs tracking-widest uppercase text-gray-500 mb-3">
          Project Category
        </span>
        <div className="flex flex-wrap justify-center gap-4">
          {filters.map((filter) => (
            <MagneticButton key={filter} distance={0.1}>
              <button
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm transition-all ${
                  activeFilter === filter
                    ? "bg-[var(--accent)] text-black"
                    : "bg-[#1a1a1a] text-gray-300 hover:bg-[#222]"
                }`}
              >
                {filter}
              </button>
            </MagneticButton>
          ))}
        </div>
      </div>

      {/* SLIDER */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsPaused(false)}
      >
        {activeFilter === "All" && (
          <>
            <div className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-50">
              <button
                onClick={() => handleInfiniteMove("left")}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/60 border border-white/20 text-white hover:bg-[var(--accent)] hover:text-black"
              >
                ‹
              </button>
            </div>

            <div className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-50">
              <button
                onClick={() => handleInfiniteMove("right")}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/60 border border-white/20 text-white hover:bg-[var(--accent)] hover:text-black"
              >
                ›
              </button>
            </div>
          </>
        )}

        <motion.div
          ref={containerRef}
          animate={controls}
          initial={{ x: -setWidth }}
          style={{ x: activeFilter === "All" ? currentX : 0 }}
          className={`flex ${
            window.innerWidth < 768 ? "gap-6 px-4" : "gap-10 px-16"
          } ${activeFilter === "All" ? "w-max" : "w-full justify-center flex-wrap"}`}
        >
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              style={{ width: `${dimensions.cardWidth}px` }}
              className="flex-shrink-0"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* SERVICES BUTTON */}
      <div className="flex justify-center mt-12 mb-8">
        <MagneticButton
          onClick={() => navigate("/services")}
          className="px-8 py-3 rounded-full font-medium text-black bg-[var(--accent)]"
        >
          <span>View Our Services</span>
        </MagneticButton>
      </div>

      {/* SECTIONS */}
      <div className="space-y-10 md:space-y-14">
        <StatsSection />
        <InnovationSection />
        <WhyChooseUsSection />
      </div>
    </div>
  );
};

export default ProjectsPage;
