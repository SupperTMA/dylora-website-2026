import React, { useState, useEffect } from "react";
import { projects } from "../data/projects";
import { motion, useAnimation } from "framer-motion";
import StatsSection from "../components/StatsSection";
import { useNavigate } from "react-router-dom";
import InnovationSection from "../components/InnovationSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";


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

// Project Card
const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="group relative bg-[#111] rounded-xl overflow-hidden border border-white/10 transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-5">
        <p className="text-sm text-gray-400 mb-1">{project.category}</p>
        <h3 className="text-lg font-semibold text-white">
          {project.title}
        </h3>
        <p className="text-sm text-gray-400 mt-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          <span className="px-3 py-1 text-xs rounded-full bg-[#1f1f1f] text-gray-300">React</span>
          <span className="px-3 py-1 text-xs rounded-full bg-[#1f1f1f] text-gray-300">Tailwind</span>
          <span className="px-3 py-1 text-xs rounded-full bg-[#1f1f1f] text-gray-300">UI/UX</span>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsPage = () => {
  const controls = useAnimation();
  const [activeFilter, setActiveFilter] = useState("All");
  const navigate = useNavigate();


  const filters = ["All", "Web Development", "Web App", "UI/UX"];

  useEffect(() => {
    controls.start("animate");
  }, [controls]);

  return (
  <div className="bg-black min-h-screen text-white px-6 md:px-16 py-20">
    
   {/* Heading */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
  className="pt-6 mb-12"
>

  {/* Small label */}
  <span className="inline-block mb-4 px-4 py-1 rounded-full
                   text-xs tracking-widest uppercase
                   bg-cyan-400/10 text-cyan-400">
    Our Work
  </span>

  {/* Main heading */}
  <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight">
    <span className="bg-gradient-to-r from-white to-gray-300
                     bg-clip-text text-transparent">
      Projects That
    </span>
    <br />
    <span className="relative inline-block text-cyan-400">
      Drive Impact
      <span className="absolute left-0 -bottom-2 w-14 h-[3px]
                       bg-cyan-400 rounded-full"></span>
    </span>
  </h1>

  {/* Description */}
  <p className="text-gray-400 mt-8 max-w-2xl text-lg leading-relaxed">
    A curated selection of our most impactful work across web, mobile,
    and digital platforms — designed to solve real problems and
    deliver measurable results.
  </p>

</motion.div>


    {/* Filters */}
    <div className="flex flex-wrap gap-4 mb-12">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`px-5 py-2 rounded-full text-sm ${
            activeFilter === filter
              ? "bg-white text-black"
              : "bg-[#1a1a1a] text-gray-300"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>

    {/* Marquee */}
    <div className="overflow-hidden">
      <motion.div
        variants={marqueeVariants}
        animate={controls}
        onMouseEnter={() => controls.stop()}
        onMouseLeave={() => controls.start("animate")}
        className="flex gap-10 w-max"
      >
        {[...projects, ...projects]
          .filter(
            (p) => activeFilter === "All" || p.category === activeFilter
          )
          .map((project, index) => (
            <div key={index} className="w-[320px] flex-shrink-0">
              <ProjectCard project={project} />
            </div>
          ))}
      </motion.div>
    </div>
    {/* View Services Button */}
<div className="flex justify-start mt-20 mb-6">

  <button
    onClick={() => navigate("/services")}
    className="px-8 py-3 rounded-full font-medium text-black
               bg-cyan-400 hover:bg-cyan-300
               transition-all duration-300
               hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]"
  >
    View Our Services
  </button>
</div>

{/* Stats Section */}
<StatsSection />
<InnovationSection />

<WhyChooseUsSection />




   

  </div>
);
}

export default ProjectsPage;
