import React from 'react';

const Contact = () => {
  return (
    <section className="text-[#989898] font-medium py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:space-x-12 items-stretch">
        <div className="lg:w-1/2 flex">
          <div className="w-full h-full rounded-3xl overflow-hidden">
            <img
              src="https://ldintertech.com/static/media/graphic-download.fc9eebd7660a1f0a6d960b0a2f7d62cb.svg"
              alt="Contact Illustration"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="lg:w-1/2 flex flex-col justify-between rounded-3xl p-8">
        <div className="space-y-6 flex-1">
            <div>
              <h2 className="text-xl font-medium mb-2 text-[#FFFFFF]">Name *</h2>
              <input
                type="text"
                className="w-full bg-[#2a2a2a]  py-6 px-8 text-gray-300 placeholder-gray-500"
              />
            </div>

            <div>
              <h2 className="text-xl font-medium mb-2 text-[#FFFFFF]">E-mail *</h2>
              <input
                type="email"
                className="w-full bg-[#2a2a2a]  py-6 px-8 text-gray-300 placeholder-gray-500"
              />
            </div>

            <div>
              <h2 className="text-xl font-medium mb-2 text-[#FFFFFF]">Phone</h2>
              <input
                type="tel"
                className="w-full bg-[#2a2a2a]  py-6 px-8 text-gray-300 placeholder-gray-500"
              />
            </div>

            <div>
              <h2 className="text-xl font-medium mb-2 text-[#FFFFFF]">Message</h2>
              <textarea
                placeholder="If you have something to tell.."
                className="w-full bg-[#2a2a2a]  py-8 px-10 text-gray-300 placeholder-gray-500 min-h-[180px]"
              ></textarea>
            </div>

            <button className="w-full py-6 rounded-xl font-medium text-xl bg-[#F5F5F5] text-black hover:bg-[#a374ff] hover:text-white transition-colors">
              Submit
            </button>
          </div>
        </div>
      </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
  
  <div className="flex flex-col gap-4">
    <div className="bg-[#1e1e1e] rounded-xl p-6 flex justify-between items-center">
      <span className="text-gray-400">info@ldintertech.com</span>
      <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    </div>

    <div className="bg-[#1e1e1e] rounded-xl p-6 flex justify-between items-center">
      <span className="text-gray-400">+91 9392031593</span>
      <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.05 11.05 0 006.109 6.109l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.962 18 2 12.038 2 5V3z" />
      </svg>
    </div>
  </div>
  <div className="bg-[#1e1e1e] rounded-xl p-8 flex justify-between items-start">
    <p className="text-gray-400 leading-relaxed">
      M/S Proactive Plug and Play<br />
      40-1/1-30 A, Laxmi Nagar, Mogalrajpuram,<br />
      Vijayawada, Andhra Pradesh.<br />
      Pin: 520010
    </p>
    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
  </div>
</div>

<footer className="bg-black py-8 px-6 sm:px-12 lg:px-24 text-white text-sm">
      <div className="max-w-full mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
       <p className="font-sans"> © 2024. All Rights Reserved</p>
        <a href="#" className="font-sans hover:text-white transition-colors duration-300">Privacy Policy </a>
      </div>
    </footer>
     </section>
  );
};

export default Contact;
