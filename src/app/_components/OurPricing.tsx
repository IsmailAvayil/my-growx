import React from "react";
import PricingCard from "../components/ui/PricingCard";
const plans = [
  {
    id: 1,
    name: "Starter Plan",
    price: "$29",
    description: "Lorem Ipsum is simply dummy.,",
    features: [
      "Mistakes To Avoid",
      "Your Startup",
      "Knew About Fonts",
      "Winning Metric Startup",
    ],
    icon: "assets/icons/starter-plan.svg",
    active: false,
  },
  {
    id: 2,
    name: "Platinum Plan",
    price: "$39",
    description: "Lorem Ipsum is simply dummy.",
    features: [
      "Mistakes To Avoid",
      "Your Startup",
      "Knew About Fonts",
      "Winning Metric Startup",
    ],
    icon: "assets/icons/platinum-plan.svg",
    active: true,
  },
  {
    id: 3,
    name: "Gold Plan",
    price: "$59",
    description: "Lorem Ipsum is simply dummy.",
    features: [
      "Mistakes To Avoid",
      "Your Startup",
      "Knew About Fonts",
      "Winning Metric Startup",
    ],
    icon: "assets/icons/gold-plan.svg",
    active: false,
  },
];
const OurPricing = () => {
  return (
    <>
      <h3 className="text-[#FF6F40]">Our Pricing</h3>
      <h1 className="mb-[58px]">Harness The Power Of Digital Marketing</h1>
      <div className="grid grid-cols-3 gap-x-[30px]">
        {plans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>
    </>
  );
};

export default OurPricing;
