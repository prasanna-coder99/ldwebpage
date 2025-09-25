import React from 'react';

function AllRights(){
  return (
    <footer className="bg-black py-8 px-6 sm:px-12 lg:px-24 text-white text-sm">
      <div className="max-w-full mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
       
        <p className="font-sans">
          © 2024. All Rights Reserved
        </p>
        
        
        <a href="#" className="font-sans hover:text-white transition-colors duration-300">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default AllRights;