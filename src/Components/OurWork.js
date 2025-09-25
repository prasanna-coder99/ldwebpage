import React from 'react';

function OurWork() {
  return (
    <section id="our-work" className="bg-black py-20 px-6 sm:px-12 lg:px-24 text-white">
      <div className="max-w-full mx-auto">
       
        <h3 className="text-4xl md:text-5xl font-light mb-6">
          <span className="italic">OUR</span> <span className="mr-2 tracking-wide">WORK</span>
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
         
          <div className="flex flex-col">
            <div className="rounded-2xl shadow-xl flex items-center justify-center w-full h-auto">
              <img
                src="https://ldintertech.com/static/media/Frame%2038.559eb00824324b40ebdb.png" 
                alt="Vending Machines' Catalogue"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
            <h3 className="text-3xl md:text-4xl font-light mt-6 ml-4">
              Vending Machines' Catalogue
            </h3>
          </div>

         
          <div className="flex flex-col">
            <div className="rounded-2xl shadow-xl flex items-center justify-center w-full h-auto">
              <img
                src="	https://ldintertech.com/static/media/Frame%2039.5c4c9f91f5cc18d5ba13.png" 
                alt="Website Redesign"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
            <h3 className="text-3xl md:text-4xl font-light mt-6 ml-2">
              Website Redesign
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;