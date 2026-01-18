import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

// 1. Stable Image List with Links
const SERVICE_LIST = [
  {
    name: "Web Development",
    meta: "Full Stack",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    path: "/services" // Or "/services/web-development" if you have sub-pages
  },
  {
    name: "App Development",
    meta: "iOS / Android",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
    path: "/services"
  },
  {
    name: "Game Design",
    meta: "Unity / UE5",
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80",
    path: "/services"
  },
  {
    name: "Digital Marketing",
    meta: "SEO / Social",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    path: "/services"
  },
  {
    name: "IT Solutions",
    meta: "Cloud / Sec",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    path: "/services"
  }
];

// 2. Sub-component (Now a Link)
const ServiceItem = ({ service }) => {
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!imgRef.current) return;
    
    // Calculate position relative to the Row
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    imgRef.current.style.opacity = "1";
    imgRef.current.style.transform = `translate(-50%, -50%) scale(1)`;
    imgRef.current.style.left = `${x}px`;
    imgRef.current.style.top = `${y}px`;
  };

  const handleMouseLeave = () => {
    if (!imgRef.current) return;
    imgRef.current.style.opacity = "0";
    imgRef.current.style.transform = `translate(-50%, -50%) scale(0.8)`;
    // Optional: Reset position to center or keep it last known to prevent jumping
  };

  return (
    <Link 
      to={service.path}
      className="group relative flex justify-between items-center py-10 px-6 border-t border-white/10 cursor-pointer transition-colors hover:text-black overflow-visible block w-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Green Hover Background */}
      <div className="absolute inset-0 bg-[#D9F99D] origin-center scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:scale-x-100 z-0"></div>

      {/* THE FLOATING IMAGE */}
      <img 
        ref={imgRef}
        src={service.img} 
        alt={service.name}
        className="absolute w-[350px] h-[240px] object-cover rounded-lg shadow-2xl pointer-events-none opacity-0 z-20 transition-opacity duration-300 ease-out"
        style={{ 
          transform: 'translate(-50%, -50%) scale(0.8)',
          left: '50%', 
          top: '50%'
        }} 
      />

      {/* Content */}
      <h3 className="font-display text-3xl uppercase font-bold relative z-10 pointer-events-none">
        {service.name}
      </h3>

      <div className="flex items-center gap-8 relative z-10 pointer-events-none">
        <span className="font-mono text-xs opacity-70 uppercase tracking-widest">{service.meta}</span>
        <svg 
          width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        >
          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </Link>
  );
};

// 3. Main Component
const Services = () => {
  return (
    <section className="py-32 px-6 max-w-[1800px] mx-auto relative">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* LEFT TITLE */}
        <div className="md:col-span-4 sticky top-32 h-fit">
          <span className="font-mono text-accent text-xs uppercase mb-4 block">(02) — Services</span>
          <h2 className="font-display text-5xl font-bold leading-tight mb-8">
            Comprehensive <br /> IT Solutions.
          </h2>
          <p className="text-gray-400 mb-8">
            Comprehensive IT solutions designed to drive your business forward in the digital age.
          </p>
          <Link to="/services" className="hover-trigger inline-flex items-center gap-2 text-white border-b border-white pb-1 hover:text-accent hover:border-accent transition-colors">
            → View All Services
          </Link>
        </div>

        {/* RIGHT LIST */}
        <div className="md:col-span-8 flex flex-col relative">
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