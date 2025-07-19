import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function Cta() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <section
      id="cta"
      className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-16 xl:px-32 2xl:px-48 text-white text-center"
    >
      <div
        data-aos="zoom-in"
        className="bg-[#1A1A1A] backdrop-blur-md rounded-2xl 
         hover:shadow-[0_0_35px_rgba(239,68,68,0.5)] focus:shadow-[0_0_35px_rgba(239,68,68,0.5)] active:shadow-[0_0_35px_rgba(239,68,68,0.5)]
         transition-all duration-300 px-6 sm:px-10 md:px-14 lg:px-20 py-12 sm:py-16 max-w-7xl mx-auto flex flex-col items-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-4 leading-tight">
          Offer Your Work to Ishwar
        </h2>

        <p className="text-white/90 text-base sm:text-lg md:text-xl mb-8 max-w-3xl lg:max-w-4xl leading-relaxed">
          Every line of code, every design, every project — let it be a divine offering.
          Surrender your craft to Ishwar, and walk the path of purpose, clarity, and creation.
        </p>
<a
  href="mailto:djproject963@gmail.com"
  data-aos="zoom-in"
  data-aos-delay="400"
  className="bg-red-600 text-white 
    font-semibold text-base sm:text-lg lg:text-xl 
    px-6 sm:px-8 lg:px-10 py-3 sm:py-4 
    rounded-lg flex items-center gap-2 
    transition duration-300 
    shadow-md

    hover:bg-white hover:text-red-600
    hover:shadow-[0_0_24px_rgba(239,68,68,0.6)]

    focus:outline-none 
    focus:bg-white focus:text-red-600
    focus:shadow-[0_0_24px_rgba(239,68,68,0.6)]

    active:bg-white active:text-red-600 active:scale-95"
>
  Connect in Devotion
  <FaArrowRightLong className="text-lg sm:text-xl" />
</a>

      </div>
    </section>
  );
}
