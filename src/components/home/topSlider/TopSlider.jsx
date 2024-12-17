"use client";

import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
const medicalTerms = [
  {
    id: 1,
    term: "auscultation",
    syllables: [
      { text: "aus.", color: "text-red-500" },
      { text: "cul.", color: "text-blue-600" },
      { text: "ta.", color: "text-blue-600" },
      { text: "tion", color: "text-blue-600" },
    ],
    definition:
      "the act (or process) of listening to the heart, lung and other body sounds using a stethoscope as part of a medical exam",
    image: "/homepage/1.png",
    textStyle: "text-left text-[1.2rem] font-sfui  md:text-[40px] text-[#0B4D71] leading-[52px] max-md:leading-relaxed",
  },
  {
    id: 2,
    definition: "Transforming auscultation through AI",
    image: "/homepage/2.png",
    image2: "/homepage/3.png",
    textStyle: "text-center text-[#D7504A] text-[1.5rem] md:text-[2rem] leading-loose ",

  },
  {
    id: 3,
    definition: "Empowering pediatricians to identify innocent heart murmurs using Al",
    image: "/homepage/iphone.png",
    image2: "/homepage/laptop.png",
    textStyle: "text-left w-[80%] max-md:w-full text-[#D7504A] font-sfui text-[1.4rem] md:text-[31px] leading-snug font-[400] ",

  },
  // Add more terms here
];

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-[5%] top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900"
      aria-label="Next slide"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-[5%] top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900"
      aria-label="Previous slide"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  className: "px-4 md:px-8",
};

const TopSlider = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in milliseconds
      once: true,     // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div className="relative">
      <img
        src="/homepage/bg.jpg"
        alt="Background"
        className="w-screen absolute  -bottom-9 -z-10"
      />
      <div className="max-w-screen overflow-hidden">
        <Slider {...settings}>
          {medicalTerms.map((term, index) => (
            <div
              className="relative min-h-[80vh] flex items-center"
              key={term.id}
            >
              <div className="container mx-auto px-4 py-10 md:py-20 max-w-7xl min-h-[80vh] flex">
                <div className="grid gap-8 items-center">
                  {index % 2 === 0 ? (
                    <div className="grid sm:grid-cols-1 md:grid-cols-[60%_40%] gap-8 items-center">
                      {/* Text Content */}
                      <div data-aos="fade-right" className={`space-y-6 ${term.textStyle}`}>
                        {term.syllables && (
                          <span className="text-2xl sm:text-4xl md:text-6xl font-[600] font-sfui">
                            {term.syllables.map((syllable, i) => (
                              <span
                                key={i}
                                className={syllable.color || "text-black"}
                              >
                                {syllable.text}
                              </span>
                            ))}
                            <span className="text-blue-600">:</span>
                          </span>
                        )}

                        {term.definition && (
                          <span className={`ml-2`}>
                            {term.definition}
                          </span>
                        )}

                        <div>
                          <button className="px-8 sm:px-10 py-2 text-[16px] sm:text-[18px] text-black border-[4px] border-[#5ac8fa] rounded-full hover:bg-[#5AC8FA] hover:text-white transition-colors block mt-[40px] sm:mt-[80px]">
                            Explore
                          </button>
                        </div>
                      </div>


                      {/* Image Section */}
                      {/* Image Section */}
                      <div
                        data-aos="fade-up"
                        className={`relative flex gap-4 justify-center items-center ${term.id === 1 ? "" : term.id === 2 ? "bg-blue-100" : ""
                          }`}
                      >
                        {term.image && (
                          <img
                            src={term.image}
                            alt={term.term || "Medical Term"}
                            className={`${term.id === 1
                              ? "w-full sm:w-[80%]  rounded-lg  "
                              : term.id === 2
                                ? "w-full  border-4 border-blue-500"
                                : "w-full mr-[65%] max-lg:w-[30%]  max-lg:mr-0 mt-9"
                              }`}
                          />
                        )}
                        {term.image2 && (
                          <div
                            className={`absolute ${term.id === 2
                              ? "top-0 right-0"
                              : term.id === 3
                                ? "w-[650px] -top-10 max-md:top-8 left-10 max-lg:left-0 max-lg:w-full -z-[10]"
                                : ""
                              }`}
                          >
                            <img
                              src={term.image2}
                              alt={term.term || "Medical Term"}
                              className={`${term.id === 2
                                ? "opacity-50 "
                                : term.id === 3
                                  ? "-z-[100] "
                                  : ""
                                }`}
                            />
                          </div>
                        )}
                      </div>

                    </div>
                  ) : (
                    <div className="grid sm:grid-cols-1 md:grid-cols-[40%_60%] gap-8 items-center">
                      {/* Image Section */}
                      <div className="relative flex justify-center items-center">
                        {term.image && (
                          <img
                            src={term.image}
                            alt={term.term || "Medical Term"}
                            className="w-[50%] sm:w-auto max-md:mx-auto"
                          />
                        )}
                        {term.image2 && (
                          <div className="absolute max-lg:-left-[5%] -left-[20%]   -top-[5%] md:-top-[10%]">
                            <img
                              src={term.image2}
                              alt={term.term || "Medical Term"}
                              className="w-[50%] sm:w-auto max-md:mx-auto"
                            />
                          </div>
                        )}
                      </div>

                      {/* Text Content */}
                      <div className="space-y-6">
                        {term.syllables && (
                          <h2 className="text-2xl sm:text-4xl md:text-6xl font-[600] font-sfui">
                            {term.syllables.map((syllable, i) => (
                              <span
                                key={i}
                                className={syllable.color || "text-black"}
                              >
                                {syllable.text}
                              </span>
                            ))}
                            <span className="text-blue-600">:</span>
                          </h2>
                        )}

                        {term.definition && (
                          <p className="text-xl sm:text-2xl md:text-3xl text-[#0B4D71] md:text-5xl font-[400] font-sfui">
                            {term.definition}
                          </p>
                        )}

                        <div>
                          <button className="px-8 sm:px-10 py-2 text-[16px] sm:text-[18px] text-black border-[4px] border-[#5ac8fa] rounded-full hover:bg-[#5AC8FA] hover:text-white transition-colors block mt-[40px] sm:mt-[80px]">
                            Explore
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TopSlider;
