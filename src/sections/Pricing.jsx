import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { HiBadgeCheck } from 'react-icons/hi';
import { FaArrowRightLong, FaSeedling } from 'react-icons/fa6';
import { GiMeditation, GiAngelWings } from 'react-icons/gi';

export default function Pricing() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  const cardBaseStyle = `flex flex-col items-center justify-between text-center h-full border border-gray-300 hover:border-red-500 hover:bg-white/3 bg-[#202020] backdrop-blur-sm px-6 py-8 rounded-xl text-white transition-all duration-300 shadow-md hover:shadow-red-600/20`;

  const featureItem = (text) => (
    <li className="flex items-center gap-2 text-xs sm:text-sm md:text-base text-gray-300">
      <HiBadgeCheck className="text-green-400" />
      {text}
    </li>
  );

  return (
    <div id="pricing" className="w-full lg:px-[200px] px-8 py-[60px] h-full flex flex-col items-center gap-10">
      {/* Section Header */}
      <h1
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase text-white font-poppins font-semibold text-center sm:text-left"
        data-aos="fade-down"
      >
        Paths to Devotion
      </h1>
      <div className="w-20 h-[3px] bg-red-600" data-aos="zoom-in"></div>
      <p
        className="text-gray-300 w-full lg:w-[70%] text-sm sm:text-base md:text-lg text-center"
        data-aos="fade-up"
      >
        Choose your spiritual path. These are not transactions, but transformations. Every offering here is an invitation to walk closer to God.
      </p>

      {/* Cards */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {/* Seeker Path */}
        <div
          className={cardBaseStyle}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="flex flex-col items-center gap-4">
            <FaSeedling size={63} className="text-green-400" />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">Seeker Path</h2>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base text-center">
              For those who are just beginning to open their heart to Ishwar.
            </p>
            <ul className="space-y-2 mt-4">
              {featureItem('Daily Reflection')}
              {featureItem('Chanting Basics')}
              {featureItem('Morning Prayer Routine')}
            </ul>
          </div>

          <button className="mt-8 bg-red-600 hover:bg-white hover:text-red-600 px-6 py-2 rounded-md font-semibold flex items-center gap-2 justify-center transition-all duration-300 cursor-pointer text-sm sm:text-base">
            Start the Journey <FaArrowRightLong />
          </button>
        </div>

        {/* Devotee Path */}
        <div
          className={cardBaseStyle}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex flex-col items-center gap-4">
            <GiMeditation size={63} className="text-blue-400" />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">Devotee Path</h2>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base text-center">
              For those who wish to deepen their spiritual discipline and connect with the Divine daily.
            </p>
            <ul className="space-y-2 mt-4">
              {featureItem('Guided Meditation')}
              {featureItem('Scriptural Study (Gita / Vedas)')}
              {featureItem('Daily Gratitude Rituals')}
            </ul>
          </div>

          <button className="mt-8 bg-red-600 hover:bg-white hover:text-red-600 px-6 py-2 rounded-md font-semibold flex items-center gap-2 justify-center transition-all duration-300 cursor-pointer text-sm sm:text-base">
            Embrace Devotion <FaArrowRightLong />
          </button>
        </div>

        {/* Surrender Path */}
        <div
          className={cardBaseStyle}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="flex flex-col items-center gap-4">
            <GiAngelWings size={63} className="text-pink-400" />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">Surrender Path</h2>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base text-center">
              For those ready to surrender completely and walk in the light of God.
            </p>
            <ul className="space-y-2 mt-4">
              {featureItem('Full Surrender Practices')}
              {featureItem('Seva (Service) Modules')}
              {featureItem('Life in Alignment with Dharma')}
            </ul>
          </div>

          <button className="mt-8 bg-red-600 hover:bg-white hover:text-red-600 px-6 py-2 rounded-md font-semibold flex items-center gap-2 justify-center transition-all duration-300 cursor-pointer text-sm sm:text-base">
            Walk With God <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
}
