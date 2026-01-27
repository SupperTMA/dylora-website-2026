import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 10, suffix: "+", label: "Happy Clients" },
  { value: 2, suffix: "Y+", label: "Years of Experience" },
  { value: 24, suffix: "/7", label: "Support Availability" },
];

function CountUp({ value, suffix, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 1500; 
    const step = Math.max(Math.floor(duration / value), 20);

    const timer = setInterval(() => {
      current += 1;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, step);

    return () => clearInterval(timer);
  }, [start, value]);

  return (
    <span>
      {count}
      <span className="text-white/40 ml-0.5 sm:ml-1">{suffix}</span>
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="mt-24 md:mt-36 relative py-12 md:py-20 overflow-hidden">
      
      {/* BACKGROUND DECOR */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[var(--accent)]/5 blur-[100px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--accent)]/10 blur-[120px] rounded-full -z-10" />

      {/* HEADING SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16 md:mb-24 px-4 relative"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[var(--accent)]/50" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--accent)] font-bold">
              Key Metrics
            </span>
            <div className="w-8 h-[1px] bg-[var(--accent)]/50" />
        </div>

        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic">
          Numbers That <span className="text-[var(--accent)] text-outline">Speak</span>
        </h2>

        <p className="text-gray-500 mt-4 md:mt-6 max-w-2xl mx-auto text-sm md:text-lg font-light px-6">
          A snapshot of the trust we’ve earned and results delivered.
        </p>
      </motion.div>

      {/* STATS GRID - 2 columns on mobile */}
      <motion.div
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.1 } },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 px-4 max-w-7xl mx-auto"
      >
        {stats.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              show: { opacity: 1, scale: 1 },
            }}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative rounded-2xl md:rounded-3xl p-5 md:p-10 bg-white/[0.02] border border-white/10 hover:border-[var(--accent)]/30 transition-all duration-500 overflow-hidden"
          >
            {/* BORDER GLOW TRACE - Desktop Only Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" />
            </div>

            <div className="absolute inset-0 bg-black/40 backdrop-blur-md -z-10" />

            {/* NUMBER */}
            <div className="relative z-10">
              <h3 className="text-3xl md:text-6xl font-black text-white tracking-tight flex justify-center items-baseline">
                <CountUp
                  value={item.value}
                  suffix={item.suffix}
                  start={isInView}
                />
              </h3>
            </div>

            {/* LABEL */}
            <div className="relative mt-3 md:mt-6 flex flex-col items-center">
                <p className="text-gray-400 font-medium tracking-widest text-[8px] md:text-[10px] text-center uppercase leading-tight">
                {item.label}
                </p>
                {/* Accent Line */}
                <div className="mt-2 w-6 md:w-0 md:group-hover:w-12 h-[1px] md:h-[2px] bg-[var(--accent)]/40 md:bg-[var(--accent)] transition-all duration-500" />
            </div>

            {/* Subtle corner glow */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-[var(--accent)]/5 blur-2xl group-hover:bg-[var(--accent)]/15 transition-all duration-500" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}