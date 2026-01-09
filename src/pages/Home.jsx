import React from "react";
import Hero from "../components/Home/Hero";
import Logos from "../components/Home/Logos";
import AboutUs from "../components/Home/AboutUs";
import TrustedSolutions from "../components/Home/TrustedSolutions";
import BankingTech from "../components/Home/BankingTech";
import Testimonials from "../components/Home/Testimonials";
import Benefits from "../components/Home/Benefits";

function Home() {
  return (
    <>
      <Hero />
      <Logos />
      <AboutUs />
      <TrustedSolutions />
      <BankingTech />
      <Testimonials />
      <Benefits />
    </>
  );
}

export default Home;
