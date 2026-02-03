import React, { useRef } from "react";
import dreamGrid from "../assets/dreamjobassets/background/Dream-Grid.webp";
import { Dreamdata } from "./dreamdata/Dreamdata";
import { BriefcaseBusiness, ChevronLeft, ChevronRight } from "lucide-react";
import arrow from "../assets/dreamjobassets/arrow/yellow-arrow.svg";

export default function Dream() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -360,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 360,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="bg-[#0D0F12] bg-cover bg-no-repeat py-16"
      style={{ backgroundImage: `url(${dreamGrid})` }}
    >
      {/* Title */}
      <div className="font-DM-Sans max-w-6xl mx-auto px-4 md:px-8 mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-white">
          Land Your Dream Job Like Our Alumni
        </h2>

        <p className="mt-5 text-base md:text-lg text-white max-w-3xl">
          Our learners are working at companies like Accenture, EY,
          Capgemini, Flipkart, Novartis, JPMorgan Chase & Co., Morgan Stanley
          and more after structured training and right guidance.
        </p>
      </div>

      {/* Controls */}
      <div className="w-full  px-4 md:px-8 mb-6 flex gap-3 justify-end">
        <button
          onClick={scrollLeft}
          className="h-10 w-10 md:h-12 md:w-12 rounded-full border-2 border-white
                     flex items-center justify-center text-white
                     hover:bg-white hover:text-black transition"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={scrollRight}
          className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-white
                     flex items-center justify-center text-black
                     hover:bg-gray-200 transition"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="w-full mx-auto px-4 md:px-[190px]
                   flex gap-5 overflow-x-auto scroll-smooth no-scrollbar"
      >
        {Dreamdata.map((item, index) => (
          <div
            key={index}
            className="min-w-[280px] sm:min-w-[300px] md:min-w-[320px] flex-shrink-0"
          >
            {/* Title Tag */}
            <div className="bg-[#FFD21F] text-xs md:text-sm text-[#0D0F12] font-bold w-fit p-1">
              {item.title}
            </div>

            {/* Card */}
            <div className="flex flex-col overflow-hidden text-white">
              {/* Image */}
              <div className="relative">
                <img
                  src={item.image}
                  alt="Profile"
                  className="w-full h-[220px] md:h-[294px] object-cover"
                />

                {/* Overlay */}
                <div className="absolute bottom-0 w-full h-[70px] bg-gradient-to-t from-black to-transparent">
                  <span className="absolute bottom-2 right-4 text-xs">
                    0:30
                  </span>

                  <div className="absolute bottom-2 left-4">
                    <p className="font-bold text-sm md:text-base">
                      {item.name}
                    </p>

                    <div className="flex gap-2 items-center text-xs md:text-sm">
                      <BriefcaseBusiness size={16} />
                      {item.profile}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom */}
              <div className="bg-white text-black">
                <div className="px-4 md:px-6 py-4 space-y-4">
                  <div className="text-gray-500 text-xs flex justify-between">
                    <span>Pre Consoleflare</span>
                    <span>Post Consoleflare</span>
                  </div>

                  <div className="flex justify-between items-center gap-4">
                    <div className="text-xs font-medium">{item.from}</div>

                    <img src={arrow} className="w-6" />

                    <img
                      src={item.company}
                      className="w-[100px] h-[24px] object-contain"
                    />
                  </div>
                </div>

                <div className="border-t py-3 text-center">
                  <button className="text-[#7833FE] underline text-sm">
                    View profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
