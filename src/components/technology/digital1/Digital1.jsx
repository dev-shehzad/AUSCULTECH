import React from 'react';

const Digital1 = () => {
  return (
    <div className="relative py-12 bg-[#e0f3fb]">
      {/* Background Image with Original Size */}
      <div
        className="absolute bg-fixed inset-0 bg-[url('/technology/bg.png')] bg-center bg-no-repeat bg-auto opacity-20"
        aria-hidden="true"
      ></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-[40px] font-sfui font-light text-[#D64D47] mb-8">
            Digital Auscultation Platform
          </h2>
          <p className="text-lg md:text-[24px] font-sfui text-[#1A1A1A] leading-relaxed max-w-4xl mx-auto">
            Our digital auscultation platform enables easy recording and cloud-based storage 
            and sharing of heart sounds using a mobile app.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Digital1;
