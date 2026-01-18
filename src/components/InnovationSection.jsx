import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function InnovationSection() {
  const navigate = useNavigate();

  return (
    <section className="mt-36 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >

          {/* SMALL LABEL */}
          <span className="inline-block mb-4 px-4 py-1 rounded-full
                           text-xs tracking-widest uppercase
                           bg-cyan-400/10 text-cyan-400">
            Innovation & Excellence
          </span>

          {/* MAIN HEADING */}
          <h2 className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-teal-300
                             bg-clip-text text-transparent">
              Innovation
            </span>
            <br />
            <span className="relative inline-block">
              in Action
              <span className="absolute left-0 -bottom-2 w-16 h-[3px]
                               bg-cyan-400 rounded-full"></span>
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-300 mt-8 max-w-xl text-lg leading-relaxed">
            Every project we deliver is powered by <span className="text-white font-medium">
            strategy, creativity, and cutting-edge technology</span>.
            We don’t just build products — we create digital experiences
            that leave a lasting impact.
          </p>

          <p className="text-gray-500 mt-5 max-w-xl leading-relaxed">
            From early concept to final deployment, our focus remains on
            performance, scalability, and long-term value for your business.
          </p>

          {/* CTA */}
          <button
            onClick={() => navigate("/services")}
            className="mt-10 px-9 py-3 rounded-full font-medium text-black
                       bg-cyan-400 hover:bg-cyan-300
                       transition-all duration-300
                       hover:shadow-[0_0_40px_rgba(34,211,238,0.6)]
                       hover:-translate-y-1"
          >
            Explore Our Services
          </button>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >

          {/* GLOW */}
          <div className="absolute -inset-4 rounded-3xl
                          bg-cyan-400/10 blur-2xl"></div>

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
