import { useRef, useEffect, useState } from "react"
import { RetroGrid } from "@/components/magicui/retro-grid"
import { Confetti } from "@/components/magicui/confetti"
import WinnerAnnouncement from "@/components/events/WinnerAnnouncement"

export default function Winners() {
    const confettiRef = useRef();
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    const events = [
        {
            name: "NEON ODYSSEY",
            description: "NAVIGATE THROUGH DIGITAL LABYRINTHS IN THIS IMMERSIVE REALITY CHALLENGE.",
            image: "/events/winners.jpg",
            winners: [
                { id: "001", name: "ARIA NOVA", prize: "₹12,000" },
                { id: "002", name: "ZION FLUX", prize: "₹8,000" },
                { id: "003", name: "ECHO PRIME", prize: "₹4,000" }
            ],
        },
        {
            name: "CYBER PULSE",
            description: "MASTER THE CODE AND CONQUER THE VIRTUAL REALMS IN THIS ADVANCED TECH COMPETITION.",
            image: "/events/winners.jpg",
            winners: [
                { id: "101", name: "NOVA BYTE", prize: "₹15,000" },
                { id: "102", name: "PIXEL STORM", prize: "₹10,000" },
                { id: "103", name: "QUANTUM LINK", prize: "₹5,000" }
            ],
        },
        {
            name: "NEON ODYSSEY",
            description: "NAVIGATE THROUGH DIGITAL LABYRINTHS IN THIS IMMERSIVE REALITY CHALLENGE.",
            image: "/events/winners.jpg",
            winners: [
                { id: "001", name: "ARIA NOVA", prize: "₹12,000" },
                { id: "002", name: "ZION FLUX", prize: "₹8,000" },
                { id: "003", name: "ECHO PRIME", prize: "₹4,000" }
            ],
        },
        {
            name: "CYBER PULSE",
            description: "MASTER THE CODE AND CONQUER THE VIRTUAL REALMS IN THIS ADVANCED TECH COMPETITION.",
            image: "/events/winners.jpg",
            winners: [
                { id: "101", name: "NOVA BYTE", prize: "₹15,000" },
                { id: "102", name: "PIXEL STORM", prize: "₹10,000" },
                { id: "103", name: "QUANTUM LINK", prize: "₹5,000" }
            ],
        },
    ]

    const fireConfetti = () => {
        if (confettiRef.current) {
            const particleCount = Math.floor(Math.random() * 50) + 50
            const spread = Math.floor(Math.random() * 20) + 60
            const originY = Math.random() * 0.2 + 0.5
            const originX = Math.random() * 0.5 + 0.25

            confettiRef.current.fire({
                particleCount,
                spread,
                origin: { y: originY, x: originX }
            })
        }
    }

    useEffect(() => {
        let intervalId

        if (isAutoPlaying) {
            fireConfetti();
            intervalId = setInterval(() => {
                fireConfetti()
            }, Math.random() * 1000 + 2000)
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId)
            }
        };
    }, [isAutoPlaying])

    return (
        <div className="w-full min-h-svh relative overflow-x-hidden">
            <div className="fixed inset-0 pointer-events-none -z-10 bg-black">
                <RetroGrid className="h-svh w-full" />
                <Confetti
                    ref={confettiRef}
                    className="left-0 top-0 size-full"
                />
            </div>
            <div className="relative flex flex-col w-full min-h-svh">
                <div className="sticky top-0 z-30 w-full py-12 flex justify-center items-center backdrop-blur-md bg-gradient-to-b from-black to-transparent">
                    <h1 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-br from-white via-gray-400/85 to-gray-300/80 bg-clip-text text-center text-6xl md:text-8xl font-semibold leading-none text-transparent">
                        Offline Events
                    </h1>
                </div>
                <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 z-20 pt-24 pb-32">
                    {events.map((eventData, index) => (
                        <WinnerAnnouncement key={index} eventData={eventData} />
                    ))}
                </div>
            </div>
            <div className="relative flex flex-col w-full min-h-svh">
                <div className="sticky top-0 z-30 w-full h-fit py-12 flex justify-center items-center">
                    <h1 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-br from-white via-gray-400/85 to-gray-300/80 bg-clip-text text-center text-6xl md:text-8xl font-semibold leading-none text-transparent">
                        Gaming Events
                    </h1>
                </div>
                <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 z-20 pt-24 pb-32">
                    {events.map((eventData, index) => (
                        <WinnerAnnouncement key={index} eventData={eventData} />
                    ))}
                </div>
            </div>
            <div className="relative flex flex-col w-full min-h-svh">
                <div className="sticky top-0 z-30 w-full py-12 flex justify-center items-center ">
                    <h1 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-br from-white via-gray-400/85 to-gray-300/80 bg-clip-text text-center text-6xl md:text-8xl font-semibold leading-none text-transparent">
                        Online Events
                    </h1>
                </div>
                <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 z-20 pt-24 pb-32">
                    {events.map((eventData, index) => (
                        <WinnerAnnouncement key={index} eventData={eventData} />
                    ))}
                </div>
            </div>
        </div>
    )
}