import PrizePool from "../sections/PrizePool";
import Aboutus from "../sections/Aboutus";
import HeroSection from "../sections/HeroSection";
import Sponsors from "../sections/Sponsors";
import Footer from "../sections/Footer";
import ScrollVideoSection from "@/sections/Events/ScrollVideoSection";


export default function LandingPage() {

    return (
        <div className="h-full w-full bg-black space-y-10 sm:space-y-16 md:space-y-24">
            <HeroSection />
            <Aboutus />
            <ScrollVideoSection />
            <PrizePool />
            <Sponsors />
            <Footer />
        </div>
    );
}
