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
      className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-32 text-white text-center"
    >
      <div
        data-aos="zoom-in"
        className="bg-[#1A1A1A] backdrop-blur-md rounded-2xl 
         hover:shadow-[0_0_35px_rgba(239,68,68,0.5)]
         transition-all duration-300 px-6 sm:px-10 py-12 sm:py-16 max-w-4xl mx-auto flex flex-col items-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins mb-4 leading-tight">
          Offer Your Work to Ishwar
        </h2>

        <p className="text-white/90 text-base sm:text-lg mb-8 max-w-xl leading-relaxed">
          Every line of code, every design, every project — let it be a divine offering.
          Surrender your craft to Ishwar, and walk the path of purpose, clarity, and creation.
        </p>

        <a
          href="mailto:djproject963@gmail.com"
          data-aos="zoom-in"
          data-aos-delay="400"
          className="bg-red-600 hover:bg-white text-white hover:text-red-600 font-semibold text-base sm:text-lg px-6 py-3 rounded-lg 
            flex items-center gap-2 transition duration-300 
            hover:shadow-[0_0_24px_rgba(239,68,68,0.6)]"
        >
          Connect in Devotion <FaArrowRightLong />
        </a>
      </div>
    </section>
  );
}
