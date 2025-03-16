import React from "react";
import SponsorScroll from "../sections/SponsorScroll";

const Sponsors = () => {
  return (
    <div className="pb-16">
      <div className="w-full mb-12">
        <SponsorScroll />
      </div>

      <div className="container mx-auto py-20 px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 place-items-center">
          {/* Sponsor 1 */}
          <div className="flex justify-center">
            <img
              src="/sponsors/ACR.jpeg"
              alt="ADWALPALKAR CONTRUCTIONS & RESORTS PVT LTD logo"
              className="object-contain w-48 h-48"
            />
          </div>

          {/* Sponsor 2 */}
          <div className="flex justify-center">
            <img
              src="/sponsors/SJ.png"
              alt="SJ Innovations logo"
              className="object-contain w-64 h-64"
            />
          </div>

          {/* Sponsor 3 */}
          <div className="flex justify-center">
            <img
              src="/sponsors/ITCG.png"
              alt="ITCG logo"
              className="object-contain w-44 h-44"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
