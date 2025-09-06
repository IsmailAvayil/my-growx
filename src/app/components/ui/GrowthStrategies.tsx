import Image from "next/image";
import React from "react";
interface GrowthCardData {
  progress: string; // e.g. "80%"
  title: string; // e.g. "Growth Strategies"
  description: string; // description text
  barHeights: number[]; // heights for each bar in the chart
  stats: string[]; // the "+0.83%", "+1.5%", "+0.12%" values
}

const growthCardsData: GrowthCardData[] = [
  {
    progress: "80%",
    title: "GROWTH STRATEGIES",
    description:
      "Business process starts from an owner inverts cash on property in a business. Income is higher than outcome called 'Profit', Outcome is higher than income called 'Losing'",
    barHeights: [20, 30, 40, 50, 60, 70], // simulate bar chart
    stats: ["+0.83%", "+1.5%", "+0.12%"], // circle stats
  },
];

const GrowthStrategies = () => {
  return (
    <div className="flex ">
      {growthCardsData.map((card, index) => (
        <div key={index} className="flex items-start ">
          <div className="flex flex-col items-center gap-1">
            {card.stats.map((stat, i) => (
              <div className="flex items-center gap-[8.98px]" key={i}>
                <div className="relative  bg-[#FFC1AD] rounded-full  w-[51.19px] h-[51.19px] flex items-center justify-center">
                  {/* <div className="bg-[#FE4A0F] rounded-full  px-[5.32px] pt-[16.55px] pb-[15.91px]"> */}
                  <div className="bg-[#FE4A0F] rounded-full  w-[39.82px] h-[39.82px] flex items-center justify-center">
                    <Image
                      src="assets/images/strategy-value-1.svg"
                      alt="right-arrow"
                      width={28.25}
                      height={7.36}
                      className="w-[28.25px] h-[7.36px]"
                    />
                  </div>
                </div>
                <div className="">▲</div>
              </div>
            ))}
          </div>

          {/* Main card */}
          <div className="flex flex-col border border-solid border-[#F0F0F0] rounded-[5px] shadow-[0px_4px_10px_0px_#0000001A] ml-[8.98px]">
            <div className="">
              <Image
                src="assets/images/growth-strategy.svg"
                alt="strategies"
                width={281.83}
                height={153.68}
                className="w-[281.83px] h-[153.68px]"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GrowthStrategies;
