import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-[#F3DCC7] min-h-screen overflow-hidden">
      {/* Soft background blur/glow */}
      <div className="absolute top-32 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-[#d9b89f] rounded-full blur-[100px] sm:blur-[120px] opacity-60"></div>
      <div className="absolute top-1/2 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#e8c9b0] rounded-full blur-[120px] sm:blur-[150px] opacity-50"></div>
      <div className="absolute top-20 left-5 w-32 h-32 bg-[#8B5E3C] rounded-full opacity-20 blur-2xl sm:w-48 sm:h-48"></div>
      <div className="absolute top-40 right-10 w-48 h-48 bg-[#A67B5B] rounded-full opacity-30 blur-xl sm:w-64 sm:h-64"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-[#7A4A2E] rounded-full opacity-35 blur-lg sm:w-40 sm:h-40"></div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-4 sm:px-8 md:px-20 pt-6 sm:pt-8">
        <img src="./logo.png" alt="batana by cleo" className="w-32 sm:w-40" />

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 border-2 border-[#8B5E3C] px-4 sm:px-6 py-2 rounded-full text-[#5A3E2B] font-medium">
          <li className="cursor-pointer underline font-semibold text-[#4B2E1E]">Home</li>
          <li className="cursor-pointer hover:text-[#3F2A1C]">Services</li>
          <li className="cursor-pointer hover:text-[#3F2A1C]">About Us</li>
          <li className="cursor-pointer hover:text-[#3F2A1C]">Sign Up</li>
        </ul>

        {/* Mobile menu placeholder */}
        <div className="md:hidden text-[#5A3E2B] cursor-pointer">
          {/* You can add a hamburger icon here */}
          ☰
        </div>
      </nav>

      {/* Main content */}
      <div className="relative flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-8 md:px-20 mt-8 md:mt-12">
        {/* Text side */}
        <div className="max-w-full md:max-w-lg z-50 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#4B2E1E] leading-tight mb-4 sm:mb-6">
            Confidence Starts From Within
          </h1>
          <p className="text-[#4B2E1E]/80 text-base sm:text-lg leading-relaxed">
            Naturally inspired beauty and wellness blends made to help you feel
            lighter, radiant, and effortlessly confident.
          </p>
        </div>

        {/* Bottle + leaves */}
        <div className="relative mt-12 md:mt-0 w-full md:w-auto flex justify-center md:justify-end">
          {/* decorative leaves */}
          <img
            src="/leaf.png"
            alt="Leaf Decoration"
            className="absolute -top-12 -right-6 sm:-top-16 sm:-right-10 w-20 sm:w-28 md:w-36"
          />
          {/* bottle */}
          <img
            src="/hero.png"
            alt="Hip & Bum Oil"
            className="
              relative z-10
              w-[80vw] max-w-[400px] sm:max-w-[520px] md:w-[520px] md:h-[440px]
              lg:w-[640px] lg:h-[540px]
              h-[300px] sm:h-[360px]
              object-cover
              "
            style={{ borderRadius: 0, boxShadow: "none" }}
          />
        </div>
      </div>

      {/* Sand shadow bottom effect */}
      <div className="absolute bottom-0 left-0 w-full h-32 sm:h-40 bg-gradient-to-t from-[#E8C9B0] to-transparent"></div>
    </section>
  );
};

export default HeroSection;
