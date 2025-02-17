"use client";
import React, { useState } from "react";
import { Search, Star, Heart, ShoppingCart, Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "../../public/logo-main.png";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white relative z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Image src={logo} alt="logo" height={150} width={150} />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="font-bold text-black hover:text-orange-500 transition">
            Home
          </Link>

          {/* Shop Dropdown */}
          <div className="relative group">
            <Link href="/" className="font-bold text-black hover:text-orange-500 transition flex items-center">
              Shop <span className="text-sm ml-1">&#x25BC;</span>
            </Link>
            <div className="absolute left-0 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity z-50">
              <Link href="#" className="block px-4 py-2 text-black hover:bg-orange-500 hover:text-white">Shop Grid</Link>
              <Link href="#" className="block px-4 py-2 text-black hover:bg-orange-500 hover:text-white">Shop Left Sidebar</Link>
              <Link href="#" className="block px-4 py-2 text-black hover:bg-orange-500 hover:text-white">Shop Right Sidebar</Link>
              <Link href="/productdetail" className="block px-4 py-2 text-black hover:bg-orange-500 hover:text-white">Product Details</Link>
              <Link href="/cart" className="block px-4 py-2 text-black hover:bg-orange-500 hover:text-white">Cart</Link>
              <Link href="/checkout" className="block px-4 py-2 text-black hover:bg-orange-500 hover:text-white">Checkout</Link>
              <Link href="/wishlist" className="block px-4 py-2 text-black hover:bg-orange-500 hover:text-white">Wishlist</Link>
            </div>
          </div>

          {/* Blog Dropdown */}
          <div className="relative group">
            <a href="#" className="font-bold text-black hover:text-orange-500 transition flex items-center">
              Blogs <span className="text-sm ml-1">&#x25BC;</span>
            </a>
            <div className="absolute left-0 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity z-50">
              <a href="#" className="block px-4 py-2 text-black hover:bg-orange-500 hover:text-white">Our Blog</a>
              <a href="#" className="block px-4 py-2 text-black hover:bg-orange-500 hover:text-white">Blog Details</a>
            </div>
          </div>

          {/* Pages Dropdown */}
          <div className="relative group">
            <a href="#" className="font-bold text-black hover:text-orange-500 transition flex items-center">
              Pages <span className="text-sm ml-1">&#x25BC;</span>
            </a>
            <div className="absolute left-0 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity z-50">
              <a href="#" className="block px-4 py-2 text-black hover:bg-orange-500 hover:text-white">About Us</a>
              <a href="#" className="block px-4 py-2 text-black hover:bg-orange-500 hover:text-white">FAQs</a>
            </div>
          </div>

          <a href="#" className="font-bold text-black hover:text-orange-500 transition">
            Contact
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-black hover:text-orange-500 transition">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Icons */}
        <div className="hidden md:flex space-x-6">
          <Search className="text-black hover:text-orange-500 cursor-pointer transition w-6 h-6" />
          <Star className="text-black hover:text-orange-500 cursor-pointer transition w-4 h-4 mt-2" />
          <div className="relative">
            <Heart className="text-black hover:text-orange-500 cursor-pointer transition w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-orange-500 text-black text-xs font-bold rounded-full px-1">
              12
            </span>
          </div>
          <Star className="text-black hover:text-orange-500 cursor-pointer transition w-4 h-4 mt-2" />
          <div className="relative">
            <ShoppingCart className="text-black hover:text-orange-500 cursor-pointer transition w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-orange-500 text-black text-xs font-bold rounded-full px-1">
              01
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 z-50">
          <a href="#" className="block px-6 py-2 font-bold text-black hover:text-orange-500 transition">
            Home
          </a>

          {/* Mobile Shop Dropdown */}
          <details className="px-6 py-2">
            <summary className="font-bold text-black hover:text-orange-500 cursor-pointer">
              Shop
            </summary>
            <div className="ml-4">
              <a href="#" className="block py-1 text-black hover:text-orange-500">Shop Grid</a>
              <a href="#" className="block py-1 text-black hover:text-orange-500">Shop Left Sidebar</a>
              <a href="#" className="block py-1 text-black hover:text-orange-500">Shop Right Sidebar</a>
              <a href="#" className="block py-1 text-black hover:text-orange-500">Product Details</a>
              <a href="#" className="block py-1 text-black hover:text-orange-500">Cart</a>
              <a href="#" className="block py-1 text-black hover:text-orange-500">Checkout</a>
              <a href="#" className="block py-1 text-black hover:text-orange-500">Wishlist</a>
            </div>
          </details>

          <a href="#" className="block px-6 py-2 font-bold text-black hover:text-orange-500 transition">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


