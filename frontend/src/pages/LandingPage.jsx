import PrizePool from "../sections/PrizePool";
import Aboutus from "../sections/Aboutus";
import HeroSection from "../sections/HeroSection";
import Sponsors from "../sections/Sponsors";
import Footer from "../sections/Footer";
import { useLocation } from "react-router-dom";

import { useEffect } from "react";
import ScrollVideoSection from "@/sections/Events/ScrollVideoSection";

export default function LandingPage() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="h-full w-full bg-black  ">
      <HeroSection />
      <Aboutus />
      <ScrollVideoSection />
      <PrizePool />
      <Sponsors />
      <Footer />
    </div>
  );
}
