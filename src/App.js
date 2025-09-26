import React, { useState } from 'react';

// import components
import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import GallerySection from './components/GallerySection';
import GalleryPage from './components/GalleryPage';
import Skills from './components/Skills';
import Interview from './components/Interview';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Copyright from './components/Copyright';

const App = () => {
  const [showGalleryPage, setShowGalleryPage] = useState(false);

  const handleShowGallery = () => {
    setShowGalleryPage(true);
  };

  const handleBackToHome = () => {
    setShowGalleryPage(false);
  };

  // If gallery page is active, show only gallery page
  if (showGalleryPage) {
    return (
      <div className="max-w-[1920px] mx-auto overflow-hidden bg-white">
        <Header onGalleryClick={handleBackToHome} />
        <GalleryPage onBack={handleBackToHome} />
        <Footer />
        <Copyright />
      </div>
    );
  }

  // Otherwise show main site
  return (
    <div className="max-w-[1920px] mx-auto overflow-hidden bg-white">
      <Header onGalleryClick={handleShowGallery} />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="gallery">
        <GallerySection onViewAll={handleShowGallery} />
        <Skills />
      </section>
      <section id="testimonials">
        <Testimonial />
      </section>
      <section id="interview">
        <Interview />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
      <Copyright />
    </div>
  );
};

export default App;
