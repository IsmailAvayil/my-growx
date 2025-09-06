/* eslint-disable */
import React from "react";

const SpotlightFeatures = ({ feature }: any) => {
  return (
    <div
      className={`absolute z-4 ${
        feature?.id === 1
          ? "top-[96.06px] right-[0px]"
          : feature?.id === 2
          ? "top-[186.06px] right-[0px]"
          : feature?.id === 3
          ? "top-[276.06px] right-[0px]"
          : "bottom-[81.36px] right-[0px]"
      } `}
    >
      <div className="flex items-center gap-6 backdrop-blur-[10px] shadow-[0px_4px_10px_0px_#00000033] bg-[linear-gradient(180deg,_rgba(255,255,255,0.25)_0%,_rgba(255,255,255,0.25)_100%)]  px-3 py-2 rounded-lg w-fit">
        <img
          src={feature.icon}
          alt={feature.title}
          width={
            feature?.id === 1
              ? 26.84
              : feature?.id === 2
              ? 20.43
              : feature?.id === 3
              ? 30
              : 80
          }
          height={
            feature?.id === 1
              ? 26.84
              : feature?.id === 2
              ? 26
              : feature?.id === 3
              ? 24
              : 80
          }
        />

        {feature?.id == 4 ? (
          <div className="flex flex-col">
            <h3 className="text-[24px] font-[500]">6000+</h3>
            <p className="text-sm font-medium">{feature.title}</p>
          </div>
        ) : (
          <p className="text-[16px] font-[400]">{feature.title}</p>
        )}
      </div>
    </div>
  );
};

export default SpotlightFeatures;
