import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "framer-motion";
import { Award, Gem, TrendingUp, Rocket, Target, Heart } from "lucide-react";
import useProgressBar from "../hooks/useProgressBar";
import useCountUp from "../hooks/useCountUp";
const PURPOSE = {
  mission: {
    title: "Our Mission",
    text: "To empower businesses with innovative, scalable, and future-ready digital solutions.",
    points: ["SCALABLE ARCHITECTURE", "TRUSTED PARTNERSHIPS", "CONTINUOUS INNOVATION"],
  },
  vision: {
    title: "Our Vision",
    text: "To become a globally trusted technology partner shaping digital excellence.",
    points: ["INNOVATION-LED EXECUTION", "DIGITAL ECOSYSTEMS", "GLOBAL IMPACT"],
  },
  values: {
    title: "Our Values",
    text: "Values that define how we build, collaborate, and grow.",
    points: ["TRANSPARENCY", "CLIENT-FIRST MINDSET", "QUALITY & ACCOUNTABILITY"],
  },
};
const TEAM = [
  { name: "VIKRAM", role: "FOUNDER", desc: "Visionary architect behind Dylora's digital reality.", initial: "V", skills: ["STRATEGY", "CORE"] },
  { name: "SARAH CHEN", role: "DEVELOPER", desc: "Engineering high-performance systems.", initial: "S", skills: ["TECH", "CODE"] },
  { name: "ALEX RIVERA", role: "DESIGNER", desc: "Crafting visual identities with precision.", initial: "A", skills: ["UI/UX", "ART"] },
  { name: "JAMES BOND", role: "STRATEGIST", desc: "Data-led logic for sustainable growth.", initial: "J", skills: ["GROWTH", "DATA"] },
  { name: "VIKRAM", role: "FOUNDER", desc: "Visionary architect.", initial: "V", skills: ["STRATEGY"] },
  { name: "SARAH CHEN", role: "DEVELOPER", desc: "System engineer.", initial: "S", skills: ["TECH"] },
];
const TIMELINE = [
  { year: "2024", title: "THE GENESIS", desc: "Dylora was born out of architectural digital excellence.", icon: <Award size={18} /> },
  { year: "2025", title: "SCALING LIMITS", desc: "Reached 15+ global projects with a focus on performance.", icon: <TrendingUp size={18} /> },
  { year: "2026", title: "FUTURE CORE", desc: "Integrating AI-driven logic into our creative workflow.", icon: <Gem size={18} /> },
];
const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("mission");
  const progressRef = useRef(null);
  const journeyRef = useRef(null);
  const storyRef = useRef(null);
  useProgressBar(progressRef);
  const founded = useCountUp(2024);
  const projects = useCountUp(15);
  const partners = useCountUp(10);
  const teamCount = useCountUp(10);
  const { scrollYProgress } = useScroll({ target: journeyRef, offset: ["start end", "end center"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const { scrollYProgress: storyScroll } = useScroll({ target: storyRef, offset: ["start 0.8", "start 0.2"] });
  const opacityFill = useTransform(storyScroll, [0, 1], [0.3, 1]);
  return (
    <main className="bg-black text-white font-body overflow-x-hidden selection:bg-[#D9F99D] selection:text-black">
 
      {}
      <div ref={progressRef} className="fixed top-0 left-0 h-[3px] w-full bg-[#D9F99D] origin-left z-[100] shadow-[0_0_15px_#D9F99D]" />
      {}
      <section className="min-h-[70vh] flex flex-col justify-center items-center text-center px-6 pt-20 relative">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h1 className="font-display text-[clamp(3.5rem,12vw,9rem)] font-black leading-[0.8] tracking-tighter uppercase mb-16">
            ABOUT <br /> <span className="text-[#D9F99D]">US</span>
          </h1>
          <motion.div ref={storyRef} style={{ opacity: opacityFill }} className="max-w-4xl mx-auto">
            <p className="text-xl md:text-3xl font-medium leading-[1.1] text-white/90 uppercase tracking-tight">
              At Dylora, we are a passionate team of innovators and developers dedicated to transforming businesses through cutting-edge technology.
            </p>
          </motion.div>
        </motion.div>
      </section>
      {}
      <section className="py-24 border-y border-white/5 bg-zinc-900/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:grid md:grid-cols-4 gap-y-16 gap-x-4 md:gap-x-12">
          {[{ h: founded, l: "Founded" }, { h: projects, l: "Projects +" }, { h: partners, l: "Partners +" }, { h: teamCount, l: "Members +" }].map((item, i) => (
            <div key={i} ref={item.h.ref} className="text-center group w-[150px] md:w-auto">
              {}
              <h3 className="text-3xl sm:text-4xl md:text-[4.5rem] font-display font-black text-white group-hover:text-[#D9F99D] transition-colors tabular-nums leading-none">
                {item.h.count}
              </h3>
              <p className="text-[10px] md:text-[11px] tracking-[0.4em] text-gray-500 uppercase font-black mt-6 font-body">
                {item.l}.
              </p>
            </div>
          ))}
        </div>
      </section>
      {}
      <section ref={journeyRef} className="py-40 bg-zinc-900/5 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-5xl md:text-8xl font-black uppercase text-center mb-40 tracking-tighter">
            THE <span className="text-[#D9F99D]">JOURNEY</span>
          </h2>
          <div className="relative">
            <motion.div style={{ scaleY }} className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-[#D9F99D]/20 origin-top z-0" />
            <div className="space-y-40">
              {TIMELINE.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-center gap-16 ${i % 2 === 0 ? "md:flex-row-reverse text-center md:text-right" : "text-center md:text-left"}`}>
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 bg-black border border-[#D9F99D]/30 rounded-full z-10 flex items-center justify-center">
                    <div className="text-[#D9F99D] scale-90">{item.icon}</div>
                  </div>
                  <div className={`w-full md:w-[45%] pl-16 md:pl-0`}>
                    <span className="font-display text-4xl md:text-6xl font-black text-white/5 block mb-4 uppercase">{item.year}</span>
                    <h4 className="font-display text-xl md:text-2xl font-black text-[#D9F99D] uppercase mb-4 tracking-tight">{item.title}</h4>
                    <p className="text-gray-400 text-lg font-medium leading-relaxed font-body">"{item.desc}"</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-40 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-24 items-center">
        <div className="w-full lg:w-1/2">
          <div className="flex gap-3 mb-16 overflow-x-auto pb-4 no-scrollbar">
            {Object.keys(PURPOSE).map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`whitespace-nowrap px-10 py-5 rounded-full text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${activeTab === tab ? "bg-[#D9F99D] text-black shadow-[0_0_30px_rgba(217,249,157,0.4)]" : "border border-white/10 text-gray-500 hover:text-white"}`}>{tab}</button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }} transition={{ duration: 0.5 }}>
              <h3 className="text-5xl md:text-[5.5rem] font-display font-black uppercase mb-10 leading-none tracking-tighter">{PURPOSE[activeTab].title}</h3>
              <p className="text-gray-400 text-xl md:text-2xl font-medium leading-relaxed mb-12 font-body">{PURPOSE[activeTab].text}.</p>
              <ul className="space-y-8">
                {PURPOSE[activeTab].points.map((p, i) => (
                  <li key={i} className="flex items-center gap-8 group">
                    <div className="w-16 h-[1px] bg-[#D9F99D]/40 group-hover:w-24 transition-all duration-500 shadow-[0_0_10px_#D9F99D]" />
                    <span className="text-lg md:text-xl font-black uppercase tracking-widest font-display">{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
        {}
        <div className="w-full lg:w-1/2 relative flex justify-center items-center py-20 min-h-[500px]">
           <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} className="absolute w-80 h-80 md:w-[32rem] md:h-[32rem] rounded-full border border-[#D9F99D]/20" />
           <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 15, ease: "linear" }} className="absolute w-64 h-64 md:w-[24rem] md:h-[24rem] rounded-full border border-dashed border-white/10" />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
              <h4 className="font-display text-4xl md:text-7xl font-black text-[#D9F99D] uppercase tracking-tighter animate-pulse">DYLORA</h4>
              <p className="text-[12px] tracking-[0.8em] text-gray-500 uppercase mt-4 font-black font-body">Nucleus</p>
           </div>
        </div>
      </section>
      {}
      <section className="py-40 bg-zinc-900/10 overflow-hidden relative">
        <h2 className="font-display text-6xl md:text-[11rem] font-black uppercase text-center mb-40 tracking-tighter leading-none">OUR <span className="text-[#D9F99D]">TEAM</span></h2>
        <div className="flex overflow-hidden relative group">
          <motion.div className="flex gap-10 whitespace-nowrap" animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, duration: 35, ease: "linear" }} style={{ width: "fit-content" }}>
            {TEAM.map((member, i) => (
              <motion.div key={i} whileHover={{ scale: 1.02, y: -15 }} className="w-[340px] md:w-[450px] bg-[#050505] p-16 rounded-[4.5rem] border border-white/5 hover:border-[#D9F99D]/40 transition-all duration-700 relative flex flex-col items-center justify-center shrink-0 group/card shadow-2xl">
                <div className="absolute -bottom-10 -right-5 text-white/[0.02] text-[16rem] font-display font-black pointer-events-none group-hover/card:text-[#D9F99D]/[0.05] transition-all uppercase">{member.initial}</div>
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-zinc-900 border border-white/10 mb-12 flex items-center justify-center relative overflow-hidden group-hover/card:border-[#D9F99D]/50 transition-all">
                  <span className="text-6xl md:text-8xl font-display font-black text-white/10 group-hover/card:text-[#D9F99D] transition-all relative z-10">{member.initial}.</span>
                </div>
                <div className="text-center relative z-10 whitespace-normal px-6">
                  <h4 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-3 group-hover/card:text-[#D9F99D] transition-colors font-display">{member.name}</h4>
                  <p className="text-[12px] tracking-[0.5em] text-gray-500 uppercase font-black mb-8">{member.role}.</p>
                  <p className="text-gray-400 text-sm md:text-lg font-medium leading-relaxed opacity-0 group-hover/card:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-700 font-body">"{member.desc}"</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {}
    </main>
  );
};
export default AboutPage;