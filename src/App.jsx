import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Testimonials from "./Testimonials";
import CallToAction from "./Call";
import Footer from "./Footer";
import "./index.css";


function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
