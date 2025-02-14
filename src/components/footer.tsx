import Image from "next/image";
import logo from "../../public/logo-main.png"
import image1 from "../../public/recent-post-1.png"
import image2 from "../../public/recent-post-2.png"
import image3 from "../../public/recent-post-3.png"
import payment from "../../public/payment-method.png"


const Footer = () => {

  return (
    <>
<footer className="footer bg-[#fff7ee] text-gray-600 py-10">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
    {/* Company Info */}
    <div className="text-[19px]">
        <div>
            <Image src={logo} alt="logo" width={150} height={150} />
        </div>
      <p className="mt-6">
        Pesco is an exciting International brand we provide high-quality cloths
      </p>
      <ul className="mt-4">
        <li>Email: info@mydomain.com</li>
        <li className="mt-2">Phone: info@mydomain.com</li>
      </ul>
      <div className="mt-4">
        <p className="font-bold text-gray-800">Find Us:</p>
        <div className="flex space-x-3 mt-2">
          <a href="#" className="text-[#4267B2] hover:text-blue-600"><i className="fab fa-facebook"></i></a>
          <a href="#" className="text-[#C13584] hover:text-pink-600"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-[#0A66C2] hover:text-blue-500"><i className="fab fa-linkedin"></i></a>
          <a href="#" className="text-[#1DA1F2] hover:text-blue-400"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
    </div>
    {/* Customer Services */}
    <div className="text-[18px]">
      <h3 className="text-2xl font-bold text-gray-800">Customer Services</h3>
      <ul className="mt-6 space-y-5">
        <li>⭐ Collections & Delivery</li>
        <li>⭐ Returns & Refunds</li>
        <li>⭐ Terms & Conditions</li>
        <li>⭐ Delivery Return</li>
        <li>⭐ Store Locations</li>
      </ul>
    </div>
    {/* Quick Links */}
    <div className="text-[18px]">
      <h3 className="text-2xl font-bold text-gray-800">Quick Link</h3>
      <ul className="mt-6 space-y-5">
        <li>⭐ Privacy Policy</li>
        <li>⭐ Terms Of Use</li>
        <li>⭐ FAQ</li>
        <li>⭐ Contact</li>
        <li>⭐ Login / Register</li>
      </ul>
    </div>
    {/* Recent Posts */}
    <div>
      <h3 className="text-2xl font-bold text-gray-800">Recent Post</h3>
      <ul className="mt-6 space-y-8">
        <li>
          <div className="flex">
            <Image src={image1} alt="Post Image 1" height={150} width={150} className="rounded-lg w-16 h-16 rounded mr-4" />
            <div>
              <p className="font-bold text-sm text-gray-800">Tips on Finding Affordable Fashion Gems Online</p>
              <small>July 11, 2023</small>
            </div>
          </div>
        </li>
        <li>
          <div className="flex">
          <Image src={image2} alt="Post Image 2" height={150} width={150} className="rounded-lg w-16 h-16 rounded mr-4" />
          <div>
              <p className="font-bold text-sm text-gray-800">Mastering the Art of Fashion E-commerce Marketing</p>
              <small>July 11, 2024</small>
            </div>
          </div>
        </li>
        <li>
          <div className="flex">
          <Image src={image3} alt="Post Image 3" height={150} width={150} className="rounded-lg w-16 h-16 rounded mr-4" />
          <div>
              <p className="font-bold text-sm text-gray-800">Must-Have Trends You Can Shop Online Now</p>
              <small>July 11, 2024</small>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div className="border-t mt-8 pt-6 text-center text-sm lg:flex lg:gap-[500px]">
    <p className="lg:ml-[80px] text-lg">© 2024. All rights reserved by <span className="text-red-600">Pixelfit</span></p>
    <div className="flex justify-center space-x-4 mt-2">
      <Image src={payment} alt="Payment method image" height={400} width={400} />
    </div>
  </div>
</footer>

    </>
  );
};

export default Footer;
