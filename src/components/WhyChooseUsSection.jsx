import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Layers,
  Settings,
  Headphones,
  ArrowRight
} from "lucide-react";

const features = [
  {
    title: "Custom Solutions",
    subtitle: "Tailored to your exact business needs",
    icon: <Settings size={26} />,
    image: "/images/custom-solution.jpg",
    description: "We dive deep into your business logic to create software that fits like a glove."
  },
  {
    title: "Modern Tech Stack",
    subtitle: "Built with cutting-edge technologies",
    icon: <Layers size={26} />,
    image: "/images/tech-stack.jpg",
    description: "Using React, Node, and Cloud-native tools to ensure your platform is future-proof."
  },
  {
    title: "Agile Development",
    subtitle: "Fast, flexible & transparent workflow",
    icon: <Code2 size={26} />,
    image: "/images/agile-process.jpg",
    description: "Sprints, daily standups, and constant feedback loops to keep you in control."
  },
  {
    title: "Ongoing Support",
    subtitle: "We’re with you after launch, always",
    icon: <Headphones size={26} />,
    image: "/images/support-maintenance.jpg",
    description: "Maintenance, security patches, and feature updates to keep you ahead."
  },
];

const WhyChooseUsSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="mt-40 relative px-6 md:px-0 overflow-hidden">
      {/* BACKGROUND DECOR */}
      <div className="absolute top-0 -right-20 w-96 h-96 bg-[var(--accent)]/5 blur-[120px] rounded-full -z-10" />

      {/* ======================
          SECTION HEADER
      ====================== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-20 max-w-3xl"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-[1px] bg-[var(--accent)]" />
          <span className="text-xs tracking-[0.3em] uppercase text-[var(--accent)] font-bold">
            Why Choose Us
          </span>
        </div>

        <h2 className="text-5xl md:text-6xl font-black leading-[1.1] text-white tracking-tighter">
          Built for <span className="italic">Performance.</span>
          <br />
          <span className="text-[var(--accent)] text-outline">
            Designed for Growth.
          </span>
        </h2>

        <p className="text-gray-400 mt-8 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
          We don’t just deliver projects — we create scalable digital
          solutions that drive real results.
        </p>
      </motion.div>

      {/* ======================
          FEATURE CARDS
      ====================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {features.map((item, index) => (
          <div key={index} className="flex flex-col">
            <motion.div
              onMouseEnter={() => setActive(index)}
              onClick={() => setActive(index)}
              whileHover={{ y: -5 }}
              className={`
                relative group cursor-pointer rounded-3xl p-8
                backdrop-blur-md border transition-all duration-500 h-full
                ${
                  active === index
                    ? "bg-white/[0.07] border-[var(--accent)]/50 shadow-[0_20px_50px_rgba(217,249,157,0.1)]"
                    : "bg-white/[0.02] border-white/5 hover:border-white/20"
                }
              `}
            >
              {/* ICON BLOCK */}
              <div className={`mb-8 inline-flex items-center justify-center w-14 h-14 rounded-2xl transition-all duration-500 ${
                  active === index
                    ? "bg-[var(--accent)] text-black rotate-[10deg]"
                    : "bg-white/5 text-[var(--accent)]"
                }`}
              >
                {item.icon}
              </div>

              <h3 className="font-bold text-xl text-white mb-3 tracking-tight">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                {item.subtitle}
              </p>

              {/* PROGRESS BAR DECOR */}
              <div className="mt-8 h-[1px] w-full bg-white/5 relative">
                <AnimatePresence>
                  {active === index && (
                    <motion.div 
                      layoutId="tabGlow"
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent h-[2px] blur-[1px]" 
                    />
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* MOBILE ACCORDION IMAGE */}
            <AnimatePresence>
              {active === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0, marginTop: 0 }}
                  animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                  exit={{ height: 0, opacity: 0, marginTop: 0 }}
                  className="lg:hidden overflow-hidden rounded-2xl border border-white/10 relative"
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-56 object-cover grayscale-[30%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 p-6 flex flex-col justify-end">
                     <p className="text-xs text-[var(--accent)] font-bold mb-2 uppercase tracking-widest">Deep Dive</p>
                     <p className="text-white text-sm font-light leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* ======================
          DESKTOP IMAGE PREVIEW
      ====================== */}
      <div className="hidden lg:block relative h-[500px] rounded-[2.5rem] overflow-hidden border border-white/10 group">
        {/* Ambient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent z-20 transition-opacity duration-700 group-hover:opacity-60" />

        <AnimatePresence mode="wait">
          <motion.div
            key={features[active].image}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <img
              src={features[active].image}
              alt="feature preview"
              className="w-full h-full object-cover scale-105"
            />
          </motion.div>
        </AnimatePresence>

        {/* Floating Content Box */}
        <div className="absolute bottom-0 left-0 p-12 z-30 w-full lg:w-2/3">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-4xl font-black text-white mb-4 tracking-tighter">
              {features[active].title}
            </h4>
            <p className="text-gray-300 text-lg font-light leading-relaxed max-w-xl mb-6">
              {features[active].description}
            </p>
            <div className="flex items-center gap-2 text-[var(--accent)] font-bold text-sm tracking-widest uppercase cursor-pointer group/btn">
              Learn More <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;