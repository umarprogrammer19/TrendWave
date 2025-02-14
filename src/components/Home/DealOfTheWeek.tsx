// components/DealOfTheWeek.jsx
import { Tag } from "lucide-react";
import img1 from "../../../public/product-5.png"
import img2 from "../../../public/product-6.png"
import Image from "next/image";

const DealOfTheWeek = () => {
  return (
    <section className="bg-pink-50 py-12 px-6 md:px-16">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <div className="flex items-center justify-center md:justify-start gap-2 text-red-600 font-semibold">
            <Tag size={20} />
            <span>Deal of the Week</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900">
            UP TO 80% OFF
          </h1>
          <p className="text-xl text-gray-700">
            Dont miss out on our biggest sale! Enjoy up to 80% off on a wide
            range of products.
          </p>
          <hr className="border-dashed border-t border-gray-400 w-1/2 mx-auto md:mx-0" />
          <h2 className="text-2xl text-red-600 font-semibold">
            Hurry Up! Offer ends in.
          </h2>
          {/* Countdown Timer */}
          <div className="flex justify-center md:justify-start gap-6 text-center text-gray-900 font-semibold">
            {["day", "hour", "minute", "second"].map((unit, index) => (
              <div key={index}>
                <p className="text-4xl">0</p>
                <p className="text-gray-600">{unit}</p>
              </div>
            ))}
          </div>
          <button className="bg-gray-900 text-white text-medium font-semibold p-4 px-10 rounded-[50px] hover:bg-gray-700 transition">
            Shop Now
          </button>
        </div>
        {/* Image Section */}
        <div className="flex-1 flex items-center justify-center gap-4 mt-8 md:mt-0">
          <Image
            src={img1}
            alt="Fashion 1"
            className="w-1/2 rounded-xl object-cover shadow-lg"
            height={200}
            width={200}
          />
          <Image
            src={img2}
            alt="Fashion 2"
            className="w-1/2 rounded-xl object-cover shadow-lg"
            height={200}
            width={200}
          />
        </div>
      </div>
    </section>
  );
};

export default DealOfTheWeek;
