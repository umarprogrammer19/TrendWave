import Link from 'next/link';
import Image from 'next/image';
import { Eye, Heart, ShoppingCart } from "lucide-react";

const ShopPage = () => {
    // Dummy data for products
    const products = [
        {
            id: 1,
            image: "/feature-product-6.png",
            title: "Lightweight Linen Summer Dress with Belt",
            prevPrice: 80.0,
            newPrice: 40.0,
            discount: "10% Off",
            rating: 5,
            reviews: 65,
        },
        {
            id: 2,
            image: "/feature-product-5.png",
            title: "Casual Striped Shirt for Men",
            prevPrice: 50.0,
            newPrice: 35.0,
            discount: "30% Off",
            rating: 4,
            reviews: 45,
        },
        {
            id: 3,
            image: "/feature-product-7.png",
            title: "Casual Striped Shirt for Men",
            prevPrice: 50.0,
            newPrice: 35.0,
            discount: "30% Off",
            rating: 4,
            reviews: 45,
        },
        {
            id: 4,
            image: "/feature-product-8.png",
            title: "Casual Striped Shirt for Men",
            prevPrice: 50.0,
            newPrice: 35.0,
            discount: "30% Off",
            rating: 4,
            reviews: 45,
        },
        {
            id: 5,
            image: "/feature-product-9.png",
            title: "Casual Striped Shirt for Men",
            prevPrice: 50.0,
            newPrice: 35.0,
            discount: "30% Off",
            rating: 4,
            reviews: 45,
        },
        {
            id: 6,
            image: "/feature-product-10.png",
            title: "Casual Striped Shirt for Men",
            prevPrice: 50.0,
            newPrice: 35.0,
            discount: "30% Off",
            rating: 4,
            reviews: 45,
        },
        {
            id: 7,
            image: "/feature-product-11.png",
            title: "Casual Striped Shirt for Men",
            prevPrice: 50.0,
            newPrice: 35.0,
            discount: "30% Off",
            rating: 4,
            reviews: 45,
        },
        {
            id: 8,
            image: "/feature-product-12.png",
            title: "Casual Striped Shirt for Men",
            prevPrice: 50.0,
            newPrice: 35.0,
            discount: "30% Off",
            rating: 4,
            reviews: 45,
        },
        {
            id: 9,
            image: "/feature-product-13.png",
            title: "Casual Striped Shirt for Men",
            prevPrice: 50.0,
            newPrice: 35.0,
            discount: "30% Off",
            rating: 4,
            reviews: 45,
        },
        {
            id: 10,
            image: "/feature-product-14.png",
            title: "Casual Striped Shirt for Men",
            prevPrice: 50.0,
            newPrice: 35.0,
            discount: "30% Off",
            rating: 4,
            reviews: 45,
        },
        {
            id: 11,
            image: "/deal-1.png",
            title: "Casual Striped Shirt for Men",
            prevPrice: 50.0,
            newPrice: 35.0,
            discount: "30% Off",
            rating: 4,
            reviews: 45,
        },
        {
            id: 12,
            image: "/deal-2.png",
            title: "Casual Striped Shirt for Men",
            prevPrice: 50.0,
            newPrice: 35.0,
            discount: "30% Off",
            rating: 4,
            reviews: 45,
        },
    ];

    return (
        <section className="py-30">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    {/* Sidebar */}
                    <div className="w-full lg:w-1/4 lg:pl-10 lg:pr-10">
                        <div className="space-y-8">
                            {/* Product Categories Widget */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h4 className="text-lg font-semibold mb-4">Product Categories</h4>
                                <ul className="space-y-2">
                                    {[
                                        { id: "check1", label: "Women's Clothing", count: 45 },
                                        { id: "check2", label: "Men's Clothing", count: 40 },
                                        { id: "check3", label: "Kids' Clothing", count: 30 },
                                        { id: "check4", label: "Accessories", count: 25 },
                                        { id: "check5", label: "Shoes", count: 50 },
                                        { id: "check6", label: "Bags", count: 20 },
                                    ].map((category) => (
                                        <li key={category.id}>
                                            <label className="flex items-center space-x-2">
                                                <input type="checkbox" className="form-checkbox" />
                                                <span>{category.label} <span className="text-gray-500">({category.count})</span></span>
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Price Filter Widget */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h4 className="text-lg font-semibold mb-4">Price Filter</h4>
                                <div className="space-y-4">
                                    <input type="range" min="0" max="100" className="w-full" />
                                    <div className="flex justify-between text-sm text-gray-600">
                                        <span>$0</span>
                                        <span>$100</span>
                                    </div>
                                </div>
                            </div>

                            {/* Brands Widget */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h4 className="text-lg font-semibold mb-4">Brands</h4>
                                <ul className="space-y-2">
                                    {[
                                        { id: "br_check1", label: "Nike", count: 19 },
                                        { id: "br_check2", label: "Zara", count: 55 },
                                        { id: "br_check3", label: "Adidas", count: 34 },
                                        { id: "br_check4", label: "H&M", count: 29 },
                                        { id: "br_check5", label: "Puma", count: 42 },
                                        { id: "br_check6", label: "Levi's", count: 38 },
                                    ].map((brand) => (
                                        <li key={brand.id}>
                                            <label className="flex items-center space-x-2">
                                                <input type="checkbox" className="form-checkbox" />
                                                <span>{brand.label} <span className="text-gray-500">({brand.count})</span></span>
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Color Filter Widget */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h4 className="text-lg font-semibold mb-4">Color</h4>
                                <ul className="flex space-x-3">
                                    {["black", "red", "blue", "yellow"].map((color, index) => (
                                        <li key={index}>
                                            <label className="flex items-center space-x-2 cursor-pointer">
                                                <input type="radio" name="color" className="hidden peer" />
                                                <span
                                                    className={`w-5 h-5 rounded-full border-2 border-gray-300 
                        peer-checked:border-gray-900 transition-all duration-300 
                        hover:scale-110 hover:brightness-75`}
                                                    style={{ backgroundColor: color }}
                                                ></span>
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>



                            {/* Size Filter Widget */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h4 className="text-lg font-semibold mb-4">Size</h4>
                                <ul className="flex flex-wrap gap-2">
                                    {["Slim Fit", "S", "M", "L", "XL", "2XL", "XXL"].map((size, index) => (
                                        <li key={index}>
                                            <button
                                                className="px-4 py-2 border border-gray-400 rounded-lg text-gray-700 
                               hover:bg-blue-600 hover:text-white transition-all 
                               focus:bg-blue-600 focus:text-white active:bg-blue-700"
                                            >
                                                {size}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>


                            {/* Sidebar Banner Widget */}
                            <div
                                className="bg-white p-6 rounded-lg shadow-md relative overflow-hidden bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: "url('/banner-img4.png')" }} // ✅ Background Image Set
                            >
                                {/* Background Overlay for Better Visibility */}
                                <div className="absolute inset-0 bg-black/30"></div>

                                <div className="relative z-10 text-white">
                                    <span className="text-sm font-semibold text-red-400">BIG SALE</span>
                                    <h3 className="text-2xl font-bold">
                                        40% <span className="text-lg">off Each Product</span>
                                    </h3>
                                    <Link
                                        href="/shops"
                                        className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
                                    >
                                        Shop Now
                                    </Link>
                                </div>
                            </div>


                        </div>
                    </div>

                    {/* Main Shop Content */}
                    <div className="w-full lg:w-3/4 lg:pl-10 lg:pr-10">
                        <div className="space-y-8">
                            {/* Shop Filter */}
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <div className="flex flex-wrap items-center justify-between">
                                    <div className="w-full sm:w-auto mb-4 sm:mb-0">
                                        <p className="text-gray-600">Showing <span className="font-semibold">01-12 of 12 Results</span></p>
                                    </div>
                                    <div className="w-full sm:w-auto mb-4 sm:mb-0">
                                        <div className="flex space-x-4">
                                            <a href="#" className="text-gray-600 hover:text-blue-600">
                                                <i className="far fa-th"></i>
                                            </a>
                                            <a href="#" className="text-gray-600 hover:text-blue-600">
                                                <i className="far fa-list"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="w-full sm:w-auto">
                                        <div className="relative">
                                            <select className="w-full p-2 border rounded appearance-none bg-white pr-8">
                                                <option>Default</option>
                                                <option>Sort by Newness</option>
                                                <option>Price High To Low</option>
                                                <option>Price Low To High</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Product Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {products.map((product) => (
                                    <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden group relative">
                                        {/* Product Image */}
                                        <div className="relative">
                                            <Image src={product.image} alt={product.title} width={300} height={400} className="w-full" />
                                            <div className="absolute top-4 left-0 bg-red-600 text-white px-4 py-1 rounded-r-full">{product.discount}</div>
                                            {/* Hover Icons */}
                                            <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <a href="#" className="block w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white">
                                                    <Eye className="w-5 h-5" />
                                                </a>
                                                <a href="#" className="block w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white">
                                                    <Heart className="w-5 h-5" />
                                                </a>
                                            </div>
                                            {/* Add to Cart Button */}
                                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <a
                                                    href="#"
                                                    className="bg-gradient-to-r from-blue-500 to-blue-400 text-white px-6 py-2 rounded-full flex items-center justify-center gap-2
                                                    hover:from-blue-600 hover:to-blue-500 transition-all duration-300 shadow-md hover:shadow-lg 
                                                    transform hover:scale-105 text-sm font-medium whitespace-nowrap"
                                                >
                                                    <ShoppingCart className="w-4 h-4" />
                                                    Add to Cart
                                                </a>
                                            </div>

                                        </div>
                                        {/* Product Details */}
                                        <div className="p-4">
                                            <div className="flex items-center space-x-1 mb-2">
                                                {[...Array(product.rating)].map((_, i) => (
                                                    <i key={i} className="fas fa-star text-yellow-400"></i>
                                                ))}
                                                <a href="#" className="text-gray-500">({product.reviews})</a>
                                            </div>
                                            <h4 className="text-lg font-semibold mb-2">
                                                <Link href="/shop-details">{product.title}</Link>
                                            </h4>
                                            <div className="flex space-x-2">
                                                <span className="text-gray-500 line-through">${product.prevPrice}</span>
                                                <span className="text-blue-600 font-semibold">${product.newPrice}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopPage;