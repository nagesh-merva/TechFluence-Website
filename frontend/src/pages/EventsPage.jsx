import React, { useEffect } from "react"
import EventsHeroSection from "../sections/Events/EventsHero"
import OfflineEvents from "../sections/Events/OfflineEvents"
import OnlineEvents from "@/sections/Events/OnlineEvents"
import GamingEvents from "@/sections/Events/GamingEvent"
import Footer from "@/sections/Footer"
import { useLocation } from "react-router-dom"


export default function EventsPage() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <div className="w-full h-full bg-black">
            <EventsHeroSection />
            <OfflineEvents />
            <OnlineEvents />
            <GamingEvents />
            <Footer />
        </div>
    )
}