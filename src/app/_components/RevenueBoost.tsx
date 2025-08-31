import React from "react";
import Button from "../reusable-components/Button";
import Image from "next/image";

const RevenueBoost = () => {
  return (
    <div className="flex mt-[120px] ">
      '
      <div className=" flex flex-col gap-6">
        <h1>Are you ready to take your company revenue next level?</h1>
        <div className="w-fit">
          <Button text="Contact Us" />
        </div>
      </div>
      <Image
        src="assets/images/revenue-banner-image.svg"
        alt="revenue-boost"
        width={301.82}
        height={305.26}
        className=""
      />
    </div>
  );
};

export default RevenueBoost;
