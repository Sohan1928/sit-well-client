import React, { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";
import "./btnStyle.css";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      className={`back-to-top w-10 md:w-12 h-10 bg-blue-500 hover:bg-orange-500 md:h-12 bottom-12 md:bottom-16 right-8 md:right-16 ${
        isVisible ? "show" : ""
      }`}
      onClick={scrollToTop}
      style={{ display: isVisible ? "flex" : "none" }}
    >
      <FaChevronUp />
    </button>
  );
};

export default BackToTopButton;
