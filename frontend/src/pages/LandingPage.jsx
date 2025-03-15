import PrizePool from "../sections/PrizePool"
import Aboutus from "../sections/Aboutus"
import HeroSection from "../sections/HeroSection"
import Sponsors from "../sections/Sponsors"
import Footer from "../sections/Footer"
import CyberpunkLoader from "../sections/Events/CyberpunkLoader"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

export default function LandingPage() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 12000)

        return () => clearTimeout(timer)
    }, [])

    if (loading) {
        return <CyberpunkLoader />;
    }


    return (
        <div className="h-full w-full bg-black space-y-10 sm:space-y-16 md:space-y-24">
            <HeroSection />
            <Aboutus />
            <PrizePool />
            <Sponsors />
            <Footer />
        </div>
    );
}
