/* eslint-disable */
import Button from "@/app/reusable-components/Button";
import React from "react";

const FeatureCard = ({ feature }: any) => {
  return (
    <div className="bg-[#FFEFEA] p-6 rounded-[30px]  w-fit ">
      <h1 className="!text-[24px] !font-[500] mb-4">{feature.title}</h1>
      <p className="mb-6 !text-[16px] !text-[400]">{feature.description1}</p>
      <p className="!text-[16px] mb-12">{feature?.description2}</p>
      <Button text="GET STARTED" />
    </div>
  );
};

export default FeatureCard;
