import React from "react";
import { useState } from "react";
import iconHamburger from "../assets/icon-hamburger.svg";
import iconClose from "../assets/icon-close.svg";
import logo from "../assets/logo.svg";

const Navigation = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  return (
    <>
      <div className="z-10 absolute pt-12 w-full flex justify-center gap-14 md:justify-start md:pl-16">
        <img src={logo} alt="logo" className="inline object-none" />
        <div className="hidden text-white gap-6 md:flex ">
          <ul>
            <li>home</li>
          </ul>
          <ul>
            <li>shop</li>
          </ul>
          <ul>
            <li>about</li>
          </ul>
          <ul>
            <li>contact</li>
          </ul>
        </div>
      </div>
      <div className="z-10 absolute pt-12 pl-8 md:hidden">
        <button onClick={() => setIsHamburgerOpen(!!!isHamburgerOpen)}>
          <img src={iconHamburger} alt="Angle Left" />
        </button>
      </div>

      {isHamburgerOpen && (
        <div
          onClick={() => setIsHamburgerOpen(!!!isHamburgerOpen)}
          className="z-10 fixed right-0 top-0 w-full h-screen bg-black/50 "
        >
          <div className="h-[110px] w-full px-8 bg-white">
            <div className="pt-12 w-full flex justify-between">
              <img src={iconClose} alt="close" className="inline object-none" />
              <div className="flex gap-8 font-semibold">
                <ul>
                  <li>home</li>
                </ul>
                <ul>
                  <li>shop</li>
                </ul>
                <ul>
                  <li>about</li>
                </ul>
                <ul>
                  <li>contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
