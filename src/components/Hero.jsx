import React from "react";
import { useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";

import iconAngleLeft from "../assets/icon-angle-left.svg";
import iconAngleRight from "../assets/icon-angle-right.svg";
import iconArrow from "../assets/icon-arrow.svg";
import heroMobile1 from "../assets/mobile-image-hero-1.jpg";
import heroMobile2 from "../assets/mobile-image-hero-2.jpg";
import heroMobile3 from "../assets/mobile-image-hero-3.jpg";
import heroDesktop1 from "../assets/desktop-image-hero-1.jpg";
import heroDesktop2 from "../assets/desktop-image-hero-2.jpg";
import heroDesktop3 from "../assets/desktop-image-hero-3.jpg";

const Hero = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [currentImage, setCurrentImage] = useState(0);
  const mobileImages = [heroMobile1, heroMobile2, heroMobile3];
  const desktopImages = [heroDesktop1, heroDesktop2, heroDesktop3];

  const handleNextClick = () => {
    setCurrentImage((currentImage + 1) % mobileImages.length);
    console.log(isDesktop);
  };

  const handlePrevClick = () => {
    setCurrentImage(
      (currentImage - 1 + mobileImages.length) % mobileImages.length
    );
  };

  return (
    <div className="md:flex">
      <div className="flex justify-end items-end w-full md:w-7/12">
        <div className="relative z-0">
          <img
            src={
              isDesktop
                ? desktopImages[currentImage]
                : mobileImages[currentImage]
            }
            alt="product background"
            className="md:h-[534px] w-full"
          />
        </div>
        <div className="flex absolute md:hidden">
          <button
            onClick={handlePrevClick}
            className="bg-black text-white w-[55px] h-[55px] flex justify-center items-center"
          >
            <img src={iconAngleLeft} alt="Angle Left" />
          </button>
          <button
            onClick={handleNextClick}
            className="bg-black text-white w-[55px] h-[55px] flex justify-center items-center"
          >
            <img src={iconAngleRight} alt="Angle Right" />
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-center px-8 pt-14 pb-16 gap-4 md:w-5/12 md:px-24 md:relative">
        <h1 className="font-semibold text-4xl">
          Discover innovative ways to decorate
        </h1>
        <p className="tracking-wide text-sm text-dark-gray">
          We provide unmatched quality, comfort and style for property owners
          across the country. Our experts combine form and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </p>
        <div className="flex gap-8 pt-5">
          <p className="uppercase text-medium font-medium tracking-[10px]">
            Shop Now
          </p>
          <img src={iconArrow} alt="Arrow" className="inline object-none" />
        </div>
        <div className="hidden md:flex absolute bottom-0 left-0">
          <button
            onClick={handlePrevClick}
            className="bg-black text-white w-[55px] h-[55px] flex justify-center items-center"
          >
            <img src={iconAngleLeft} alt="Angle Left" />
          </button>
          <button
            onClick={handleNextClick}
            className="bg-black text-white w-[55px] h-[55px] flex justify-center items-center"
          >
            <img src={iconAngleRight} alt="Angle Right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
