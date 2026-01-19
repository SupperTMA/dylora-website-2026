import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Layers,
  Settings,
  Headphones,
} from "lucide-react";

const features = [
  {
    title: "Custom Solutions",
    subtitle: "Tailored to your exact business needs",
    icon: <Settings size={26} />,
    image: "/images/custom-solution.jpg",
  },
  {
    title: "Modern Tech Stack",
    subtitle: "Built with cutting-edge technologies",
    icon: <Layers size={26} />,
    image: "/images/tech-stack.jpg",
  },
  {
    title: "Agile Development",
    subtitle: "Fast, flexible & transparent workflow",
    icon: <Code2 size={26} />,
    image: "/images/agile-process.jpg",
  },
  {
    title: "Ongoing Support",
    subtitle: "We’re with you after launch, always",
    icon: <Headphones size={26} />,
    image: "/images/support-maintenance.jpg",
  },
];

const WhyChooseUsSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="mt-40 relative">

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
        <span
          className="
            inline-block mb-4 px-4 py-1 rounded-full
            text-xs tracking-widest uppercase
            bg-[var(--accent)]/10 text-[var(--accent)]
          "
        >
          Why Choose Us
        </span>

        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Built for Performance.
          <br />
          <span className="text-[var(--accent)]">
            Designed for Growth.
          </span>
        </h2>

        <p className="text-gray-400 mt-6 text-lg">
          We don’t just deliver projects — we create scalable digital
          solutions that drive real results.
        </p>
      </motion.div>

      {/* ======================
          FEATURE CARDS
      ====================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {features.map((item, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setActive(index)}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200 }}
            className={`
              group cursor-pointer rounded-2xl p-6
              backdrop-blur-xl border transition-all duration-300
              ${
                active === index
                  ? "border-[var(--accent)] shadow-[0_0_45px_rgba(217,249,157,0.35)]"
                  : "border-white/10 bg-white/3"
              }
            `}
          >
            {/* ICON */}
            <div
              className={`
                mb-5 inline-flex items-center justify-center
                w-12 h-12 rounded-xl transition-all duration-300
                ${
                  active === index
                    ? "bg-[var(--accent)] text-black shadow-[0_0_25px_rgba(217,249,157,0.6)]"
                    : "bg-[var(--accent)]/10 text-[var(--accent)]"
                }
              `}
            >
              {item.icon}
            </div>

            {/* TEXT */}
            <h3 className="font-semibold text-lg text-white">
              {item.title}
            </h3>
            <p className="text-sm text-gray-400 mt-2 leading-relaxed">
              {item.subtitle}
            </p>

            {/* ACTIVE LINE */}
            <div className="mt-5 h-[2px] w-full bg-white/10 overflow-hidden">
              {active === index && (
                <motion.div
                  layoutId="activeLine"
                  className="h-full bg-[var(--accent)]"
                />
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* ======================
          IMAGE PREVIEW
      ====================== */}
      <div className="relative h-[460px] rounded-3xl overflow-hidden border border-white/10">

        {/* IMAGE GLOW */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-tr
            from-[var(--accent)]/10 to-transparent
            z-0
          "
        />

        <AnimatePresence mode="wait">
          <motion.img
            key={features[active].image}
            src={features[active].image}
            alt="feature preview"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full object-cover z-10"
          />
        </AnimatePresence>

        {/* IMAGE OVERLAY TEXT */}
        <div
          className="
            absolute bottom-0 left-0 right-0 p-8
            bg-gradient-to-t from-black/80 to-transparent
            z-20
          "
        >
          <h4 className="text-2xl font-semibold text-[var(--accent)]">
            {features[active].title}
          </h4>
          <p className="text-gray-300 mt-2 max-w-lg">
            {features[active].subtitle}
          </p>
        </div>
      </div>

    </section>
  );
};

export default WhyChooseUsSection;
