import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const SERVICE_LIST = [
  { name: "Web Development", meta: "Full Stack", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80", path: "/services" },
  { name: "App Development", meta: "iOS / Android", img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80", path: "/services" },
  { name: "Game Design", meta: "Unity / UE5", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80", path: "/services" },
  { name: "Digital Marketing", meta: "SEO / Social", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80", path: "/services" },
  { name: "IT Solutions", meta: "Cloud / Sec", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80", path: "/services" }
];

const ServiceItem = ({ service }) => {
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!imgRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    // Desktop only logic
    if (window.innerWidth >= 768) {
        imgRef.current.style.opacity = "1";
        imgRef.current.style.transform = `translate(-50%, -50%) scale(1)`;
        imgRef.current.style.left = `${e.clientX - rect.left}px`;
        imgRef.current.style.top = `${e.clientY - rect.top}px`;
    }
  };

  const handleMouseLeave = () => {
    if (!imgRef.current) return;
    imgRef.current.style.opacity = "0";
    imgRef.current.style.transform = `translate(-50%, -50%) scale(0.8)`;
  };

  return (
    <Link 
      to={service.path}
      // Force block display and relative positioning to contain content
      className="group relative block w-full py-8 md:py-10 px-2 md:px-4 border-t border-white/10 hover:text-black transition-colors"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 bg-[#D9F99D] origin-center scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:scale-x-100 z-0"></div>
      
      {/* Image: hidden on mobile */}
      <img 
        ref={imgRef} src={service.img} alt={service.name}
        className="hidden md:block absolute w-[350px] h-[240px] object-cover rounded-lg shadow-2xl pointer-events-none opacity-0 z-20 transition-opacity duration-300 ease-out"
        style={{ transform: 'translate(-50%, -50%) scale(0.8)', left: '50%', top: '50%' }} 
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <h3 className="font-display text-2xl md:text-3xl uppercase font-bold break-words">
            {service.name}
        </h3>

        <div className="flex items-center justify-between w-full md:w-auto md:gap-8">
            <span className="font-mono text-xs opacity-70 uppercase tracking-widest">{service.meta}</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
      </div>
    </Link>
  );
};

const Services = () => {
  return (
    <section className="py-20 md:py-32 px-5 md:px-6 max-w-[1800px] mx-auto">
      
      
      <div className="flex flex-col gap-16 md:grid md:grid-cols-12 md:gap-0">
        
        
        <div className="md:col-span-4 relative md:sticky md:top-32 h-fit z-10">
          <span className="font-mono text-accent text-xs uppercase mb-4 block">(02) — Services</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
            Comprehensive <br /> IT Solutions.
          </h2>
          <p className="text-gray-400 mb-8 text-sm md:text-base leading-relaxed">
            Comprehensive IT solutions designed to drive your business forward in the digital age.
          </p>
          <Link to="/services" className="inline-flex items-center gap-2 text-white border-b border-white pb-1 hover:text-accent hover:border-accent transition-colors">
            → View All Services
          </Link>
        </div>

        {/* RIGHT LIST */}
        <div className="md:col-span-8 flex flex-col relative z-0 mt-4 md:mt-0">
          {SERVICE_LIST.map((service, index) => (
            <ServiceItem key={index} service={service} />
          ))}
          <div className="border-t border-white/10 w-full"></div>
        </div>

      </div>
    </section>
  );
};

export default Services;