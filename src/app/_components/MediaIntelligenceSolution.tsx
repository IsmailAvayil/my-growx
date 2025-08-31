import React from "react";
const stats = [
  {
    id: 1,
    value: "#1",
    description: "top leader in SaaS industry",
  },
  {
    id: 2,
    value: "12",
    description: "years of experience in the business",
  },
  {
    id: 3,
    value: "14",
    description: "top leader in worldwide SaaS industry",
  },
  {
    id: 4,
    value: "4.9/5",
    description: "average rating review score",
  },
];

const MediaIntelligenceSolution = () => {
  return (
    <div className="border border-[#FFB096] border-solid rounded-[30px] p-12 flex mt-[140px] mb-[120px] justify-between">
      <div className="flex-1">
        <h1 className="mb-12">An award-winning media intelligence solution</h1>
        <p>
          Confirmed as a high-performing product by <br /> customers and tech
          experts in various industries.
        </p>
      </div>
      <div className="flex-1 grid grid-cols-2">
        {stats.map((stat) => (
          <div key={stat.id} className="stat-container">
            <h1 className="text-[#FF6F40]">{stat.value}</h1>
            <p className="stat-description">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaIntelligenceSolution;
