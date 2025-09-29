import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import About from './About';
import Services from './Components/Services';
import AboutSection from './Components/AboutSection';
import ServicesCard from './Components/ServicesCard';
import Contact from './Components/Contact';
import OurWork from './Components/OurWork';
import SuperPowers from './Components/SuperPowers';
import Footer from './Components/Footer';
import AllRights from './Components/AllRights';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState("home"); 

  const handleNavClick = (page) => {
    setActivePage(page);
  };

  return (
    <div className="bg-black text-white flex flex-col min-h-screen">

      
      <Navbar onNavClick={handleNavClick} activePage={activePage} />

      
      {activePage === "home" && (
        <>
          
          <div
            className="w-full flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20"
            style={{
              minHeight: "100vh",      
            }}
          >
            <div className="lg:-translate-y-16  [min-width:2500px]:-translate-y-20">
              <HeroSection />
            </div>
          </div>

         
          <AboutSection onNavClick={handleNavClick} />
         
          <Services />
          <OurWork />
          <SuperPowers />
          <Footer onNavClick={handleNavClick} />
          <AllRights />
        </>
      )}

      
      {activePage === "services" && <ServicesCard />}
      {activePage === "about" && <About />}
      {activePage === "contact" && <Contact />}
   
    </div>
  );
}

export default App;
