// src/App.jsx
import React, { useState, useEffect } from "react";
import LandingPage from "./pages/landing";
import { FaArrowUp } from 'react-icons/fa';
import PreLoader from './components/preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate loading time

    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isLoading ? (
        <PreLoader />
      ) : (
        <div>
          <LandingPage />

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="fixed bottom-10 right-10 p-3 bg-primary rounded-full shadow-lg text-white hover:bg-secondary"
            aria-label="Scroll to Top"
          >
            <FaArrowUp size={24} />
          </button>
        </div>
      )}
    </>
  );
}

export default App;