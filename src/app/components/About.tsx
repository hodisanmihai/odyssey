"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faCalendar,
  faUsers,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";

const cardsData = [
  {
    id: 1,
    icon: faCar,
    title: "Misiunea Noastra",
    text: "Să aducem împreună iubitorii de mașini și să creăm un loc unde pasiunea pentru automobile se întâlnește cu comunitatea.",
  },
  {
    id: 2,
    icon: faCalendar,
    title: "Evenimentele Noastre",
    text: "Organizăm întâlniri săptămânale, evenimente speciale și concursuri pentru a aduna pasionații de mașini.",
  },
  {
    id: 3,
    icon: faUsers,
    title: "Comunitatea",
    text: "Credem că fiecare pasionat de mașini merită să facă parte dintr-o comunitate unde poate învăța și împărtăși experiențe.",
  },
  {
    id: 4,
    icon: faUserCheck,
    title: "Alătură-te Nouă",
    text: "Fii parte din Odyssey, alătură-te grupului nostru și înregistrează-te la următoarele întâlniri!",
  },
];

const About = () => {
  return (
    <div className="w-full md:h-[800px] md:pt-0 pt-12 md:pb-0 pb-6 bg-[#23242A] flex items-center justify-center">
      <div className="w-[80%] h-full flex flex-col md:flex-row items-center justify-evenly second-font">
        {/* Left Section (Title + Text) */}
        <div className="w-full md:w-1/3 h-auto flex flex-col items-center md:items-start justify-evenly text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white">
            About
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#838492] mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            deleniti reiciendis est enim fugit numquam, laborum voluptate ab
            provident ullam asperiores temporibus? Porro accusamus deserunt
            corporis neque tempore, corrupti recusandae.
          </p>
        </div>

        {/* Right Section (Cards) */}
        <div className="w-full md:w-1/2 h-auto md:h-4/5 grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center p-6">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="p-4 md:p-6 w-full max-w-[258px] h-auto min-h-[200px] bg-gradient-to-br from-[#2E3031] to-[#292B2D] shadow-[10px_10px_10px_8px_rgba(0,0,0,0.25)] rounded-2xl flex flex-col items-start justify-around text-white"
            >
              <div className="w-full h-1/3 text-xl md:text-2xl">
                <FontAwesomeIcon
                  icon={card.icon}
                  className="fa"
                  style={{ fontSize: "2rem" }}
                />
              </div>
              <h3 className="w-full h-1/3 text-sm md:text-[15px] font-extrabold">
                {card.title}
              </h3>
              <p className="w-full h-1/3 text-xs md:text-[12px]">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
