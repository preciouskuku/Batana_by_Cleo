import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Booty XTreme",
      price: "USD 30.00",
      description:
        "A natural sculpting blend that helps to expand healthy weight gain in desired areas.",
      image: "/booty.png",
    },
    {
      id: 2,
      name: "Citrus Glow Set",
      price: "USD 45.00",
      description:
        "Your all-in-one glow kit crafted for radiance, summer-ready feeling.",
      image: "/citrus.jpg",
    },
    {
      id: 3,
      name: "Velour Light Set",
      price: "USD 25.00",
      description:
        "For a daily glow to brighten, even tone, and healing confidence.",
      image: "/glow.jpg",
    },
  ];

  return (
    <section className="relative bg-[#D8B9A1] py-20 overflow-hidden border-t-2 border-[#333333]/90">
      {/* Large decorative leaf background */}
      <img
        src="/leaf.png"
        alt="Decorative Leaf"
        className="absolute -top-10 right-0 w-[300px] sm:w-[400px] md:w-[480px] opacity-20 rotate-[10deg] z-0"
      />

      <div className="container mx-auto px-4 sm:px-8 md:px-16 relative z-10">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="inline-block text-2xl sm:text-3xl md:text-4xl font-bold text-[#5B4032] bg-[#F3E3D5] px-6 rounded-full border-2 border-[#5B4032]/30">
            Featured Products
          </h2>
        </div>

        {/* Products grid */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 md:gap-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#F3E3D5] rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 max-w-[350px] flex flex-col items-center relative "
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="rounded-xl mb-4 w-[350px] h-[350px] object-cover"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#5B4032] mb-2">
                {product.name}
              </h3>
              <p className="text-sm text-[#5B4032]/80 mb-3 text-center leading-relaxed">
                {product.description}
              </p>
              {/* Price at bottom of card */}
              <p className="  mt-auto bg-[#8B5A3E] font-semibold text-[#FFF9F5] text-sm sm:text-base px-4 py-2 rounded-xl mb-4">
            
                {product.price}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-10">
          <button className="px-6 py-3 bg-[#8B5A3E] text-[#FFF9F5] rounded-full font-semibold hover:bg-[#5B4032] transition-colors">
            View More
          </button>
        </div>

        {/* Arrows */}
        <div className="absolute top-1/2 left-5 transform -translate-y-1/2 hidden sm:flex">
          <button className="p-2 rounded-full bg-[#E9C9AE] text-[#5B4032] shadow-md">
            <FiChevronLeft size={24} />
          </button>
        </div>
        <div className="absolute top-1/2 right-5 transform -translate-y-1/2 hidden sm:flex">
          <button className="p-2 rounded-full bg-[#E9C9AE] text-[#5B4032] shadow-md">
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
