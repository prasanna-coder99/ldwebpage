import React, { useState } from 'react';

import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import About from './About';
import Services from './Components/Services';
import AboutSection from './Components/AboutSection';
import ServicesCard from './Components/ServicesCard'
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
    <div className="bg-black min-h-screen text-white overflow-x-hidden flex flex-col min-h-screen sm:min-h-[500px] md:min-h-[1000px] lg:min-h-[1500px] xl:min-h-[2000px] 2xl:min-h-[2500px]">
      <Navbar onNavClick={handleNavClick} activePage={activePage} />

    
      <main className="flex-grow">
      
      {activePage === "home" && (
        <>
          <HeroSection />
          <AboutSection onNavClick={handleNavClick} />
          <Services/>
          <OurWork />
          <SuperPowers />
          <Footer onNavClick={handleNavClick} />
          <AllRights />
        </>
      )}

      {activePage === "services" && <ServicesCard />}
      
      {activePage === "about" && <About />}
      {activePage === "contact" && <Contact />}
      </main>

     
     
    </div>

  );
}

export default App;