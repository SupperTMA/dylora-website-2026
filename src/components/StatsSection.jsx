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
    const duration = 1200;
    const step = Math.max(Math.floor(duration / value), 25);

    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= value) clearInterval(timer);
    }, step);

    return () => clearInterval(timer);
  }, [start, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="mt-36 relative">

      {/* ambient animated glow */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute inset-0 -z-10 bg-cyan-400/10 blur-3xl"
      />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block mb-4 px-4 py-1 rounded-full
                         text-xs tracking-widest uppercase
                         bg-cyan-400/10 text-cyan-400">
          Our Impact
        </span>

        <h2 className="text-4xl md:text-5xl font-extrabold">
          Numbers That Speak
        </h2>

        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          A snapshot of the trust we’ve earned and the measurable results
          delivered through innovation and consistency.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.15 },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {stats.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -12 }}
            transition={{ type: "spring", stiffness: 180 }}
            className="group relative rounded-2xl p-8 text-center
                       bg-[#0b0b0b] border border-white/10
                       hover:border-cyan-400/40
                       hover:shadow-[0_0_60px_rgba(34,211,238,0.25)]"
          >

            {/* animated accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute top-0 left-0 h-[2px] w-full
                         origin-left bg-gradient-to-r
                         from-cyan-400 to-teal-300"
            />

            {/* glow */}
            <div className="absolute inset-0 rounded-2xl
                            bg-cyan-400/10 opacity-0
                            group-hover:opacity-100
                            blur-2xl transition" />

            {/* number */}
            <motion.h3
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative text-5xl font-extrabold
                         bg-gradient-to-r from-cyan-400 to-teal-300
                         bg-clip-text text-transparent"
            >
              <CountUp
                value={item.value}
                suffix={item.suffix}
                start={isInView}
              />
            </motion.h3>

            {/* label */}
            <p className="relative text-gray-400 mt-4 uppercase
                          tracking-widest text-xs">
              {item.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
