import React from "react"

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8 px-4 flex flex-col items-center">
            <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl">

                <div className="mb-6 md:mb-0">
                    <img src="/logo.png" alt="Techfluence Logo" className="h-24 sm:h-48" />
                </div>

                <div className="flex flex-col text-center md:text-left space-y-2">
                    <a href="" className="text-lg">Merchandise</a>
                    <a href="" className="text-lg">Events</a>
                    <a href="" className="text-lg">Schedule</a>
                </div>

                <div className=" flex flex-col text-center md:text-left space-y-2">
                    <a href="" className="text-lg">LinkedIn</a>
                    <a href="" className="text-lg">Instagram</a>
                </div>
            </div>

            <div className="w-full max-w-5xl mt-6 border-t border-[#E5A445] relative">
                <div className="absolute left-0 top-0 transform -translate-y-1/2 bg-[#E5A445] h-2 w-2 rounded-full"></div>
                <div className="absolute right-0 top-0 transform -translate-y-1/2 bg-[#E5A445] h-2 w-2 rounded-full"></div>
                <p className="text-center mt-4 text-gray-300 text-md sm:text-xl">
                    Techfluence © 2025 All Rights Reserved
                </p>
            </div>
        </footer>
    )
}

export default Footer
