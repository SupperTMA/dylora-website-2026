import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
        delay: index * 0.12,
      }}
      whileHover={{ y: -10 }}
      className="group relative rounded-2xl overflow-hidden
                 bg-gradient-to-b from-white/[0.04] to-black
                 border border-white/10
                 hover:border-cyan-400/40
                 hover:shadow-[0_20px_60px_rgba(34,211,238,0.18)]
                 transition-all duration-500 flex flex-col h-full"
    >
      {/* IMAGE */}
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          whileHover={{ scale: 1.12 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* IMAGE OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t
                        from-black/90 via-black/30 to-transparent" />

        {/* CATEGORY BADGE */}
        <span className="absolute top-4 left-4 z-10
                         px-3 py-1 rounded-full text-xs
                         tracking-widest uppercase
                         bg-cyan-400/15 text-cyan-400 backdrop-blur">
          {project.category}
        </span>
      </div>

      {/* CONTENT */}
      <div className="relative p-6 flex flex-col flex-1">

        {/* TITLE */}
        <h3 className="text-xl font-semibold tracking-tight leading-snug">
          {project.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-sm text-gray-400 mt-3 leading-relaxed flex-1">
          {project.description}
        </p>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2 mt-5">
          {project.tech.map((item, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full
                         bg-white/5 border border-white/10
                         text-gray-300 backdrop-blur-sm
                         group-hover:border-cyan-400/30
                         transition"
            >
              {item}
            </span>
          ))}
        </div>

        {/* FOOTER CTA */}
        <div className="mt-6 flex items-center justify-between">
          <span className="text-sm text-gray-500">
            View Project
          </span>

          <motion.div
            whileHover={{ x: 4, y: -4 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-9 h-9 rounded-full
                       flex items-center justify-center
                       bg-cyan-400 text-black
                       shadow-[0_0_25px_rgba(34,211,238,0.6)]"
          >
            <ArrowUpRight size={18} />
          </motion.div>
        </div>
      </div>

      {/* GLOW LINE */}
      <div className="absolute inset-x-0 bottom-0 h-[2px]
                      bg-gradient-to-r from-transparent
                      via-cyan-400/60 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};

export default ProjectCard;
