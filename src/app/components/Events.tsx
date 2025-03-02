"use client";

import React from "react";
import Link from "next/link";

const uremazaCard = [
  {
    title: "Titlu Eveniment",
    date: "16/02/2025",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit vero tempore illum, earum fugiat quae repellat officiis illo dolores eum saepe doloribus, maxime atque ipsum molestiae voluptatibus quibusdam voluptatem sed.",
  },
];

const auFost = [
  {
    id: 1,
    title: "Eveniment Trecut 1",
    date: "16/02/2025",
  },
  {
    id: 2,
    title: "Eveniment Trecut 2",
    date: "17/02/2025",
  },
  {
    id: 3,
    title: "Eveniment Trecut 3",
    date: "18/02/2025",
  },
  {
    id: 4,
    title: "Eveniment Trecut 4",
    date: "19/02/2025",
  },
  {
    id: 5,
    title: "Eveniment Trecut 5",
    date: "20/02/2025",
  },
];

const Events = () => {
  return (
    <div
      id="events"
      className=" w-full md:h-[800px] h-auto md:pt-0 pt-12 md:pb-0 pb-12 bg-[#23242A] flex items-center justify-center"
    >
      <div className="hidden md:block w-[90%] md:w-[80%] h-full  flex-col items-center justify-start second-font">
        <h1 className="w-full h-auto flex items-center justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white py-6 md:py-4">
          Evenimente
        </h1>
        <div className="w-full h-full flex flex-col md:flex-row justify-evenly items-center gap-10 md:gap-4">
          {/* Urmeaza */}
          <div className="w-full md:w-[45%] h-auto md:h-3/4 flex justify-start items-center flex-col text-white">
            <h2 className="text-xl md:text-[30px] font-extrabold mb-6 md:mb-0">
              Urmeaza
            </h2>
            <div className="w-full h-full items-center flex justify-center">
              {uremazaCard.map((card, index) => (
                <div
                  key={index}
                  className="p-4 md:p-6 w-[95%] md:w-[80%] h-auto md:h-[80%] bg-gradient-to-br from-[#2E3031] to-[#292B2D] shadow-[10px_10px_10px_8px_rgba(0,0,0,0.25)] rounded-2xl flex flex-col items-start justify-around text-white"
                >
                  <header className="w-full flex flex-col sm:flex-row justify-between font-extrabold mb-4 sm:mb-0">
                    <h3 className="mb-2 sm:mb-0">{card.title}</h3>
                    <p>{card.date}</p>
                  </header>
                  <p className="mb-6">{card.desc}</p>
                  <Link
                    href="./form"
                    className="px-6 py-3 rounded-full bg-white text-[#333] self-center sm:self-start transition-colors duration-300 ease-in-out hover:bg-gray-200"
                  >
                    Inscrie-te
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Au fost */}
          <div className="w-full md:w-[45%] h-auto md:h-3/4 flex justify-start items-center flex-col text-white">
            <h2 className="text-xl md:text-[30px] font-extrabold mb-6 md:mb-0">
              Au fost
            </h2>
            <div className="w-full max-h-[500px] pt-2 md:pt-6 flex items-center justify-center au-fost">
              <div className="w-full flex flex-col gap-5 overflow-y-auto max-h-full items-center pt-4 md:pt-6">
                {auFost.map((event) => (
                  <div
                    key={event.id}
                    className="w-[95%] sm:w-[90%] md:w-[75%] min-h-[120px] bg-gradient-to-br from-[#2E3031] to-[#292B2D] shadow-[10px_10px_10px_8px_rgba(0,0,0,0.25)] rounded-2xl flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6 mb-4 text-white transition-all duration-300 ease-in-out transform hover:scale-105"
                  >
                    <div className="w-full sm:w-[60%] flex flex-col items-center justify-evenly font-extrabold mb-4 sm:mb-0">
                      <h3 className="mb-2 sm:mb-0">{event.title}</h3>
                      <p>{event.date}</p>
                    </div>
                    <div className="w-full sm:w-[40%] flex items-center justify-center">
                      <a
                        href="#gallery"
                        className="px-6 py-3 rounded-full bg-white text-[#333] transition-colors duration-300 ease-in-out hover:bg-gray-200"
                      >
                        Vezi poze
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Phone */}

      <div className="md:hidden w-full bg-[#23242A] flex flex-col items-center justify-center py-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white py-6">
          Evenimente
        </h1>
        <div className="w-[90%] flex flex-col gap-6">
          {/* Urmeaza */}
          <div className="w-full flex flex-col items-center text-white">
            <h2 className="text-xl font-extrabold mb-4">Urmeaza</h2>
            {uremazaCard.map((card, index) => (
              <div
                key={index}
                className="p-4 w-full bg-gradient-to-br from-[#2E3031] to-[#292B2D] rounded-2xl flex flex-col text-white shadow-lg"
              >
                <header className="flex justify-between font-extrabold mb-2">
                  <h3>{card.title}</h3>
                  <p>{card.date}</p>
                </header>
                <p className="mb-4">{card.desc}</p>
                <button className="px-4 py-2 rounded-full bg-white text-[#333] hover:bg-gray-200">
                  Inscrie-te
                </button>
              </div>
            ))}
          </div>

          {/* Au fost */}
          <div className="w-full flex flex-col items-center text-white">
            <h2 className="text-xl font-extrabold mb-4">Au fost</h2>
            <div className="w-full flex flex-col gap-4 overflow-y-auto max-h-[300px]">
              {auFost.map((event) => (
                <div
                  key={event.id}
                  className="w-full min-h-[130px] bg-gradient-to-br from-[#2E3031] to-[#292B2D] rounded-2xl flex flex-col items-center p-4 text-white hover:scale-105 transition-transform"
                >
                  <h3 className="font-extrabold">{event.title}</h3>
                  <p>{event.date}</p>
                  <a
                    href="#gallery"
                    className="px-4 py-2 mt-2 rounded-full bg-white text-[#333] hover:bg-gray-200"
                  >
                    Vezi poze
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
