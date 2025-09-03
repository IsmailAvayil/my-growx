import React from "react";
import SliderWithRange from "../components/ui/SliderWithRange";
import GrowthStrategies from "../components/ui/GrowthStrategies";
import GraphGowth from "../components/ui/GraphGowth";

const OurProjects = () => {
  return (
    <div className="mb-[140px]">
      <p className="text-[#FE4A0F] text-[16px] mb-4">Our Projects</p>
      <div className="flex gap-[38px]">
        <div className="flex-1">
          {" "}
          <h1>Drive More Traffic Get More Sales</h1>
          <p className="mb-[106.81px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet rcus nunc. Duis egestas ac ante sed tincidunt.
          </p>
          <div className="flex flex-col gap-[85.5px]">
            <SliderWithRange
              leftLabel="Real Authority Method"
              rightLabel="12 Month"
            />
            <SliderWithRange leftLabel="Basic Plan" rightLabel="$ 19.99" />
          </div>
        </div>

        <div className="flex-1  relative">
          <GrowthStrategies />
          <GraphGowth />
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default OurProjects;
