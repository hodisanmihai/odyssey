"use client"; // Needed for Next.js (if using App Router)

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  // Track scroll position and window height
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY); // Update scrollY for parallax
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    // Initialize resize and scroll listeners
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Calculate the parallax translateY value for smooth scrolling
  const translateY = windowHeight
    ? Math.min((-90 * windowHeight) / 100 + scrollY, 0)
    : 0;

  return (
    <div className="w-[100vw] h-auto overflow-x-hidden">
      {/* Hero Section */}
      <div className="w-full h-[100vh] overflow-x-hidden flex items-center justify-center">
        <div className="relative w-full h-[100vh] overflow-hidden">
          <Image
            src="/assets/parkinglot.jpg"
            alt="Background"
            width={1920}
            height={1200}
            className="md:h-[90%] relative z-0 object-cover h-full"
          />
          <div className="absolute w-full md:h-[90%] h-full top-0 gradient-background z-1"></div>
          <Image
            src="/assets/herocars.png"
            alt="cars"
            width={2000}
            height={307}
            className="md:w-[100%] md:h-[57%] w-[100%] h-[30%] top-[65%] rounded-lg shadow-lg z-3 absolute md:top-[43.5%] overflow-hidden aspect-video strokeCars object-cover"
            priority
          />
          <div className="bg-black w-full h-[10%] hidden md:block"></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full h-[100vh] overflow-x-hidden bg-[#23242A] flex items-center justify-center">
        <Image
          src="/assets/hero2bg.jpg"
          alt="Background"
          width={1920}
          height={1200}
          className="h-full w-full relative opacity-[8%] object-cover"
        />

        <div className="w-[90%] h-[90%] absolute top-[100vh] mt-10 justify-center items-center flex flex-col">
          <div className="w-full md:w-1/2 h-2/3 flex flex-col justify-start gap-0">
            {/* "Odyssey" Text */}
            <h1
              className="text-stroke-black text-[5rem] md:text-[11vw] text-center first-font mt-0 z-2 relative md:text-stroke text-shadow md:translate-y-0 translate-y-[40%] text-white will-change-transform"
              style={{
                transform: `translateY(${translateY}px)`,
              }}
            >
              Odyssey
            </h1>

            {/* "Meetings" Text */}
            <h1 className="text-[5rem] md:text-[11vw] text-center text-stroke text-transparent md:translate-y-[-40%] font-extrabold translate-y-[40%]">
              Meetings
            </h1>
          </div>

          {/* Buttons Section */}
          <div className="w-full h-1/4 flex flex-col md:flex-row justify-evenly items-center second-font font-bold">
            <a
              href="#"
              className="w-full md:w-1/4 h-1/2 border-white border-1 rounded-lg text-white flex items-center justify-center cta-btn mb-4 md:mb-0"
            >
              <h2 className="cta-btn-text">Afla mai multe</h2>
            </a>
            <a
              href="#"
              className="w-full md:w-1/4 h-1/2 border-white border-1 rounded-lg text-white flex items-center justify-center cta-btn mb-4 md:mb-0"
            >
              <h2 className="cta-btn-text">Urmatorul Eveniment</h2>
            </a>
            <div className="w-full md:w-1/4 h-1/2">
              <ul className="example-2 flex gap-6 h-full justify-center md:justify-start">
                <li className="icon-content w-1/4 aspect-square">
                  <a
                    href="https://www.facebook.com/nrgym.oradea"
                    data-social="facebook"
                    className="icon-link h-full rounded-lg text-6xl"
                  >
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      className="fa"
                      style={{ fontSize: "2.5rem" }}
                    />
                    <span className="filled"></span>
                  </a>
                </li>
                <li className="icon-content w-1/4 aspect-square">
                  <a
                    href="https://www.facebook.com/nrgym.oradea"
                    data-social="instagram"
                    className="icon-link h-full rounded-lg text-6xl"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="fa"
                      style={{ fontSize: "2.5rem" }}
                    />
                    <span className="filled"></span>
                  </a>
                </li>
                <li className="icon-content w-1/4 aspect-square">
                  <a
                    href="https://www.facebook.com/nrgym.oradea"
                    data-social="tiktok"
                    className="icon-link h-full rounded-lg text-6xl"
                  >
                    <FontAwesomeIcon
                      icon={faTiktok}
                      className="fa"
                      style={{ fontSize: "2.5rem" }}
                    />
                    <span className="filled"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
