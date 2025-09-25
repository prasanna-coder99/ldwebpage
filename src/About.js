import React from 'react';

const About = () => {
  const images = {
    adaptable: 'https://ldintertech.com/static/media/Value1.a98e5ecd9ac90c017052.png',
    integrity: 'https://ldintertech.com/static/media/Value2.290c715668a5ed5a60b7.png',
    innovative: '	https://ldintertech.com/static/media/Value3.f1f97f19850878976396.png'
  };

  return (
    <section className="bg-black text-[#989898] font-sans min-h-screen py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-20">
      
        <div className="text-center lg:text-left pt-8">
          <h1 className="text-5xl sm:text-6xl lg:text-6xl font-medium leading-tight tracking-wide mb-12">
            OUR STORY, VISION & VALUES
          </h1>
        </div>

    <div className="flex flex-col lg:flex-row items-start lg:items-start space-y-6 lg:space-y-0 lg:space-x-20 pt-14">
  <h2 className="text-4xl sm:text-5xl lg:text-5xl font-extralight text-white w-full lg:w-1/4">
    <span className='italic'>WHO</span>  WE ARE
  </h2>
  <p className="text-[#989898] max-w-3xl w-full lg:w-3/4 lg:text-4xl leading-relaxed">
    We don’t just build products—we create experiences. Whether it’s a sleek UI/UX design, a full-scale platform, or cutting-edge embedded systems, we transform your boldest ideas into reality. Fueled by creativity, powered by technology, and driven by results, we’re here to elevate your brand and accelerate your growth in the digital age.
  </p>
</div>
         <div className="flex flex-col lg:flex-row items-start lg:items-start space-y-6 lg:space-y-0 lg:space-x-20 pt-14">
  <h2 className="text-4xl sm:text-5xl lg:text-5xl font-extralight text-white w-full lg:w-1/4">
            <span className='italic'>WHY</span>  US
          </h2>
          <p className="text-[#989898] max-w-3xl w-full lg:w-3/4 lg:text-4xl leading-relaxed">
            We believe in the power of innovation and the importance of technical precision. Our mission is to equip businesses with the tools they need to thrive in an increasingly digital world. From hardware to software, cloud systems, and marketing strategies, InterTech Innovation offers holistic solutions that lead you into the future.
          </p>
        </div>

        <div className="pt-8  border-b border-gray-700">
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-extralight text-[#F5F5F5] w-full mb-12 border-b border-gray-700 pb-4">
            <span className='italic' >OUR</span> VALUES
          </h2>
          <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-12 pb-8 border-b border-gray-700">
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-3xl sm:text-4xl font-medium mb-4 text-gray-100 w-[56px]">Adaptable</h3>
              <p className="text-[#A9A9A9] text-xl mb-6 max-w-lg mx-auto lg:mx-0 leading-snug">
                We seamlessly adapt to our clients’ changing<br />
                needs,driving innovation to provide <br />exceptional, customized solutions.
              </p>
            </div>
            <div className="flex-1 w-full lg:w-auto flex justify-center">
              <img
                src={images.adaptable}
                alt="Adaptable Illustration"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-12 py-8 border-b border-gray-700">
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-3xl sm:text-4xl font-medium mb-4 text-gray-100">Integrity</h3>
              <p className="text-[#A9A9A9] text-xl mb-6 max-w-lg mx-auto lg:mx-0 leading-snug">
                We are committed to unwavering honesty,<br /> fostering transparent communication,<br/> authentic collaborations, and delivering work<br/> that embodies our dedication to truth and <br/>transparency.
              </p>
            </div>
            <div className="flex-1 w-full lg:w-auto flex justify-center">
              <img
                src={images.integrity}
                alt="Integrity Illustration"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-12 pt-8">
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-3xl sm:text-4xl font-medium mb-4 text-gray-100">Innovative</h3>
              <p className="text-[#A9A9A9] text-xl  mb-6 max-w-lg mx-auto lg:mx-0 leading-snug">
                We passionately chase new ideas, pushing the <br/>boundaries to create innovative solutions that<br/> set a new standard for creative excellence.
              </p>
            </div>
            <div className="flex-1 w-full lg:w-auto flex justify-center">
              <img
                src={images.innovative}
                alt="Innovative Illustration"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      <footer className="bg-black py-8 px-6 sm:px-12 lg:px-24 text-white text-sm">
      <div className="max-w-full mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
       <p className="font-sans">© 2024. All Rights Reserved</p>
        <a href="#" className="font-sans hover:text-white transition-colors duration-300"> Privacy Policy</a>
      </div>
    </footer>
      </div>
    </section>
  );
};

export default About;