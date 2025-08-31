import React from "react";
import Button from "../reusable-components/Button";
import FeatureCard from "../components/ui/FeatureCard";

const features = [
  {
    id: 1,
    title: "Detailed analytics",
    description1:
      "See the full picture of all your projects in one place and take action immediately.",

    description2:
      "Our extensive tool will help you maximize the profits and scale your business.",
  },
  {
    id: 2,
    title: "Leads sources",
    description1:
      "Discover where all your converted leads are from and take action into the right direction.",

    description2:
      "Grow your audience using the channel that drives most of traffic.",
  },
  {
    id: 3,
    title: "Projects overview",
    description1:
      "Track and manage and manage all projects very easy without back and forth.",
    description2:
      "Discover who is working on what and see your team members performance.",
  },
];

const OurFeature = () => {
  return (
    <div className="mt-[58px]">
      <p className="text-[#FE4A0F] text-[16px]">Our Feature</p>
      <h1>Optimizing Brands For Online Success</h1>
      <div className="flex mt-[58px] gap-[60px] ">
        {features.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </div>
  );
};

export default OurFeature;
