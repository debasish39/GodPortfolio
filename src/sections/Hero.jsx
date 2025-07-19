import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import hero from "../assets/hero.png";
import design from "../assets/design.png";
import { FaPrayingHands, FaArrowRight } from "react-icons/fa";


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
      className="w-full px-4 sm:px-6 lg:px-20 py-16 md:py-24 bg-black flex flex-col-reverse md:flex-row items-center justify-center gap-12"
      data-aos="zoom-in"
    >
      {/* Left Content */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        {/* Sanskrit Verse */}
        <p
          className="text-2xl sm:text-3xl text-[#d91822] font-semibold italic"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          ॐ नमो भगवते वासुदेवाय
        </p>

        {/* English Headline */}
        <h2
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-white font-bold text-xl sm:text-2xl lg:text-3xl"
        >
          To the Supreme Creator — Ishwar, the architect of existence
        </h2>

        {/* Description */}
        <p
          data-aos="fade-up"
          data-aos-delay="250"
          className="text-gray-300 text-sm sm:text-base leading-relaxed"
        >
          This website is humbly dedicated to the divine presence who designed
          the universe itself — the one who shaped galaxies, time, and life.
          Just as a developer crafts code, Ishwar crafted the cosmos. May His
          grace guide every creation we build and every line we write.
        </p>

        {/* Devotional Line */}
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-white font-bold italic text-lg sm:text-xl"
        >
          “सर्वं कृष्णार्पणम्” — All is an offering to Krishna
        </p>

        {/* CTA Button with Red Initial & White Hover */}
 {/* <div
  className="w-full mt-4 flex sm:mt-0 justify-center"
  data-aos="zoom-in"
  data-aos-delay="400"
>
  <div className="text-left md:text-center"> */}
  <button
  className="inline-flex items-center justify-center cursor-pointer gap-2 mt-2
    bg-red-600 text-white
    hover:bg-white hover:text-red-600
    border border-red-600
    active:scale-95
    focus:outline-none focus:ring-4 focus:ring-red-400
    font-semibold text-base sm:text-lg px-9 py-3 rounded-lg
    transition duration-300"
  data-aos="fade-up"
  data-aos-delay="400"
>
 <a
  href="#cta"
  className="inline-flex items-center justify-center cursor-pointer gap-2 
  
    transition duration-300"
  data-aos="fade-up"
  data-aos-delay="400"
>
  <FaPrayingHands className="w-5 h-5" />
  Glory to God
  <FaArrowRight className="w-4 h-4" />
</a>

</button>

  {/* </div>
</div> */}



      </div>

      {/* Right Image */}
      <div
        className="w-full md:w-1/2 flex justify-center"
        data-aos="zoom-in-left"
        data-aos-delay="500"
      >
        <div className="relative w-full max-w-[320px] sm:max-w-[400px] aspect-[4/5]">
          {/* Image Container */}
          <div
            tabIndex="0"
            className="relative w-full h-full rounded-xl overflow-hidden group focus:outline-none"
          >
            <img
              src={hero}
              alt="divine"
              data-aos="zoom-in"
              data-aos-delay="300"
              className="w-full h-full object-cover rounded-2xl shadow-lg 
                brightness-[0.95] hover:brightness-100 hover:scale-105 
                transition duration-300 ease-in-out"
            />
          </div>

          {/* Decorative Symbol */}
          <img
            src={design}
            alt="Divine symbol"
            data-aos="zoom-in"
            data-aos-delay="800"
            className="absolute top-0 -right-2 w-12 sm:w-16 lg:w-20 z-30 select-none pointer-events-none"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
