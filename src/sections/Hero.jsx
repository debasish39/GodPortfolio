import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import hero from '../assets/hero.png';
import design from '../assets/design.png';

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
<h2
  data-aos="fade-down"
  data-aos-delay="100"
  style={{
    color: '#dc2626',
    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', // Responsive: 32px to 40px
    fontWeight: 600,
    fontFamily: '"Dancing Script", cursive',
    textAlign: 'center',
    textShadow: '1px 1px 3px #dc2626' // soft shadow
  }}
  className="md:text-left"
>
  Om Namo Bhagavate Vasudevaya
</h2>


        <h2
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-snug"
        >
          To the Supreme Creator — Ishwar, the architect of existence
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose"
        >
          This website is humbly dedicated to the divine presence who designed the universe itself — the one who shaped galaxies, time, and life. Just as a developer crafts code, Ishwar crafted the cosmos. May His grace guide every creation we build and every line we write.
        </p>

        <button
          data-aos="zoom-in"
          data-aos-delay="400"
          className="bg-red-600 hover:bg-white text-white hover:text-red-600 font-semibold text-base sm:text-lg px-6 py-3 rounded-lg transition duration-300 cursor-pointer"
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
          {/* Shadow background box */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="bg-[#2f2f2f] absolute top-3 left-3 rounded-xl w-full h-full z-0"
          ></div>

          {/* Hero image */}
          <img
            src={hero}
            alt="divine"
            data-aos="zoom-in"
            data-aos-delay="300"
            className="rounded-xl shadow-lg w-full h-full object-cover relative z-20 transition-transform duration-300 hover:scale-105"
          />

          {/* Decorative image */}
          <img
            src={design}
            alt="divine-symbol"
            data-aos="zoom-in"
            data-aos-delay="800"
            className="absolute top-0 -right-1 w-12 sm:w-16 lg:w-24 z-30"
          />
        </div>
      </div>
    </section>
  );
}
