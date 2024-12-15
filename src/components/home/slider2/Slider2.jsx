'use client'

import React, { useEffect } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import AOS from "aos";
import "aos/dist/aos.css";
const newsItems = [
  {
    id: 1,
    image: "/homepage/1s.png",
    title: "AuscultTech Dx receives STTR Phase I award",
    date: "September, 2016",
    description: "AusculTech Dx receives STTR Phase II award from the National Institutes of Health (NIH). This award supports demonstrating the technical feasibility of the planned StethAid™ platform.",
    link: "#"
  },
  {
    id: 2,
    image: "/homepage/2s.png",
    title: "Project StethAid™ awarded Atlantic Pediatric Device Consortium Funding",
    date: "August, 2015",
    description: "Atlantic Pediatric Device Consortium (APDC) is an FDA-funded Consortium that funds, seeds and promotes promising early-stage pediatric devices. The Consortium recognized the potential of Project StethAid™ and selected it for...",
    link: "#"
  },
  {
    id: 3,
    image: "/homepage/3s.jpg",
    title: "AuscultTech Dx receives STTR Phase I award",
    date: "June, 2020",
    description: "AusculTech Dx received its latest STTR Phase I award from the National Institutes of Health (NIH). This award supports research and development into extending the StethAid™ platform for improved home-based...",
    link: "#"
  }
]

export default function Slider2() {
    useEffect(() => {
        AOS.init({
          duration: 1500, // Animation duration in milliseconds
          once: true,     // Whether animation should happen only once - while scrolling down
        });
      }, []);
  const settings = {
    dots: true,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    customPaging: (i) => (
      <div
        className={`w-2 h-2 rounded-full bg-gray-300 hover:bg-[#5AC8FA] transition-colors duration-200`}
      />
    )
  }

  return (
    <section className="py-20 bg-[#e7f7f7]">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-[#5AC8FA] text-4xl md:text-5xl font-bold mb-12">
          News
        </h2>

        <div data-aos="fade-up" className="max-w-7xl mx-auto">
          <Slider {...settings} className="news-slider -mx-4">
            {newsItems.map((item) => (
              <div key={item.id} className="px-4">
                <div className="bg-white rounded-lg shadow-md overflow-hidden h-full min-h-[650px]">
                  <div className="p-6 flex flex-col h-full">
                   
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-[250px] object-contain "
                      />
                    
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-2">
                      {item.title}
                    </h3>
                    
                    <time className="text-gray-500 mb-4 block">
                      {item.date}
                    </time>
                    
                    <p className="text-gray-600 flex-grow mb-9 font-sfui font-[600] text-[17px] ">
                      {item.description}
                    </p>
                    
                    <button className="bg-[#E85B5B] text-white px-6 py-2 rounded-full hover:bg-[#D54A4A] transition-colors duration-200 self-start">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style jsx global>{`
        .news-slider .slick-dots {
          bottom: -40px;
        }
        .news-slider .slick-dots li {
          margin: 0 4px;
        }
        .news-slider .slick-dots li.slick-active div {
          background-color: #5AC8FA;
        }
      `}</style>
    </section>
  )
}
