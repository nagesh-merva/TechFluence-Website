import ResultsHero from "@/sections/results/ResultsHero"
import Winners from "@/sections/results/Winners"
import Footer from "@/sections/Footer"
import RetroNavbar from "@/components/RetroNavbar"

export default function ResultsPage() {

    return (
        <div className="w-full h-full ">
            <ResultsHero />
            <Winners />
            <Footer />
        </div>
    )
}