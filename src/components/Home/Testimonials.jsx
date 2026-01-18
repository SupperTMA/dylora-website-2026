import React from 'react';

// Extended Data for scrolling effect
const EXTENDED_TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    role: "CTO @ TechFlow",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    quote: "Dylora transformed our digital presence completely. The WebGL animations are smooth and the performance is incredible.",
    rating: "★★★★★"
  },
  {
    name: "Marcus Chen",
    role: "Founder @ Nexus",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    quote: "The attention to detail in the UI/UX design sets them apart. They delivered beyond our expectations.",
    rating: "★★★★★"
  },
  {
    name: "Elena Rodriguez",
    role: "Product Lead @ Sphere",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    quote: "Professional, creative, and technically brilliant. The 3D integration they built for us won an Awwwards SOTD.",
    rating: "★★★★★"
  },
  {
    name: "David Kim",
    role: "Director @ Horizon",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    quote: "Fastest delivery we've ever experienced without compromising quality. The backend architecture is rock solid.",
    rating: "★★★★★"
  },
  {
    name: "Olivia Thorne",
    role: "CEO @ Velvet",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    quote: "They didn't just build a website; they built a brand experience. Our conversion rates doubled within a month.",
    rating: "★★★★★"
  }
];

const Testimonials = () => {
  return (
    <section className="py-32 border-t border-white/10 overflow-hidden bg-[#050505]">
      <div className="px-6 max-w-[1800px] mx-auto mb-16">
        <div className="flex justify-between items-end">
          <h2 className="font-display text-6xl scramble-text" data-original="Client Stories">
            Client Stories
          </h2>
          <div className="hidden md:block w-32 h-[1px] bg-white/20"></div>
        </div>
      </div>

      {/* SCROLLING CONTAINER */}
      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>

        <div className="flex gap-12 w-max animate-marquee hover:[animation-play-state:paused]">
          {/* ORIGINAL SET */}
          {[...EXTENDED_TESTIMONIALS, ...EXTENDED_TESTIMONIALS].map((testimonial, index) => (
            // CHANGED: Width to 600px, Padding to p-10
            <div 
              key={index} 
              className="w-[600px] glass-panel p-10 hover:bg-white/5 transition-all group hover-trigger relative overflow-hidden testimonial-card flex-shrink-0"
            >
              <div className="absolute top-0 right-0 p-6 opacity-20 text-[8rem] leading-none font-serif text-accent">"</div>
              <div className="relative z-10">
                <div className="flex items-center gap-8 mb-8">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-accent transition-colors duration-300">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl text-white">{testimonial.name}</h4>
                    <p className="text-sm font-mono text-gray-500">{testimonial.role}</p>
                    <span className="text-accent text-sm mt-2 block">{testimonial.rating}</span>
                  </div>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;