import React from "react";
import Button from "../reusable-components/Button";
import SpotlightFeatures from "../components/ui/SpotlightFeatures";
import Image from "next/image";

const features = [
  {
    id: 1,
    title: "Asking our AI",
    icon: "/assets/icons/ai-chat.svg", // replace with your icon
  },
  {
    id: 2,
    title: "Document(s)",
    icon: "/assets/icons/document.svg",
  },
  {
    id: 3,
    title: "Send Email's",
    icon: "/assets/icons/email.svg",
  },
  {
    id: 4,
    title: "Satisfied clients",
    icon: "/assets/icons/client.svg",
  },
];

const Spotlight = () => {
  return (
    <div className="relative">
      <div className="flex  mt-[130.27px]">
        <div className="flex-1">
          <div className="flex justify-end">
            {" "}
            <Image
              src="assets/images/bg-star.svg"
              alt="star"
              width={58.71}
              height={56.11}
              className="text-end"
            />
          </div>

          <h1 className="text-[96px] !font-semibold mb-9">
            Unlock Your <br />
            <span className="text-[#FE4A0F]">
              Online <br />
              Marketing
            </span>
          </h1>
          <p className="mb-12">
            Empowering Success: Unleashing Strategic Excellence with Our <br />
            Results-Driven Digital Marketing Agency
          </p>
          <Button text="GET IN TOUCH" />
        </div>
        {/* <img src="assets/images/spotlight.svg" alt="spotlight" /> */}

        <div className="absolute bottom-40 right-128 h-[100px] w-[100px]">
          <img
            src="assets/images/scroll-down.svg"
            alt="spotlight"
            className="w-full h-full object-cover animate-[spin_5s_linear_infinite]"
          />
        </div>
        <div className="border border-solid border-[#FE4A0F] rounded-[923px] px-[25.61px] py-[25.94px] w-fit">
          <div className="border  border-dashed border-[#FE4A0F] py-[23.06px] px-[22.77px] rounded-[923px] w-fit">
            <div className="flex flex-col gap-4 ">
              {features.map((feature) => (
                <SpotlightFeatures key={feature.id} feature={feature} />
              ))}
            </div>

            <div className="border border-solid border-[#FE4A0F] w-[504.88px] h-[511.37px] rounded-[50%] relative overflow-hidden">
              <Image
                src="assets/images/bg-vector.svg"
                alt="spotlight"
                className=""
                width={518.79}
                height={407.81}
              />
              <img
                src="assets/images/banner-image.svg"
                alt="banner-image"
                className="absolute top-0 left-0 w-[504.88px] h-[511.37px] z-2 "
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          src="assets/images/spotlight-dash-line.svg"
          alt="spotlight"
          className="absolute bottom-[10px] left-0"
        />
      </div>
    </div>
  );
};

export default Spotlight;
