import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

export default function AIAlgorithms (){
     useEffect(() => {
            AOS.init({
                duration: 1500, // Animation duration in milliseconds
                once: true,     // Whether animation should happen only once - while scrolling down
            });
        }, []);
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24 max-w-6xl mx-auto">
        {/* Content Section */}
        <div className="max-w-xl">
          <h2 className="text-4xl font-sfui font-[100] md:text-[45px]  text-[#EF4444] mb-6 leading-tight">
            Artificial Intelligence (AI) Algorithms
          </h2>
          <p className="text-lg md:text-[24px] font-sfui text-gray-600 leading-relaxed">
            Embedded in the app are clinically validated artificial intelligent (AI) algorithms that help 
            identify innocent Still's murmur with cardiologist-level accuracy at the point of care.
          </p>
        </div>

        {/* Phone Mockups Section */}
        <div data-aos="fade-left" className="relative w-full max-md:w-[80%] max-md:mx-auto max-w-lg">
         <img src="/technology/texh.png" alt="" />
        </div>
      </div>
    </div>
  );
};


