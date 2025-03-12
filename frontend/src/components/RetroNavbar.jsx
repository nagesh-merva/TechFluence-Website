import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const RetroNavbar = ({ isOpen, onClose }) => {
    const [activeLink, setActiveLink] = useState('home')
    const navigate = useNavigate()

    const navLinks = [
        { id: '/', label: 'HOME' },
        { id: '/events', label: 'EVENTS' },
        { id: '/gallery', label: 'GALLERY' },
        { id: '/about', label: 'ABOUT' },
        { id: '/contact', label: 'CONTACT' }
    ]

    const creamyColor = "rgba(255, 253, 240, 0.8)"
    const tealColor = "rgb(94, 234, 212)"

    return (
        <div
            className={`fixed inset-0 flex items-center justify-center z-50 bg-black/70 backdrop-blur-sm transition-opacity duration-300 
                ${isOpen ? 'opacity-0' : 'opacity-100 '}`}
        >
            <div className="relative overflow-hidden">
                <div
                    className="relative border backdrop-blur-md p-6"
                    style={{
                        backgroundColor: "rgba(255, 253, 240, 0.2)",
                        borderColor: creamyColor,
                        clipPath: "polygon(0% 10%, 3% 0%, 97% 0%, 100% 10%, 100% 90%, 97% 100%, 3% 100%, 0% 90%)"
                    }}
                >
                    <div className="relative px-8 py-6 border-b" style={{ borderColor: `${creamyColor}40` }}>
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl md:text-3xl tracking-wider" style={{
                                fontFamily: "'Space Mono', monospace",
                                color: tealColor
                            }}>NAVIGATION</h2>
                            <button
                                onClick={onClose}
                                className="w-10 h-10 flex items-center justify-center rounded-md border transition-colors"
                                style={{
                                    backgroundColor: `${creamyColor}10`,
                                    borderColor: `${creamyColor}40`,
                                    color: tealColor
                                }}
                            >
                                <span className="sr-only">Close</span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <nav className="px-4 py-6">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {navLinks.map((link) => (
                                <li key={link.id} className="w-full">
                                    <button
                                        onClick={() => navigate(link.id)}
                                        className="w-full px-6 py-4 text-lg tracking-wider text-left transition-all duration-300 border"
                                        style={{
                                            fontFamily: "'Space Mono', monospace",
                                            backgroundColor: activeLink === link.id ? `${creamyColor}30` : `${creamyColor}05`,
                                            borderColor: activeLink === link.id ? creamyColor : `${creamyColor}30`,
                                            color: activeLink === link.id ? tealColor : `rgba(94, 234, 212, 0.7)`,
                                            clipPath: "polygon(0% 15%, 2% 0%, 98% 0%, 100% 15%, 100% 85%, 98% 100%, 2% 100%, 0% 85%)"
                                        }}
                                    >
                                        <div className="flex items-center">
                                            <span className="text-sm mr-2" style={{ opacity: 0.6 }}>[{link.id.substring(0, 1).toUpperCase()}]</span>
                                            {link.label}
                                        </div>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="px-8 py-4 border-t" style={{
                        borderColor: `${creamyColor}40`,
                        backgroundColor: `${creamyColor}10`
                    }}>
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-sm" style={{
                                fontFamily: "'Space Mono', monospace",
                                color: `rgba(94, 234, 212, 0.7)`
                            }}>
                                <span style={{ color: tealColor }}>[INFO]</span> SELECT DESTINATION TO PROCEED
                            </p>
                            <div className="flex items-center gap-4">
                                {['Discord', 'Twitter', 'Instagram'].map((social) => (
                                    <button
                                        key={social}
                                        className="px-3 py-1 text-xs tracking-wider transition-colors"
                                        style={{
                                            fontFamily: "'Space Mono', monospace",
                                            backgroundColor: `${creamyColor}10`,
                                            borderColor: `${creamyColor}40`,
                                            color: tealColor,
                                            border: '1px solid',
                                            clipPath: "polygon(0% 20%, 5% 0%, 95% 0%, 100% 20%, 100% 80%, 95% 100%, 5% 100%, 0% 80%)"
                                        }}
                                    >
                                        {social}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-1" style={{ background: `linear-gradient(to right, transparent, ${tealColor}80, transparent)` }}></div>
                <div className="absolute bottom-0 left-0 w-full h-1" style={{ background: `linear-gradient(to right, transparent, ${tealColor}80, transparent)` }}></div>
            </div>
        </div>

    )
}

export default RetroNavbar
