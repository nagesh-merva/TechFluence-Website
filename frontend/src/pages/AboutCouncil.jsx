import React from "react";
import CouncilHero from "@/sections/AboutCouncil/CouncilHero";
import CouncilMembers from "@/sections/AboutCouncil/CouncilMembers";
import WebsiteTeam from "@/sections/AboutCouncil/WebsiteTeam";
import Footer from "@/sections/Footer";

const AboutCouncil = () => {
  return (
    <div>
      <CouncilHero />
      <CouncilMembers />
      <WebsiteTeam />
      <Footer />
    </div>
  );
};

export default AboutCouncil;
