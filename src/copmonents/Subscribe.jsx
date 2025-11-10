import React from "react";

const CallToAction = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-[#F7E9DC] md:h-[300px] w-full overflow-hidden">
      {/* Left side - Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center overflow-hidden">
        <img
          src="/gli.png"
          alt="Model"
          className="object-cover w-full h-[350px] md:h-[300px] transform scale-100 hover:scale-105 transition-transform duration-700 ease-in-out"
        />
      </div>

      {/* Right side - Text */}
      <div className="bg-[#8A5839] w-full md:w-1/2 text-center md:text-left  md:px-5 py-0 md:py-0 text-white flex flex-col justify-center items-center md:items-start md:h-[300px]">
        <p className="text-xl md:text-3xl italic font-light leading-relaxed">
          “Join thousands of women who trust
          <br />
          <span className="font-medium not-italic">BatanaByCleo</span> to
          enhance their natural 
          <br /> glow.”
        </p>
        <button className="mt-20 bg-white text-[#8A5839] font-semibold py-3 px-6 rounded-md shadow-sm hover:bg-[#f5f5f5] transition-all">
          Sign Up for updates
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
