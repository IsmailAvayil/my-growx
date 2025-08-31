import React from "react";

const SpotlightFeatures = ({ feature }: any) => {
  return (
    <div className="flex items-center gap-2 bg-white shadow-md px-3 py-2 rounded-lg w-fit absolute">
      {/* <img src={feature.icon} alt={feature.title} width={24} height={24} /> */}
      <p className="text-sm font-medium">{feature.title}</p>
    </div>
  );
};

export default SpotlightFeatures;
