
import { ArrowRight } from 'lucide-react'
import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
export default function DigitalPlatform() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in milliseconds
      once: true,     // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div className="bg-white relative overflow-hidden max-w-7xl mx-auto mt-11 py-52">
  {/* Background Pattern */}
  <img
    src="/homepage/bg3.png"
    alt="Background"
    className="absolute w-full h-[65%] object-cover"
  />

  <div className="container mx-auto px-4 py-20 relative z-10">
    <div className="flex max-md:flex-col gap-12 items-center">
      {/* Text Content */}
      <div data-aos="fade-right" className="space-y-[50px] w-[50%] max-md:w-full">
        <h1 className="text-4xl md:text-[40px] lg:text-[45px] font-[400] font-sfui text-[#D64D47] leading-[65px]">
          Digital Auscultation <br className="max-md:hidden" /> Platform
        </h1>
        <p
          style={{ lineHeight: '40px' }}
          className="text-xl md:text-2xl font-sfui font-[400] text-[#1A1A1A] max-w-xl"
        >
          Our digital auscultation platform allows for seamless recording,
          classification, cloud-based storage, and sharing of heart and lung
          sounds
        </p>
        <button className="inline-flex items-center px-6 py-3 text-[#FF5757] border-2 border-[#FF5757] rounded-full hover:bg-[#FF5757] hover:text-white transition-colors">
          Explore
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>

      {/* Image Flow Diagram */}
      <div className="relative w-[100%] max-md:w-full">
        <img src="/homepage/digital.png" alt="Digital" className="w-full" />
      </div>
    </div>
  </div>
</div>

  )
}

