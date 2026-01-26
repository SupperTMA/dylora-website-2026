import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "../components/UI/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

// --- Sub-Component: Lime Card ---
const LimeInputCard = ({ label, placeholder, type = "text", name }) => {
  return (
    <div className="lime-card relative group w-full h-full">
      <div className="bg-[#D9F99D] p-5 md:p-6 rounded-[1.5rem] h-full flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(217,249,157,0.15)] will-change-transform">
        
        <label className="font-display font-bold text-black text-base md:text-lg mb-2 block ml-1">
          {label} <span className="text-black/50">*</span>
        </label>

        <div className="relative overflow-hidden rounded-xl bg-black group-focus-within:ring-1 ring-black/20 transition-all w-full">
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            className="w-full bg-black text-[#D9F99D] placeholder-gray-600 px-5 py-3 md:px-6 md:py-4 outline-none border-none font-mono text-sm h-12 md:h-14"
          />
        </div>
      </div>
    </div>
  
  );
};

const ContactPage = () => {
  const containerRef = useRef(null);
  const formRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // 1. HERO REVEAL
      const tl = gsap.timeline();
      tl.from(".char-reveal", {
        y: "110%",
        rotate: 3,
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "power3.out"
      })
      .from(".hero-sub", { opacity: 0, y: 20, duration: 0.6, ease: "power2.out" }, "-=0.4");

      // 2. SCROLL TRIGGERS
      gsap.from(".lime-card-anim", {
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: "power2.out"
      });

      gsap.from(".bento-item", {
        scrollTrigger: {
          trigger: ".bento-grid",
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-black min-h-screen text-white pt-24 md:pt-36 pb-12 w-full overflow-x-hidden">
      
      {/* ======================
          HERO SECTION 
      ====================== */}
      <section className="max-w-[1800px] mx-auto px-4 md:px-8 mb-16 md:mb-24">
        <div className="text-center relative z-10">
          <h1 className="font-display font-extrabold text-[clamp(3rem,10vw,8rem)] leading-[0.9] tracking-tighter uppercase text-[#D9F99D] mix-blend-difference mb-6 md:mb-8">
            <div className="overflow-hidden inline-block align-top"><span className="block char-reveal">Get In</span></div><br className="md:hidden" />
            <div className="overflow-hidden inline-block align-top"><span className="block char-reveal text-white mx-0 md:mx-4">Touch</span></div><br />
            <div className="overflow-hidden inline-block align-top"><span className="block char-reveal">With Us</span></div>
          </h1>

          <div className="hero-sub max-w-xl mx-auto space-y-8 px-4">
            <p className="text-gray-400 text-sm md:text-lg leading-relaxed">
              Have an idea? Let's build it together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 w-full sm:w-auto">
              <MagneticButton className="w-full sm:w-auto bg-[#D9F99D] text-black px-8 py-3 rounded-full font-bold text-xs md:text-sm uppercase tracking-widest hover-trigger">
                <span>Send Message</span>
              </MagneticButton>
              <MagneticButton className="w-full sm:w-auto border border-white/20 text-white px-8 py-3 rounded-full font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-white hover:text-black hover-trigger transition-colors">
                <span>Contact Sales</span>
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>

      {/* ======================
          FORM SECTION 
      ====================== */}
      <section ref={formRef} className="max-w-[1400px] mx-auto px-4 md:px-6 mb-20 md:mb-32 relative">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-3 text-white">Send Message</h2>
          <p className="font-mono text-[10px] md:text-xs text-gray-500 uppercase tracking-widest">
            We usually respond within 24 Hours.
          </p>
        </div>

        <form className="max-w-6xl mx-auto">
          {/* Inputs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-3 md:mb-4">
            <div className="lime-card-anim"><LimeInputCard label="Full Name" name="name" placeholder="Enter Name" /></div>
            <div className="lime-card-anim"><LimeInputCard label="Email Address" name="email" type="email" placeholder="Enter Email" /></div>
            <div className="lime-card-anim"><LimeInputCard label="Phone Number" name="phone" type="tel" placeholder="Enter Phone" /></div>
          </div>

          {/* Textarea */}
          <div className="lime-card-anim w-full">
             <div className="bg-[#D9F99D] p-5 md:p-6 rounded-[1.5rem] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(217,249,157,0.15)] will-change-transform">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 md:mb-4">
                    <label className="font-display font-bold text-black text-base md:text-lg block ml-1 mb-1 md:mb-0">
                      Projects <span className="text-black/50">*</span>
                    </label>
                    <span className="text-black/40 text-[10px] font-mono hidden md:block">DESCRIBE YOUR VISION</span>
                </div>
                
                <div className="relative overflow-hidden rounded-xl bg-black group-focus-within:ring-1 ring-black/20">
                  <textarea
                    placeholder="Tell us about your project, timeline, and goals..."
                    className="w-full bg-black text-[#D9F99D] placeholder-gray-600 px-5 py-4 md:px-6 md:py-5 outline-none border-none font-mono text-sm resize-none min-h-[140px] md:min-h-[180px]"
                  />
                </div>
                
                <div className="mt-5 md:mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                   <p className="text-black/50 text-[10px] font-mono text-center md:text-left order-2 md:order-1">
                     * By submitting this form you agree to our terms.
                   </p>
                   <button className="w-full md:w-auto order-1 md:order-2 bg-black text-white px-8 py-3 rounded-full font-bold uppercase text-xs tracking-widest hover:scale-105 transition-transform hover:bg-gray-900">
                     Submit Request
                   </button>
                </div>
             </div>
          </div>
        </form>
      </section>

      {/* ======================
          BENTO GRID
      ====================== */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="mb-8 border-b border-white/10 pb-6 flex flex-col md:flex-row justify-between items-end gap-4">
           <div className="w-full md:w-auto">
              <h3 className="font-display text-4xl md:text-5xl text-white font-bold">Connect With Us</h3>
           </div>
           
           <div className="hidden md:flex items-center gap-2 text-[#D9F99D] text-[10px] font-mono border border-white/10 px-3 py-1 rounded-full bg-white/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D9F99D] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D9F99D]"></span>
              </span>
              ONLINE NOW
           </div>
        </div>

        {/* FIX: Set explicit height [600px] for desktop.
            This ensures the bottom cards (Email/Hours) have 300px each and don't get cut off.
            Mobile remains h-auto (stacked).
        */}
        <div className="bento-grid grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 h-auto md:h-[600px]">
          
          {/* 1. Large Left Image (Office) */}
          <div className="bento-item md:col-span-5 relative group overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 h-[300px] md:h-full">
            <img 
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80" 
              alt="Office" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />
            <div className="absolute bottom-5 left-5 md:bottom-6 md:left-6">
               <div className="w-10 h-10 bg-[#D9F99D] rounded-full flex items-center justify-center mb-3 text-black">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
               </div>
               <h4 className="font-display font-bold text-xl md:text-2xl">Mumbai HQ</h4>
               <p className="text-[10px] md:text-xs font-mono text-gray-300 mt-1">Shell Colony, Chembur</p>
            </div>
          </div>

          {/* 2. Right Column - Locked to 2 equal rows on desktop */}
          <div className="md:col-span-7 grid grid-rows-[250px_auto] md:grid-rows-2 gap-3 md:gap-4">
            
            {/* Top Wide Image (Meeting) */}
            <div className="bento-item relative group overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 h-[250px] md:h-full">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80" 
                alt="Meeting" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
              
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono border border-white/10">
                TEAM MEETING
              </div>
            </div>

            {/* Bottom Split (Fixed Height on Desktop via parent grid-row) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 h-auto md:h-full">
              
              {/* Email Block */}
              <div className="bento-item relative group overflow-hidden rounded-2xl md:rounded-3xl bg-[#111] border border-white/10 p-6 flex flex-col justify-end hover:bg-[#161616] transition-colors h-[220px] md:h-full">
                <img 
                  src="https://cdn.pixabay.com/photo/2018/03/22/02/37/email-3249062_1280.png"
                  className="absolute inset-0 w-full h-full object-cover opacity-100 mix-blend-overlay"
                  alt="Texture"
                />
                
                <div className="mb-auto text-[#D9F99D] transform group-hover:-translate-y-1 transition-transform duration-300 relative z-10">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div className="relative z-10">
                   <h4 className="font-display font-bold text-2xl group-hover:text-[#D9F99D] transition-colors">Email Us</h4>
                   <a href="mailto:contact@dylora.in" className="text-xs font-mono text-gray-400 mt-1 hover:text-white transition-colors block">contact@dylora.in</a>
                </div>
              </div>

              {/* Hours Block */}
              <div className="bento-item relative group overflow-hidden rounded-2xl md:rounded-3xl bg-[#2e1d03] border border-orange-500/10 p-6 flex flex-col justify-end h-[220px] md:h-full">
                 <img 
                  src="https://img.freepik.com/free-photo/digital-painting-old-clock_23-2151570635.jpg?semt=ais_hybrid&w=740&q=80"
                  className="absolute inset-0 w-full h-full object-cover opacity-100 mix-blend-overlay"
                  alt="Texture"
                />

                <div className="mb-auto text-orange-400 transform group-hover:-translate-y-1 transition-transform duration-300 relative z-10">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <div className="relative z-10">
                   <h4 className="font-display font-bold text-2xl text-orange-100">Hours</h4>
                   <p className="text-xs font-mono text-orange-200/60 mt-1">Mon-Fri: 9AM - 6PM</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;