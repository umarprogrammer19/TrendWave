import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const categories = [
  { name: "Man Shirts", items: 10, image: "/category-7.jpg" },
  { name: "Denim Jeans", items: 45, image: "/category-8.jpg" },
  { name: "Casual Suit", items: 30, image: "/category-9.jpg" },
  { name: "Summer Dress", items: 36, image: "/category-10.jpg" },
  { name: "Sweaters", items: 24, image: "/category-11.jpg" },
  { name: "Jackets", items: 6, image: "/category-12.jpg" },
];

const TopCategories = () => {
  return (
    <section className="py-10 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 text-center md:text-left">
          <div>
            <p className="text-red-500 font-semibold">★ Categories</p>
            <h2 className="text-4xl font-bold text-gray-800 mt-4">
              Browse Top Category
            </h2>
          </div>
          <button className="flex items-center text-lg font-medium text-gray-100 hover:bg-red-700 duration-500 bg-gray-900 p-4 px-8 rounded-full mt-4 md:mt-0">
            View All <ArrowRight className="ml-2" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 ">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative h-[280px] flex flex-col items-center text-black hover:text-white justify-center text-center bg-white rounded-t-full text-black duration-700 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>
              <div className="relative w-38 h-38 mx-auto rounded-full overflow-hidden border-4 border-gray-100 bg-white z-10">
                <Image
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover relative z-10"
                  height={200}
                  width={200}
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold relative z-10">
                {category.name}
              </h3>
              <p className="text-base relative z-10">{category.items} items</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
