import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section id="about" className="w-full py-20 px-6 lg:px-32 text-white">
      <div className="w-full mx-auto space-y-8 text-left" data-aos="fade-up">
        <h1
          data-aos="zoom-in"
          className="text-4xl uppercase font-poppins font-semibold text-white"
        >
          About
        </h1>
        <div className="h-[3px] w-20 bg-red-600" data-aos="zoom-in"></div>
        
        <p className="text-gray-300 text-lg leading-relaxed text-justify">
          This space is not about a developer, but about the ultimate Creator — Ishwar, the divine force who designed the universe with perfect symmetry and infinite intelligence.
        </p>

        <p className="text-gray-400 text-base text-justify">
          Every star, every breath, every line of truth originates from Him. Just as code brings logic to life, His will brings the cosmos into being. This website stands as a humble tribute — not to human craft, but to the supreme wisdom that governs all creation.
        </p>

        <p className="text-gray-400 text-base italic text-justify">
          “Let all that I create be a reflection of the divine order.”
        </p>

        <a
          href="#cta"
          className="inline-block bg-red-600 hover:bg-white text-white hover:text-red-600 font-semibold text-lg px-8 py-3 rounded-lg transition duration-300"
        >
          Offer Your Gratitude
        </a>
      </div>
    </section>
  );
}
