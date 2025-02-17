'use client';

import { Heart, RefreshCcw, Facebook, Instagram, Twitter } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);

  const colors = [
    { name: "Black", class: "bg-black" },
    { name: "Red", class: "bg-red-500" },
    { name: "Blue", class: "bg-blue-500" },
    { name: "Pink", class: "bg-pink-500" },
  ];

  return (
    <>
      <div className="bg-[#fdf8f2] p-10 flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto">
        {/* Left Section - Image Gallery */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/product-5.png"
            alt="Product"
            className="rounded-[20px] w-full lg:w-[530px] h-auto lg:h-[490px] object-cover"
            width={300}
            height={300}
          />
          <div className="flex gap-3 mt-10">
            {["/product-5.png", "/product-6.png", "/product-7.png", "/product-6.png"].map((src, i) => (
              <Image
                key={i}
                src={src}
                alt="Thumbnail"
                className="w-[125px] h-[125px] rounded-md cursor-pointer border border-gray-300"
                width={200}
                height={200}
              />
            ))}
          </div>
        </div>

        {/* Right Section - Product Details */}
        <div className="w-full lg:w-1/2">
          <p className="text-red-600 font-semibold text-xl">SALE 70% OFF</p>
          <h1 className="text-4xl font-bold mt-6">Cargo Shorts With Pockets & Sundress Drawstring</h1>
          <p className="text-yellow-500 flex items-center gap-1 mt-4">
            {'⭐'.repeat(5)} <span className="text-gray-600">(45 Reviews)</span>
          </p>
          <p className="text-gray-700 mt-4 text-lg">
            A type of casual shorts, typically for men, with multiple pockets for function. Sundress with drawstring: A
            loose-fitting, sleeveless dress, often for women, with a drawstring at the waist for adjustability and a
            relaxed silhouette.
          </p>
          <hr className="mt-6" />
          <div className="flex items-center mt-6">
            <p className="text-gray-500 line-through font-bold text-xl">$70.00</p>
            <p className="text-4xl font-bold text-black">$40.00</p>
          </div>

          {/* Colors */}
          <div className="mt-5">
            <h3 className="font-semibold text-2xl">Color</h3>
            <div className="flex gap-3 mt-2">
              {colors.map((color, i) => (
                <button
                  key={i}
                  className={`w-6 h-6 rounded-full border-2 border-gray-300 ${color.class}`}
                  title={color.name}
                ></button>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="mt-5">
            <h3 className="font-semibold text-2xl">Size</h3>
            <div className="flex gap-2 mt-2">
              {["S", "M", "L", "XL", "2XL"].map((size, i) => (
                <button
                  key={i}
                  className="border border-gray-300 px-4 py-1 rounded-[50px] hover:bg-gray-100 text-sm"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Cart Button */}
          <div className="flex items-center gap-4 mt-10">
            <div className="flex items-center border border-gray-400 rounded-[50px] bg-white">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-5 py-3 text-2xl"
              >
                -
              </button>
              <span className="px-4 py-1 text-xl">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-5 py-3 text-2xl">
                +
              </button>
            </div>
            <button className="bg-gray-900 text-white px-10 py-4 rounded-[50px] font-bold text-sm">Add To Cart</button>
            <Heart className="w-12 h-12 cursor-pointer bg-white border border-gray-400 rounded-full p-3" />
            <RefreshCcw className="w-12 h-12 cursor-pointer bg-white border border-gray-400 rounded-full p-3" />
          </div>
          <hr className="mt-6" />

          {/* Product Info */}
          <div className="text-gray-800 text-lg">
            <p className="mt-4"><span className="font-semibold mt-3">SKU: </span> KE-91039</p>
            <p className="mt-4"><span className="font-semibold mt-3">Category: </span> Women Cloths</p>
            <p className="mt-4"><span className="font-semibold mt-3">Tags: </span> Bags, Cloths, Dress</p>
          </div>

          {/* Social Share */}
          <div className="mt-4 flex gap-2">
            <span className="font-semibold text-lg text-gray-800">Share: </span>
            <Facebook className="w-5 h-5 text-gray-500" />
            <Instagram className="w-5 h-5 text-gray-500" />
            <Twitter className="w-5 h-5 text-gray-500" />
          </div>

          {/* Badges */}
          <div className="mt-6 flex gap-3">
            <span className="bg-yellow-200 text-black px-4 py-2 rounded-lg text-gray-800 font-semibold">Free Shipping</span>
            <span className="bg-yellow-200 text-black px-4 py-2 rounded-lg text-gray-800 font-semibold">Easy Returns</span>
          </div>
        </div>
      </div>

      <div className="bg-cream p-8 bg-[#fdf8f2]">
        <div className="px-10 flex flex-col lg:flex-row gap-8">
          {/* Additional Information */}
          <div className="border border-yellow-200 p-6 rounded-lg w-full lg:w-[550px] h-auto lg:h-[440px]">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-2">Additional Information:</h2>
            <ul className="space-y-5 text-gray-700 mt-10">
              <li className='text-lg'><strong className='mr-[240px]'>Fabric type:</strong> Georgette</li>
              <li className='text-lg'><strong className='mr-[150px]'>Care instructions:</strong> Machine Wash</li>
              <li className='text-lg'><strong className='mr-[240px]'>Occasion type:</strong> Casual</li>
              <li className='text-lg'><strong className='mr-[220px]'>Sleeve type:</strong> Long Sleeve</li>
              <li className='text-lg'><strong className='mr-[310px]'>Pattern:</strong> Solid</li>
              <li className='text-lg'><strong className='mr-[230px]'>Closure type:</strong> Georgette</li>
              <li className='text-lg'><strong className='mr-[170px]'>Country of Origin:</strong> Bangladesh</li>
            </ul>
          </div>

          {/* Description and Features */}
          <div className="w-full lg:w-2/3">
            <div className="flex border-gray-300 mb-4 gap-4">
              <button className="px-6 py-2 text-lg text-white bg-gray-900 rounded-sm">Description</button>
              <button className="px-4 py-2 text-lg text-gray-500 rounded-sm border border-gray-400">Reviews</button>
            </div>

            <div className="">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 mt-12">Description</h2>
              <p className="text-gray-500 text-md mt-6">
                Cargo shorts: Rugged, casual shorts with multiple pockets for utility, often in khaki or olive green.
                Sundress with drawstring: A breezy, summery dress with a flowy skirt, often made from light, patterned fabric.
                It has a drawstring waist for a comfortable, adjustable fit. Designed for practicality, cargo shorts boast numerous
                pockets on the legs and hips. Everyday wear for someone who needs to carry a lot.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-6">Features</h3>
              <ul className="list-disc ml-4 text-gray-500 space-y-4 mt-4">
                <li>Function First</li>
                <li>Summer Breeze</li>
                <li>Casual and Rugged</li>
                <li>Possible Interpretations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
