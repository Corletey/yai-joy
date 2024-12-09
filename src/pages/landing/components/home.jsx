import React, { useState, useEffect } from 'react';
import K from '../../../constants';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % K.HERO_IMAGES.length);
    }, 3000); // Increased time to 3 seconds for better visibility

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="pt-0">
      <div className="flex h-screen">
        {/* Left Side - Image Carousel */}
        <div className="w-1/2 relative">
          <img
            src={K.HERO_IMAGES[currentSlide].src}
            alt="Slide Image"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {K.HERO_IMAGES.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white'
                    : 'bg-white/50 hover:bg-white'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-1/2 flex flex-col justify-center items-center p-8">
          <h1 className="text-4xl font-bold mb-4">{K.BRAND_INFO.name}</h1>
          <p className="text-lg mb-8">{K.BRAND_INFO.description}</p>
          <button className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition-colors duration-300">
            Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
