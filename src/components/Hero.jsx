import React from "react";
import { useState } from "react";
import iconAngleLeft from "../assets/icon-angle-left.svg";
import iconAngleRight from "../assets/icon-angle-right.svg";
import iconArrow from "../assets/icon-arrow.svg";
import heroMobile1 from "../assets/mobile-image-hero-1.jpg";
import heroMobile2 from "../assets/mobile-image-hero-2.jpg";
import heroMobile3 from "../assets/mobile-image-hero-3.jpg";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [heroMobile1, heroMobile2, heroMobile3];

  const handleNextClick = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const handlePrevClick = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <>
      <div
        className="flex justify-end items-end w-full h-[360px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
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
      <div className="flex flex-col px-8 pt-14 pb-16 gap-4">
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
      </div>
    </>
  );
};

export default Hero;
