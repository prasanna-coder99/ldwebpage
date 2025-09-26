import React from "react";

function HeroSection() {
  return (
     
    <section className="w-full [min-width:2500px]:w-[2500px] bg-black py-20 text-center mt-10">
      <div className="mx-auto px-4 [min-width:2500px]:px-[500px] [min-width:2500px]:pt-20">
        <h1 className=" text-4xl md:text-5xl lg:text-5xl xl:text-7xl [min-width:2500px]:text-8xl font-black uppercase tracking-normal font-medium leading-tight }"
        style={{
        background: "linear-gradient(85deg, #a374ff 7.18%, #9ecffa 47.19%, #ffc7fd 88.01%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        textFillColor: "transparent"
      }}>
         <span className="inline-flex items-center gap-3 [min-width:2500px]:gap-4">
           
          CRAFTING 
         <video autoPlay muted loop playsInline className="hidden lg:inline-block w-[180px] h-20 rounded-[30px]  [min-width:2500px]:w-[180px] [min-width:2500px]:h-20 rounded-[30px] [min-width:2500px]:rounded-[30px]   object-cover overflow-clip mx-2 inline-block">
         <source src="https://ldintertech.com/static/media/video.b73e523f4e9ac81ab5c6.mp4" type="video/mp4" /></video>

        THE
       </span>
      
        <span className="block my-0">DIGITAL FUTURE WITH</span>

          UNRIVALED CREATIVITY{" "}<br/>
          <span className="inline-flex items-center mx-2 [min-width:2500px]:mx-2">
            <img
              src="	https://ldintertech.com/static/media/3-img.4609625234e532732aee.png"
              alt="circle1"
              className="h-54 w-110 rounded-full mx-1 [min-width:2500px]:h-20 [min-width:2500px]:w-32 "
            />
           
          </span>{" "}
          AND PRECISION
        </h1>
        <p className="text-gray-300  text-[22px] [min-width:2500px]:text-3xl min-width:2500px]:mt-6">
          Innovative solutions for your digital transformation
        </p>
      </div>
      
    </section>
  );
}

export default HeroSection;