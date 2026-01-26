import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import MagneticButton from "./UI/MagneticButton";

export default function InnovationSection() {
  const navigate = useNavigate();

  return (
    <section className="mt-36 relative">
      {/* HEADING FULL WIDTH */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="text-6xl md:text-7xl xl:text-8xl font-extrabold uppercase leading-[0.95] mb-16"
      >
        <span className="text-[var(--accent)]">INNOVATION IN</span>{" "}
        <span className="text-white">ACTION</span>
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <span className="inline-block mb-4 text-xs tracking-widest uppercase text-[var(--accent)]">
            Innovation & Excellence
          </span>

          {/* glow divider */}
          <div className="w-24 h-[2px] bg-[var(--accent)]/60 mb-6 rounded-full" />

          <p className="text-gray-300 mt-4 max-w-xl text-lg leading-relaxed">
            Every project we deliver is powered by{" "}
            <span className="text-white font-medium">
              strategy, creativity, and cutting-edge technology
            </span>.
            We blend design thinking with engineering precision to build
            experiences that truly matter.
          </p>

          <p className="text-gray-400 mt-5 max-w-xl leading-relaxed">
            From early concept to final deployment, our focus remains on
            performance, scalability, and long-term value. We don’t just build
            products — we craft digital solutions that evolve with your
            business.
          </p>

          <p className="text-gray-500 mt-5 max-w-xl leading-relaxed">
            Our multidisciplinary team collaborates closely with clients to
            transform bold ideas into reliable, future-ready platforms that
            drive measurable results and sustainable growth.
          </p>

          {/* FEATURE POINTS */}
          <ul className="mt-6 space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              Human-centered design approach
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              Scalable & secure architecture
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              Continuous optimization & support
            </li>
          </ul>

          <MagneticButton
            onClick={() => navigate("/services")}
            className="mt-10 px-9 py-3 rounded-full font-medium text-black
                       bg-[var(--accent)]
                       hover:shadow-[0_0_40px_rgba(217,249,157,0.6)]"
          >
            <span>Explore Our Services</span>
          </MagneticButton>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-3xl bg-[var(--accent)]/10 blur-3xl" />

          <img
            src="/images/innovation.jpg"
            alt="Innovation"
            className="relative rounded-2xl w-full object-cover
                       border border-white/10
                       shadow-[0_0_80px_rgba(0,0,0,0.7)]"
          />
        </motion.div>

      </div>
    </section>
  );
}
