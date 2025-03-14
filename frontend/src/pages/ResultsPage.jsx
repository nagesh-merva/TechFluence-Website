import ResultsHero from "@/sections/results/ResultsHero";
import Winners from "@/sections/results/Winners";
import Footer from "@/sections/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ResultsPage() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="w-full h-full ">
      <ResultsHero />
      <Winners />
      <Footer />
    </div>
  );
}
