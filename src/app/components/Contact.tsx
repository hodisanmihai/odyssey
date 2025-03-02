"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full md:h-[700px] h-auto md:pt-0 pt-12 md:pb-0 pb-12 bg-[#23242A] flex items-center justify-center no-copy"
    >
      <div className="w-[90%] md:w-[80%] h-full flex flex-col items-center justify-start second-font">
        <h1 className="w-full h-auto flex items-center justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white py-6 md:py-4">
          Contact & Social Media
        </h1>
        <div className="w-3/4 h-fit mt-20 flex flex-col md:flex-row bg-gradient-to-br from-[#2E3031] to-[#292B2D] shadow-[10px_10px_10px_8px_rgba(0,0,0,0.25)] p-6 rounded-lg">
          {/* Left Container with Text */}
          <div className="w-full md:w-1/2 h-full flex items-center justify-center p-4 ">
            <div className="text-[#838492] text-lg md:text-xl font-light">
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                at dui magna. Integer interdum ante id ultricies volutpat.
                Curabitur euismod dui vitae interdum iaculis. Etiam euismod
                posuere velit, sed consectetur purus elementum non.
              </p>
              <p>
                Nulla facilisi. Donec ut elit id leo pretium mollis. Nulla
                volutpat libero ut sollicitudin posuere.
              </p>
            </div>
          </div>

          {/* Right Container with Social Media Icons */}
          <div className="w-full md:w-1/2 h-full flex items-center justify-center p-4">
            <div className=" w-full md:w-3/5 h-full flex grid-cols-2 gap-8">
              <ul className="example-2 w-3/2 flex-row  ">
                <div className=" flex w-1/2 h-full flex-col justify-between items-center md:gap-0 gap-12">
                  <li className="icon-content w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-[#3b5998] rounded-full flex justify-center items-center">
                    <a
                      href="https://www.facebook.com/nrgym.oradea"
                      data-social="facebook"
                      className="icon-link flex justify-center items-center w-full h-full rounded-2xl text-6xl text-white"
                    >
                      <FontAwesomeIcon
                        icon={faFacebookF}
                        className="fa"
                        style={{ fontSize: "2.5rem" }}
                      />
                      <span className="filled"></span>
                      <div className="tooltip">Follow us on Facebook</div>
                    </a>
                  </li>

                  <li className="icon-content w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-gradient-to-r from-[#833ab4] to-[#fcb045] rounded-full flex justify-center items-center">
                    <a
                      href="https://www.instagram.com/nrgym.oradea"
                      data-social="instagram"
                      className="icon-link flex justify-center items-center w-full h-full rounded-2xl text-6xl text-white"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="fa"
                        style={{ fontSize: "2.5rem" }}
                      />
                      <span className="filled"></span>
                      <div className="tooltip">Follow us on Instagram</div>
                    </a>
                  </li>
                </div>
                <div className="flex w-1/2 h-full flex-col justify-between items-center">
                  <li className="icon-content w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-gradient-to-r from-[#00f2ea] to-[#fe2c55] rounded-full flex justify-center items-center">
                    <a
                      href="https://www.tiktok.com/@nrgym.oradea"
                      data-social="tiktok"
                      className="icon-link flex justify-center items-center w-full h-full rounded-2xl text-6xl text-white"
                    >
                      <FontAwesomeIcon
                        icon={faTiktok}
                        className="fa"
                        style={{ fontSize: "2.5rem" }}
                      />
                      <span className="filled"></span>
                    </a>
                  </li>

                  <li className="icon-content w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full flex justify-center items-center">
                    <a
                      href="https://www.tiktok.com/@nrgym.oradea"
                      data-social="gmail"
                      className="icon-link flex justify-center items-center w-full h-full rounded-2xl text-6xl text-white"
                    >
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="fa"
                        style={{ fontSize: "2.5rem" }}
                      />
                      <span className="filled"></span>
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
