import DigitalMarketingServices from "./_components/DigitalMarketingServices";
import GrowxStory from "./_components/GrowxStory";
import Brands from "./_components/Brands";
import OurFeature from "./_components/OurFeature";
import MediaIntelligenceSolution from "./_components/MediaIntelligenceSolution";
import OurPricing from "./_components/OurPricing";
import RevenueBoost from "./_components/RevenueBoost";
import Spotlight from "./_components/Spotlight";

export default function Home() {
  return (
    <>
      <Spotlight />

      <DigitalMarketingServices />
      <GrowxStory />
      <Brands />
      <OurFeature />
      <MediaIntelligenceSolution />
      <OurPricing />
      <RevenueBoost />
    </>
  );
}
