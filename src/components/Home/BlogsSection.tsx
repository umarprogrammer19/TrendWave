import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const BlogsSection = () => {
  const blogs = [
    {
      title: "10 must-have fashion trends for this season. Those should be outstanding look",
      category: "WordPress",
      date: "Aug 29, 2024",
      image: "/blog-1.jpg", 
    },
    {
      title: "How to style your wardrobe on a budget. Make it easy for you to look great.",
      category: "WordPress",
      date: "Aug 29, 2024",
      image: "/blog-2.jpg",
    },
    {
      title: "Top 5 accessories to elevate any outfit. The ultimate guide to sustainable fashion",
      category: "WordPress",
      date: "Aug 29, 2024",
      image: "/blog-3.jpg",
    },
    {
      title: "Effortless fashion tips for everyone. How to style your wardrobe on a budget.",
      category: "WordPress",
      date: "Aug 29, 2024",
      image: "/blog-4.jpg",
    },
  ];

  return (
    <div className="bg-[#fdf7f0] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <p className="text-red-500 font-semibold text-lg">Explore Our Blogs</p>
          <h2 className="text-4xl font-bold text-gray-800 mt-2">Explore Our Blogs</h2>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 relative overflow-hidden h-[400px] duration-700 hover:bg-gray-900 hover:text-white"
            >
              {/* Content */}
              <div>
                <p className="text-gray-500 text-sm font-semibold">{blog.category} ✦ {blog.date}</p>
                <h3 className="text-lg font-semibold mt-2">
                  {blog.title}
                </h3>
                <button className="mt-3 bg-gray-900 text-white px-4 py-3 rounded-full hover:bg-gray-700 text-sm">
                  Read More
                </button>
              </div>
              {/* Image */}
              <Image
                src={blog.image}
                alt={blog.title}
                height={200}
                width={200}
                className="absolute bottom-0 right-0 w-64 h-64 rounded-full transform translate-x-12 translate-y-12 border border-white"
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center mt-8 gap-4">
          <button className="bg-gray-300 hover:bg-gray-400 p-3 rounded-full">
            <ArrowLeft className="text-gray-800" />
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 p-3 rounded-full">
            <ArrowRight className="text-gray-800" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogsSection;
