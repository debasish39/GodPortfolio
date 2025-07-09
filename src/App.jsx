import React from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Pricing from './sections/Pricing'
import Projects from './sections/Projects'
import Testimonials from './sections/Testimonials'
import Cta from './sections/Cta'
import Footer from './sections/Footer'
import About from './sections/About'
import ScrollToTop from './sections/ScrollToTop'
export default function App() {
  return (
    <div>
      <Header/>
      <div className='mb-10'></div>
      <Hero />
      <About/>
      <Services/>
       <Pricing />
        <Projects />
        <Testimonials />
        <Cta />
        <Footer />
        <ScrollToTop/>
    </div>
  )
}
