import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
 const [errors, setErrors] = useState({});
 const [loading, setLoading] = useState(false); 
 const [showToast, setShowToast] = useState(false);
   useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true); 
      setTimeout(() => {
        setLoading(false); 
        setFormData({ name: "", email: "", phone: "", message: "" });
        setShowToast(true);
      }, 2000);
    };
  }
  return (
    <>
    <section className="w-full text-[#989898] font-medium py-16 px-4 sm:px-8 lg:px-16 [min-width:2500px]:w-[2500px] [min-width:2500px]:mx-auto min-h-screen flex flex-col">
      <div className="w-full mx-auto flex flex-col lg:flex-row lg:space-x-16 items-stretch max-w-7xl">
        <div className="flex-[1] min-w-0">
          <div className="w-full h-full rounded-3xl overflow-hidden">
            <img
              src="https://ldintertech.com/static/media/graphic-download.fc9eebd7660a1f0a6d960b0a2f7d62cb.svg"
              alt="Contact Illustration"
              className="object-contain w-full h-full [min-width:2500px]:max-h-[300px]"
            />
          </div>
        </div>
       <form
          onSubmit={handleSubmit}
          className="flex-[1] flex flex-col justify-between rounded-3xl p-8 mt-8 lg:mt-0 [min-width:2500px]:h-[800px]"
        >
        <div className="space-y-6 flex-1">
            <div>
              <h2 className="text-xl font-medium mb-2 text-[#FFFFFF] [min-width:2500px]:text-2xl ">Name *</h2>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              className={`w-full bg-[#2a2a2a] py-6 px-6 text-gray-300 placeholder-gray-500 rounded-xl ${
                errors.name ? "border border-red-500" : ""} 2xl-custom:py-24 2xl-custom:text-3xl 2xl-custom:px-12`}

              />
           {errors.name && (
                <p className="text-red-500 text-sm mt-2">{errors.name}</p>
              )}
            </div>

            <div>
              <h2 className="text-xl font-medium mb-2 text-[#FFFFFF]">E-mail *</h2>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-[#2a2a2a]  py-8 px-8 text-gray-300 placeholder-gray-500 rounded-xl ${
                    errors.email ? "border border-red-500" : ""
                }`}
                
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-2">{errors.email}</p>
              )}
            </div>

            <div>
              <h2 className="text-xl font-medium mb-2 text-[#FFFFFF]">Phone</h2>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-[#2a2a2a]  py-6 px-4 text-gray-300 placeholder-gray-500 rounded-xl"
              />
            </div>

            <div>
              <h2 className="text-xl font-medium mb-2 text-[#FFFFFF]">Message</h2>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="If you have something to tell.."
                className="w-full bg-[#2a2a2a]  py-8 px-10 text-gray-300 placeholder-gray-500 min-h-[180px] rounded-xl"
              ></textarea>
            </div>
             <button
              type="submit"
              disabled={loading}
              className="w-full py-6 rounded-xl font-medium text-xl bg-[#F5F5F5] text-black hover:bg-[#a374ff] hover:text-white transition-colors flex items-center justify-center"
            >
              {loading ? (
                <>
                 
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    ></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                "Submit"
              )}
            </button>
           </div>
           </form>
           </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
  <div className="flex flex-col gap-4">
    <div className="bg-[#1e1e1e] rounded-xl p-10 flex justify-between items-center">
      <span className="text-[#A9A9A9] font-medium text-xl">info@ldintertech.com</span>
      <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
  </div>

    <div className="bg-[#1e1e1e] rounded-xl p-10 flex justify-between items-center">
      <span className="text-[#A9A9A9] font-medium text-xl">+91 9392031593</span>
      <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.05 11.05 0 006.109 6.109l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.962 18 2 12.038 2 5V3z" />
      </svg>
    </div>
  </div>
  <div className="bg-[#1e1e1e] rounded-xl p-8 flex justify-between items-start">
    <p className="text-[#A9A9A9] leading-relaxed text-xl font-medium">
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
      {
    showToast && (
        <div className="fixed top-5 right-5 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-4">
          <span>✅ Form submitted successfully!</span>
          <button onClick={() => setShowToast(false)} className="font-bold">
            ✖
          </button>
        </div>
      )}
    </>
  );
};

export default Contact;
