import { Trash, Minus, Plus } from "lucide-react";
import Image from "next/image";

const CartSection = () => {
  return (
    <div className="bg-[#fdf4e3] min-h-screen p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mt-24">
        {/* Cart Items Section */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold flex items-center gap-2 mb-6">
            Total Cart Item: 04
          </h1>
          <div className="bg-[#fdf4e3] overflow-hidden">
            <table className="w-full text-left">
              <thead >
                <tr>
                  <th className="p-4 text-xl font-semibold">Products Details</th>
                  <th className="p-4 text-xl font-semibold">Price</th>
                  <th className="p-4 text-xl font-semibold">Quantity</th>
                  <th className="p-4 text-xl font-semibold">Total</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    id: 1,
                    image: "/cart-1.jpg",
                    title: "Athletic Leggings With Mesh Panels",
                    color: "Red",
                    size: "XL",
                    price: 180,
                  },
                  {
                    id: 2,
                    image: "/cart-2.jpg",
                    title: "Lightweight Linen Summer Dress With Belt",
                    color: "Red",
                    size: "M",
                    price: 180,
                  },
                  {
                    id: 3,
                    image: "/cart-3.jpg",
                    title: "Floral Print Sundress With Adjustable Straps",
                    color: "Green",
                    size: "XXL",
                    price: 180,
                  },
                  {
                    id: 4,
                    image: "/cart-4.jpg",
                    title: "Embroidered Square Neck Sheath Gown Red Colors",
                    color: "Red",
                    size: "Slim Fit",
                    price: 180,
                  },
                ].map((product) => (
                  <tr key={product.id} className="border-b">
                    <td className="p-4 flex items-center gap-4">
                      <Image
                        src={product.image}
                        alt={product.title}
                        className="w-18 h-22 border"
                      height={100}
                      width={100}
                      />
                      <div>
                        <h2 className="text-lg w-[200px] font-samibold">{product.title}</h2>
                        <p className="text-sm font-bold text-gray-500">
                          {product.color} <span className="text-yellow-400">•</span> {product.size}
                        </p>
                      </div>
                    </td>
                    <td className="p-4 text-lg font-bold">${product.price}.00</td>
                    <td className="p-4 flex items-center gap-2 mb-4">
                      <button className="w-8 h-8 border rounded-full flex justify-center items-center text-gray-600">
                        <Minus className="w-4 h-4" />
                      </button>
                      <span>1</span>
                      <button className="w-8 h-8 border rounded-full flex justify-center items-center text-gray-600">
                        <Plus className="w-4 h-4" />
                      </button>
                      <button className="ml-2 text-red-600">
                        <Trash className="w-5 h-5" />
                      </button>
                    </td>
                    <td className="p-4 text-lg font-bold">${product.price}.00</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between items-center mt-6">
            <button className="bg-gray-900 text-white p-4 px-6 rounded-[50px] hover:bg-gray-800">
              Continue Shopping
            </button>
            <button className="bg-gray-900 text-white p-4 px-6 rounded-[50px] hover:bg-red-500">
              Clear Cart
            </button>
          </div>
        </div>

        {/* Coupon and Total Section */}
        <div>
          <div className="bg-white border-2 border-black shadow-lg lg:w-[370px] rounded-lg p-10 mb-6">
            <h2 className="text-2xl font-bold mb-5">Use Coupon Code</h2>
            <p className="mb-6 text-gray-500" >Enter your coupon code if you have <br /> one.</p>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter your coupon code"
                className="flex-1 px-4 py-4 rounded-lg focus:outline-none"
              />
              <button className="bg-black text-white px-4 py-4 rounded-lg hover:bg-gray-800">
                Apply
              </button>
            </div>
          </div>
          
          <div className="bg-white lg:mt-10 shadow-lg border-2 border-black lg:w-[370px] rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-3">Cart Totals</h2>
            <div className="flex justify-between text-xl font-bold mb-3">
              <span>Subtotal</span>
              <span>$890.00</span>
            </div>
            <hr className="mb-3" />
            <div className="mb-4">
              <h3 className="text-2xl font-bold">Shipping</h3>
              <div className="flex flex-col mt-3 gap-3 text-gray-500">
                <label className="flex items-center gap-2">
                  <input type="radio" name="shipping" />
                  Free Delivery ($0.00)
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="shipping" />
                  Flat Rate ($50.00)
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="shipping" />
                  Local Area ($10.00)
                </label>
              </div>
            </div>
            <br />
            <hr className="mb-4" />
            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>$990.00</span>
            </div>
            <button className="w-full mt-8 bg-gray-900 text-white p-4 rounded-lg hover:bg-gray-800">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSection;
