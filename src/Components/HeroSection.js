import React from "react";

function HeroSection() {
  return (
    <section className="bg-black py-20 text-center mt-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className=" text-4xl md:text-5xl lg:text-5xl xl:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-300 to-pink-300 font-black uppercase tracking-normal font-bold leading-tight }">
         <span className="inline-flex items-center gap-3">
           
          CRAFTING 
         <video autoPlay muted loop playsInline className="hidden lg:inline-block w-[180px] h-20 rounded-[30px] object-cover overflow-clip mx-2">
         <source src="https://ldintertech.com/static/media/video.b73e523f4e9ac81ab5c6.mp4" type="video/mp4" /></video>

        THE
       </span>
      
        <span className="block">DIGITAL FUTURE WITH</span>

          UNRIVALED CREATIVITY{" "}<br/>
          <span className="inline-flex items-center mx-2">
            <img
              src="	https://ldintertech.com/static/media/3-img.4609625234e532732aee.png"
              alt="circle1"
              className="h-54 w-110 rounded-full mx-1"
            />
           
          </span>{" "}
          AND PRECISION
        </h1>
        <p className="text-gray-300  text-[22px]">
          Innovative solutions for your digital transformation
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
