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
        <div key={index} className="flex items-start">
          <div className="flex flex-col items-center space-y-2">
            {card.stats.map((stat, i) => (
              <div className="flex items-center gap-[8.98px]" key={i}>
                <div className="relative  bg-[#FFC1AD] rounded-full p-[11.37px]">
                  <div className="bg-[#FE4A0F] rounded-full  px-[6.39px] pt-[16.55px] pb-[15.91px]">
                    <Image
                      src="assets/images/strategy-value-1.svg"
                      alt="right-arrow"
                      width={25.01}
                      height={7.36}
                      className=""
                    />
                  </div>
                </div>
                <div className="">▲</div>
              </div>
            ))}
          </div>

          {/* Main card */}
          <div className="flex flex-col">
            <div className="ml-4">
              <Image
                src="assets/images/growth-strategy.svg"
                alt="strategies"
                width={283.83}
                height={153.68}
              />
              {/* Top section with progress and bars */}
              {/* <div className="flex justify-between items-center bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-md px-4 py-3">
              <div className="text-4xl font-bold">{card.progress}</div>
              <div className="flex items-end space-x-1 h-16">
                {card.barHeights.map((height, j) => (
                  <div
                    key={j}
                    className="w-2 bg-white rounded"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div> */}
            </div>
          </div>

          {/* Content */}
        </div>
        // </div>
      ))}
    </div>
  );
};

export default GrowthStrategies;
