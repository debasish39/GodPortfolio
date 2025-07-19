import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import hero from "../assets/hero.png";
import design from "../assets/design.png";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      delay: 100,
      once: false,
    });
  }, []);

  return (
    <section
      id="hero"
      className="w-full h-full px-4 sm:px-6 lg:px-32 py-20 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-12 sm:gap-16"
      data-aos="zoom-in"
    >
      {/* Left Content */}
      <div className="md:w-1/2 w-full space-y-6 text-center md:text-left">
        {/* Sanskrit Mantra */}
        <h2
          data-aos="fade-down"
          data-aos-delay="100"
          style={{
            color: "#dc2626",
            fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
            fontWeight: 600,
            fontFamily: '"Dancing Script", cursive',
            textAlign: "center",
            textShadow: "1px 1px 3px #dc2626",
          }}
          className="md:text-left"
        >
          ॐ नमो भगवते वासुदेवाय
        </h2>

        {/* Sanskrit Verse */}
        <h2
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-[#d91822] font-semibold italic text-sm sm:text-base text-center md:text-left"
        >
          यत्करोषि यदश्नासि यज्जुहोषि ददासि यत्।  
          यत्तपस्यसि कौन्तेय तत्कुरुष्व मदर्पणम्॥
        </h2>
        <p className="text-gray-400 text-xs sm:text-sm italic text-center md:text-left" data-aos="fade-up" data-aos-delay="250">
          "Whatever you do, whatever you offer, do it as an offering unto Me."
        </p>

        {/* English Headline */}
        <h2
          data-aos="fade-up"
          data-aos-delay="280"
          className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-snug"
        >
          To the Supreme Creator — Ishwar, the architect of existence
        </h2>

        {/* Description */}
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose"
        >
          This website is humbly dedicated to the divine presence who designed
          the universe itself — the one who shaped galaxies, time, and life.
          Just as a developer crafts code, Ishwar crafted the cosmos. May His
          grace guide every creation we build and every line we write.
        </p>

        {/* Devotional Line */}
        <p
          data-aos="fade-up"
          data-aos-delay="320"
          className="text-white font-bold text-lg sm:text-xl md:text-2xl italic"
        >
          “सर्वं कृष्णार्पणम्” — All is an offering to Krishna
        </p>

        {/* CTA Button */}
        <button
          data-aos="zoom-in"
          data-aos-delay="400"
          className="bg-red-600 text-white 
            hover:bg-white hover:text-red-600 
            active:bg-white active:text-red-600 active:scale-95 
            focus:outline-none focus:ring-4 focus:ring-red-400 focus:scale-95 
            font-semibold text-base sm:text-lg px-6 py-3 rounded-lg 
            transition duration-300 cursor-pointer"
        >
          Glory to God
        </button>
      </div>

      {/* Right Image */}
      <div
        className="md:w-1/2 w-full flex justify-center"
        data-aos="zoom-in-left"
        data-aos-delay="500"
      >
        <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-[4/5]">
          {/* Shadow Box */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="bg-[#2f2f2f] absolute top-3 left-3 rounded-xl w-full h-full z-0"
          ></div>

          {/* Image with Overlay Effects */}
          <div
            tabIndex="0"
            className="relative w-full h-full rounded-xl overflow-hidden group focus:outline-none"
          >
            <div
              className="absolute inset-0 bg-red-600 opacity-0 
                group-hover:opacity-40 
                group-focus:opacity-40 
                group-active:opacity-50 
                transition duration-300 z-10 pointer-events-none"
            ></div>

            <img
              src={hero}
              alt="divine"
              data-aos="zoom-in"
              data-aos-delay="300"
              className="w-full h-full object-cover rounded-xl 
                shadow-lg transition duration-300 ease-in-out
                hover:brightness-75 hover:saturate-200 hover:sepia hover:hue-rotate-[-20deg]
                focus:brightness-75 focus:saturate-200 focus:sepia focus:hue-rotate-[-20deg]
                active:brightness-50 active:saturate-200 active:sepia active:hue-rotate-[-40deg]
                relative z-20"
            />
          </div>

          {/* Decorative Symbol */}
          <img
            src={design}
            alt="Divine symbol design element"
            data-aos="zoom-in"
            data-aos-delay="800"
            className="absolute top-0 -right-1 w-12 sm:w-16 lg:w-24 z-30 pointer-events-none select-none"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
