import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Award, Gem, TrendingUp, Target, Eye, Heart } from "lucide-react";
import useProgressBar from "../hooks/useProgressBar";
import useCountUp from "../hooks/useCountUp";
import useReveal from "../hooks/useReveal";
const PURPOSE = {
  mission: {
    title: "Our Mission",
    icon: <Target className="text-[#D9F99D]" size={32} />,
    text: "To empower businesses with innovative, scalable, and future-ready digital solutions that drive real-world impact.",
    points: ["Scalable architecture", "Trusted partnerships", "Continuous innovation"],
  },
  vision: {
    title: "Our Vision",
    icon: <Eye className="text-[#D9F99D]" size={32} />,
    text: "To become a globally trusted technology partner shaping digital excellence through AI and human-centric design.",
    points: ["Innovation-led", "Digital ecosystems", "Global impact"],
  },
  values: {
    title: "Our Values",
    icon: <Heart className="text-[#D9F99D]" size={32} />,
    text: "Integrity, transparency, and architectural excellence are the pillars of everything we build.",
    points: ["Radical transparency", "Client obsession", "Technical rigor"],
  },
};
const TIMELINE = [
  { 
    year: "2024", 
    title: "The Genesis", 
    desc: "Dylora was born out of a need for architectural digital excellence. We started as a focused team challenging digital limits with scalable, performance-driven solutions that prioritize speed and architectural integrity. Our foundation was built on the belief that technology should be a bridge to growth, not a barrier.",
    img: "/images/genesis.jpg", 
    icon: <Award size={18} /> 
  },
  { 
    year: "2025", 
    title: "Scaling Limits", 
    desc: "Reaching 15+ global projects, we pivoted towards high-impact growth. We focused on building robust architectures and intuitive interfaces that adapt as businesses scale, delivering measurable results. This phase marked our expansion into new markets and the refinement of our agile development processes to meet global standards.",
    img: "/images/scaling.jpg", 
    icon: <TrendingUp size={18} /> 
  },
  { 
    year: "2026", 
    title: "Future Core", 
    desc: "Integrating AI-driven logic and next-gen frameworks into our creative workflow. We continue to evolve as a globally trusted technology partner, shaping the future of digital excellence. Our commitment remains to push the boundaries of what's possible, ensuring our clients stay ahead in an ever-changing digital landscape.",
    img: "/images/future.jpg", 
    icon: <Gem size={18} /> 
  },
];
const TEAM = [
  { name: "Vikram", role: "Founder", initial: "V", desc: "Leading the vision of architectural integrity." },
  { name: "Sarah Chen", role: "Developer", initial: "S", desc: "Expert in scalable React ecosystems." },
  { name: "Alex Rivera", role: "Designer", initial: "A", desc: "Crafting human-centric digital experiences." },
  { name: "James Bond", role: "Strategist", initial: "J", desc: "Driving global growth and impact." },
];
const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("mission");
  const progressRef = useRef(null);
  const journeyRef = useRef(null);
  useProgressBar(progressRef);
  const founded = useCountUp(2024);
  const projects = useCountUp(15);
  const partners = useCountUp(10);
  const teamCount = useCountUp(10);
  const storyReveal = useReveal(0.3);
  const { scrollYProgress } = useScroll({ target: journeyRef, offset: ["start end", "end center"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <main className="bg-black text-white font-body overflow-x-hidden selection:bg-[#D9F99D] selection:text-black">
            {/* 1. Progress Bar */}
      <div ref={progressRef} className="fixed top-0 left-0 h-[2px] w-full bg-[#D9F99D] origin-left z-[100] shadow-[0_0_15px_#D9F99D]" />
      {/* 2. Hero Section */}
      <section className="min-h-[60vh] md:min-h-[70vh] flex flex-col justify-center items-center text-center px-6 pt-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h1 className="font-display text-[3.5rem] sm:text-[6rem] md:text-[11rem] font-black leading-[0.85] tracking-tighter uppercase mb-6 md:mb-8">
            About <br /> <span className="text-[#D9F99D]">Us</span>
          </h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-[10px] md:text-[12px] font-bold leading-relaxed text-zinc-500 uppercase tracking-[0.3em]">
              A collective of builders shaping the next generation of digital architecture.
            </p>
          </div>
        </motion.div>
      </section>
      {/* 3. Counters */}
      <section className="py-16 md:py-24 border-y border-white/5 bg-zinc-900/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {[{ h: founded, l: "Founded" }, { h: projects, l: "Projects +" }, { h: partners, l: "Partners +" }, { h: teamCount, l: "Members +" }].map((item, i) => (
            <div key={i} ref={item.h.ref} className="text-center group">
              <h3 className="text-4xl md:text-[5rem] font-display font-black text-white group-hover:text-[#D9F99D] transition-colors leading-none">
                {item.h.count}
              </h3>
              <p className="text-[9px] md:text-[10px] tracking-[0.3em] text-gray-500 uppercase font-black mt-3 md:mt-4">{item.l}.</p>
            </div>
          ))}
        </div>
      </section>
      {/* 4. Our Story */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            ref={storyReveal.ref}
            initial={{ opacity: 0, x: -50 }}
            animate={storyReveal.show ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Our <span className="text-[#D9F99D]">Story</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-sm md:text-base leading-relaxed">
              <p>Founded in 2024, Dylora began with a simple yet ambitious vision — to build digital products that are fast, scalable, and future-ready. We believe technology should empower, not complicate.</p>
              <p>Our approach combines modern architecture with thoughtful design to deliver real-world impact. Trusted by clients across industries, we adapt as businesses grow, ensuring excellence at every touchpoint.</p>
              <div className="h-[1px] w-20 bg-[#D9F99D]/40" />
              <p className="text-white font-black tracking-widest text-xs uppercase">Innovation is our architecture.</p>
            </div>
          </motion.div>
  
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="rounded-[2.5rem] overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"
          >
            <img src="/images/about-story.jpg" alt="Our story" className="w-full h-[450px] object-cover opacity-80" />
          </motion.div>
        </div>
      </section>
      {/* 5. The Journey */}
      <section ref={journeyRef} className="py-24 md:py-40 bg-zinc-900/5 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-4xl md:text-8xl font-black uppercase text-center mb-24 md:mb-48 tracking-tighter">
            The <span className="text-[#D9F99D]">Journey</span>
          </h2>
          <div className="relative">
            <motion.div style={{ scaleY }} className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-[#D9F99D]/20 origin-top z-0" />        
            <div className="space-y-32 md:space-y-64">
              {TIMELINE.map((item, i) => (
                <div key={i} className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-24 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>                  
                  <motion.div 
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full md:w-1/2 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                  >
                    <img src={item.img} alt={item.title} className="w-full h-[250px] md:h-[450px] object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                  </motion.div>
                  <div className="w-full md:w-1/2 text-center md:text-left px-4">
                    <span className="font-display text-4xl md:text-6xl font-black text-white/5 block mb-2">{item.year}</span>
                    <h4 className="font-display text-xl md:text-3xl font-black text-[#D9F99D] uppercase mb-4 tracking-tight">{item.title}</h4>
                    <p className="text-gray-400 text-sm md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0 font-light">
                      {item.desc}
                    </p>
                  </div>
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 md:w-12 md:h-12 bg-black border border-[#D9F99D]/40 rounded-full z-10 flex items-center justify-center -top-10 md:top-1/2 shadow-lg">
                    <div className="text-[#D9F99D] scale-75 md:scale-100">{item.icon}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* 6. Mission, Vision & Values */}
      <section className="py-24 md:py-40 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <div className="flex gap-2 md:gap-4 mb-12 overflow-x-auto no-scrollbar pb-2">
              {Object.keys(PURPOSE).map((tab) => (
                <button 
                  key={tab} 
                  onClick={() => setActiveTab(tab)} 
                  className={`px-6 py-2 md:px-10 md:py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === tab ? "bg-[#D9F99D] text-black" : "border border-white/10 text-gray-500 hover:text-white"}`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab} 
                initial={{ opacity: 0, x: -20 }} 
                animate={{ opacity: 1, x: 0 }} 
                exit={{ opacity: 0, x: 20 }} 
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center gap-5 mb-6">
                  {PURPOSE[activeTab].icon}
                  <h3 className="text-3xl md:text-6xl font-display font-black uppercase tracking-tighter">{PURPOSE[activeTab].title}</h3>
                </div>
                <p className="text-gray-400 text-base md:text-lg mb-10 leading-relaxed max-w-xl">{PURPOSE[activeTab].text}</p>
                <ul className="space-y-5">
                  {PURPOSE[activeTab].points.map((p, i) => (
                    <li key={i} className="flex items-center gap-4 group">
                      <div className="w-8 h-[2px] bg-[#D9F99D] group-hover:w-14 transition-all" />
                      <span className="text-xs font-black uppercase tracking-[0.2em]">{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="w-full lg:w-1/2 relative flex justify-center items-center min-h-[400px]">
            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }} className="absolute w-72 h-72 md:w-[500px] md:h-[500px] rounded-full border border-[#D9F99D]/5" />
            <div className="text-center z-10">
              <h4 className="font-display text-4xl md:text-7xl font-black text-[#D9F99D] uppercase tracking-tighter">Dylora</h4>
              <p className="text-[10px] tracking-[0.8em] text-gray-500 uppercase mt-4 font-black">Core Nucleus</p>
            </div>
          </div>
        </div>
      </section>
      {/* 7. Team Section - Smaller Mobile Cards */}
      <section className="py-24 bg-zinc-900/10 overflow-hidden border-t border-white/5">
        <h2 className="font-display text-4xl md:text-8xl font-black uppercase text-center mb-20 tracking-tighter">
          Our <span className="text-[#D9F99D]">Team</span>
        </h2>
        <div className="relative flex overflow-hidden">
          <motion.div 
            animate={{ x: [0, -1600] }} 
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-4 md:gap-6 pr-6 whitespace-nowrap"
          >
            {[...TEAM, ...TEAM, ...TEAM].map((member, i) => (
              <div 
                key={i} 
                className="w-[200px] md:w-[350px] bg-zinc-900/40 p-6 md:p-16 rounded-[1.5rem] md:rounded-[2rem] border border-white/5 text-center shrink-0 group transition-all duration-500 hover:border-[#D9F99D]/20"
              >
                <div className="w-16 h-16 md:w-28 md:h-28 rounded-full bg-black border border-[#D9F99D]/10 mx-auto mb-6 md:mb-8 flex items-center justify-center text-xl md:text-4xl font-display font-black text-[#D9F99D]">
                  {member.initial}
                </div>
                <h4 className="text-base md:text-2xl font-black uppercase mb-1">{member.name}</h4>
                <p className="text-[8px] md:text-[10px] tracking-widest text-gray-500 uppercase font-black mb-4 md:mb-6">{member.role}</p>
                <p className="text-[10px] md:text-xs text-gray-400 whitespace-normal leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity">
                  {member.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;