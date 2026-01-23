import { useState } from "react";
import { Mail, MapPin, Clock, ShieldCheck, Users } from "lucide-react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

const contactCards = [
  {
    title: "Office Address",
    text: "Shell Colony, Chembur, Mumbai 400071",
    icon: MapPin,
    bgImage:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80",
  },
  {
    title: "Email Us",
    text: "contact@dylora.in",
    icon: Mail,
    bgImage:
      "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?w=1200&q=80",
  },
  {
    title: "Working Hours",
    text: "Mon – Sat\n9 AM – 5 PM",
    icon: Clock,
    bgImage:
      "https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=1200&q=80",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [igMagnet, setIgMagnet] = useState(true);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleCheckbox = (e) => setIgMagnet(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Message Sent Successfully 🚀\nFree Strategy Call: ${
        igMagnet ? "Yes" : "No"
      }`
    );
    setForm({ name: "", email: "", phone: "", message: "" });
    setIgMagnet(true);
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 pt-32 pb-20 text-center px-6"
      >
        <h1 className="text-5xl md:text-6xl font-bold">
          <span className="text-[#D9F99D]">CONTACT </span>US
        </h1>
        <p className="text-gray-400 mt-6 max-w-xl mx-auto">
          Talk to our experts and transform your ideas into secure, scalable digital solutions.
        </p>
      </motion.section>

      {/* CONTACT CARDS */}
      <section className="relative z-10 px-8 md:px-20 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactCards.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02, rotateY: 5, rotateX: 5 }}
                onMouseMove={onMove}
                style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
                className="relative bg-[#1a1a1a] border border-gray-800 rounded-lg p-8 text-center hover:border-[#D9F99D] transition-all duration-300 group overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0">
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.bgImage})` }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/95 via-[#1a1a1a]/90 to-[#1a1a1a]/95" />
                </div>

                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition"
                  style={{
                    background: useMotionTemplate`
                      radial-gradient(
                        180px circle at ${mouseX}px ${mouseY}px,
                        rgba(217,249,157,0.15),
                        transparent 65%
                      )
                    `,
                  }}
                />

                <motion.div
                  className="relative z-10 mb-5 inline-block"
                  whileHover={{ scale: 1.3, rotateY: 360 }}
                  transition={{ duration: 0.8 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div
                    className="w-20 h-20 mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center border border-gray-700 group-hover:border-[#D9F99D] group-hover:shadow-lg group-hover:shadow-[#D9F99D]/30 transition"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    <Icon size={32} className="text-[#D9F99D]" />
                  </div>
                </motion.div>

                <h3 className="relative z-10 text-xl font-bold mb-3 group-hover:text-[#D9F99D]" style={{ transform: "translateZ(10px)" }}>
                  {item.title}
                </h3>

                <p className="relative z-10 text-gray-400 whitespace-pre-line">{item.text}</p>

                <motion.div className="absolute inset-0 bg-gradient-to-t from-[#D9F99D]/10 to-transparent opacity-0 group-hover:opacity-100 transition rounded-lg" />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-6">
        <TrustCard
          icon={ShieldCheck}
          title="Secure Communication"
          text="Your data is protected with enterprise-grade security."
        />
        <TrustCard
          icon={Users}
          title="Dedicated Support Team"
          text="Experienced professionals ready to assist you."
        />
      </section>

      {/* CONTACT FORM */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pb-36">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onMouseMove={onMove}
          className="relative bg-gradient-to-br from-[#111] to-[#0b0b0b] border border-gray-800 rounded-2xl p-14 overflow-hidden"
        >
          <motion.div
            className="absolute inset-0"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  240px circle at ${mouseX}px ${mouseY}px,
                  rgba(217,249,157,0.12),
                  transparent 70%
                )
              `,
            }}
          />

          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl font-bold text-[#D9F99D]">Send Us a Message</h2>

            {/* IG MAGNET */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative border border-[#D9F99D]/40 rounded-xl p-6 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] overflow-hidden"
            >
              <motion.div
                className="absolute inset-0"
                style={{
                  background: useMotionTemplate`
                    radial-gradient(
                      200px circle at ${mouseX}px ${mouseY}px,
                      rgba(217,249,157,0.18),
                      transparent 70%
                    )
                  `,
                }}
              />

              <div className="relative z-10 flex gap-4 items-start">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#D9F99D]/10 border border-[#D9F99D]/40">
                  <span className="text-xl">🎁</span>
                </div>

                <div className="flex-1">
                  <h4 className="text-lg font-bold text-[#D9F99D]">Free Strategy Call</h4>
                  <p className="text-gray-400 text-sm mt-1">
                    Submit this form & get a <b>FREE 30-minute consultation</b> with our experts + a basic project roadmap.
                  </p>

                  <label className="flex items-center gap-2 mt-3 text-sm cursor-pointer">
                    <input
                      type="checkbox"
                      checked={igMagnet}
                      onChange={handleCheckbox}
                      className="accent-[#D9F99D]"
                    />
                    Yes, I want the free consultation 🚀
                  </label>
                </div>
              </div>
            </motion.div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="grid gap-6">
              <div className="grid md:grid-cols-3 gap-5">
                <Input name="name" placeholder="Your Name" onChange={handleChange} value={form.name}/>
                <Input name="email" placeholder="Email Address" onChange={handleChange} value={form.email}/>
                <Input name="phone" placeholder="Phone Number" onChange={handleChange} value={form.phone}/>
              </div>

              <textarea
                name="message"
                rows="6"
                placeholder="Tell us about your project..."
                onChange={handleChange}
                value={form.message}
                className="bg-black border border-gray-700 rounded-lg p-4"
              />

              <motion.button
                whileHover={{ scale: 1.06 }}
                className="bg-[#D9F99D] text-black px-10 py-4 rounded-lg font-bold w-fit hover:bg-[#bef264]"
              >
                Send Message 🚀
              </motion.button>
            </form>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

function TrustCard({ icon: Icon, title, text }) {
  return (
    <motion.div whileHover={{ y: -8 }} className="flex gap-4 items-start bg-[#1a1a1a] border border-gray-800 rounded-lg p-6">
      <Icon size={32} className="text-[#D9F99D]" />
      <div>
        <h4 className="font-bold mb-1">{title}</h4>
        <p className="text-gray-400 text-sm">{text}</p>
      </div>
    </motion.div>
  );
}

function Input({ name, placeholder, onChange, value }) {
  return (
    <input
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className="bg-black border border-gray-700 rounded-lg p-4 w-full"
    />
  );
}