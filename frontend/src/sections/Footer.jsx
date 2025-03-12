import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Instagram, Linkedin, Calendar, ShoppingBag, Ticket } from 'lucide-react'
import { HyperText } from "@/components/magicui/hyper-text";
import { BorderBeam } from "@/components/magicui/border-beam"
import { Button } from "@/components/ui/button"

const Footer = () => {
    const [glitchActive, setGlitchActive] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        const glitchInterval = setInterval(() => {
            setGlitchActive(true)
            setTimeout(() => setGlitchActive(false), 200)
        }, 5000)

        return () => clearInterval(glitchInterval)
    }, [])

    return (
        <footer className="w-full sm:h-[320px] relative bg-black border-t border-creamy/30 overflow-hidden">
            {/* <div className="absolute inset-0 pointer-events-none opacity-10">
                {Array.from({ length: 50 }).map((_, i) => (
                    <div
                        key={i}
                        className="h-px w-full bg-creamy"
                        style={{ top: `${i * 2}%` }}
                    />
                ))}
            </div> */}
            <BorderBeam duration={8} size={100} />
            <div className="py-12 px-6 md:px-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="flex flex-col items-center md:items-start space-y-4">
                        <div className={`relative ${glitchActive ? 'animate-pulse' : ''}`}>
                            <img
                                src="/logo.png"
                                alt="Techfluence Logo"
                                className="h-16 w-auto relative z-10"
                            />
                            {glitchActive && (
                                <>
                                    <img
                                        src="/logo.png"
                                        alt=""
                                        className="absolute top-0 left-0 h-16 w-auto opacity-70 -translate-x-1 translate-y-1 text-cyan-500 z-0"
                                    />
                                    <img
                                        src="/logo.png"
                                        alt=""
                                        className="absolute top-0 left-0 h-16 w-auto opacity-70 translate-x-1 -translate-y-1 text-red-500 z-0"
                                    />
                                </>
                            )}
                        </div>
                        <div className="text-creamy/70 text-sm max-w-xs text-center md:text-left">
                            <p className='font-space-mono'>
                                Techfluence 2025 | A celebration of cultures and technology, a melting pot of ideas open to students of all disciplines.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center md:items-start space-y-6">
                        <HyperText className="text-creamy text-xl font-big-noodle tracking-wider">
                            NAVIGATE_SYSTEM
                        </HyperText>
                        <nav className="grid grid-cols-1 gap-3">
                            <a
                                href="/events"
                                className="flex items-center space-x-2 text-creamy/80 hover:text-creamy transition-colors duration-200"
                            >
                                <Ticket size={16} />
                                <span className="font-space-mono">EVENTS</span>
                            </a>
                            <a
                                href="/schedule"
                                className="flex items-center space-x-2 text-creamy/80 hover:text-creamy transition-colors duration-200"
                            >
                                <Calendar size={16} />
                                <span className="font-space-mono">SCHEDULE</span>
                            </a>
                            <a
                                href="/merchandise"
                                className="flex items-center space-x-2 text-creamy/80 hover:text-creamy transition-colors duration-200"
                            >
                                <ShoppingBag size={16} />
                                <span className="font-space-mono">MERCHANDISE</span>
                            </a>
                        </nav>
                    </div>
                    <div className="flex flex-col items-center md:items-start space-y-6">
                        <HyperText className="text-creamy text-xl font-big-noodle tracking-wider">
                            CONNECT_NETWORK
                        </HyperText>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.instagram.com/intensa_techfluence2025/"
                                className="flex items-center space-x-2 text-creamy/80 hover:text-creamy transition-colors duration-200"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/gecintensa/about/"
                                className="flex items-center space-x-2 text-creamy/80 hover:text-creamy transition-colors duration-200"
                            >
                                <Linkedin size={20} />
                            </a>
                        </div>
                        <Button variant="outline" className="border-creamy/50 bg-transparent text-creamy hover:bg-creamy/20 group relative overflow-hidden">
                            <button onClick={() => navigate('/events')}>
                                <span className="relative z-10 font-space-mono">Explore Events</span>
                                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>
                        </Button>
                    </div>
                </div>
                <div className="mt-12 pt-6 border-t border-creamy/20 flex flex-col md:flex-row justify-between items-center text-creamy/50 text-xs font-space-mono">
                    <div className="mb-4 md:mb-0">
                        <span className="inline-block">{"<"}</span>
                        <span className="inline-block ml-1 mr-1">© TECHFLUENCE_2025</span>
                        <span className="inline-block">{"/>"}</span>
                    </div>
                    <div className="flex space-x-6">
                        <a href="/privacy" className="hover:text-creamy transition-colors duration-200">PRIVACY_POLICY</a>
                        <a href="/terms" className="hover:text-creamy transition-colors duration-200">TERMS_OF_SERVICE</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
