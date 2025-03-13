import PrizePool from "../sections/PrizePool";
import Aboutus from "../sections/Aboutus";
import HeroSection from "../sections/HeroSection";
import Sponsors from "../sections/Sponsors";
import Footer from "../sections/Footer";
import { useLocation } from "react-router-dom";

import { useEffect } from "react";

export default function LandingPage() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
