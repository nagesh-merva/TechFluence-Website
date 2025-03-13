import { HyperText } from "@/components/magicui/hyper-text"
import RetroNavbar from "@/components/RetroNavbar"
import { ChevronLeft } from "lucide-react"
import React, { useState, useEffect } from "react"

export default function ResultsHero() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [showNavbar, setShowNavbar] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % 4)
        }, 500)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="w-full h-svh bg-black z-50">
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

            <div className="relative w-full">
                <div
                    className={`p-5 mb-2 relative overflow-hidden h-svh w-full object-cover`}
                    style={{
                        clipPath: "polygon(0% 5%, 5% 0%, 95% 0%, 100% 5%, 100% 90%, 98% 95%, 80% 95%, 75% 100%, 25% 100%, 20% 95%, 2% 95%, 0% 90%)"
                    }}
                >
                    <img
                        src="/events/results_bg.webp"
                        alt="background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="z-20 p-10 sm:p-10 md:p-16 lg:p-20 absolute inset-0 h-full w-full flex flex-col">
                    <div className="mt-5 h-fit w-fit px-3 sm:px-4 py-1 sm:pt-2 bg-creamy/20 border border-creamy">
                        <span className="text-xs sm:text-sm md:text-md text-creamy font-semibold font-space-mono tracking-wider text-center">
                            DATE : 27 - 28 March 2025
                        </span>
                    </div>
                    <div className="w-full md:w-auto self-center md:self-start mt-4 sm:mt-10 md:mt-5 lg:mt-6">
                        <h1 className="text-7xl sm:text-8xl uppercase md:text-9xl text-creamy font-normal font-big-noodle tracking-tight text-center md:text-left">
                            <HyperText className="inherit">NEON NEXUS </HyperText>
                            <br className="hidden md:block" /><span className="md:hidden"> </span>
                            <span className="md:block text-5xl sm:text-6xl md:text-7xl">
                                <HyperText className="inherit">THE FINAL STAND </HyperText>
                            </span>
                        </h1>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between mt-auto gap-6">
                        <div className="mt-4 sm:mt-6 md:mt-10 lg:mt-16 max-w-full md:max-w-[60%]">
                            <div className="flex space-x-1">
                                <div
                                    className={`h-4 sm:h-5 w-1 sm:w-2 border ${activeIndex === 0 ? 'bg-creamy' : 'bg-transparent'} border-creamy transition-colors duration-300`}
                                />
                                <div
                                    className={`h-4 sm:h-5 w-1 sm:w-2 border ${activeIndex === 1 ? 'bg-creamy' : 'bg-transparent'} border-creamy transition-colors duration-300`}
                                />
                                <div
                                    className={`h-4 sm:h-5 w-1 sm:w-2 border ${activeIndex === 2 ? 'bg-creamy' : 'bg-transparent'} border-creamy transition-colors duration-300`}
                                />
                                <div
                                    className={`h-4 sm:h-5 w-4 sm:w-8 border ${activeIndex === 3 ? 'bg-creamy' : 'bg-transparent'} border-creamy transition-colors duration-300`}
                                />
                            </div>
                            <p className="pt-2 text-sm sm:text-base md:text-lg text-creamy font-semibold font-sans tracking-wider text-left leading-5 sm:leading-6">
                                The battle has raged, the challenges have been conquered, and now, only the strongest remain. Through fire and fury, they have emerged—the sole survivors of the ultimate arena. Blood, sweat, and strategy have defined their path, but now, they claim their rightful place among legends. The war is over. The victors rise.
                            </p>
                        </div>

                        <div className="relative h-fit w-full md:w-fit p-3 sm:p-4 md:p-5 text-creamy bg-creamy/20 border border-creamy flex flex-col md:place-self-end">
                            <ChevronLeft className="absolute -top-4 -left-4 text-xl text-creamy rotate-45" />
                            <ChevronLeft className="absolute -bottom-4 -left-4 text-xl text-creamy -rotate-45" />
                            <ChevronLeft className="absolute -top-4 -right-4 text-xl text-creamy rotate-135" />
                            <ChevronLeft className="absolute -bottom-4 -right-4 text-xl text-creamy -rotate-135" />
                            <HyperText className="text-xs sm:text-sm md:text-md font-semibold font-space-mono tracking-wider text-left">// NEON NEXUS: THE FINAL STAND</HyperText>
                            <HyperText className="text-xs sm:text-sm md:text-md font-semibold font-space-mono tracking-wider text-left">VICTORY_MODE = ACTIVATED;</HyperText>
                            <HyperText className="text-xs sm:text-sm md:text-md font-semibold font-space-mono tracking-wider text-left">IF SURVIVAL_REACHED (</HyperText>
                            <HyperText className="text-xs sm:text-sm md:text-md font-semibold font-space-mono tracking-wider text-left">CROWN_CHAMPIONS();</HyperText>
                            <HyperText className="text-xs sm:text-sm md:text-md font-semibold font-space-mono tracking-wider text-left">ELSE (</HyperText>
                            <HyperText className="text-xs sm:text-sm md:text-md font-semibold font-space-mono tracking-wider text-left">EXIT_SIMULATION();</HyperText>
                            <HyperText className="text-xs sm:text-sm md:text-md font-semibold font-space-mono tracking-wider text-left">{"}"}</HyperText>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
