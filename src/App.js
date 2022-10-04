import React from "react";

import IntroSection from "./components/intro/Intro";
import ContactSection from "./components/contact-section/ContactSection";
import DisclaimerSection from "./components/disclaimer/Disclaimer";
import FooterSection from "./components/footer/Footer";
import MapSection from './components/Map/Map' 


import "./App.css";

const location = {
  address:
    "Go My Code Morocco, 1 Angle Place Belair et Rue Abou Hadil Al Hallaf, Quartier, Casablanca 20250.",
  lat: 33.59205,
  lng: -7.62893,
};


function App() {
  return (
    <div className="App">
      <IntroSection />
      <ContactSection />
      <MapSection location={location} zoomLevel={20} />
      <DisclaimerSection />
      <FooterSection />
    </div>
  );
}

export default App;
