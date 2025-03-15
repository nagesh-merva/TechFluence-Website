import { useRef, useEffect, useState } from "react"
import { RetroGrid } from "@/components/magicui/retro-grid"
import { Confetti } from "@/components/magicui/confetti"
import WinnerAnnouncement from "@/components/events/WinnerAnnouncement"

export default function Winners() {
    const confettiRef = useRef();
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const [offlineEvents, setOfflineEvents] = useState([])
    const [gamingEvents, setGamingEvents] = useState([])
    const [onlineEvents, setOnlineEvents] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchEventsData = async () => {
            try {
                setLoading(true)
                const response = await fetch('https://techfluence-website.onrender.com/api/events', {
                    method: 'GET',

                })

                const data = await response.json()
                console.log(data)
                if (data && typeof data === 'object') {
                    if (Array.isArray(data)) {
                        const offline = data.filter(event => event.category === 'offline')
                        const gaming = data.filter(event => event.category === 'gaming')
                        const online = data.filter(event => event.category === 'online')

                        setOfflineEvents(offline)
                        setGamingEvents(gaming)
                        setOnlineEvents(online)
                    } else if (data.events && Array.isArray(data.events)) {
                        const events = data.events
                        const offline = events.filter(event => event.category === 'offline')
                        const gaming = events.filter(event => event.category === 'gaming')
                        const online = events.filter(event => event.category === 'online')

                        setOfflineEvents(offline)
                        setGamingEvents(gaming)
                        setOnlineEvents(online)
                    } else if (data.offline && data.gaming && data.online) {
                        setOfflineEvents(Array.isArray(data.offline) ? data.offline : [])
                        setGamingEvents(Array.isArray(data.gaming) ? data.gaming : [])
                        setOnlineEvents(Array.isArray(data.online) ? data.online : [])
                    } else {
                        console.warn("Unexpected API response structure:", data)
                        setOfflineEvents([])
                        setGamingEvents([])
                        setOnlineEvents([])
                    }
                } else {
                    console.warn("Invalid API response:", data)
                    setOfflineEvents([])
                    setGamingEvents([])
                    setOnlineEvents([])
                }

                setLoading(false)
            } catch (err) {
                console.error("Error fetching events data:", err)
                setError(err.message)
                setOfflineEvents([])
                setGamingEvents([])
                setOnlineEvents([])
                setLoading(false)
            }
        }

        fetchEventsData()
    }, [])

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
        }
    }, [isAutoPlaying])

    const NoWinnersYet = () => (
        <div className="col-span-1 sm:col-span-2 md:col-span-3 flex justify-center items-center p-12">
            <div className="border border-gray-500/30 backdrop-blur-md bg-black/30 rounded-xl p-8 flex flex-col items-center gap-4 w-full max-w-xl">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400">
                    COMING SOON
                </div>
                <div className="text-xl text-center text-gray-300 font-mono">
                    Winners yet to be announced
                </div>
                <div className="mt-2 w-full h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 rounded-full" />
            </div>
        </div>
    )

    if (loading) {
        return (
            <div className="w-full min-h-svh flex justify-center items-center bg-black">
                <div className="text-white font-mono text-xl">Loading winners data...</div>
            </div>
        )
    }

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
                    {offlineEvents.length > 0 ?
                        offlineEvents.map((eventData, index) => (
                            <WinnerAnnouncement key={`offline-${eventData.name}-${index}`} eventData={eventData} />
                        )) :
                        <NoWinnersYet />
                    }
                </div>
            </div>
            <div className="relative flex flex-col w-full min-h-svh">
                <div className="sticky top-0 z-30 w-full h-fit py-12 flex justify-center items-center">
                    <h1 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-br from-white via-gray-400/85 to-gray-300/80 bg-clip-text text-center text-6xl md:text-8xl font-semibold leading-none text-transparent">
                        Gaming Events
                    </h1>
                </div>
                <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 z-20 pt-24 pb-32">
                    {gamingEvents.length > 0 ?
                        gamingEvents.map((eventData, index) => (
                            <WinnerAnnouncement key={`gaming-${eventData.name}-${index}`} eventData={eventData} />
                        )) :
                        <NoWinnersYet />
                    }
                </div>
            </div>
            <div className="relative flex flex-col w-full min-h-svh">
                <div className="sticky top-0 z-30 w-full py-12 flex justify-center items-center ">
                    <h1 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-br from-white via-gray-400/85 to-gray-300/80 bg-clip-text text-center text-6xl md:text-8xl font-semibold leading-none text-transparent">
                        Online Events
                    </h1>
                </div>
                <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 z-20 pt-24 pb-32">
                    {onlineEvents.length > 0 ?
                        onlineEvents.map((eventData, index) => (
                            <WinnerAnnouncement key={`online-${eventData.name}-${index}`} eventData={eventData} />
                        )) :
                        <NoWinnersYet />
                    }
                </div>
            </div>
        </div>
    )
}