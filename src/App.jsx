import React from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Pricing from './sections/Pricing';
import Projects from './sections/Projects';
import Testimonials from './sections/Testimonials';
import Cta from './sections/Cta';
import Footer from './sections/Footer';
import About from './sections/About';
import ScrollToTop from './sections/ScrollToTop';

export default function App() {
  return (
    <div className="overflow-x-hidden w-full max-w-screen-2xl mx-auto">
      <Header />
      <div className="mb-10" />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Projects />
      <Testimonials />
      <Cta />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
