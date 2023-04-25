import React, { useState, useEffect } from "react";
import Button from "./Button";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
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
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Button
      classes={`fixed bottom-24 text-white ${
        isVisible ? "visible" : "invisible"
      }`}
      onclick={scrollToTop}
    >
      <AiOutlineArrowUp />
      Наверх
    </Button>
  );
};

export default ScrollButton;
