import Navbar from "@/components/NavBar";
import CRTOverlay from "../components/events/TvOverlay";
import { ChevronLeft } from "lucide-react";
import { HyperText } from "@/components/magicui/hyper-text";
import ScrollingText from "@/components/main/ScrollingText";
import CountdownTimer from "@/components/main/CountdownTimer";

export default function HeroSection() {
  return (
    <div className="relative w-full h-svh bg-black overflow-hidden">
      <CRTOverlay />
      <div className="absolute -left-28 -top-28 h-44 w-44 bg-black rotate-45"></div>
      <div className="absolute -right-28 -top-28 h-44 w-44 bg-black -rotate-45"></div>
      <div className="absolute -left-28 -bottom-32 h-44 w-44 bg-black rotate-45"></div>
      <div className="absolute -right-28 -bottom-32 h-44 w-44 bg-black -rotate-45"></div>
      <div className="absolute top-3 left-1/2 -translate-x-1/2 transform w-fit border-4 border-black bg-black rounded-b-[20px]">
        <div className="w-8 h-8 bg-black absolute -left-4 -top-5 -z-20 rotate-45"></div>
        <div className="w-8 h-8 bg-black absolute -right-4 -top-5 -z-20 rotate-45"></div>
        <h1 className="px-5 py-1 text-creamy text-[10px] bg-amber-900 rounded-b-2xl font-semibold font-space-mono tracking-wider text-center">
          [Activate Your Brain]
        </h1>
      </div>
      <div className="m-5">
        <img
          src="/events/BG12.png"
          alt="main-image"
          className="w-full h-svh object-cover"
        />

        <div className="flex justify-center">
          <Navbar />
        </div>

        {/* Fixed title positioning for mobile and desktop */}
        <div className="absolute inset-x-0 top-1/3 flex flex-col items-center md:items-start md:pl-24">
          <h1 className="text-7xl sm:text-8xl md:text-9xl text-creamy font-normal font-big-noodle tracking-tight text-center md:text-left">
            <HyperText className="inherit">TECHFLUENCE</HyperText>
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            <span className="block text-center md:text-left">
              <HyperText className="inherit">2025</HyperText>
            </span>
          </h1>
        </div>

        <div className="absolute bottom-20 right-8">
          <CountdownTimer />
        </div>
      </div>
      <div className="bg-creamy bottom-0 absolute w-full flex items-center md:h-13 sm:h-7 mt-10">
        <ScrollingText />
      </div>
    </div>
  );
}
