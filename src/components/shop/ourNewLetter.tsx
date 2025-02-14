import Image from "next/image";

export default function Newsletter() {
  return (
    <div className="bg-[#fdf7f2] py-10 flex justify-center">
      <div className="bg-white px-[50px]  flex flex-wrap md:flex-nowrap items-center w-full max-w-[1200px] h-auto md:h-[400px] p-6 md:p-0">
        {/* Left Section */}
        <div className="md:w-2/3 w-full text-center md:text-left lg:ml-10">
          <p className="text-gray-700 text-lg">Our Newsletter</p>
          <h2 className="text-2xl md:text-[25px] font-bold mt-2 text-gray-800">
            Get Weekly Update. Sign Up And Get Up To <br />
            <span className="text-red-500 underline">20% Off</span> Your First Purchase
          </h2>
          <div className="flex items-center gap-4 mt-6 border border-gray-800 rounded-full w-full max-w-[500px] p-1 mx-auto md:mx-0">
            <input
              type="email"
              placeholder="Write your Email Address"
              className="flex-1 p-3 outline-none"
            />
            <button className="bg-gray-900 text-white px-6 py-3 rounded-full text-lg">
              Subscribe
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/3 w-full flex justify-center md:justify-end relative mt-6 md:mt-0">
          <Image
            src="/newsletter-1.png"
            alt="Happy Customers"
            className="w-full max-w-[300px] md:max-w-[700px]"
            height={300}
            width={300}
          />
          <span className="absolute top-0 left-5 text-3xl">✨</span>
        </div>
      </div>
    </div>
  );
}
