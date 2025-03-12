import React from "react"
import EventsHeroSection from "../sections/Events/EventsHero"
import OfflineEvents from "../sections/Events/OfflineEvents"
import OnlineEvents from "@/sections/Events/OnlineEvents"
import GamingEvents from "@/sections/Events/GamingEvent"

export default function EventsPage() {

    return (
        <div className="w-full h-full bg-black">
            <EventsHeroSection />
            <OfflineEvents />
            <OnlineEvents />
            <GamingEvents />
        </div>
    )
}