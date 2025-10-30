import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative bg-[#F3E3D5] min-h-screen overflow-hidden">
      {/* Soft background blur/glow */}
      <div className="absolute top-32 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-[#D8B9A1] rounded-full blur-[100px] sm:blur-[120px] opacity-60"></div>
      <div className="absolute top-1/2 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#D8B9A1] rounded-full blur-[120px] sm:blur-[150px] opacity-50"></div>
      <div className="absolute top-20 left-5 w-32 h-32 bg-[#8B5A3E] rounded-full opacity-20 blur-2xl sm:w-48 sm:h-48"></div>
      <div className="absolute top-40 right-10 w-48 h-48 bg-[#8B5A3E] rounded-full opacity-30 blur-xl sm:w-64 sm:h-64"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-[#8B5A3E] rounded-full opacity-35 blur-lg sm:w-40 sm:h-40"></div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-4 sm:px-8 md:px-20 pt-6 sm:pt-8 relative z-50">
        <img src="./logo.png" alt="batana by cleo" className="w-32 sm:w-40" />

        {/* Enlarged Navbar Pills */}
        <ul className="hidden md:flex items-center gap-10 lg:gap-14 border-[3px] border-[#8B5A3E] px-8 py-3 rounded-full text-[#5B4032] font-semibold text-lg tracking-wide bg-[#F3E3D5] backdrop-blur-sm">
          <li className="cursor-pointer underline text-[#5B4032]">Home</li>
          <li className="cursor-pointer hover:text-[#8B5A3E] transition-colors">Services</li>
          <li className="cursor-pointer hover:text-[#8B5A3E] transition-colors">About Us</li>
          <li className="cursor-pointer hover:text-[#8B5A3E] transition-colors">Sign Up</li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-[#5B4032] text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Mobile menu */}
        <div
          className={`fixed top-0 right-0 h-full w-2/3 bg-[#FFF9F5] shadow-lg transform transition-transform duration-300 ease-in-out md:hidden
            ${menuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <ul className="flex flex-col mt-24 gap-8 px-8 text-[#5B4032] font-medium">
            <li className="cursor-pointer underline font-semibold text-[#5B4032]" onClick={() => setMenuOpen(false)}>Home</li>
            <li className="cursor-pointer hover:text-[#8B5A3E]" onClick={() => setMenuOpen(false)}>Services</li>
            <li className="cursor-pointer hover:text-[#8B5A3E]" onClick={() => setMenuOpen(false)}>About Us</li>
            <li className="cursor-pointer hover:text-[#8B5A3E]" onClick={() => setMenuOpen(false)}>Sign Up</li>
          </ul>
        </div>
      </nav>

      {/* Hero bottle */}
      <img
        src="/hero.png"
        alt="Hip & Bum Oil"
        className="absolute right-0 bottom-0 z-0
                   w-[100vw] sm:w-[700px] md:w-[800px] lg:w-[900px]
                   object-contain opacity-90
                   sm:translate-y-[260px] translate-y-[100px]" // raised only on mobile
      />

      {/* Text content */}
      <div className="relative z-10 flex flex-col justify-center md:justify-start px-4 sm:px-8 md:px-20 mt-20 md:mt-20 max-w-3xl text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-[#5B4032] leading-tight mb-6">
          Confidence Starts <br className="hidden sm:block" /> From Within
        </h1>
        <p className="text-[#5B4032]/80 text-base sm:text-lg leading-relaxed font-body max-w-xl mx-auto md:mx-0 mb-8">
          Naturally inspired beauty and wellness blends made to help you feel
          lighter, radiant, and effortlessly confident.
        </p>

        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <button className="px-6 py-3 bg-[#8B5A3E] text-[#FFF9F5] rounded-full font-semibold font-body hover:bg-[#5B4032] transition-colors">
            Shop Now
          </button>
          <button className="px-6 py-3 border border-[#8B5A3E] text-[#5B4032] rounded-full font-semibold font-body hover:bg-[#8B5A3E] hover:text-white transition-colors">
            Learn More
          </button>
        </div>

        {/* About snippet */}
        <div className="mt-10 border-l-2 border-[#5B4032]/40 pl-3 md:pl-3 mx-auto md:mx-0 text-left md:text-left max-w-sm md:max-w-none">
          <p className="italic text-sm font-medium text-[#5B4032]/80">
            About the Brand (short snippet)
          </p>
          <p className="text-xs sm:text-sm text-[#5B4032]/70 mt-1">
            “BatanaByCleo is more than a brand — it's a movement of confidence. Inspired by
            nature, crafted with love, and dedicated to celebrating the beauty
            and strength of every woman.”
          </p>
        </div>
      </div>

      {/* Sand shadow bottom effect */}
      <div className="absolute bottom-0 left-0 w-full h-32 sm:h-40 bg-gradient-to-t from-[#D8B9A1] to-transparent"></div>
    </section>
  );
};

export default HeroSection;
