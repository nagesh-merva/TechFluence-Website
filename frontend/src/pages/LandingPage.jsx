import PrizePool from "../sections/PrizePool"
import Aboutus from "../sections/Aboutus"
import HeroSection from "../sections/HeroSection"
import Sponsors from "../sections/Sponsors"
import Footer from "../sections/Footer"
import ScrollToTop from "@/components/ScrollToTop"
import { useEffect } from "react"

export default function LandingPage() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <div className="h-full w-full bg-black space-y-10 sm:space-y-16 md:space-y-24"
            style={{
                backgroundImage: `
                radial-gradient(circle at 1px 1px, #00FF00 1px, transparent 0)
                `,
                backgroundSize: "20px 20px",
            }}>
            <ScrollToTop />
            <HeroSection />
            <Aboutus />
            <PrizePool />
            <Sponsors />
            <Footer />
        </div>
    )
}
