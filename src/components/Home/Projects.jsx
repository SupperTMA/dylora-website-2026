import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../../utils/constants';

const Projects = () => {
  return (
    <section className="py-20 px-6 max-w-[1800px] mx-auto">
      <div className="flex justify-between items-end mb-16">
        <h2 className="font-display text-6xl scramble-text" data-original="Selected Works">
          Selected Works
        </h2>
        <div className="hidden md:block w-32 h-[1px] bg-white/20"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[350px]">
        {PROJECTS.map((project, index) => (
          <div 
            key={index} 
            className={`relative w-full h-full bg-[#111] overflow-hidden border border-white/5 hover-trigger project-card group ${
              project.span === 2 ? 'lg:row-span-2' : ''
            } ${index === 1 ? 'lg:col-span-2' : ''}`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-90"></div>
            
            {/* FIX APPLIED HERE:
               1. Changed h-[120%] to h-[140%] (More height = more safety room)
               2. Changed top-0 to -top-[20%] (This pulls the image UP, creating a buffer so when it moves down, no gap appears)
            */}
            <div 
              className="parallax-img w-full h-[140%] bg-gray-800 absolute -top-[20%] left-0 opacity-50 transition-transform duration-700 ease-out group-hover:scale-105"
              style={{ 
                backgroundImage: `url('${project.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            
            <div className="absolute bottom-0 left-0 p-8 z-20 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span className="text-accent font-mono text-xs mb-2 block tracking-widest">
                {project.category}
              </span>
              
              <h3 className="font-display text-3xl font-bold leading-none mb-2 transition-colors duration-300 group-hover:text-accent">
                {project.title}
              </h3>
              
              <p className="text-gray-400 text-sm transition-colors duration-300 group-hover:text-white">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <div className="flex justify-center gap-12 font-mono text-sm text-gray-500 mb-8">
          <span>15+ Projects Completed</span>
          <span>10+ Happy Clients</span>
        </div>
        <Link to="/projects">
          <button className="hover-trigger border border-white/20 hover:border-accent hover:text-accent px-8 py-3 rounded-full transition-colors">
            View All Projects
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Projects;