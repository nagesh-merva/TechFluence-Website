import { HyperText } from "@/components/magicui/hyper-text"
import RetroNavbar from "@/components/RetroNavbar"
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
            {showNavbar && <RetroNavbar onClose={() => setShowNavbar(false)} />}

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
                </div>
            </div>
        </div>
    )
}
