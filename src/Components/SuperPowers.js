import React from 'react';

const SuperPowers = () => {
  const powers = [
    "Business design thinking",
    "Cross-functional team",
    "Fast delivery cycles",
    "Connecting brand and product",
  ];

  return (
    <section id="super-powers" className="bg-black py-20 px-6 sm:px-12 lg:px-24 text-white">
      <div className="max-w-full mx-auto flex flex-col lg:flex-row items-start lg:gap-56">
       
        <div className="lg:w-[450px] lg:flex-shrink-0">
         <h3 className="text-2xl md:text-5xl font-light mb-6">
          <span className="italic">SUPER</span> <span className="mr-2 tracking-wide">POWERS</span>
        </h3>
        </div>

        <div className="lg:w-2/3 mt-8 lg:mt-0">
          <ul className="space-y-6  font-ppneuemontreal text-[#a9a9a9]">
            {powers.map((power, index) => (
              <li key={index} className="flex items-start text-base sm:text-3xl md:text-[38px] font-light leading-tight">
                <span className="flex-shrink-0 mr-4 mt-3">
                  <img
                    src="https://ldintertech.com/static/media/Vector.5c274732dd58868da90b1aa05cfa46eb.svg"
                    alt="bullet point"
                    className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5"
                  />
                </span>
                {power}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SuperPowers;