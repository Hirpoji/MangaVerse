import React, { useState, useEffect } from "react";
import Button from "./Button";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setIsVisible } from "../redux/slices/scrollSlice";
import { RootState } from "../redux/store";

const ScrollButton: React.FC = () => {
  const isVisible = useSelector((state: RootState) => state.scroll.isVisible);
  const dispatch = useDispatch();

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
        dispatch(setIsVisible(true))
    } else {
        dispatch(setIsVisible(false))
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
      classes={`fixed bottom-11 text-white ${
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
