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
    <section id="projects" className="w-full px-6 lg:px-32 py-20 text-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h2
          className="text-4xl lg:text-5xl font-bold font-poppins"
          data-aos="fade-down"
        >
          Sources
        </h2>
        <div
          className="w-20 h-1 bg-red-600 mx-auto mt-4"
          data-aos="zoom-in"
          data-aos-delay="200"
        ></div>
        <p
          className="text-gray-400 text-lg mt-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Every creation is an offering — built not for ego, but as Seva (service) in remembrance of the Divine.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Project 1 */}
        <div
          className="rounded-xl overflow-hidden shadow-lg bg-[#1a1a1a] group transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-600/40"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <img
            src={project1}
            alt="Spiritual Marketplace"
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Spiritual Marketplace</h3>
            <p className="text-gray-400 mb-4">
              A platform built to help connect seekers with sacred items like prayer beads, books, and incense — with ethical trade and purity in mind.
            </p>
            <a
              href="https://vignanam.org/odia/shiva-suvarnamala-swarnamala-stuti.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-red-600 hover:text-white transition cursor-pointer"
            >
              View Offering <FaArrowRightLong />
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div
          className="rounded-xl overflow-hidden shadow-lg bg-[#1a1a1a] group transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-600/40"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <img
            src={project2}
            alt="Divine Portfolio"
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Divine Portfolio</h3>
            <p className="text-gray-400 mb-4">
              A personal site crafted in reverence to Ishwar — not to promote the self, but to reflect His light through the skills He gave.
            </p>
            <a
              href="https://www.holy-bhagavad-gita.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-red-600 hover:text-white transition cursor-pointer"
            >
              View Offering <FaArrowRightLong />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
