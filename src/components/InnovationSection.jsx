import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import MagneticButton from "./UI/MagneticButton";

export default function InnovationSection() {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  // Scroll parallax for the heading
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const textX = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <section ref={containerRef} className="mt-36 relative overflow-hidden">
      {/* BACKGROUND DECOR - Adding a professional subtle glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--accent)]/5 blur-[120px] -z-10 rounded-full" />

      {/* HEADING WITH PARALLAX */}
      <motion.h2
        style={{ x: textX }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold uppercase leading-[0.95] mb-16 whitespace-nowrap"
      >
        <span className="text-[var(--accent)]">INNOVATION IN</span>{" "}
        <span className="text-white opacity-20 text-outline">ACTION</span>
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* LEFT TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="flex items-center gap-4 mb-6">
             <div className="w-12 h-[1px] bg-[var(--accent)]" />
             <span className="text-xs tracking-[0.3em] uppercase text-[var(--accent)] font-bold">
               Future Ready
             </span>
          </div>

          <p className="text-gray-200 text-xl md:text-2xl font-light leading-snug mb-8">
            Every project we deliver is powered by{" "}
            <span className="relative inline-block">
                <span className="relative z-10 text-white font-semibold italic">strategy & precision</span>
                <motion.span 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="absolute bottom-1 left-0 h-3 bg-[var(--accent)]/20 -z-10"
                />
            </span>.
          </p>

          <div className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed">
            <p>
              From early concept to final deployment, our focus remains on
              performance, scalability, and long-term value. We don’t just build
              products — we craft digital solutions that evolve with your business.
            </p>
          </div>

          {/* ANIMATED FEATURE LIST */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Human-centered design",
              "Scalable architecture",
              "Future-ready tech",
              "24/7 Optimization"
            ].map((text, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.5 }}
                className="flex items-center gap-3 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] group-hover:scale-150 transition-transform" />
                <span className="text-sm text-gray-300 font-medium">{text}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <MagneticButton
              onClick={() => navigate("/services")}
              className="group relative px-10 py-4 rounded-full font-bold text-black bg-[var(--accent)] overflow-hidden transition-transform active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Services
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                  →
                </motion.span>
              </span>
            </MagneticButton>
          </div>
        </motion.div>

        {/* RIGHT IMAGE WITH INTERACTIVE ELEMENTS */}
        <motion.div
          style={{ scale: imageScale }}
          className="relative group"
        >
          {/* Decorative Rings */}
          <div className="absolute -top-10 -right-10 w-32 h-32 border border-[var(--accent)]/20 rounded-full animate-pulse" />
          
          {/* Main Image Container */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 group-hover:border-[var(--accent)]/30 transition-colors duration-500">
            <img
              src="/images/innovation.jpg"
              alt="Innovation"
              className="w-full aspect-[4/5] lg:aspect-square object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
          </div>

          {/* FLOATING STATUS CARD - Makes it look professional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute -bottom-6 -left-6 md:-left-12 bg-[#111] border border-white/10 p-5 rounded-2xl shadow-2xl backdrop-blur-xl max-w-[200px]"
          >
            <p className="text-[var(--accent)] font-bold text-3xl mb-1">99%</p>
            <p className="text-white text-xs uppercase tracking-tighter font-semibold opacity-70">
              Client satisfaction in technical execution.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}