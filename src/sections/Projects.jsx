import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FaArrowRightLong } from 'react-icons/fa6';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return (
    <section id="projects" className="w-full px-4 sm:px-6 lg:px-32 py-16 sm:py-20 text-white">
      {/* Header */}
      <div className="text-center mb-10 sm:mb-12">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins"
          data-aos="fade-down"
        >
          Sources
        </h2>
        <div
          className="w-16 sm:w-20 h-1 bg-red-600 mx-auto mt-4 rounded"
          data-aos="zoom-in"
          data-aos-delay="200"
        ></div>
        <p
          className="text-gray-400 text-sm sm:text-base md:text-lg mt-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Every creation is an offering — built not for ego, but as Seva (service) in remembrance of the Divine.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
        {/* Project 1 */}
        <div
          className="rounded-xl overflow-hidden shadow-lg bg-[#1a1a1a] group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-600/40"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <img
            src={project1}
            alt="Bhagavad Gita Portal"
            className="w-full h-52 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="p-5 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Bhagavad Gita Portal</h3>
            <p className="text-gray-400 text-sm sm:text-base mb-4 leading-relaxed">
              A sacred space offering the timeless wisdom of the Bhagavad Gita — with original Sanskrit verses, transliterations, and detailed commentary to guide seekers on the path of Dharma and devotion.
            </p>
            <a
              href="https://www.holy-bhagavad-gita.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-red-600 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:scale-95"
            >
              View Offering <FaArrowRightLong />
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div
          className="rounded-xl overflow-hidden shadow-lg bg-[#1a1a1a] group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-600/40"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <img
            src={project2}
            alt="Shiva Swarnamala Stuti"
            className="w-full h-52 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="p-5 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Shiva Swarnamala Stuti</h3>
            <p className="text-gray-400 text-sm sm:text-base mb-4 leading-relaxed">
              A devotional hymn in Sanskrit — Shiva Suvarnamala Stotra is a golden garland of praise offered at the feet of Lord Shiva, evoking His grace, strength, and divine presence through poetic devotion.
            </p>
            <a
              href="https://vignanam.org/odia/shiva-suvarnamala-swarnamala-stuti.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-red-600 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:scale-95"
            >
              View Offering <FaArrowRightLong />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
