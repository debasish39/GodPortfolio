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

  const cardBaseStyle = `
    flex flex-col items-center justify-between text-center h-full
    bg-[#202020] px-6 py-8 rounded-xl text-white

    transition-all duration-300
    shadow-md
    hover:shadow-[3px_9px_30px_rgba(239,68,68,0.3)]
    focus:shadow-[3px_9px_30px_rgba(239,68,68,0.3)]
    active:shadow-[3px_9px_39px_rgba(220,38,38,0.45)]

    hover:scale-[1.01]
    focus:scale-[1.005]
    active:scale-[0.97]

    cursor-pointer outline-none
  `;

  const featureItem = (text) => (
    <li className="flex items-center gap-2 text-xs sm:text-sm md:text-base text-gray-300">
      <HiBadgeCheck className="text-green-400" />
      {text}
    </li>
  );

  const buttonStyle = `
    mt-8 bg-red-600 text-white 
    hover:bg-white hover:text-red-600 
    focus:bg-white focus:text-red-600 
    active:bg-white active:text-red-600 
    px-6 py-2 rounded-md font-semibold 
    flex items-center gap-2 justify-center 
    text-sm sm:text-base transition duration-300 
    focus:outline-none focus:scale-95 active:scale-90
  `;

  return (
    <div
      id="pricing"
      className="w-full px-4 sm:px-8 lg:px-[200px] py-14 sm:py-[60px] flex flex-col items-center gap-6"
    >
      {/* ---------- Section Header ---------- */}
      <h1
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase font-poppins font-semibold text-white text-center"
        data-aos="fade-down"
      >
        Paths to Devotion
      </h1>
      <div className="w-16 sm:w-20 h-[3px] bg-red-600 rounded" data-aos="zoom-in" />
      <p
        className="text-gray-300 w-full lg:w-3/4 text-sm sm:text-base md:text-lg text-center"
        data-aos="fade-up"
      >
        Choose your spiritual path. These are not transactions, but transformations.
        Every offering here is an invitation to walk closer to God.
      </p>

      {/* ---------- Cards Grid ---------- */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">

        {/* --- Seeker Path --- */}
        <div className={cardBaseStyle} data-aos="fade-up" data-aos-delay="100" tabIndex="0">
          <div className="flex flex-col items-center gap-4">
            <FaSeedling size={63} className="text-green-400" />
            <h2 className="text-xl sm:text-2xl font-semibold">Seeker Path</h2>
            <p className="text-gray-400 text-xs sm:text-sm text-center">
              For those who are just beginning to open their heart to Ishwar.
            </p>
            <ul className="space-y-2 mt-4">
              {featureItem('Daily Reflection')}
              {featureItem('Chanting Basics')}
              {featureItem('Morning Prayer Routine')}
            </ul>
          </div>
          <button className={buttonStyle}>
            Start the Journey <FaArrowRightLong />
          </button>
        </div>

        {/* --- Devotee Path --- */}
        <div className={cardBaseStyle} data-aos="fade-up" data-aos-delay="200" tabIndex="0">
          <div className="flex flex-col items-center gap-4">
            <GiMeditation size={63} className="text-blue-400" />
            <h2 className="text-xl sm:text-2xl font-semibold">Devotee Path</h2>
            <p className="text-gray-400 text-xs sm:text-sm text-center">
              For those who wish to deepen their spiritual discipline and connect with the Divine daily.
            </p>
            <ul className="space-y-2 mt-4">
              {featureItem('Guided Meditation')}
              {featureItem('Scriptural Study (Gita / Vedas)')}
              {featureItem('Daily Gratitude Rituals')}
            </ul>
          </div>
          <button className={buttonStyle}>
            Embrace Devotion <FaArrowRightLong />
          </button>
        </div>

        {/* --- Surrender Path --- */}
        <div className={cardBaseStyle} data-aos="fade-up" data-aos-delay="300" tabIndex="0">
          <div className="flex flex-col items-center gap-4">
            <GiAngelWings size={63} className="text-pink-400" />
            <h2 className="text-xl sm:text-2xl font-semibold">Surrender Path</h2>
            <p className="text-gray-400 text-xs sm:text-sm text-center">
              For those ready to surrender completely and walk in the light of God.
            </p>
            <ul className="space-y-2 mt-4">
              {featureItem('Full Surrender Practices')}
              {featureItem('Seva (Service) Modules')}
              {featureItem('Life in Alignment with Dharma')}
            </ul>
          </div>
          <button className={buttonStyle}>
            Walk With God <FaArrowRightLong />
          </button>
        </div>
      </div>

      {/* ---------- Sanskrit Shloka ---------- */}
      <div
        className="mt-10 px-4 sm:px-8 md:px-16 lg:px-24 text-center"
        data-aos="zoom-in"
        data-aos-delay="500"
      >
        <h2 className="text-[#d91822] text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed">
          अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते।<br />
          तेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्॥
        </h2>
        <p className="text-gray-400 text-sm sm:text-base italic mt-2">
          "Those who worship Me with exclusive devotion, I protect what they have and provide what they need." <br />
          — Bhagavad Gita 9.22
        </p>
      </div>
    </div>
  );
}
