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
      image: "/p1.png",
    },
    {
      id: 2,
      name: "Citrus Glow Set",
      price: "USD 45.00",
      description:
        "Your all-in-one glow kit crafted for radiance, summer-ready feeling.",
      image: "/p2.png",
    },
    {
      id: 3,
      name: "Velour Light Set",
      price: "USD 25.00",
      description:
        "For a daily glow to brighten, even tone, and healing confidence.",
      image: "/p3.png",
    },
  ];

  return (
    <section className="bg-[#F3E3D5] py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-8 md:px-16">
        {/* Heading */}
        <div className="text-center mb-10 relative">
          <h2 className="inline-block text-2xl sm:text-3xl md:text-4xl font-bold text-[#5B4032] bg-[#F3E3D5] px-6 rounded-full border-2 border-[#5B4032]/30">
            Featured Products
          </h2>

          {/* Leaf decoration */}
          <img
            src="/leaf.png"
            alt="Leaf Decoration"
            className="absolute top-0 right-[43%] w-16 sm:w-20 opacity-90 rotate-[10deg]"
          />
        </div>

        {/* Products grid */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 md:gap-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#F8E9DD] rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 max-w-[300px] p-4 sm:p-6 flex flex-col items-center"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="rounded-xl mb-4 w-[250px] h-[250px] object-cover"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#5B4032] mb-2">
                {product.name}
              </h3>
              <p className="text-sm text-[#5B4032]/80 mb-3 text-center leading-relaxed">
                {product.description}
              </p>
              <p className="font-semibold text-[#5B4032] text-sm sm:text-base">
                {product.price}
              </p>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center mt-10">
          <button className="px-6 py-3 bg-[#8B5A3E] text-[#FFF9F5] rounded-full font-semibold hover:bg-[#5B4032] transition-colors">
            View More
          </button>
        </div>

        {/* Arrows (static for design match) */}
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
