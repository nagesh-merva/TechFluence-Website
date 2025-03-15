import React, { useState } from "react";
import CRTOverlay from "../../components/events/TvOverlay";
import { HyperText } from "@/components/magicui/hyper-text";
import RetroNavbar from "@/components/RetroNavbar";

const CouncilHero = () => {
  const [showNavbar, setShowNavbar] = useState(false)
  return (
    <div className="relative w-full h-svh bg-black overflow-hidden">
      {showNavbar && (
        <RetroNavbar isOpen={showNavbar} onClose={() => setShowNavbar(false)} />
      )}
      <CRTOverlay />
      <div className="absolute -left-28 -top-28 h-44 w-44 bg-black rotate-45"></div>
      <div className="absolute -right-28 -top-28 h-44 w-44 bg-black -rotate-45"></div>
      <div className="absolute -left-28 -bottom-32 h-44 w-44 bg-black rotate-45"></div>
      <div className="absolute -right-28 -bottom-32 h-44 w-44 bg-black -rotate-45"></div>
      <button
        onClick={() => setShowNavbar(!showNavbar)}
        className="absolute z-50 top-3 left-1/2 -translate-x-1/2 transform w-fit border-4 border-black bg-black rounded-b-[20px]"
      >
        <div className="w-8 h-8 bg-black absolute -left-4 -top-5 -z-20 rotate-45"></div>
        <div className="w-8 h-8 bg-black absolute -right-4 -top-5 -z-20 rotate-45"></div>
        <h1 className="px-5 py-1 text-creamy text-[10px] bg-amber-900 rounded-b-2xl font-semibold font-space-mono tracking-wider text-center">
          [ NAVIGATION ]
        </h1>
      </button>
      <div className="m-5">
        <img
          src="/events/EventsBG.png"
          alt="main-image"
          className="w-full h-svh object-cover"
        />

        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-center md:items-start md:pl-24">
          <HyperText className="text-5xl sm:text-6xl md:text-9xl text-creamy font-normal font-big-noodle tracking-tight text-center md:text-left mb-4">
            CYBER ARCHIVES
          </HyperText>
          <p className="text-lg sm:text-2xl md:text-lg max-w-[90%] sm:max-w-[70%] md:max-w-[50%] text-creamy font-normal tracking-tight text-center md:text-left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
            est aperiam soluta? Vel, ipsa et magni magnam harum ducimus minus
            saepe aut repellat minima at nam illum accusantium, aliquid
            perferendis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CouncilHero;
