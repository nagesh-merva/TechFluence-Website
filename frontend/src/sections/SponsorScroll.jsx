import React from "react";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { AuroraText } from "@/components/magicui/aurora-text";

const SponsorScroll = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden  ">
      <VelocityScroll className="py-16 sm:py-20 md:py-16  border-y-2 border-gray-800 ">
        <AuroraText>#Our Sponsors</AuroraText>
      </VelocityScroll>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 "></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 "></div>
    </div>
  );
};

export default SponsorScroll;
