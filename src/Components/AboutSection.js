import React from "react";

function AboutSection({ onNavClick }) {
  return (
    <section className="bg-black text-gray-400 font-sans py-20 px-8 lg:px-24">
      <div className="flex flex-col lg:flex-row items-start max-w-7xl mx-auto">
       
        <div className="lg:w-1/3 mb-10 lg:mb-0 lg:pr-10">
          <h2 className="text-white text-5xl italic font-light ">
            <span className="font-light">ABOUT</span> <span className="font-light">US</span>
          </h2>
        </div>  

       
        <div className="lg:w-2/3">
          <p className="mb-6 text-lg leading-relaxed lg:text-4xl">
            Welcome to LD InterTech Innovation, your partner for cutting-edge technology and marketing solutions. We offer comprehensive services in hardware, software, cloud technologies, and digital marketing, specifically designed to guide businesses into the digital future.
          </p><br/>
          <p className="mb-8 text-lg leading-relaxed lg:text-4xl">
            With our expertise and forward-thinking approach, we help you transform innovative ideas into reality and position your company successfully in the market.
          </p>
          <button  onClick={() => onNavClick("about")} className=" text-2xl px-8 py-6 border border-gray-400 text-white hover:text-white  hover:bg-[#a374ff] transition-colors duration-300 rounded-lg">
            About
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;