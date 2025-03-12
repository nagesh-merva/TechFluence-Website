import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Menu, X } from "lucide-react"

const Navbar = () => {
    const navigate = useNavigate()
    const [menuOpen, setMenuOpen] = useState(false)

    const handleNavigation = (path) => {
        navigate(path)
        setMenuOpen(false)
    }

    const links = [
        {
            text: "Home",
            link: "/"
        },
        {
            text: "About us",
            link: "/aboutus"
        },
        {
            text: "Events",
            link: "/events"
        },
        {
            text: "Results",
            link: "/results"
        },
        {
            text: "Gallery",
            link: "/gallery"
        },
    ]

    return (
        <nav className="w-full  py-4 px-6 absolute top-2 left-0 right-0 z-50">
            <div className="flex justify-end md:justify-center items-center max-w-6xl mx-auto">
                <button
                    className="md:hidden text-black focus:outline-none pr-12 pt-1"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
                <div className="hidden md:flex space-x-8 place-self-center">
                    {links.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => handleNavigation(`${item.link}`)}
                            className="font-['Press_Start_2P'] text-lg tracking-wide hover:text-gray-600"
                        >
                            {item.text}
                        </button>
                    ))}
                </div>
            </div>
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-[#D69940] flex flex-col items-center py-4 space-y-6 md:hidden">
                    {links.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => handleNavigation(`${item.link}`)}
                            className="font-['Press_Start_2P'] text-lg tracking-wide"
                        >
                            {item.text}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    )
}

export default Navbar
