// src/components/GalleryPage.js
import React, { useState } from 'react';
// import data
import { galleryData } from '../data';
// import photo album & lightbox
import { PhotoAlbum } from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
// lightbox css
import 'yet-another-react-lightbox/styles.css';
// import motion
import { motion } from 'framer-motion';
// import fadeIn
import { fadeIn } from '../variants';
// import icons
import { IoMdArrowBack } from 'react-icons/io';

//slides
const slides = galleryData.images.map(({ original, width, height }) => ({
  src: original,
  width,
  height,
}));

const GalleryPage = ({ onBack }) => {
  // index state for lightbox
  const [index, setIndex] = useState(-1);
  // destructure gallery data
  const { images } = galleryData;

  return (
    <div className="min-h-screen bg-white pt-[120px] lg:pt-[150px]">
      <div className="container mx-auto px-4">
        {/* Header with back button */}
        <motion.div
          variants={fadeIn('down')}
          initial="hidden"
          animate="show"
          className="flex items-center justify-between mb-12"
        >
          <h1 className="h2 text-[40px] xl:text-[60px]">My Gallery</h1>
          <button
            onClick={onBack}
            className="btn btn-lg btn-outline flex items-center gap-x-2 hover:bg-dark hover:text-white"
          >
            <IoMdArrowBack className="text-xl" />
            Back to Home
          </button>
        </motion.div>

        {/* Gallery Description */}
        <motion.div
          variants={fadeIn('up')}
          initial="hidden"
          animate="show"
          className="max-w-2xl mb-16"
        >
          <p className="text-lg text-grey leading-relaxed">
            Explore my collection of tattoo artworks. Each piece tells a unique
            story and represents the passion and dedication I put into my craft.
            Click on any image to view it in full size.
          </p>
        </motion.div>

        {/* Photo Gallery */}
        <motion.div
          variants={fadeIn('up')}
          initial="hidden"
          animate="show"
          className="mb-16"
        >
          <PhotoAlbum
            onClick={(event, photo, index) => setIndex(index)}
            layout="rows"
            photos={images}
            spacing={20}
            targetRowHeight={400}
          />

          {/* Lightbox */}
          <Lightbox
            slides={slides}
            styles={{
              container: { backgroundColor: 'rgba(0,0,0,.95)' },
              slide: { padding: '20px' },
            }}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            carousel={{
              finite: true,
              preload: 2,
            }}
          />
        </motion.div>

        {/* Categories Section (Optional) */}
        <motion.div
          variants={fadeIn('up')}
          initial="hidden"
          animate="show"
          className="mb-16"
        >
          <h2 className="text-3xl font-primary uppercase tracking-[0.08em] mb-8">
            Tattoo Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Traditional', 'Realistic', 'Geometric', 'Blackwork'].map(
              (category, index) => (
                <div
                  key={index}
                  className="bg-[#f9f9f9] p-6 text-center hover:bg-dark hover:text-white transition-all duration-300 cursor-pointer"
                >
                  <h3 className="font-primary uppercase tracking-[0.08em]">
                    {category}
                  </h3>
                </div>
              )
            )}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          variants={fadeIn('up')}
          initial="hidden"
          animate="show"
          className="text-center bg-[#f9f9f9] py-16 px-8 rounded-lg"
        >
          <h2 className="text-3xl font-primary uppercase tracking-[0.08em] mb-4">
            Ready for Your Next Tattoo?
          </h2>
          <p className="text-lg text-grey mb-8 max-w-md mx-auto">
            Get in touch to discuss your ideas and book a consultation
          </p>
          <button className="btn btn-lg btn-dark">Contact Me</button>
        </motion.div>
      </div>
    </div>
  );
};

export default GalleryPage;
