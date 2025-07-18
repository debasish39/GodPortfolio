import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section
      id="about"
      className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-32 text-white bg-black"
    >
      <div
        className="w-full max-w-4xl mx-auto space-y-6 sm:space-y-8 text-center"
        data-aos="fade-up"
      >
        {/* Section Title */}
        <h1
          data-aos="zoom-in"
          className="text-3xl sm:text-4xl lg:text-5xl uppercase font-poppins font-semibold tracking-tight text-white"
        >
          About
        </h1>
        <div
          className="h-[3px] w-16 sm:w-20 bg-red-600 mx-auto rounded"
          data-aos="zoom-in"
        ></div>

        {/* Paragraphs */}
        <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed text-justify sm:text-center">
          This space is not about a developer, but about the ultimate Creator —
          Ishwar, the divine force who designed the universe with perfect symmetry and infinite intelligence.
        </p>

        <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed text-justify sm:text-center">
          Every star, every breath, every line of truth originates from Him. Just as code brings logic to life,
          His will brings the cosmos into being. This website stands as a humble tribute — not to human craft,
          but to the supreme wisdom that governs all creation.
        </p>

        <p className="text-gray-400 text-sm sm:text-base italic text-justify sm:text-center">
          “Let all that I create be a reflection of the divine order.”
        </p>

        {/* CTA Button */}
        <a
          href="#cta"
          className="inline-block bg-red-600 hover:bg-white text-white hover:text-red-600 font-semibold text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition duration-300 focus:outline-none focus:ring-4 focus:ring-red-400 active:scale-95"
        >
          Offer Your Gratitude
        </a>
      </div>
    </section>
  );
}
