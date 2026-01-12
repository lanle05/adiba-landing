import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
const Home = React.lazy(() => import("./pages/Home"));
const AboutPage = React.lazy(() => import("./pages/About"));
const Product = React.lazy(() => import ("./pages/Product"))

// Components
const Navbar = React.lazy(() => import("./components/Navbar"));
const Footer = React.lazy(() => import("./components/Footer"));
const NotFound = React.lazy(() => import("./components/NotFound"));

function App() {
  return (
    <Router>
      {/* <div className="font-sans text-navy-900 bg-white overflow-x-hidden"> */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product/:productId" element={<Product/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      {/* </div> */}
    </Router>
  );
}

export default App;
