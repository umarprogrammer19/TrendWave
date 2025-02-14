"use client";
import img from "../../../public/testimonial-img1.png"
import auther from "../../../public/author-2.png"
import Image from "next/image";


import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function TestimonialSection() {
  return (
    <section className="relative flex flex-wrap items-center justify-center bg-[#FAF8F5] p-8 lg:p-20">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 relative">
        <div className="overflow-hidden rounded-2xl">
          <Image
            src={img} 
            alt="Client Testimonial"
            className="object-cover w-full h-[700px] transition-transform duration-500 ease-in-out hover:scale-105"
            
          />
        </div>
      </div>

      {/* Testimonial Card */}
      <div className="text-center w-full lg:w-1/2 relative z-10 -mt-16 lg:-mt-20 lg:ml-[-40px] bg-white p-8 lg:p-12 shadow-2xl rounded-[50px]">
        {/* Title */}
        <h3 className="text-medium text-red-500 font-semibold mb-2">Testimonial</h3>
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Whats Our Clients Say
        </h2>

        {/* Stars */}
        <div className="border border-gray-300 px-[40px] py-[40px] rounded-[50px]">
        <div className="flex mb-4 lg:ml-[170px]">
          {[...Array(5)].map((_, index) => (
            <Star key={index} className="text-red-500 w-4 h-4 " />
          ))}
        </div>

        {/* Quote */}
        <p className="text-medium text-gray-600 mb-8 text-center">
          I recently ordered a few items from Fashionista Boutique, and I
          couldn’t be happier with my purchase! The quality of the clothes is
          outstanding, and the fit is perfect. My order arrived promptly,
          beautifully packaged.
        </p>

        {/* Client Info */}
        <div className="flex items-center space-x-4 justify-center">
          <Image
            src={auther} 
            alt="Rhodes Jhon"
            className="w-16 h-16 rounded-full shadow-lg"
          />
          <div>
            <p className="font-bold text-gray-800 text-lg">Rhodes Jhon</p>
            <p className="text-gray-500 text-sm">Manager and CEO</p>
          </div>
        </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shadow-md hover:bg-gray-200">
            <ChevronLeft className="text-gray-600" />
          </button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shadow-md hover:bg-gray-200">
            <ChevronRight className="text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
