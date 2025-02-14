import { Star } from "lucide-react";
import Image from "next/image";

const products = [
  {
    id: 1,
    image: "/feature-product-5.png", 
    title: "Cozy women knit sweater with pockets",
    brand: "SOFOLI",
    price: "$15.60",
    originalPrice: "$34.00",
    discount: "30% Off",
  },
  {
    id: 2,
    image: "/feature-product-6.png", 
    title: "Stylish sunglasses for women",
    brand: "SOFOLI",
    price: "$19.99",
    originalPrice: "$39.99",
    discount: "20% Off",
  },
  {
    id: 3,
    image: "/feature-product-7.png", 
    title: "Men's classic trench coat",
    brand: "SOFOLI",
    price: "$49.50",
    originalPrice: "$99.00",
    discount: "40% Off",
  },
  {
    id: 4,
    image: "/feature-product-8.png", 
    title: "Elegant women's blazer",
    brand: "SOFOLI",
    price: "$29.90",
    originalPrice: "$59.80",
    discount: "10% Off",
  },
  {
    id: 5,
    image: "/feature-product-9.png", 
    title: "Stylish wide-brim hat",
    brand: "SOFOLI",
    price: "$12.99",
    originalPrice: "$25.99",
    discount: "35% Off",
  },
  {
    id: 6,
    image: "/feature-product-10.png", 
    title: "Cozy woolen scarf",
    brand: "SOFOLI",
    price: "$9.99",
    originalPrice: "$19.99",
    discount: "50% Off",
  },
  {
    id: 7,
    image: "/feature-product-11.png", 
    title: "Trendy women cardigan",
    brand: "SOFOLI",
    price: "$24.50",
    originalPrice: "$49.00",
    discount: "20% Off",
  },
  {
    id: 8,
    image: "/feature-product-12.png", 
    title: "Fashionable women's jacket",
    brand: "SOFOLI",
    price: "$34.99",
    originalPrice: "$69.99",
    discount: "15% Off",
  },
  {
    id: 9,
    image: "/feature-product-13.png", 
    title: "Warm winter beanie",
    brand: "SOFOLI",
    price: "$8.50",
    originalPrice: "$17.00",
    discount: "20% Off",
  },
  {
    id: 10,
    image: "/feature-product-14.png", 
    title: "Elegant women's handbag",
    brand: "SOFOLI",
    price: "$39.99",
    originalPrice: "$79.99",
    discount: "20% Off",
  },
];

export default function ShopProducts() {
  return (
    <section className="bg-[#fefaf4] py-12">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-2xl font-semibold text-pink-600">
          Feature Products
        </h3>
        <h2 className="text-center text-4xl font-bold text-gray-800 mt-2">
          Our Features Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 mt-10">
          {products.map((product) => (
            <div key={product.id} className="p-4">
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.title}
                  className="w-full h-60 lg:h-[270px] object-cover rounded-lg"
                  width={200}
                  height={200}
                />
                {product.discount && (
                  <span className="absolute top-2 left-2 bg-yellow-400 text-sm font-semibold text-white px-2 py-1 rounded">
                    {product.discount}
                  </span>
                )}
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-500">
                  BRAND: {product.brand}
                </h4>
                <p className="text-medium font-semibold text-gray-600">
                  {product.title}
                </p>
                <div className="flex items-center mt-2">
                  <p className="text-lg font-semibold text-gray-800">
                    {product.price}
                  </p>
                  <p className="text-lg text-gray-600 ml-2 line-through font-semibold">
                    {product.originalPrice}
                  </p>
                </div>
                <div className="flex items-center mt-2 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
