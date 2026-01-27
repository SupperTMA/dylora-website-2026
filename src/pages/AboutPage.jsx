import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "framer-motion";
import { Plus, Check } from "lucide-react";
import useProgressBar from "../hooks/useProgressBar";
import useCountUp from "../hooks/useCountUp";
import SmoothScroll from "../components/SmoothScroll";

const PURPOSE = {
  mission: {
    title: "Our Mission",
    text: "To empower businesses with innovative technology solutions that drive growth, efficiency, and digital transformation. We believe in creating solutions that not only solve today's challenges but also prepare businesses for tomorrow's opportunities.",
    points: [
      "Deliver exceptional value through cutting-edge technology",
      "Foster long-term partnerships built on trust and results",
      "Continuously innovate and adapt to evolving market needs",
      "Make advanced technology accessible to businesses of all sizes"
    ],
    icon: "🎯"
  },
  vision: {
    title: "Our Vision",
    text: "To be the leading IT services partner for businesses seeking cutting-edge digital solutions and exceptional support. We envision a future where technology seamlessly enhances every aspect of business operations, driving unprecedented growth and innovation.",
    points: [
      "Pioneer the next generation of digital solutions",
      "Expand our global footprint while maintaining quality",
      "Develop industry-specific technology frameworks",
      "Create a culture of continuous innovation and learning"
    ],
    icon: "👁️"
  },
  values: {
    title: "Our Values",
    cards: [
      {
        title: "Excellence",
        desc: "We strive for perfection in every project, delivering solutions that exceed expectations.",
        icon: "🎯"
      },
      {
        title: "Innovation",
        desc: "Constantly exploring new technologies and approaches to solve complex challenges.",
        icon: "💡"
      },
      {
        title: "Partnership",
        desc: "Building long-term relationships based on trust, transparency, and mutual success.",
        icon: "🤝"
      },
      {
        title: "Agility",
        desc: "Adapting quickly to changing requirements and market dynamics to deliver value faster.",
        icon: "🚀"
      }
    ]
  },
};

const TIMELINE = [
  {
    year: "2024",
    title: "THE GENESIS",
    desc: "Dylora was founded with a vision to revolutionize digital experiences through architectural excellence. In our first year, we established our core principles of 'Architectural Integrity' and 'Human-Centric Design.' We assembled a world-class team of engineers, designers, and strategists. Our inaugural projects focused on building scalable foundations across fintech, healthcare, and e-commerce sectors. By year-end, we had established partnerships with 3 industry leaders and gained recognition for our innovative approach to web architecture.",
    img: "/images/genesis.jpg"
  },
  {
    year: "2025",
    title: "SCALING LIMITS",
    desc: "As demand grew, we evolved from a boutique studio into a global technology partner. This year marked our expansion across three continents, delivering 15+ high-impact projects for enterprise clients. We refined our development frameworks to handle massive scale while maintaining exceptional user experience. Our team doubled in size, bringing in specialists in AI/ML, cloud architecture, and DevOps. Major achievements included launching a fintech platform processing 1M+ daily transactions and an e-commerce solution serving 500K+ concurrent users.",
    img: "/images/scaling.jpg"
  },
  {
    year: "2026",
    title: "FUTURE CORE",
    desc: "Today, we stand at the forefront of the AI revolution, integrating cutting-edge machine learning into every aspect of our development pipeline. We're architecting autonomous digital ecosystems that learn and evolve. This year, we launched our proprietary framework 'Dylora Core' - a next-generation architecture combining serverless computing, edge processing, and AI orchestration. We're actively working on 8 groundbreaking projects including a decentralized social platform and an AI-driven supply chain optimizer. Our mission has evolved to redefine 'Digital Excellence' in the age of AI.",
    img: "/images/future.jpg"
  },
];

const FAQ_DATA = [
  { id: "01", q: "What services does Dylora offer?", a: "We specialize in building scalable digital products including custom web applications, mobile apps, AI-powered solutions, and enterprise software.", img: "/images/faq-1.jpg" },
  { id: "02", q: "How does your development process work?", a: "Our process is rooted in architectural integrity: discovery, strategic wireframing, agile development, and rigorous testing.", img: "/images/faq-2.jpg" },
  { id: "03", q: "What technologies do you work with?", a: "We are experts in the modern stack, including React, Next.js, Node.js, and advanced AI integration frameworks.", img: "/images/faq-3.jpg" },
  { id: "04", q: "How do you ensure project quality?", a: "Quality is ensured through automated testing, peer code reviews, and a human-centric design approach.", img: "/images/faq-4.jpg" }
];

const TEAM = [
  { name: "Vikram Patel", role: "Founder & CEO", initial: "V", desc: "Leading the vision of architectural integrity and digital excellence.", bg: "from-accent/20" },
  { name: "Sarah Chen", role: "Lead Developer", initial: "S", desc: "Expert in scalable React ecosystems and modern web architecture.", bg: "from-blue-500/20" },
  { name: "Alex Rivera", role: "Lead Designer", initial: "A", desc: "Crafting human-centric digital experiences that inspire.", bg: "from-purple-500/20" },
  { name: "James Wilson", role: "Tech Strategist", initial: "J", desc: "Driving global growth and innovative solutions.", bg: "from-orange-500/20" },
];


const FAQItem = ({ id, q, a, img }) => {
  const [isOpen, setIsOpen] = useState(id === "01");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="border-b border-white/10 relative" onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <AnimatePresence>
        {isHovered && !isOpen && (
          <motion.div initial={{ opacity: 0, scale: 0.8, rotate: -5 }} animate={{ opacity: 1, scale: 1, rotate: 2 }} exit={{ opacity: 0, scale: 0.8 }} className="fixed pointer-events-none z-[100] w-64 h-40 hidden lg:block overflow-hidden rounded-xl border border-white/20 shadow-2xl" style={{ left: mousePos.x + 20, top: mousePos.y - 80 }}>
            <img src={img} alt="Preview" className="w-full h-full object-cover" />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button onClick={() => setIsOpen(!isOpen)} className="w-full py-8 flex items-start justify-between text-left group transition-colors duration-500 hover:bg-white/[0.02] px-4 -mx-4">
        <div className="flex gap-6 md:gap-12 items-start">
          <motion.span whileHover={{ scale: 1.2, x: 5 }} className={`text-lg font-bold mt-1 transition-colors duration-300 ${isOpen ? 'text-accent' : 'text-gray-700 group-hover:text-gray-400'}`}>{id}</motion.span>
          <h3 className={`text-lg md:text-xl font-bold tracking-tight transition-all duration-500 ${isOpen ? 'text-accent translate-x-2' : 'text-white group-hover:translate-x-1'}`}>{q}</h3>
        </div>
        <motion.div animate={{ rotate: isOpen ? 0 : 90 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="mt-2">
          {isOpen ? <div className="w-5 h-[2px] bg-accent shadow-[0_0_10px_#D9F99D]" /> : <Plus size={22} className="text-zinc-500 group-hover:text-white transition-colors" />}
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
            <div className="pb-10 pl-12 md:pl-24 max-w-2xl">
              <p className="text-gray-400 text-sm md:text-base leading-relaxed border-l-2 border-accent/30 pl-6">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const TimelineItem = ({ item, index }) => {
  const itemRef = useRef(null);
  const { scrollYProgress: itemProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"]
  });

  // Slide from left or right based on index
  const imgX = useTransform(
    itemProgress,
    [0, 0.5, 1],
    index % 2 === 0 ? ["-100%", "0%", "0%"] : ["100%", "0%", "0%"]
  );

  return (
    <div ref={itemRef} className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 md:gap-16 relative z-10`}>
      {/* Scroll-Triggered Image with Side Entry */}
      <div className="w-full md:w-1/2 overflow-hidden">
        <motion.div
          style={{ x: imgX }}
          className="rounded-2xl overflow-hidden border border-white/5 h-[280px] md:h-[400px] shadow-2xl bg-zinc-900"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="w-full h-full relative overflow-hidden"
          >
            <img
              src={item.img}
              className="w-full h-full object-cover transition-all duration-700"
              alt={item.title}
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="w-full md:w-1/2 text-center md:text-left px-4">
        <span className="text-5xl md:text-6xl font-bold text-accent block mb-6">{item.year}</span>
        <h4 className="text-2xl md:text-3xl font-bold mb-5">{item.title}</h4>
        <p className="text-gray-400 text-xl md:text-2xl leading-relaxed">
          {item.desc}
        </p>
      </div>
    </div>
  );
};

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("mission");
  const progressRef = useRef(null);
  const journeyRef = useRef(null);

  useProgressBar(progressRef);
  const f = useCountUp(2024);
  const p = useCountUp(15);
  const c = useCountUp(10);
  const t = useCountUp(10);

  const { scrollYProgress } = useScroll({ target: journeyRef, offset: ["start end", "end center"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <SmoothScroll>
      <main className="bg-bg text-white overflow-x-hidden selection:bg-accent selection:text-black">
        <div ref={progressRef} className="fixed top-0 left-0 h-[2px] w-full bg-accent origin-left z-[100] shadow-[0_0_15px_#D9F99D]" />

        {/* HERO SECTION */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-8 pt-32 pb-20 relative overflow-hidden">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="text-accent">ABOUT </span>
              <span className="text-white">US</span>
            </h1>
            <div className="max-w-2xl mx-auto mt-4 mb-8">
              <p className="text-gray-400 text-base">A collective of skilled professionals building the next generation of digital solutions with architectural excellence.</p>
            </div>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center items-center mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-accent text-black font-bold rounded-lg hover:bg-[#bef264] transition-all duration-300 cursor-pointer shadow-lg shadow-accent/20 hover:shadow-accent/40"
              >
                Discover Our Story
              </motion.button>
            </motion.div>
          </motion.div>
        </section>

        {/* STATS SECTION */}
        <section className="py-20 border-y border-white/5 bg-zinc-900/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-y-12">
            {[{ h: f, l: "FOUNDED" }, { h: p, l: "PROJECTS", plus: true }, { h: c, l: "HAPPY CLIENT", plus: true }, { h: t, l: "TEAM MEMBERS", plus: true }].map((stat, i) => (
              <div key={i} ref={stat.h.ref} className="text-center group md:border-r last:border-0 border-white/5">
                <h3 className="text-[14vw] md:text-8xl font-display text-white group-hover:text-accent transition-all duration-500 leading-none">{stat.h.count}{stat.plus && "+"}</h3>
                <p className="text-zinc-500 uppercase font-bold text-[8px] md:text-[10px] tracking-[0.3em] mt-4">{stat.l}</p>
              </div>
            ))}
          </div>
        </section>

        {/* OUR STORY SECTION */}
        <section id="our-story" className="py-20 max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-2xl md:text-3xl font-bold">
                <span className="border-b-2 border-gray-700 pb-2">Our Story</span>
              </h2>
              <div className="space-y-3 text-gray-400 text-sm leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Founded in 2024, Dylora began with a simple yet ambitious vision — to build digital products that are fast, scalable, and future-ready. We believe technology should empower, not complicate.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Our approach combines modern architecture with thoughtful design to deliver real-world impact. Trusted by clients across industries, we adapt as businesses grow, ensuring excellence at every touchpoint.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-white font-bold text-sm"
                >
                  Innovation is our architecture.
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="rounded-[2.5rem] overflow-hidden border border-white/10 hover:border-accent/30 transition-all duration-1000 shadow-2xl group"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src="/images/about-story.jpg"
                alt="Our story"
                className="w-full h-[450px] object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* THE JOURNEY (TIMELINE) */}
        <section ref={journeyRef} className="py-40 relative bg-[#080808]">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-3"><span className="border-b-2 border-gray-700 pb-2">The Journey</span></h2>
              <p className="text-gray-400 text-sm mt-4">Our evolution from startup to trusted technology partner</p>
            </div>
            <div className="relative">
              <motion.div style={{ scaleY }} className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-accent/20 origin-top z-0 hidden md:block" />
              <div className="space-y-64">
                {TIMELINE.map((item, i) => (
                  <TimelineItem key={i} item={item} index={i} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MISSION/VISION/VALUES SECTION */}
        <section className="py-20 bg-[#080808] border-y border-white/10">
          <div className="max-w-6xl mx-auto px-8">
            {/* Tabs */}
            <div className="flex gap-4 mb-12 justify-center">
              {Object.keys(PURPOSE).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 rounded-lg text-sm font-semibold capitalize transition-all ${activeTab === tab
                    ? "bg-accent text-black"
                    : "bg-[#1a1a1a] text-gray-400 border border-gray-800 hover:border-accent hover:text-accent"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'values' ? (
                  /* Values Grid */
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {PURPOSE.values.cards.map((card, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-panel rounded-2xl p-8 hover:border-accent/30 transition-all group"
                      >
                        <div className="w-20 h-20 rounded-full bg-[#1a1a1a] border border-gray-800 flex items-center justify-center text-4xl mb-6 group-hover:border-accent group-hover:bg-accent/10 transition-all">
                          {card.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  /* Mission and Vision Layout */
                  <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-6">{PURPOSE[activeTab].title}</h2>
                      <p className="text-gray-400 text-base leading-relaxed mb-8">
                        {PURPOSE[activeTab].text}
                      </p>
                      <ul className="space-y-4">
                        {PURPOSE[activeTab].points.map((point, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300 text-sm">{point}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-48 h-48 rounded-full bg-[#1a1a1a] border border-gray-800 flex items-center justify-center text-8xl hover:border-accent transition-colors">
                        {PURPOSE[activeTab].icon}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* OUR TEAMS SECTION */}
        <section className="py-40 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold"><span className="border-b-2 border-gray-700 pb-2">Our Team</span></h2>
              <p className="text-gray-400 text-lg mt-6">Meet the talented people behind Dylora</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {TEAM.map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                  className="glass-panel p-8 rounded-[2rem] group cursor-default relative overflow-hidden"
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.bg} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                  <div className="relative z-10">
                    {/* Avatar */}
                    <div className="w-20 h-20 rounded-full border border-accent/20 bg-black flex items-center justify-center mb-8 mx-auto group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                      <span className="font-display text-3xl text-accent group-hover:text-black transition-colors duration-500">{member.initial}</span>
                    </div>

                    {/* Name */}
                    <h4 className="text-xl font-bold text-center mb-2">{member.name}</h4>
                    {/* Role */}
                    <p className="text-accent text-sm font-semibold text-center mb-4">{member.role}</p>

                    {/* Description */}
                    <p className="text-zinc-500 text-sm text-center leading-relaxed group-hover:text-zinc-300 transition-colors duration-500">
                      {member.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-40 bg-bg border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-20">
              <h2 className="text-3xl md:text-4xl font-bold"><span className="border-b-2 border-gray-700 pb-2">Frequently Asked Questions</span></h2>
            </div>
            <div className="space-y-0">{FAQ_DATA.map((item, index) => <FAQItem key={index} {...item} />)}</div>
          </div>
        </section>

        <footer className="py-20 border-t border-white/5 text-center">
          <p className="text-zinc-600 font-bold text-[10px] tracking-[0.5em] uppercase">Dylora &copy; 2026</p>
        </footer>
      </main>
    </SmoothScroll>
  );
};

export default AboutPage;