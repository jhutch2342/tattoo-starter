import React, { useState } from 'react';

// import components
import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import GallerySection from './components/GallerySection';
import Skills from './components/Skills';
import Interview from './components/Interview';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Copyright from './components/Copyright';
import TattooCalculator from './components/TattooCalculator';

const App = () => {
  const [showCalculator, setShowCalculator] = useState(false);

  if (showCalculator) {
    return (
      <div className="max-w-[1920px] mx-auto overflow-hidden bg-white">
        <TattooCalculator onBack={() => setShowCalculator(false)} />
      </div>
    );
  }

  return (
    <div className="max-w-[1920px] mx-auto overflow-hidden bg-white">
      <Header onCalculatorClick={() => setShowCalculator(true)} />
      <Hero />
      <About />
      <GallerySection />
      <Skills />
      <Testimonial />
      <Interview />
      <Contact />
      <Footer />
      <Copyright />
    </div>
  );
};

export default App;
