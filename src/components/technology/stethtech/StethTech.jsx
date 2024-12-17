import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
const StethTech = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500, // Animation duration in milliseconds
            once: true,     // Whether animation should happen only once - while scrolling down
        });
    }, []);
    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
                {/* Image Container with Heart Glow Effect */}
                <div data-aos="fade-right" className="relative w-full max-w-md">
                    <div className="absolute inset-0 bg-red-100/50 rounded-full blur-3xl transform scale-125 animate-pulse" />
                    <img
                        src="/technology/steth.png"
                        alt="StethAid Device"
                        className="relative z-10 w-full h-auto"
                    />
                </div>

                {/* Content */}
                <div className="max-w-xl">
                    <h2 className="text-4xl font-sfui md:text-5xl font-[200] text-[#D64D47] mb-6">
                        StethAid<sup className="text-lg -mt-6">TM</sup>
                    </h2>
                    <p className="text-lg mt-9 md:text-[24px] font-sfui font-[400] text-[#1A1A1A] w-[80%]  leading-relaxed">
                        StethAid™ brings intelligent heart murmur identification from specialist (pediatric cardiology) offices to primary care offices.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default StethTech;

