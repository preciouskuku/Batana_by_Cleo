import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-[#F3DCC7] min-h-screen overflow-hidden">
      {/* Soft background blur/glow */}
      <div className="absolute top-32 left-10 w-72 h-72 bg-[#d9b89f] rounded-full blur-[120px] opacity-60"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#e8c9b0] rounded-full blur-[150px] opacity-50"></div>
<div className="absolute top-20 left-10 w-48 h-48 bg-[#8B5E3C] rounded-full opacity-20 blur-3xl"></div>
<div className="absolute top-40 right-20 w-64 h-64 bg-[#A67B5B] rounded-full opacity-30 blur-2xl"></div>
<div className="absolute bottom-10 left-20 w-40 h-40 bg-[#7A4A2E] rounded-full opacity-35 blur-xl"></div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 md:px-20 pt-8">
        <img src="./logo.png" alt="batana by cleo" />

        <ul className="flex items-center gap-8 border-2 border-[#8B5E3C] px-6 py-2 rounded-full text-[#5A3E2B] font-medium">
          <li className="cursor-pointer underline font-semibold text-[#4B2E1E]">Home</li>
          <li className="cursor-pointer hover:text-[#3F2A1C]">Services</li>
          <li className="cursor-pointer hover:text-[#3F2A1C]">About Us</li>
          <li className="cursor-pointer hover:text-[#3F2A1C]">Sign Up</li>
        </ul>
      </nav>

      {/* Main content */}
      <div className="relative flex flex-col md:flex-row items-center justify-between px-20 md:px-20 mt-12 md:mt-5">
        {/* Text side */}
        <div className="max-w-lg z-50">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#4B2E1E] leading-tight mb-6">
            Confidence Starts From Within
          </h1>
          <p className="text-[#4B2E1E]/80 text-lg leading-relaxed">
            Naturally inspired beauty and wellness blends made to help you feel
            lighter, radiant, and effortlessly confident.
          </p>
        </div>

        {/* Bottle + leaves */}
        <div className="relative mt-16 md:mt-0">
          {/* decorative leaves */}
          <img
            src="/leaf.png"
            alt="Leaf Decoration"
            className="absolute -top-16 -right-10 md:-top-20 md:-right-14 w-28 md:w-36"
          />
          {/* bottle */}
          <img
  src="/hero.png"
  alt="Hip & Bum Oil"
  className="
    relative z-10
    w-[90vw] max-w-[640px] 
    md:w-[520px] md:h-[440px] 
    lg:w-[640px] lg:h-[540px]
    h-[360px] object-cover
    absolute -bottom-20
    "
  style={{ borderRadius: 0, boxShadow: "none" }}
/>

        </div>
      </div>

      {/* Sand shadow bottom effect */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#E8C9B0] to-transparent"></div>
    </section>
  );
};

export default HeroSection;
