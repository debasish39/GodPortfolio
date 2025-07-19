import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowRight } from "react-icons/fa"; // Make sure this is imported

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

        {/* Sanskrit Verse */}
        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-[#d91822] font-semibold italic text-sm sm:text-base"
        >
          सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।
          अहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-gray-400 text-xs sm:text-sm italic mb-4"
        >
          “Abandon all varieties of duties and simply surrender unto Me. I shall deliver you from all sin. Do not fear.” — Bhagavad Gita 18.66
        </p>

        {/* Paragraphs */}
        <p
          data-aos="fade-up"
          className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed text-justify sm:text-center"
        >
          This space is not about a developer, but about the ultimate Creator — Ishwar, the divine force who designed the universe with perfect symmetry and infinite intelligence.
        </p>

        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed text-justify sm:text-center"
        >
          Every star, every breath, every line of truth originates from Him. Just as code brings logic to life,
          His will brings the cosmos into being. This website stands as a humble tribute — not to human craft,
          but to the supreme wisdom that governs all creation.
        </p>

        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-gray-400 text-sm sm:text-base italic text-justify sm:text-center"
        >
          “Let all that I create be a reflection of the divine order.”
        </p>

        {/* CTA Button */}
      <a
  href="#cta"
  data-aos="fade-up"
  data-aos-delay="200"
  className="inline-flex items-center justify-center gap-2
    bg-red-600 
    hover:bg-white hover:text-red-600
    text-white font-semibold text-base sm:text-lg 
    px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg 
    transition duration-300 
    focus:outline-none focus:ring-4 focus:ring-red-400 
    active:bg-white active:text-red-600 focus:bg-white focus:text-red-600
    active:scale-95 focus:scale-95"
>
  Offer Your Gratitude
  <FaArrowRight className="w-4 h-4" />
</a>

      </div>
    </section>
  );
}
