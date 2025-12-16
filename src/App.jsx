import { useState } from 'react'
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import TrustedSolutions from "./components/TrustedSolutions";
import BankingTech from "./components/BankingTech";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import './App.css'


function App() {

  return (
    <>
      <div className="font-sans text-navy-900 bg-white overflow-x-hidden">
      <Navbar />
        <Hero />
        <AboutUs />
        <TrustedSolutions />
        <BankingTech />
        <Testimonials />
        <Footer />
      </div>
    </>
  )
}

export default App
