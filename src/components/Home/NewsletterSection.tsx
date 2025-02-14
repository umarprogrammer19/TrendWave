import { Sparkles } from "lucide-react";
import img from "../../../public/newsletter-2.jpg";
import Image from "next/image";

export default function NewsletterSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between bg-[#f9f5f2] py-12 px-6 ">
      {/* Left Content */}
      <div className="lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left lg:ml-12">
        <div className="flex items-center justify-center lg:justify-start gap-2 text-red-500 font-semibold text-lg">
          <Sparkles size={20} />
          <span>Our Blogs</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mt-4 text-[#1c1c1c] leading-snug">
          Subscribe
          <span className="underline decoration-red-500 decoration-4 ml-2">Newsletter</span>
          <br /> To & Get Every Day Discount
        </h2>
        <div className="w-full max-w-[600px] mt-8 flex flex-col md:flex-row items-center gap-4 rounded-[50px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 p-2">
          <input
            type="email"
            placeholder="Write your Email Address"
            className="w-full md:w-2/3 px-4 py-4 rounded-[50px] border-none focus:ring-0"
          />
          <button className="w-full md:w-auto px-6 py-3 bg-gray-900 text-white text-lg rounded-[50px] hover:bg-[#333] transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Right Content: Image */}
      <div className="lg:w-1/2 flex justify-center">
        <Image
          src={img}
          alt="Discount Lady"
          className="w-full max-w-[400px] md:max-w-[600px] lg:max-w-[700px] h-auto object-contain lg:ml-12"
          
        />
      </div>
    </section>
  );
}
