import React from 'react';


const ServiceCard = ({ title, description, tags, imageAlt, imageSrc }) => {
  return (
    <div className="bg-[#1e1e1e] rounded-3xl [min-width:2500px]:rounded-[40px] my-8 flex flex-col lg:flex-row overflow-hidden min-h-[350px]  sm:min-h-[400px] lg:min-h-[500px] [min-width:2500px]:min-h-[700px]">

      
      <div className="flex-1 p-6 [min-width:2500px]:p-20 text-center lg:text-left">
        <h3 className="text-3xl sm:text-4xl [min-width:2500px]:text-5xl font-normal mb-4 text-gray-100">{title}</h3>
      
       <p className="text-gray-400 mb-4 lg:mb-6 max-w-full sm:max-w-lg mx-auto lg:mx-0 pb-4 lg:pb-10 text-base sm:text-[18px] [min-width:2500px]:text-[22px]">
      {description}
      </p>

        <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-1 lg:gap-4 [min-width:2500px]:gap-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#FFFFFF] text-[#535353] text-xs sm:text-sm lg:text-base [min-width:2500px]:text-xl [min-width:2500px]:font-medium font-normal px-4 py-3  [min-width:2500px]:px-8 [min-width:2500px]:py-4 rounded-full  transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    
      
     
 <div className="flex-1 w-full lg:w-auto flex justify-end items-end pt-12 [min-width:2500px]:pt-20">
  <img
    src={imageSrc}
    alt={imageAlt}
    className="w-[700px] h-auto object-contain rounded-tl-[60px] [min-width:2500px]:rounded-tl-[80px] 
               rounded-tr-none rounded-br-none rounded-bl-none mt-10"
  />
</div>

    </div>
  );
};

const Services = () => {
  const servicesData = [
    {
      title: "UX/UI Design",
      description: "We create intuitive and visually stunning designs that prioritize user experience, ensuring every interaction feels effortless and engaging.",
      tags: ["UX Design", "UI Design", "Design System", "Web Design", "Saas Design", "App Design", "Dashboard Design", "Webflow"],
      imageAlt: "UX/UI Design Illustration",
      imageSrc: "https://ldintertech.com/static/media/Stack1.5cb61ee397eb100f2932.png"
    },
    {
      title: "Graphic Design",
      description: "We bring your brand to life with creative, impactful designs, from logos to marketing materials, that resonate with your target audience.",
      tags: ["Logo Design", "Branding", "Marketing Collateral", "Illustrations", "Print Design"],
      imageAlt: "Graphic Design Illustration",
      imageSrc: "https://ldintertech.com/static/media/Stack2.71146c0d25e7ca726384.png"
    },
    {
      title: "Full Stack Development",
      description: "Our expertise spans front-end to back-end, delivering fully integrated web and mobile applications that are robust, secure, and scalable.",
      tags: ["Web Development", "Mobile App Development", "API Integration", "Database Management", "Cloud Deployment", "Dashboard Development"],
      imageAlt: "Full Stack Development Illustration",
      imageSrc: "https://ldintertech.com/static/media/Stack3.a9a3e28f66f4b6094f0a.png"
    },
    {
      title: "Digital Marketing",
      description: "We develop custom embedded systems and IoT solutions that connect devices, streamline processes, and enhance automation.",
      tags: ["SEO Optimization", "Social Media Management", "PPC Campaigns", "E-mail Marketing", "Analytics & Reporting"],
      imageAlt: "Digital Marketing Illustration",
      imageSrc: "https://ldintertech.com/static/media/Stack4.438a77364c47e4b13959.png"
    },
    {
      title: "Embedded Systems",
      description: "We develop custom embedded systems and IoT solutions that connect devices, streamline processes, and enhance automation.",
      tags: ["IoT Solutions", "Firmware Development", "PCB Design", "Sensor Integration", "Embedded Software Development", "Hardware Prototyping", "System Design and Testing"],
      imageAlt: "Embedded Systems Illustration",
      imageSrc: "https://ldintertech.com/static/media/Stack5.72557838711d53be7bcc.png"
    },
    {
      title: "Thermal Solutions & Mechanical Design",
      description: "We deliver expert thermal solutions and mechanical design, optimizing system performance, energy efficiency, and ensuring precise, reliable results.",
      tags: ["Thermal System Design & Optimization", "Heat Transfer Analysis", "Heating Technology Integration", "Finite Element Analysis (FEA)", "Thermal and Mechanical Testing"],
      imageAlt: "Thermal Solutions & Mechanical Design Illustration",
      imageSrc: "https://ldintertech.com/static/media/Stack6.5f668c7631f16996c93b.png"
    },
  ];

  return (
    <section className=" w-full [min-width:2500px]:w-[2500px] bg-gray-950 text-gray-100 font-sans min-h-screen flex flex-col py-16 px-4 sm:px-8 lg:px-16">
      <div className="mx-auto [min-width:2500px]:px-[500px] [min-width:2500px]:py-20 w-full">
      <div className="max-w-5xl ml-14 text-left mb-12 sm:mb-20">
        <h1 className="text-xl sm:text-4xl lg:text-6xl  [min-width:2500px]:text-7xl font-medium text-[#989898] leading-loose tracking-wide pt-12">
          WE CREATE DIGITAL SOLUTIONS THAT ELEVATE YOUR BRAND AND BRING YOUR IDEAS TO LIFE.
        </h1>
      </div>
      <div className="w-full px-[40px] text-[#989898]">
        {servicesData.map((service, index) => (
          <ServiceCard 
            key={index}
            title={service.title}
            description={service.description}
            tags={service.tags}
            imageAlt={service.imageAlt}
            imageSrc={service.imageSrc}
             className={index === servicesData.length - 1 ? "my-8 mb-0" : "my-8"}
          />
        ))}
      </div>
      </div>
      
     <footer className="bg-black py-8 px-6 sm:px-12 lg:px-24 text-white text-sm">
    <div className="max-w-full mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="font-sans">© 2024. All Rights Reserved</p>
      <a href="#" className="font-sans hover:text-white transition-colors duration-300">
        Privacy Policy
      </a>
    </div>
    
  </footer>
    </section>
  );
};

export default Services;