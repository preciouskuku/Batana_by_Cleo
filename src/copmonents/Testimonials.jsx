import React from "react";
import { FaStar } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonials = [
  {
    id: 1,
    name: "Precious Kutema",
    age: 20,
    image: "/imgs/test1.jpg", // replace with your actual image path
    text: "I’mma just say at first I thought it was a scam like other products but my friends convinced me to try them and it was the best decision I ever made.",
  },
  {
    id: 2,
    name: "Silence Sirene",
    age: 22,
    image: "/imgs/test2.jpg",
    text: "I’mma just say at first I thought it was a scam like other products but my friends convinced me to try them and it was the best decision I ever made.",
  },
  {
    id: 3,
    name: "Faith Ndlovu",
    age: 35,
    image: "/imgs/test3.jpg",
    text: "I’mma just say at first I thought it was a scam like other products but my friends convinced me to try them and it was the best decision I ever made.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#FFF9F5] py-16 px-6 md:px-12 lg:px-20 relative">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3A2C23] mb-10 text-center">
        Customer Testimonials
      </h2>

      {/* Navigation Arrows */}
      <div className="absolute top-20 right-6 sm:right-12 flex gap-3">
        <button className="border border-[#8B5A3E] p-2 rounded-sm hover:bg-[#8B5A3E] hover:text-white transition">
          <FiChevronLeft size={20} />
        </button>
        <button className="border border-[#8B5A3E] p-2 rounded-sm hover:bg-[#8B5A3E] hover:text-white transition">
          <FiChevronRight size={20} />
        </button>
      </div>

      {/* Testimonials Grid */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-[#8B5A3E] text-[#FFF9F5] rounded-sm shadow-md p-6 w-full sm:w-[90%] md:w-1/3 relative"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-[#FFF9F5]"
                />
                <div>
                  <h3 className="text-lg font-bold text-[#222]">{t.name}</h3>
                  <p className="text-sm text-[#222]/90 font-medium">Age {t.age}</p>
                  <div className="flex text-yellow-400 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-full p-2 text-[#222]">
                <FaQuoteRight />
              </div>
            </div>
            <p className="text-[#FFF9F5] text-sm leading-relaxed">{t.text}</p>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-10">
        <button className="bg-[#8B5A3E] text-white px-8 py-3 font-semibold rounded-sm shadow-md hover:bg-[#5B4032] transition">
          View More
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
