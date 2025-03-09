import PrizePool from "../sections/PrizePool"
import Aboutus from "../sections/Aboutus"
import HeroSection from "../sections/HeroSection"
import Sponsors from "../sections/Sponsors"
import Footer from "../sections/Footer"

export default function LandingPage() {
    return (
        <div className="h-full w-full bg-black space-y-10 sm:space-y-16 md:space-y-24"
            style={{
                backgroundImage: `
                radial-gradient(circle at 1px 1px, #00FF00 1px, transparent 0)
                `,
                backgroundSize: "20px 20px",
            }}>
            <HeroSection />
            <Aboutus />
            <PrizePool />
            <Sponsors />
            <Footer />
        </div>
    )
}
