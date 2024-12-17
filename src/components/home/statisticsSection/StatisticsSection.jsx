import React from "react";
import CountUp from "react-countup";

export default function StatisticsSection() {
  return (
    <section className="bg-[#f2f2f2] py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main Heading */}
        <h2 className="text-center text-[#1F2937] font-sfui text-2xl md:text-[27px] mb-16 max-w-7xl mx-auto leading-[40px]">
          In the United States, approximately half a million children with innocent Still's murmurs are referred to pediatric cardiologists per year.
        </h2>

        {/* Statistics Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-16">
          {/* Innocent Still's Murmurs */}
          <div className="text-center">
            <p className="text-[#D64D47] text-4xl md:text-5xl mb-2 font-mono">
              <span className="text-2xl md:text-[18px] font-sfui text-black font-[400]">Approximately</span>
              <br />
              <CountUp end={500000} duration={3} separator="," />
            </p>
            <p className="text-[#06A1F5] text-xl md:text-2xl">
              Innocent Still's Murmurs
            </p>
          </div>

          {/* Unnecessary Tests */}
          <div className="text-center">
            <p className="text-[#D64D47] text-4xl md:text-5xl mb-2 font-mono">
              <span className="text-2xl md:text-[18px] font-sfui text-black font-[400]">over</span>
              <br />
              <CountUp end={200000} duration={3} separator="," />
            </p>
            <p className="text-[#06A1F5] text-xl md:text-2xl">
              Unnecessary medical tests
            </p>
          </div>

          {/* Amount Spent */}
          <div className="text-center">
            <p className="text-[#D64D47] text-4xl md:text-5xl mb-2 font-mono">
              <span className="text-2xl md:text-[18px] font-sfui text-black font-[400]">over</span>
              <br />
              <CountUp end={600000} duration={3} separator="," />
            </p>
            <p className="text-[#06A1F5] text-xl md:text-2xl">
              Spent in a year
            </p>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="text-center text-gray-700 text-lg md:text-xl max-w-4xl mx-auto">
          These referrals and associated tests are medically unnecessary and avoidable. As a decision support system, StethAid™ helps reduce such referrals and avoid the anxiety, inconvenience, and cost associated with them.
        </p>
      </div>
    </section>
  );
}
