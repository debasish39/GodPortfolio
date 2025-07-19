import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaQuoteLeft } from 'react-icons/fa6';
import { reviews } from './export.js';

export default function Testimonials() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      delay: 100,
      once: false,
    });
  }, []);

  return (
    <section
      id="testimonials"
      className="w-full px-4 sm:px-6 lg:px-32 py-16 md:py-20 text-white flex flex-col items-center"
    >
      {/* Section Heading */}
      <h2
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center font-poppins leading-tight"
        data-aos="zoom-in"
      >
        Voices of Devotion
      </h2>

      <div
        className="w-16 sm:w-20 h-[3px] bg-red-600 mt-3 sm:mt-4 mb-6 sm:mb-10"
        data-aos="zoom-in"
        data-aos-delay="200"
      ></div>

      <p
        className="text-gray-400 text-base sm:text-lg md:text-xl text-center max-w-md sm:max-w-xl md:max-w-2xl leading-relaxed mb-6"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        These are not just testimonials — they are heartfelt offerings, reflections, and praises to the Supreme Creator, Ishwar.
      </p>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 w-full">
        {reviews.map((review, index) => (
          <div
            key={index}
            tabIndex={0}
            className="bg-[#1a1a1a] p-5 sm:p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-red-600/30 focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:outline-none active:scale-[0.98]  hover:shadow-[3px_9px_30px_rgba(239,68,68,0.3)]
    focus:shadow-[3px_9px_30px_rgba(239,68,68,0.3)]
    active:shadow-[3px_9px_39px_rgba(220,38,38,0.45)]"
            data-aos="fade-up"
            data-aos-delay={`${300 + index * 100}`}
          >
            <FaQuoteLeft className="text-red-600 text-xl sm:text-2xl mb-3" />
            <p className="text-gray-300 mb-6 italic text-sm sm:text-base lg:text-[16px] leading-relaxed">
              "{review.about}"
            </p>
            <div className="flex items-center gap-4">
              <img
                src={review.img}
                alt={review.name}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-red-600"
              />
              <div>
                <h4 className="text-white font-semibold text-sm sm:text-base">
                  {review.name}
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm italic">
                  {review.post}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
