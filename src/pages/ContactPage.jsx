import { useState } from "react";
import { Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

import { fadeUp, stagger } from "../config/animations";
import { statsData, infoData } from "../config/contactData";

const ICONS = {
  Office: <MapPin />,
  Email: <Mail />,
  "Working Hours": <Clock />,
};

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const validate = () => {
    const e = {};
    if (!form.name) e.name = "Name required";
    if (!form.email) e.email = "Email required";
    if (!form.message) e.message = "Message required";
    return e;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) return setErrors(v);

    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSuccess("Message sent successfully!");
    setForm({ name: "", email: "", phone: "", message: "" });
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="text-center pt-32 pb-20 px-6">
        <motion.h1 {...motionPreset()} className="text-4xl md:text-5xl font-bold text-lime-400">
          Get in Touch <span className="text-white">With Us</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-2xl mx-auto text-gray-400"
        >
          Have a project in mind? Let’s build something impactful together.
        </motion.p>
      </section>

      {/* STATS */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6 mb-24"
      >
        {statsData.map((item) => (
          <motion.div
            key={item.id}
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center"
          >
            <p className="text-3xl font-bold text-lime-400">{item.value}</p>
            <p className="text-sm text-gray-400 mt-2">{item.label}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* FORM */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 mb-28"
      >
        <FormBlock
          form={form}
          errors={errors}
          loading={loading}
          success={success}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </motion.section>

      {/* INFO */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 px-6 pb-24">
        {infoData.map((item) => (
          <InfoCard key={item.id} {...item} icon={ICONS[item.title]} />
        ))}
      </section>
    </div>
  );
}

/* ---------- Components ---------- */

const motionPreset = () => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7 },
});

function FormBlock({ form, errors, loading, success, onChange, onSubmit }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
      <h2 className="text-2xl font-semibold text-lime-400 mb-6">Send Message</h2>

      <form onSubmit={onSubmit} className="grid gap-5">
        <div className="grid md:grid-cols-3 gap-4">
          <Input name="name" value={form.name} onChange={onChange} error={errors.name} placeholder="Your Name" />
          <Input name="email" value={form.email} onChange={onChange} error={errors.email} placeholder="Email Address" />
          <Input name="phone" value={form.phone} onChange={onChange} placeholder="Phone Number" />
        </div>

        <textarea
          name="message"
          value={form.message}
          onChange={onChange}
          rows="5"
          placeholder="Write your message..."
          className="bg-black border border-zinc-700 rounded p-3"
        />
        {errors.message && <p className="text-red-400 text-sm">{errors.message}</p>}

        <button className="bg-lime-400 text-black px-6 py-3 rounded w-fit hover:bg-lime-300">
          {loading ? "Sending..." : "Send Message"}
        </button>

        {success && <p className="text-green-400">{success}</p>}
      </form>
    </div>
  );
}

function Input({ name, value, onChange, placeholder, error }) {
  return (
    <div>
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-black border border-zinc-700 rounded p-3 w-full"
      />
      {error && <p className="text-red-400 text-sm">{error}</p>}
    </div>
  );
}

function InfoCard({ icon, title, text }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"
    >
      <div className="text-lime-400 mb-3">{icon}</div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-400">{text}</p>
    </motion.div>
  );
}
