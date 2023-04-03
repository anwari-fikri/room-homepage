import React from "react";
import aboutDark from "../assets/image-about-dark.jpg";
import aboutLight from "../assets/image-about-light.jpg";

const Content = () => {
  return (
    <div>
      <img src={aboutDark} alt="dark furniture" />
      <div className="flex flex-col px-8 pt-14 pb-16 gap-4">
        <h2 className="tracking-[5px] uppercase font-semibold text-sm">
          About our Furniture
        </h2>
        <p className="tracking-wide text-sm text-dark-gray">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <img src={aboutLight} alt="white chair" />
    </div>
  );
};

export default Content;
