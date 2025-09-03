import Button from "@/app/reusable-components/Button";
import React from "react";

const FeatureCard = ({ feature }: any) => {
  return (
    <div className="bg-[#F5E0E4] p-6 rounded-lg  w-fit">
      <h3>{feature.title}</h3>
      <p className="mb-6 !text-[16px]">{feature.description1}</p>
      <p className="!text-[16px] mb-12">{feature?.description2}</p>
      <Button text="GET STARTED" />
    </div>
  );
};

export default FeatureCard;
