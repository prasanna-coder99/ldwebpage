import React, { useState } from "react";

function Navbar({onNavClick, activePage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
   const handleClick = (section) => {
    onNavClick(section);  
    setIsMenuOpen(false); 
  };
  return (
    <>
    <nav className="flex items-center justify-between sm:px-10 px-2 lg:px-1 py-6 bg-black text-white relative z-20 ">
      
      <div className="flex items-center">
        <img
          src="https://ldintertech.com/static/media/LOGO.d5ab94ef934e54b8ebf4.png"
          alt="Intertech Innovation Logo"
          className="h-10 sm:h-20 ml-2 sm:ml-32 w-45"
        />
      </div>

     
       <div className="hidden lg:flex items-center space-x-16 ml-6 mr-12">
         <button
  onClick={() => handleClick("home")}
  className={`${activePage === "home" ? "text-[#a374ff] italic font-bold" : "text-white font-medium"} transition`}
>
  Home
</button>

<button
  onClick={() => handleClick("services")}
  className={`${activePage === "services" ? "text-[#a374ff] italic font-bold" : "text-white font-medium"} hover:text-[#a374ff] transition`}
>
  Services
</button>

<button
  onClick={() => handleClick("about")}
  className={`${activePage === "about" ? "text-[#a374ff] italic font-bold" : "text-white font-medium"} hover:text-[#a374ff] transition`}
>
  About
</button>
<button
  onClick={() => handleClick("contact")}
  className={`px-8 py-6 rounded-lg  transition
    bg-white
    ${activePage === "contact"
      ? "text-[#a374ff] font-bold italic"   
      : "text-black hover:text-white hover:bg-[#a374ff] font-medium"
    }`}
>
  Contact
</button>
      </div>
       <div className="lg:hidden">
          <button 
            onClick={toggleMenu}
            className="focus:outline-none border border-white p-2 rounded-lg"
          >
            {isMenuOpen ? (
             
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
             
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
       </nav>
        {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-end space-y-6 py-6 bg-black text-white px-6">
          <button
  onClick={() => handleClick("home")}
  className={`${activePage === "home" ? "text-[#a374ff] italic font-bold" : "text-white font-medium"} block`}
>
  Home
</button>
        <button onClick={() => { handleClick("services"); toggleMenu(); }} className="font-medium block">Services</button>
<button onClick={() => { handleClick("about"); toggleMenu(); }} className="font-medium block">About</button>
<button onClick={() => { handleClick("contact"); toggleMenu(); }} className="bg-[#F5F5F5] text-[#a374ff] hover:bg-[#a374ff] hover:text-white font-bold px-4 py-2 rounded-lg transition italic text-center">Contact</button>
    </div>
        )}
        </>
  )
  
}
export default Navbar; 