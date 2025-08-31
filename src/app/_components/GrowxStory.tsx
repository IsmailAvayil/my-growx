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
        <div>
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
        <Image
          src="assets/images/story-vedio.svg"
          alt="story-vedio"
          width={50}
          height={50}
          className="w-1/2"
        />
      </div>
    </div>
  );
};

export default GrowxStory;
