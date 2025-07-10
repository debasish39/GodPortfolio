import React, { useEffect } from 'react';
import {
  FaLightbulb,
  FaHandsHelping,
  FaPrayingHands,
  FaHeart,
} from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
    AOS.refresh();
  }, []);

  const divineAttributes = [
    {
      icon: <FaPrayingHands className="fill-white size-8" />,
      title: 'Divine Guidance',
      desc: 'He lights the path even in the darkest moments, leading us with wisdom beyond thought.',
      aos: 'fade-up',
    },
    {
      icon: <FaHeart className="fill-white size-8" />,
      title: 'Unconditional Love',
      desc: 'His love is eternal — pure, unconditional, and always present in every soul’s journey.',
      aos: 'fade-down',
    },
    {
      icon: <FaLightbulb className="fill-white size-8" />,
      title: 'Inner Enlightenment',
      desc: 'Through silence, prayer, and surrender, we receive His light that awakens the truth within.',
      aos: 'fade-left',
    },
    {
      icon: <FaHandsHelping className="fill-white size-8" />,
      title: 'Protection & Grace',
      desc: 'Even when unseen, His divine grace shields and lifts us in every trial and every fall.',
      aos: 'fade-right',
    },
  ];

  return (
    <section
      id="services"
      className="w-full lg:px-[126px] px-6 sm:px-8 py-[60px] lg:py-[100px] flex flex-col gap-[80px] text-white"
    >
      {/* Title Section */}
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
        <h1
          data-aos="zoom-in"
          className="text-3xl sm:text-4xl uppercase font-poppins font-semibold tracking-tight"
        >
          Divine Gifts
        </h1>
        <div className="h-[3px] w-16 sm:w-20 bg-red-600" data-aos="zoom-in"></div>
        <p
          className="text-gray-300 text-base sm:text-lg font-poppins leading-relaxed"
          data-aos="fade-up"
        >
          These are not services of man, but sacred gifts from the Divine. Offered not for profit, but for the soul. Feel His presence in every moment.
        </p>
      </div>

      {/* Divine Attribute Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-12 max-w-6xl mx-auto">
        {divineAttributes.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center gap-6"
            data-aos={service.aos}
            data-aos-delay={index * 100}
          >
            {/* Icon */}
            <div
              className="bg-red-600 rounded-full p-4 flex justify-center items-center transition-all duration-300 hover:scale-110"
              data-aos="zoom-in"
              data-aos-delay={index * 100 + 100}
            >
              {service.icon}
            </div>

            {/* Content */}
            <div
              className="flex flex-col items-center gap-3"
              data-aos="fade-up"
              data-aos-delay={index * 100 + 200}
            >
              <h2 className="text-white font-semibold text-xl sm:text-2xl">
                {service.title}
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {service.desc}
              </p>
            </div>

            {/* Button */}
            <button
              className="text-red-600 hover:text-white text-base font-poppins flex items-center gap-2 transition-colors duration-200"
              data-aos="fade-left"
              data-aos-delay={index * 100 + 300}
            >
              Meditate More <FaArrowRightLong />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
