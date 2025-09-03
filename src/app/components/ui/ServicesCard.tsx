/* eslint-disable */
import Image from "next/image";
import React from "react";

const ServicesCard = ({ service }: any) => {
  return (
    <div className="bg-[#FFEFEA] rounded-[30px]  items-center justify-center p-6 relative">
      <Image
        src={service.icon}
        alt={service?.name}
        width={50}
        height={50}
        className="mb-6"
      />
      <h3 className="text-[24px] font-[500] mb-2 leading-9">{service?.name}</h3>
      <p>{service?.description}</p>
      <button className="absolute bottom-0 left-1/2 translate-x-[-50%] translate-y-1/2  px-[13.13px] py-[14.06px] bg-[#FFFFFF] rounded-[50%] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]">
        <Image
          src="assets/icons/right-arrow.svg"
          alt="right-arrow"
          width={16.01}
          height={12.61}
          className=""
        />{" "}
      </button>
    </div>
  );
};

export default ServicesCard;
