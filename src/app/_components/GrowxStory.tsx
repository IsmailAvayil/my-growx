import React from "react";
import Button from "../reusable-components/Button";
import Image from "next/image";

const GrowxStory = () => {
  return (
    <div className="mt-[140px]">
      <h1>GrowX Story</h1>
      <h3 className="mt-4">
        Crafting Narratives, Igniting Impact: The Art of Amplifying Your Story
        with Purposeful Creativity
      </h3>
      <div className="mt-[40px] flex gap-[23px]">
        <div className="w-1/2">
          <p className="mb-[58px]">
            GrowX Company, a dynamic force in the marketing landscape, was born
            from the vision of industry pioneers dedicated to redefining brand
            narratives. Established in 2010, GrowX swiftly evolved into a
            trailblazing marketing powerhouse, specializing in strategic
            amplification of brands across diverse platforms. With a
            client-centric approach, the company has cultivated lasting
            partnerships by seamlessly blending creativity with data-driven
            insights.
          </p>
          <Button text="WATCH MORE" />
        </div>{" "}
        <div className="w-1/2 relative">
          {" "}
          <Image
            src="assets/images/story-vedio.svg"
            alt="story-vedio"
            width={50}
            height={50}
            className="w-full"
          />
          <Image
            src="assets/images/play-button-circle.svg"
            alt="story-vedio"
            width={114.68}
            height={114.68}
            className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] backdrop-blur-[15px] shadow-[0px_0px_10px_0px_#0000001A] rounded-[50%] border-[#F0F0F0] border-2 bg-[linear-gradient(178.19deg,_rgba(255,255,255,0.1)_5.91%,_rgba(255,255,255,0.1)_106.46%)]"
          />
          <Image
            src="assets/images/play-button-polygon.svg"
            alt="story-vedio"
            width={39.68}
            height={39.68}
            className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] "
          />
        </div>
      </div>
    </div>
  );
};

export default GrowxStory;
