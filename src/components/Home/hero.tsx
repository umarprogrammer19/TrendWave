import Image from "next/image";
import hero from "../../../public/hero-two_img1.jpg";
import shape from "../../../public/hero-two-img-shape1.png";
import { Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col md:flex-row items-center md:items-start justify-between bg-[#fff7ed] py-12 px-6 md:px-12 lg:px-24 min-h-[550px] md:min-h-[850px]">
      {/* Left Content */}
      <div className="mt-[150px] max-w-lg space-y-4 md:space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
        <div className="flex items-center justify-center md:justify-start space-x-2">
          <Star className="text-red-500 w-5 h-5" />
          <p className="text-sm md:text-lg font-bold text-gray-600">BEST FOR YOUR CATEGORIES</p>
          <Star className="text-red-500 w-5 h-5" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          <span className="text-red-600">Get 20% Off</span> Women Cloth Collections
        </h1>
        <p className="text-sm md:text-lg text-gray-500">
          Enjoy 20% off on our entire Women’s Clothing Collection! Discover stylish
          outfits for every occasion and save on your favorite pieces.
        </p>
        <button className="bg-gray-900 text-white py-3 px-6 md:p-4 md:px-8 rounded-full font-medium shadow-md hover:bg-gray-800 transition">
          Shop Now
        </button>
      </div>

      {/* Shape Image - Front Only on Desktop */}
      <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 hidden md:block z-20">
        <Image src={shape} alt="Decorative Shape" height={100} width={100} className="w-40 h-[850px] object-cover opacity-80 ml-[50px]" />
      </div>

      {/* Right Background Image (Same as Original) */}
      <div className="absolute inset-y-0 right-0 w-1/2 hidden md:block z-10">
        <Image src={hero} alt="Woman with Fashion"  className="w-[700px] h-[850px] object-cover" />
      </div>
    </section>
  );
}
