import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import MagneticButton from "./UI/MagneticButton";

export default function InnovationSection() {
  const navigate = useNavigate();

  return (
    <section className="mt-36 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >

          <span className="inline-block mb-4 px-4 py-1 rounded-full
                           text-xs tracking-widest uppercase
                           bg-[var(--accent)]/10 text-[var(--accent)]">
            Innovation & Excellence
          </span>

          <h2 className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-[var(--accent)] to-lime-300
                             bg-clip-text text-transparent">
              Innovation
            </span>
            <br />
            <span className="relative inline-block">
              in Action
              <span className="absolute left-0 -bottom-2 w-16 h-[3px]
                               bg-[var(--accent)] rounded-full" />
            </span>
          </h2>

          <p className="text-gray-300 mt-8 max-w-xl text-lg leading-relaxed">
            Every project we deliver is powered by{" "}
            <span className="text-white font-medium">
              strategy, creativity, and cutting-edge technology
            </span>.
          </p>

          <p className="text-gray-500 mt-5 max-w-xl leading-relaxed">
            From early concept to final deployment, our focus remains on
            performance, scalability, and long-term value.
          </p>

          {/* MAGNET BUTTON */}
          <MagneticButton
            onClick={() => navigate("/services")}
            className="mt-10 px-9 py-3 rounded-full font-medium text-black
                       bg-[var(--accent)]
                       hover:shadow-[0_0_40px_rgba(217,249,157,0.6)]"
          >
            <span>Explore Our Services</span>
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-3xl
                          bg-[var(--accent)]/10 blur-2xl" />

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
