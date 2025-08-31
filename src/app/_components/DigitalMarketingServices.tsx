import React from "react";
import Button from "../reusable-components/Button";
import ServicesCard from "../components/ui/ServicesCard";

const servicesCardDatas = [
  {
    id: 3,
    name: "SEO (Search Engine Optimization)",
    description:
      "We can help you achieve high rankings in the major search engines.",
    icon: "assets/icons/seo.svg",
  },
  {
    id: 1,
    name: "SMM (Social Media Marketing)",
    description:
      "We can help you achieve high rankings in the major search engines.",
    icon: "assets/icons/smm.svg",
  },
  {
    id: 2,
    name: "Website Design & Development",
    description:
      "We can help you achieve high rankings in the major search engines.",
    icon: "assets/icons/website-design.svg",
  },

  {
    id: 4,
    name: "Email Marketing & PPC Marketing",
    description:
      "We can help you achieve high rankings in the major search engines.",
    icon: "assets/icons/email-marketing.svg",
  },
];

const DigitalMarketingServices = () => {
  return (
    <div>
      <h1 className="text-[56px] font-[500] mb-4">
        Our Digital Marketing Services
      </h1>
      <p className="text-[18px] font-[400] mb-7">
        Unveiling Comprehensive Solutions Through Our Cutting-Edge Digital
        Marketing Services
      </p>
      <Button text="VIEW ALL SERVICES" />

      <div className="grid grid-cols-4 gap-6 mt-[58px] ">
        {servicesCardDatas?.map((service) => (
          <div
            key={service.id}
            // className="bg-[#FFEFEA] rounded-[30px] flex  items-center justify-center gap-6"
          >
            <ServicesCard service={service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DigitalMarketingServices;
