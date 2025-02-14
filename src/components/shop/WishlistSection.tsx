import { ShoppingCart, Eye, Minus, Plus, X } from "lucide-react";
import Image from "next/image";

export default function ProductList() {
  const products = [
    {
      id: 1,
      name: "Athletic Leggings With Mesh Panels",
      price: 180.0,
      stock: 24,
      image: "/cart-1.jpg",
    },
    {
      id: 2,
      name: "Lightweight Linen Summer Dress With Belt",
      price: 180.0,
      stock: 24,
      image: "/cart-2.jpg",
    },
    {
      id: 3,
      name: "Floral Print Sundress With Adjustable Straps",
      price: 180.0,
      stock: 24,
      image: "/cart-3.jpg",
    },
    {
      id: 4,
      name: "Embroidered Square Neck Sheath Gown Red Colors",
      price: 180.0,
      stock: 24,
      image: "/cart-4.jpg",
    },
  ];

  return (
    <div className="p-4 bg-amber-50">
      {/* Desktop Table View */}
      <div className="hidden md:block">
        <table className="w-full border-collapse mt-12">
          <thead>
            <tr className="text-left text-xl font-bold">
              <th className="p-4">
                <ShoppingCart className="inline-block mr-2" /> Products Details
              </th>
              <th className="p-4">
                <Eye className="inline-block mr-2" /> Unit Price
              </th>
              <th className="p-4">
                <Eye className="inline-block mr-2" /> Stock Status
              </th>
              <th className="p-4">
                <ShoppingCart className="inline-block mr-2" /> Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-t border-yellow-200">
                <td className="p-4 flex items-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="w-18 h-22 object-cover mr-4"
                    height={100}
                    width={100}
                  />
                  <span className="text-lg w-[200px]">{product.name}</span>
                </td>
                <td className="p-4 text-lg font-bold">${product.price.toFixed(2)}</td>
                <td className="p-4 text-medium">{product.stock} in stock</td>
                <td className="p-4 flex items-center space-x-2">
                  <button className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-full hover:bg-gray-100">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-lg">1</span>
                  <button className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-full hover:bg-gray-100">
                    <Plus className="w-4 h-4" />
                  </button>
                  <button className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-full hover:bg-red-100 text-red-500">
                    <X className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="block md:hidden mt-12 space-y-4">
        {products.map((product) => (
          <div key={product.id} className="border border-yellow-200 p-4 rounded-lg bg-white">
            <div className="flex items-center space-x-4">
              <Image src={product.image} alt={product.name} height={80} width={80} className="object-cover rounded-lg" />
              <div>
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
                <p className="text-sm text-gray-500">{product.stock} in stock</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-2">
                <button className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-full hover:bg-gray-100">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-lg">1</span>
                <button className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-full hover:bg-gray-100">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-full hover:bg-red-100 text-red-500">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
