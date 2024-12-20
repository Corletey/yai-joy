// src/App.jsx
import React, { useState, useEffect } from "react";
import LandingPage from "./pages/landing";
import { FaArrowUp } from "react-icons/fa";
import PreLoader from "./components/preloader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/errorBoundary";
import NotFound from "./components/notFound";

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
      behavior: "smooth",
    });
  };
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <ErrorBoundary>
      {isLoading ? (
        <PreLoader />
      ) : (
        <Router>
          <Routes>
            {/* Define route for the landing page */}
            <Route path="/" element={<LandingPage />} />

            {/* Catch-all route for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          {/* <div>
          <LandingPage /> */}

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="fixed z-50 bottom-10 right-10 p-3 bg-primary rounded-full shadow-lg text-white hover:bg-secondary"
            aria-label="Scroll to Top"
          >
            <FaArrowUp size={24} />
          </button>
          {/* </div> */}
        </Router>
      )}
    </ErrorBoundary>
  );
}

export default App;
