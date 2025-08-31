import Image from "next/image";
import React from "react";
import PriceCardButton from "./PriceCardButton";

const PricingCard = ({ plan }: any) => {
  return (
    <div
      className={`border-b border-l border-r border-solid border-[#FFFFFF] rounded-[25px] shadow-[0px_2px_10px_0px_#0000001A] p-6 ${
        plan?.active ? "bg-[#FFEFEA]" : "bg-[#FFFFFF]"
      }`}
    >
      <div className="flex gap-[22px] w-fit">
        <div className="mb-6">
          <h2 className="plan-name">{plan.name}</h2>
          <div className="flex">
            {" "}
            <h1>{plan.price}</h1> <h1 className="!text-[18px]">/month</h1>
          </div>
        </div>
        <div className="p-8 rounded-[50%] border border-solid border-[#A9A9A9] w-fit h-fit">
          {" "}
          <img
            src={plan?.icon}
            alt={`${plan.name} Icon`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <p className="mb-[20px] mt-[34px]">{plan.description}</p>
      <ul className="list-disc p-6">
        {plan.features.map((feature: any, index: any) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <div className="flex justify-center">
        <PriceCardButton />
      </div>
    </div>
  );
};

export default PricingCard;
