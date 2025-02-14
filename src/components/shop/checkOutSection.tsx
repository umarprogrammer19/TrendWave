
export default function CheckoutSection() {
  return (
    <div className="bg-[#f8f3e8] py-10 px-5 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 mb-12">
        {/* Billing Details Section */}
        <div className="">
          <h2 className="text-3xl font-bold mb-5">Billing Details</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mt-6">
                <label className="block text-md font-medium mb-1">First Name <span className="text-red-500 text-xl">*</span></label>
                <input
                  type="text"
                  placeholder="Ex: Thomas"
                  className="w-full border border-gray-300 rounded-lg p-4"
                />
              </div>
              <div className="mt-6">
                <label className="block text-md font-medium mb-1">Last Name <span className="text-red-500 text-xl">*</span></label>
                <input
                  type="text"
                  placeholder="Ex: Alison"
                  className="w-full border border-gray-300 rounded-lg p-4"
                />
              </div>
            </div>
            <div>
              <label className="block text-md font-medium mb-1">Company Name (Optional)</label>
              <input
                type="text"
                placeholder="Ex: Alison"
                className="w-full border border-gray-300 rounded-lg p-4"
              />
            </div>
            <div>
              <label className="block text-md font-medium mb-1">Country / Region <span className="text-red-500 text-xl">*</span></label>
              <select className="w-full border border-gray-300 rounded-lg p-4">
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Canada</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-md font-medium mb-1">Postcode / ZIP <span className="text-red-500 text-xl">*</span></label>
                <input
                  type="text"
                  placeholder="Ex: WC2N 5DU"
                  className="w-full border border-gray-300 rounded-lg p-4"
                />
              </div>
              <div>
                <label className="block text-md font-medium mb-1">Town / City <span className="text-red-500 text-xl">*</span></label>
                <input
                  type="text"
                  placeholder="Ex: London"
                  className="w-full border border-gray-300 rounded-lg p-4"
                />
              </div>
            </div>
            <div>
              <label className="block text-md font-medium mb-1">Street Address <span className="text-red-500 text-xl">*</span></label>
              <input
                type="text"
                placeholder="Ex: 123 Elm Street"
                className="w-full border border-gray-300 rounded-lg p-2 mb-4"
              />
              <input
                type="text"
                placeholder="Ex: Apartment, suite, unit, etc. (optional)"
                className="w-full border border-gray-300 rounded-lg p-4"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-md font-medium mb-1">Phone Number <span className="text-red-500 text-xl">*</span></label>
                <input
                  type="text"
                  placeholder="Ex: +1 (555) 123-4567"
                  className="w-full border border-gray-300 rounded-lg p-4"
                />
              </div>
              <div>
                <label className="block text-md font-medium mb-1">Email Address <span className="text-red-500 text-xl">*</span></label>
                <input
                  type="email"
                  placeholder="Ex: example@domain.com"
                  className="w-full border border-gray-300 rounded-lg p-4"
                />
              </div>
            </div>
            <div>
              <label className="block text-md font-medium mb-1">Order Notes (Optional)</label>
              <textarea
                placeholder="e.g., special notes for delivery"
                className="w-full border border-gray-300 rounded-lg p-4"
              ></textarea>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="create-account" />
              <label htmlFor="create-account" className="text-md">
                Create an account?
              </label>
            </div>
          </form>
        </div>

        {/* Order Summary and Payment Section */}
        <div>
          <h2 className="text-3xl font-bold mb-5">Billing Details</h2>
          <div className="lg p-5 mb-5">
            <ul className="space-y-5 text-sm font-bold text-gray-500">
            <li className="flex justify-between">
                <span className="text-lg text-gray-700">Product</span>
                <span className="text-lg text-gray-700">Subtotal</span>
              </li>
              <hr className=""/>
              <li className="flex justify-between">
                <span>Women Red & White Striped Crepe Top <span className="text-red-700">x1</span></span>
                <span>$50.00</span>
              </li>
              <li className="flex justify-between">
                <span>Women Red & White Striped Crepe Top <span className="text-red-700">x1</span></span>
                <span>$50.00</span>
              </li>
              <li className="flex justify-between">
                <span>Women Red & White Striped Crepe Top <span className="text-red-700">x1</span></span>
                <span>$50.00</span>
              </li>
            </ul>
            <hr className="my-3" />
            <div className="flex justify-between font-smibold text-lg text-gray-800">
              <span>Subtotal</span>
              <span>$150.00</span>
            </div>
            <hr className="mt-2"/>
            <div className="flex justify-between font-samibold mt-4 text-lg text-gray-800">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <hr className="my-3" />
            <div className="flex justify-between font-samibold text-lg text-gray-800">
              <span>Total</span>
              <span>$150.00</span>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-3">Payments Method</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2 bg-white p-3">
                <input type="radio" id="bank-transfer" name="payment-method" />
                <label htmlFor="bank-transfer" className="font-samibold text-medium text-gray-800">
                Direct Bank Transfer
                </label>
              </div>
              <div className="flex items-center gap-2 bg-white p-3">
                <input type="radio" id="check-payments" name="payment-method" />
                <label htmlFor="check-payments" className="font-samibold text-medium text-gray-800">
                  Check Payments
                </label>
              </div>
              <div className="flex items-center gap-2 bg-white p-3">
                <input type="radio" id="cash-on-delivery" name="payment-method" />
                <label htmlFor="cash-on-delivery" className="font-samibold text-medium text-gray-800">
                  Cash On Delivery
                </label>
              </div>
            </div>
            <button className="bg-gray-900 text-medium text-white p-4 px-6 rounded-[50px] mt-5 hover:bg-gray-800 font-bold">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
