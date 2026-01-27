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

  // Balanced parallax: stays centered on mobile, slight shift for desktop
  const textX = useTransform(scrollYProgress, [0, 1], [0, 80]);
  
  // RESTORED: Defining the missing variable for the image zoom effect
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <section ref={containerRef} className="mt-36 relative overflow-hidden">
      {/* BACKGROUND DECOR */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--accent)]/5 blur-[120px] -z-10 rounded-full" />

      {/* Main Wrapper for Alignment */}
      <div className="container mx-auto px-6 md:px-12">
        {/* HEADING SECTION */}
        <div className="overflow-visible mb-16">
          <motion.h2
            style={{ x: textX }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold uppercase leading-[0.95] whitespace-normal sm:whitespace-nowrap text-center sm:text-left"
          >
            <span className="text-[var(--accent)]">INNOVATION IN</span>{" "}
            <span className="text-white">ACTION</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* LEFT TEXT CONTENT - Order 2 on mobile to sit below image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative z-10 order-2 lg:order-1"
          >
            <div className="flex items-center justify-center sm:justify-start gap-4 mb-6">
               <div className="w-12 h-[1px] bg-[var(--accent)]" />
               <span className="text-xs tracking-[0.3em] uppercase text-[var(--accent)] font-bold">
                  Future Ready
               </span>
            </div>

            <p className="text-gray-200 text-xl md:text-2xl font-light leading-snug mb-8 text-center sm:text-left">
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

            <div className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed text-center sm:text-left">
              <p>
                From early concept to final deployment, our focus remains on
                performance, scalability, and long-term value. We don’t just build
                products — we craft digital solutions that evolve with your business.
              </p>
            </div>

            {/* FEATURE LIST */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto sm:mx-0">
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
                  className="flex items-center justify-center sm:justify-start gap-3 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] group-hover:scale-150 transition-transform" />
                  <span className="text-sm text-gray-300 font-medium">{text}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 flex justify-center sm:justify-start">
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

          {/* RIGHT IMAGE - Order 1 on mobile to sit above text */}
          <motion.div
            style={{ scale: imageScale }}
            className="relative group order-1 lg:order-2 px-4 sm:px-0"
          >
            <div className="absolute -top-10 -right-5 md:-right-10 w-32 h-32 border border-[var(--accent)]/20 rounded-full animate-pulse" />
            
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group-hover:border-[var(--accent)]/30 transition-colors duration-500 max-w-[500px] mx-auto">
              <img
                src="/images/innovation.jpg"
                alt="Innovation"
                className="w-full aspect-[4/5] lg:aspect-square object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
            </div>

            {/* FLOATING CARD - Centered at bottom of image on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 md:-left-12 bg-[#111]/90 border border-white/10 p-5 rounded-2xl shadow-2xl backdrop-blur-xl w-[200px] z-20"
            >
              <p className="text-[var(--accent)] font-bold text-3xl mb-1">99%</p>
              <p className="text-white text-xs uppercase tracking-tighter font-semibold opacity-70">
                Client satisfaction in technical execution.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}