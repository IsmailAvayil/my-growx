/* eslint-disable */
import React from "react";
import PriceCardButton from "./PriceCardButton";

const PricingCard = ({ plan }: any) => {
  return (
    <div
      className={`flex py-[34px] px-[32px] border-b border-l border-r border-solid border-[#FFFFFF] hover:border-[#FE4A0F] hover:border-3 rounded-[25px] shadow-[0px_4px_10px_0px_#0000001A] cursor-pointer ${
        plan?.active ? "bg-[#FFEFEA]" : "bg-[#FFFFFF]"
      }`}
    >
      <div className="flex flex-col gap-[51px] w-full">
        <div className="flex flex-col gap-[34px]">
          <div className="flex justify-between">
            <div>
              {" "}
              <h2 className="mb-[33px] !font-medium text-[24px] leading-[36px] ">
                {plan.name}
              </h2>
              <div className="flex items-baseline space-x-1">
                <h1>{plan.price}</h1>
                <span className="text-[18px]">/months</span>
              </div>
            </div>
            <div className="p-8 rounded-[50%] border-[0.5px] border-[#A9A9A9] w-fit h-fit">
              {" "}
              <img
                src={plan?.icon}
                alt={`${plan.name} Icon`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <p className="mb-[20px]">{plan.description}</p>
            <ul className="list-disc pl-6">
              {plan.features.map((feature: any, index: any) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <PriceCardButton />
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
