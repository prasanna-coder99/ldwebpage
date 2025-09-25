import React from "react";

const Services = () => {
  const services = [
    {title: "UX/UI Design",img: "https://ldintertech.com/static/media/Transform_3D.f07d8e29b6626947f3fa.png"},
    { title: "Graphic Design", img: "https://ldintertech.com/static/media/Flip_3D.69986c0fe59d559c6c23.png" },
    { title: "Full Stack Development", img: "	https://ldintertech.com/static/media/Bezier%20Tool_3D.921197f55d07f8d57b16.png" },
    { title: "Digital Marketing", img: "	https://ldintertech.com/static/media/Blend%20Tool_3D.67753685343859c40f82.png" },
    { title: "Embedded Systems", img: "https://ldintertech.com/static/media/Exclude%20Pathfinder_3D.a882a47a3bb8c0cdea90.png" },
    { title: "Mechanical Design", img: "https://ldintertech.com/static/media/Adjuster_3D.4d0f75c52546a2ccd597.png" },
  ];
  
   return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-[1350px] mx-auto">
        
        <h2 className="text-4xl md:text-5xl mb-8 font-light">
          <span className="italic">OUR</span>{" "}
          <span className="ml-3 tracking-wide">SERVICES</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <article
              key={idx}
              className="group relative bg-[#111] border border-[#8c8c8c] rounded-2xl p-8 h-96 overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-2xl"
            >
             
              <div className="flex justify-between items-start">
                <h3 className="text-2xl md:text-3xl font-light">{s.title}</h3>

              
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#333] text-[#a366ff] transition-all duration-500 group-hover:bg-[#a366ff] group-hover:text-white group-hover:rotate-45">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 transition-transform duration-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h10v10" />
                  </svg>
                </div>
              </div>

             
              <div className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-contain select-none transition-transform duration-500 transform group-hover:scale-125 origin-bottom-right"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;