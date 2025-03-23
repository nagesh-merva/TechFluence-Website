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
            <div className="bg-gradient-to-br from-gray-200 to-gray-400 w-48 h-48 rounded-full flex flex-col items-center justify-center shadow-lg">
              <p className="text-sm font-medium text-gray-800 text-center">
                Best wishes from
              </p>
              <p className="text-lg font-bold text-gray-900 text-center">
                Sameer Mandrekar (G.D)
              </p>
            </div>
          </div>
          {/* Sponsor 3 */}
          <div className="flex justify-center">
            <img
              src="/sponsors/Veera.jpeg"
              alt="Veera logo"
              className="object-contain w-44 h-44"
            />
          </div>

          {/* Sponsor 4*/}
          <div className="flex justify-center">
            <img
              src="/sponsors/ITCG.png"
              alt="ITCG logo"
              className="object-contain w-44 h-44"
            />
          </div>

          {/* Sponsor 5 */}
          <div className="flex justify-center">
            <img
              src="/sponsors/creativecapsule.jpg"
              alt="Creative capsule logo"
              className="object-contain w-44 h-44"
            />
          </div>
          {/* Sponsor 6 */}
          <div className="flex justify-center">
            <img
              src="/sponsors/Ocean.png"
              alt="Ocean logo"
              className="object-contain w-44 h-44"
            />
          </div>

          {/* Sponsor 7 */}
          <div className="flex justify-center">
            <img
              src="/sponsors/SJ.png"
              alt="SJ Innovations logo"
              className="object-contain w-64 h-64"
            />
          </div>



        </div>

        {/* Special Thanks Section */}
        <div className="mt-20 text-center">
          <h2 className="text-5xl font-bold text-creamy">Special Thanks</h2>
          <div className="mt-10 ">
            <p className="text-creamy text-4xl sm:text-sm md:text-4xl font-medium">
              Mr. Ranjan Uttam Shirodkar, Taleigao
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
