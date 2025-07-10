import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaQuoteLeft } from 'react-icons/fa6';
import { reviews } from './export.js'; // Your updated devotional reviews

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
      className="w-full px-6 lg:px-32 py-20 text-white flex flex-col items-center"
    >
      {/* Section Heading */}
      <h2
        className="text-4xl lg:text-5xl font-bold text-center font-poppins"
        data-aos="zoom-in"
      >
        Voices of Devotion
      </h2>
      <p
        className="text-gray-400 text-lg text-center mt-4 max-w-2xl"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        These are not just testimonials — they are heartfelt offerings, reflections, and praises to the Supreme Creator, Ishwar.
      </p>
      <div
        className="w-20 h-[3px] bg-red-600 mt-4 mb-10"
        data-aos="zoom-in"
        data-aos-delay="200"
      ></div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg hover:shadow-red-600/30 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={`${300 + index * 100}`}
          >
            <FaQuoteLeft className="text-red-600 text-2xl mb-4" />
            <p className="text-gray-300 mb-6 italic">"{review.about}"</p>
            <div className="flex items-center gap-4">
              <img
                src={review.img}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-red-600"
              />
              <div>
                <h4 className="text-white font-semibold">{review.name}</h4>
                <p className="text-gray-400 text-sm italic">{review.post}</p>
              </div>
            </div>
          </div>
        ))}
      </div>



    </section>
  );
}
