import React from "react";

function AboutSection({ onNavClick }) {
  return (
    <section className="w-full [min-width:2500px]:w-[2500px] bg-black text-gray-400 font-sans py-20 px-8 lg:px-24 3xl:px-60">
       <div className="px-4 [min-width:2500px]:px-[500px] [min-width:2500px]:pt-20">
      <div className="flex flex-col lg:flex-row items-star">
       
        <div className="lg:w-1/3 mb-10 lg:mb-0 lg:pr-10 [min-width:2500px]:w-1/4">
          <h2 className="text-white text-xl sm:text-2xl italic font-light [min-width:2500px]:text-7xl">
          <span className="font-light">ABOUT</span> <span className="font-light">US</span>
         </h2>

        </div>  

       
        <div className="lg:w-2/3 [min-width:2500px]:w-3/5">
          <p className="mb-6 text-lg leading-relaxed lg:text-4xl [min-width:2500px]:text-3xl">
            Welcome to LD InterTech Innovation, your partner for cutting-edge technology and marketing solutions. We offer comprehensive services in hardware, software, cloud technologies, and digital marketing, specifically designed to guide businesses into the digital future.
          </p><br/>
          <p className="mb-8 text-lg leading-relaxed lg:text-4xl [min-width:2500px]:text-3xl">
            With our expertise and forward-thinking approach, we help you transform innovative ideas into reality and position your company successfully in the market.
          </p>
          <button  onClick={() => onNavClick("about")} className=" text-2xl [min-width:2500px]:text-2xl 
             px-8 py-6 border border-gray-400 [min-width:2500px]:px-12 [min-width:2500px]:py-8  text-white hover:text-white  hover:bg-[#a374ff] transition-colors duration-300 rounded-lg 3xl:text-3xl 3xl:px-12 3xl:py-8">
            About
          </button>
        </div>
      </div>
      </div>
    </section>
  );
}

export default AboutSection;