import React from "react";
import useCountUp from "../hooks/useCountUp";
import useReveal from "../hooks/useReveal";
const AboutPage = () => {
  const founded = useCountUp(2024);
  const projects = useCountUp(15);
  const clients = useCountUp(10);
  const team = useCountUp(10);
  const storyText = useReveal(0.4);
  const storyImage = useReveal(0.4);
  return (
    <main className="bg-black text-white">
      {}
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-6xl md:text-8xl font-semibold tracking-tight mb-6">
          ABOUT <span className="text-lime-300">US</span>
        </h1>
        <p className="max-w-3xl text-gray-400 text-lg md:text-xl leading-relaxed">
          At Dylora, we are a passionate team of innovators and developers,
          dedicated to transforming businesses through cutting-edge technology.
        </p>
      </section>
      {}
      <section className="border-t border-white/10 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 px-6">
          {[
            { hook: founded, label: "Founded", suffix: "" },
            { hook: projects, label: "Projects", suffix: "+" },
            { hook: clients, label: "Happy Clients", suffix: "+" },
            { hook: team, label: "Team Members", suffix: "+" },
          ].map((item, i) => (
            <div key={i} ref={item.hook.ref} className="text-center">
              <h3 className="text-4xl md:text-5xl font-semibold text-lime-300 mb-2">
                {item.hook.count}
                {item.suffix}
              </h3>
              <p className="text-gray-500 text-xs tracking-widest uppercase">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>
      {}
      <section className="px-6 py-28 border-t border-white/10 overflow-hidden">
        <h2 className="text-4xl font-semibold mb-16 text-center">
          OUR STORY
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          {}
          <div
            ref={storyText.ref}
            className={`text-gray-400 space-y-6 leading-relaxed
              transition-all duration-1000 ease-out
              ${storyText.show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
          >
            <p>
              Founded in 2024, Dylora began with a simple yet powerful vision:
              to make advanced technology accessible, effective, and scalable.
            </p>
            <p>
              From startups to global enterprises, we deliver solutions that
              are visually stunning and performance-driven.
            </p>
            <p>
              Every project is guided by innovation and execution excellence.
            </p>
          </div>
          {}
          <div
            ref={storyImage.ref}
            className={`relative h-[340px] rounded-2xl overflow-hidden
              transition-all duration-1000 ease-out
              ${storyImage.show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}
            `}
          >
            <img
              src="/images/aboutus.jpg"
              alt="Our Team"
              className="absolute inset-0 w-full h-full object-cover
              hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </div>
      </section>
      {}
      <section className="px-6 py-28 border-t border-white/10">
        <h2 className="text-4xl font-semibold mb-16 text-center">
          OUR VALUES
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            ["INNOVATION", "We explore new ideas and future-ready solutions."],
            ["INTEGRITY", "Transparency and trust guide our partnerships."],
            ["EXCELLENCE", "Precision and quality in everything we deliver."],
          ].map(([title, text], i) => (
            <div
              key={i}
              className="bg-[#0d0d0d] p-10 rounded-2xl border border-white/10 hover:border-lime-300 transition"
            >
              <h3 className="text-xl font-semibold mb-4">{title}</h3>
              <p className="text-gray-400 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>
      {}
      <section className="px-6 py-28 border-t border-white/10">
        <div className="max-w-6xl mx-auto bg-[#0d0d0d] rounded-2xl p-14 flex flex-col md:flex-row items-center justify-between gap-10">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Let’s build the future.
          </h2>

          <a
            href="/contact"
            className="bg-lime-300 text-black px-10 py-4 rounded-full font-semibold hover:scale-105 transition-transform"
          >
            Get Free Consultation
          </a>
        </div>
      </section>

    </main>
  );
};

export default AboutPage;
