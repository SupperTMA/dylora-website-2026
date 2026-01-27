import React, { useState, useLayoutEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "../components/UI/MagneticButton";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

// --- API CONFIGURATION ---
const API_CONFIG = {
  CONTACT: "https://demo-rnmwmu34f-ishas-projects-3966c652.vercel.app/api/contact", // 
  QUOTATION: "https://demo-rnmwmu34f-ishas-projects-3966c652.vercel.app/api/quotation/submit" // 
};

// --- UI Component: Standard Input Field (Updated for State) ---
const InputField = ({ label, name, type = "text", placeholder, required = false, value, onChange, disabled }) => (
  <div className="flex flex-col gap-2 group">
    <label className="font-mono text-xs uppercase tracking-widest text-gray-500 transition-colors group-focus-within:text-[#D9F99D]">
      {label} {required && <span className="text-[#D9F99D]">*</span>}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      required={required}
      placeholder={placeholder}
      className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-4 text-white font-mono text-sm placeholder:text-gray-700 focus:outline-none focus:border-[#D9F99D] focus:bg-white/5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
    />
  </div>
);

// --- UI Component: Select Dropdown (Updated for State) ---
const SelectField = ({ label, name, options, required = false, value, onChange, disabled }) => (
  <div className="flex flex-col gap-2 group">
    <label className="font-mono text-xs uppercase tracking-widest text-gray-500 transition-colors group-focus-within:text-[#D9F99D]">
      {label} {required && <span className="text-[#D9F99D]">*</span>}
    </label>
    <div className="relative">
      <select
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className="w-full appearance-none bg-[#111] border border-white/10 rounded-xl px-4 py-4 text-white font-mono text-sm focus:outline-none focus:border-[#D9F99D] focus:bg-white/5 transition-all duration-300 cursor-pointer disabled:opacity-50"
      >
        <option value="" disabled>Select an option</option>
        {options.map((opt, i) => (
          <option key={i} value={opt} className="bg-[#111] text-gray-300">
            {opt}
          </option>
        ))}
      </select>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">↓</div>
    </div>
  </div>
);

// --- UI Component: Textarea (Updated for State) ---
const TextAreaField = ({ label, name, placeholder, required = false, value, onChange, disabled }) => (
  <div className="flex flex-col gap-2 group">
    <label className="font-mono text-xs uppercase tracking-widest text-gray-500 transition-colors group-focus-within:text-[#D9F99D]">
      {label} {required && <span className="text-[#D9F99D]">*</span>}
    </label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      required={required}
      rows={5}
      placeholder={placeholder}
      className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-4 text-white font-mono text-sm placeholder:text-gray-700 focus:outline-none focus:border-[#D9F99D] focus:bg-white/5 transition-all duration-300 resize-none disabled:opacity-50"
    />
  </div>
);

// --- Form 1: Simple Message (Integrated) ---
const MessageForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", 
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(API_CONFIG.CONTACT, {
        method: "POST", // [cite: 27]
        headers: { "Content-Type": "application/json" }, // [cite: 28]
        body: JSON.stringify(formData), // Matches body requirements [cite: 30-35]
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ fullName: "", email: "", phone: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="space-y-5"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Backend requires "fullName" [cite: 31] */}
        <InputField 
          label="Full Name" 
          name="name" 
          placeholder="Enter your name" 
          required 
          value={formData.fullName}
          onChange={handleChange}
          disabled={loading}
        />
        <InputField 
          label="Email Address" 
          name="email" 
          type="email" 
          placeholder="Enter your email" 
          required 
          value={formData.email}
          onChange={handleChange}
          disabled={loading}
        />
      </div>
      {/* Backend requires "phone"  - Added field to match API */}
      <InputField 
          label="Phone Number" 
          name="phone" 
          type="tel" 
          placeholder="Enter your phone" 
          required 
          value={formData.phone}
          onChange={handleChange}
          disabled={loading}
        />
      <TextAreaField 
        label="Your Message" 
        name="message" 
        placeholder="How can we help you?" 
        required 
        value={formData.message}
        onChange={handleChange}
        disabled={loading}
      />
      <div className="pt-4">
        <MagneticButton className="w-full md:w-auto bg-[#D9F99D] text-black font-bold uppercase tracking-widest text-xs px-10 py-4 rounded-full hover:bg-white transition-colors hover:scale-105 disabled:opacity-70">
          <button type="submit" disabled={loading} className="w-full h-full flex items-center justify-center">
             {loading ? "Sending..." : "Send Message"}
          </button>
        </MagneticButton>
      </div>
    </motion.form>
  );
};

// --- Form 2: Detailed Quotation (Integrated) ---
const QuoteForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    projectDetails: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(API_CONFIG.QUOTATION, {
        method: "POST", // [cite: 4]
        headers: { "Content-Type": "application/json" }, // [cite: 5]
        body: JSON.stringify(formData), // Matches body requirements [cite: 7-15]
      });

      if (response.ok) {
        alert("Quote request sent successfully!");
        setFormData({ fullName: "", email: "", phone: "", company: "", service: "", budget: "", projectDetails: "" });
      } else {
        alert("Failed to submit quote. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting quote form:", error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="space-y-5"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <InputField 
          label="Full Name" 
          name="fullName" 
          placeholder="Enter your name" 
          required 
          value={formData.fullName}
          onChange={handleChange}
          disabled={loading}
        />
        <InputField 
          label="Email Address" 
          name="email" 
          type="email" 
          placeholder="Enter your email" 
          required 
          value={formData.email}
          onChange={handleChange}
          disabled={loading}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <InputField 
          label="Phone Number" 
          name="phone" 
          type="tel" 
          placeholder="Optional" 
          value={formData.phone}
          onChange={handleChange}
          disabled={loading}
        />
        <InputField 
          label="Company / Organization" 
          name="company" 
          placeholder="Optional" 
          value={formData.company}
          onChange={handleChange}
          disabled={loading}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <SelectField 
          label="Service Needed" 
          name="service" 
          required
          options={["Mobile Development", "Web Development", "UI/UX Design", "Digital Marketing", "IT Solutions", "Consultation"]}
          value={formData.service}
          onChange={handleChange}
          disabled={loading}
        />
        <SelectField 
          label="Estimated Budget" 
          name="budget" 
          options={["50k-1L", "< ₹50k", "₹1 Lakh - ₹5 Lakh", "₹5 Lakh+", "Not sure yet"]}
          value={formData.budget}
          onChange={handleChange}
          disabled={loading}
        />
      </div>
      {/* Backend requires "projectDetails" [cite: 14] */}
      <TextAreaField 
        label="Project Details" 
        name="projectDetails" 
        placeholder="Tell us about your project goals, timeline, and requirements..." 
        required 
        value={formData.projectDetails}
        onChange={handleChange}
        disabled={loading}
      />
      <div className="pt-4">
        <MagneticButton className="w-full md:w-auto bg-white text-black font-bold uppercase tracking-widest text-xs px-10 py-4 rounded-full hover:bg-[#D9F99D] transition-colors hover:scale-105 disabled:opacity-70">
           <button type="submit" disabled={loading} className="w-full h-full flex items-center justify-center">
             {loading ? "Submitting..." : "Request Quote"}
           </button>
        </MagneticButton>
      </div>
    </motion.form>
  );
};

const ContactPage = () => {
  const location = useLocation(); 
  
  const [formType, setFormType] = useState(location.state?.formType || "message");
  const containerRef = useRef(null);
  const bentoRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Text Reveal Animation
      const tl = gsap.timeline();
      tl.from(".hero-line span", {
        y: "100%",
        opacity: 0,
        rotate: 3,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.2
      });

      // 2. Bento Grid Scroll Trigger
      gsap.from(".bento-item", {
        scrollTrigger: {
          trigger: bentoRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out"
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-black min-h-screen text-white pt-32 pb-24 overflow-x-hidden">
      
      {/* ======================
          HERO SECTION
      ====================== */}
      <section className="max-w-[1800px] mx-auto px-6 mb-24">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12">
          <div>
            <span className="font-mono text-[#D9F99D] text-sm uppercase tracking-[0.2em] mb-6 block relative pl-12 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-8 before:h-[1px] before:bg-[#D9F99D]">
              Get In Touch
            </span>
            
            <h1 className="font-display font-extrabold text-[clamp(2.5rem,6vw,6rem)] leading-[0.95] tracking-tighter uppercase mix-blend-difference">
              <div className="hero-line overflow-hidden"><span className="block text-white">LET'S</span></div>
              <div className="hero-line overflow-hidden"><span className="block text-transparent" style={{ WebkitTextStroke: "1px white" }}>BUILD</span></div>
              <div className="hero-line overflow-hidden"><span className="block text-[#D9F99D]">SOMETHING</span></div>
              <div className="hero-line overflow-hidden"><span className="block text-white">GREAT</span></div>
            </h1>
          </div>
          <div className="md:max-w-md md:pb-4">
            <p className="text-gray-400 text-lg leading-relaxed">
              Ready to transform your digital presence? We are here to help you bring your ideas to life with cutting-edge technology and design.
            </p>
          </div>
        </div>
      </section>

      {/* ======================
          DYNAMIC FORM SECTION
      ====================== */}
      <section className="max-w-5xl mx-auto px-6 mb-32 relative z-10">
        <div className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute -top-[200px] -right-[200px] w-[400px] h-[400px] bg-[#D9F99D]/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10">
            {/* Form Toggle Switch */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
              <div>
                <h2 className="font-display text-3xl font-bold mb-2 text-white">
                  {formType === "message" ? "Let's Start a Conversation" : "Request a Quotation"}
                </h2>
                <p className="font-mono text-xs text-gray-500 uppercase tracking-widest">
                  {formType === "message" ? "Usually responding within 24 hours." : "Tell us about your project needs."}
                </p>
              </div>

              <div className="bg-[#111] p-1 rounded-full border border-white/10 flex relative w-full md:w-auto">
                 {/* Sliding Pill Background */}
                <motion.div 
                  className="absolute top-1 bottom-1 bg-[#D9F99D] rounded-full shadow-[0_0_15px_rgba(217,249,157,0.3)]"
                  initial={false}
                  animate={{ 
                    x: formType === "message" ? 0 : "100%", 
                    width: "50%" 
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
                <button 
                  onClick={() => setFormType("message")}
                  className={`relative z-10 flex-1 md:w-36 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${formType === "message" ? "text-black" : "text-gray-500 hover:text-white"}`}
                >
                  Send Message
                </button>
                <button 
                  onClick={() => setFormType("quote")}
                  className={`relative z-10 flex-1 md:w-36 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${formType === "quote" ? "text-black" : "text-gray-500 hover:text-white"}`}
                >
                  Get Quote
                </button>
              </div>
            </div>

            {/* Form Content with AnimatePresence */}
            <AnimatePresence mode="wait">
              {formType === "message" ? (
                <motion.div key="message"><MessageForm /></motion.div>
              ) : (
                <motion.div key="quote"><QuoteForm /></motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ======================
          BENTO GRID SECTION
      ====================== */}
      <section ref={bentoRef} className="max-w-[1800px] mx-auto px-6">
        <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-6">
            <h3 className="font-display text-4xl md:text-5xl text-white font-bold">Visit Our Office</h3>
            <div className="hidden md:flex items-center gap-2 text-[#D9F99D] text-xs font-mono border border-white/10 px-4 py-2 rounded-full bg-white/5">
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D9F99D] opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D9F99D]"></span>
               </span>
               MUMBAI, INDIA
            </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-[auto] md:grid-rows-[280px_280px] gap-4">
          
          {/* 1. BIGGEST LEFT: Visit Our Office (Span 7 cols, 2 rows) */}
          <div className="bento-item md:col-span-7 md:row-span-2 relative group overflow-hidden rounded-[2rem] border border-white/10 h-[300px] md:h-full">
            <img 
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80" 
              alt="Office HQ" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 p-8">
               <div className="w-12 h-12 bg-[#D9F99D] rounded-full flex items-center justify-center mb-4 text-black shadow-lg shadow-[#D9F99D]/20">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
               </div>
               <h4 className="font-display font-bold text-3xl text-white mb-2">Mumbai HQ</h4>
               <p className="font-mono text-sm text-gray-300">Shell Colony, Chembur, Mumbai - 400071</p>
            </div>
          </div>

          {/* 2. RIGHT TOP: Meeting Photo (Span 5 cols, 1 row) */}
          <div className="bento-item md:col-start-8 md:col-span-5 md:row-span-1 relative group overflow-hidden rounded-[2rem] border border-white/10 h-[250px] md:h-full">
             <img 
               src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80" 
               alt="Team Meeting" 
               className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-500" />
             <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-xs font-mono border border-white/10 flex items-center gap-2">
               <span className="w-2 h-2 bg-[#D9F99D] rounded-full"></span> COLLABORATION
             </div>
          </div>

          {/* 3. RIGHT BOTTOM LEFT: Email Us (Span 2 cols, 1 row) */}
          <a href="mailto:contact@dylora.in" className="bento-item md:col-start-8 md:col-span-2 md:row-start-2 md:row-span-1 bg-[#111] border border-white/10 rounded-[2rem] p-6 flex flex-col justify-end group hover:border-[#D9F99D]/50 transition-colors duration-300 h-[200px] md:h-full cursor-pointer relative overflow-hidden">
             
             {/* Added Email Image */}
             <img 
               src="https://cdn.pixabay.com/photo/2018/03/22/02/37/email-3249062_1280.png"
               alt="Email Background"
               className="absolute inset-0 w-full h-full object-cover opacity-100 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
             />

             <div className="absolute top-4 right-4 text-[#D9F99D] z-10">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
             </div>
             
             <div className="relative z-10">
                <h4 className="font-display font-bold text-xl text-white mb-1 group-hover:text-[#D9F99D] transition-colors">Email Us</h4>
                <p className="font-mono text-xs text-gray-400 break-all">contact@dylora.in</p>
             </div>
          </a>

          {/* 4. RIGHT BOTTOM RIGHT: Office Hours (Span 3 cols, 1 row) */}
          <div className="bento-item md:col-start-10 md:col-span-3 md:row-start-2 md:row-span-1 bg-[#111] border border-white/10 rounded-[2rem] p-6 flex flex-col justify-end group hover:border-[#D9F99D]/30 transition-colors duration-300 h-[200px] md:h-full relative overflow-hidden">
             
             {/* Added Clock Image */}
             <img 
               src="https://img.freepik.com/free-photo/digital-painting-old-clock_23-2151570635.jpg?semt=ais_hybrid&w=740&q=80"
               alt="Clock"
               className="absolute inset-0 w-full h-full object-cover opacity-100 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
             />

             <div className="absolute top-4 right-4 text-white/10 transform -rotate-12 group-hover:rotate-0 transition-transform duration-500 z-10">
               <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
             </div>
             
             <div className="relative z-10">
                <h4 className="font-display font-bold text-xl text-white mb-1">Office Hours</h4>
                <p className="font-mono text-sm text-[#D9F99D]">Mon - Fri</p>
                <p className="font-mono text-xs text-gray-400">9:00 AM - 6:00 PM</p>
             </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactPage;