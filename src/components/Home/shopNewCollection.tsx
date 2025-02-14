'use client';

export default function NewCollection() {
  return (
    <div className="bg-cream p-[70px] lg:p-1 lg:mt-[100px] max-w-[1200px] mx-auto">
      <div className="text-center mb-8">
        <p className="text-red-500 font-bold">New Collection</p>
        <h2 className="text-4xl font-bold mt-4">Shop New Collection</h2>
      </div>
      <div className="flex flex-col gap-6 mt-[60px]">
        {/* First Row */}
        <div className="flex flex-col md:flex-row gap-6 h-auto md:h-[350px]">
          <div
            className="relative bg-purple-900 p-6 rounded-[20px] flex flex-col items-start w-full md:w-[500px] overflow-hidden"
            style={{
              backgroundImage: 'url(/banner-img1.png)',
              backgroundSize: '55%', 
              backgroundPosition: 'bottom right',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <span className="bg-white text-gray-600 px-4 py-1 text-medium relative mt-8">
              Up to 40% Off
            </span>
            <h3 className="text-[25px] text-white font-semibold mt-5 relative">Shop new Collection</h3>
            <h3 className="text-[25px] text-white font-semibold relative">For Women</h3>
            <h3 className="text-[25px] text-white font-semibold relative">------------------------------</h3>
            <button className="mt-12 font-bold border border-white text-white px-6 p-3 rounded-[50px] relative">
              Shop Now
            </button>
          </div>
          <div
            className="relative bg-blue-100 p-6 rounded-[20px] flex flex-col items-start w-full md:w-2/3 overflow-hidden"
            style={{
              backgroundImage: 'url(/banner-img2.png)',
              backgroundSize: '30%',
              backgroundPosition: 'bottom right',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <span className="text-red-500 font-semibold text-4xl relative mt-10 ml-4">45% Off</span>
            <h3 className="text-4xl font-semibold mt-6 ml-4">Discover the Latest</h3>
            <h3 className="text-4xl font-semibold mt-3 ml-4">Womens Collection</h3>
            <button className="mt-5 bg-gray-900 text-white p-4 px-8 font-bold rounded-[50px] relative ml-4">
              Shop Now
            </button>
          </div>
        </div>
        {/* Second Row */}
        <div className="flex flex-col md:flex-row gap-6 h-auto md:h-[350px]">
          <div
            className="relative bg-gray-100 p-6 rounded-[20px] flex flex-col items-start w-full md:w-2/3 overflow-hidden"
            style={{
              backgroundImage: 'url(/banner-img3.png)',
              backgroundSize: '30%', 
              backgroundPosition: 'bottom right',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <span className="text-red-500 font-semibold text-4xl relative mt-10 ml-4">35% Off</span>
            <h3 className="text-4xl font-semibold mt-6 ml-4">Explore Fresh Arrivals</h3>
            <h3 className="text-4xl font-semibold mt-3 ml-4">in Women’s Fashion</h3>
            <button className="mt-5 bg-gray-900 text-white p-4 px-8 font-bold rounded-[50px] relative ml-4">
              Shop Now
            </button>
          </div>
          <div
            className="relative bg-orange-800 p-6 rounded-[20px] flex flex-col items-start w-full md:w-[500px] overflow-hidden"
            style={{
              backgroundImage: 'url(/banner-img4.png)',
              backgroundSize: '55%', 
              backgroundPosition: 'bottom right',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <span className="bg-white text-gray-600 px-4 py-1 text-medium relative mt-8">
              Up to 40% Off
            </span>
            <h3 className="text-[25px] text-white font-semibold mt-5 relative">Unveil New Trends</h3>
            <h3 className="text-[25px] text-white font-semibold relative">in Womens Clothing</h3>
            <h3 className="text-[25px] text-white font-semibold relative">------------------------------</h3>
            <button className="mt-12 font-bold border border-white text-white px-6 p-3 rounded-[50px] relative">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
