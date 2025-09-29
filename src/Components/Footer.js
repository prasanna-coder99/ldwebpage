import React from 'react';

function Footer({ onNavClick }){
  return (
    <section id="contact-cta" className="bg-black py-20 px-6 sm:px-12 lg:px-24">
      <div
        className="relative w-full h-[350px] md:h-[500px] bg-cover bg-center rounded-3xl flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('https://ldintertech.com/static/media/bg-download.748f6a0d6fed8967610e.png')`,
        }}
      >
        <div className="relative z-10 text-white text-center p-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight tracking-widest">
            LET'S MAKE GREAT <br /> WORK TOGETHER
          </h2>
          <button onClick={() => onNavClick("contact")} className="px-8 py-5 bg-white text-gray-800 text-lg font-book rounded-lg shadow-lg transition-all duration-300 hover:bg-[#a374ff] hover:text-white hover:scale-105">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Footer;