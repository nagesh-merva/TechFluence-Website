import CRTOverlay from "../components/events/TvOverlay";
import { HyperText } from "@/components/magicui/hyper-text";
import ScrollingText from "@/components/main/ScrollingText";
import CountdownTimer from "@/components/main/CountdownTimer";
import RetroNavbar from "@/components/RetroNavbar";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [showNavbar, setShowNavbar] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 4)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-svh bg-black overflow-hidden">
      <CRTOverlay />
      <div className="absolute -left-28 -top-28 h-44 w-44 bg-black rotate-45"></div>
      <div className="absolute -right-28 -top-28 h-44 w-44 bg-black -rotate-45"></div>
      <div className="absolute -left-28 -bottom-32 h-44 w-44 bg-black rotate-45"></div>
      <div className="absolute -right-28 -bottom-32 h-44 w-44 bg-black -rotate-45"></div>
      {showNavbar && <RetroNavbar isOpen={showNavbar} onClose={() => setShowNavbar(false)} />}

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
          src="/events/BG12.png"
          alt="main-image"
          className="w-full h-svh object-cover"
        />
      </div>
      <div className="z-20 p-10 sm:p-10 md:p-16 lg:p-20 absolute inset-0 h-full w-full flex flex-col items-center md:items-start">
        <div className="mt-5 h-fit w-fit px-3 sm:px-4 py-1 sm:pt-2 bg-creamy/20 border border-creamy">
          <span className="text-xs sm:text-sm md:text-md text-creamy font-semibold font-space-mono tracking-wider text-center">
            DATE : 27 - 28 March 2025
          </span>
        </div>
        <div className="w-full md:w-auto self-center md:self-start mt-8 sm:mt-10 md:mt-5 lg:mt-6">
          <h1 className="text-7xl sm:text-8xl uppercase md:text-9xl text-creamy font-normal font-big-noodle tracking-tight text-center md:text-left">
            <HyperText className="inherit">TECHFLUENCE </HyperText>
            <br />
            <span className="md:hidden"> </span>
            <span className="md:block text-5xl sm:text-6xl md:text-7xl">
              <HyperText className="inherit">2025</HyperText>
            </span>
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-auto gap-6">
          <div className="mt-4 sm:mt-6 md:mt-10 lg:mt-16 max-w-full md:max-w-[60%]">
            <div className="flex space-x-1">
              <div
                className={`h-4 sm:h-5 w-1 sm:w-2 border ${activeIndex === 0 ? "bg-creamy" : "bg-transparent"
                  } border-creamy transition-colors duration-300`}
              />
              <div
                className={`h-4 sm:h-5 w-1 sm:w-2 border ${activeIndex === 1 ? "bg-creamy" : "bg-transparent"
                  } border-creamy transition-colors duration-300`}
              />
              <div
                className={`h-4 sm:h-5 w-1 sm:w-2 border ${activeIndex === 2 ? "bg-creamy" : "bg-transparent"
                  } border-creamy transition-colors duration-300`}
              />
              <div
                className={`h-4 sm:h-5 w-4 sm:w-8 border ${activeIndex === 3 ? "bg-creamy" : "bg-transparent"
                  } border-creamy transition-colors duration-300`}
              />
            </div>
            <p className="pt-2 text-sm sm:text-base md:text-lg text-creamy font-semibold font-sans tracking-wider text-left leading-5 sm:leading-6">
              Welcome to Techfluence, a world where the line between reality and
              digital warfare blurs. This is not just an event its an
              adventure, a challenge, a test of skill and survival. From the
              moment you step into this realm, you are no longer just an
              observer. You are a navigator, thrown into an unpredictable world
              teeming with challenges, enemies lurking in the shadows, and
              obstacles designed to push you beyond your limits.
            </p>
          </div>
          <div className="relative h-fit w-full md:w-fit p-3 sm:p-4 md:p-5  md:place-self-end">
            <CountdownTimer />
          </div>
        </div>
      </div>
      <div className="bg-creamy bottom-0 absolute w-full flex items-center md:h-13 sm:h-7 mt-10">
        <ScrollingText />
      </div>
    </div>
  );
}
