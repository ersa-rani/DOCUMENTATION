"use client";
import Link from "next/link";
import { useState } from "react";
import { CgProfile, CgShoppingCart } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      {/* Black Ribbon */}
      <div className="bg-black text-white text-center py-2">
        <div className="flex justify-center items-center gap-2">
          <p className="text-sm">Sign up and get 20% off on your first order.</p>
          <Link href="" className="text-sm font-medium underline hover:text-gray-300 mr-20">
            Sign Up Now
          </Link>
          
          <div className=" flex items-center ">
          <RxCross1 className="text-white font-bold"/>
          </div>
          </div>
      </div>

      {/* Header */}
      <header className="bg-white font-sans">
        <div className="px-4 mx-auto max-w-7xl sm:px-6">
          <nav className="relative  flex items-center justify-between h-16 bg-white lg:h-24 lg:px-2 lg:py-6">
            {/* Logo */}
            <div className="flex-shrink-0 font-extrabold text-4xl drop-shadow-lg">
              <a
                href="/"
                title=""
                className="flex F0F0F0"
              >
                SHOP.CO
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden ml-10 lg:flex lg:items-center lg:mr-auto lg:space-x-10 font-semibold text-[24px] drop-shadow-lg shadow-gray-300">
            <Link
      href="/casual" // Use the correct path here
      className="flex items-center text-[18px] text-black transition-all duration-200 hover:font-bold hover:border-b-2 hover:shadow-black focus:shadow-outline"
    >
      Shop
      <IoIosArrowDown className="ml-1" size={20} />
    </Link>

    <Link
      href="/" // Use the correct path here
      className="flex items-center text-[18px] text-black transition-all duration-200 hover:font-bold hover:border-b-2 hover:shadow-black focus:shadow-outline"
    >
      On Sale
      <IoIosArrowDown className="ml-1" size={20} />
    </Link>
              <a
                href="/all-products"
                title=""
                className="text-[18px] text-black transition-all duration-200 hover:font-bold hover:border-b-2 hover:shadow-black focus:shadow-outline"
              >
                New Arrival
              </a>
              <a
                href="/casual"
                title=""
                className="text-[18px] text-black transition-all duration-200 hover:font-bold hover:border-b-2 hover:shadow-black focus:shadow-outline"
              >
                Brands
              </a>
            </div>

            {/* Search Bar */}
            <div className="mr-6 bg-[#F0F0F0] flex items-center ml-3 space-x-4 border rounded-full shadow-xl focus:outline-none focus:ring-2 focus:ring-black-600 text-[12px] w-full max-w-md">
              <FaSearch className="text-gray-400 text-2xl font-semibold ml-4" />
              <input
                type="text"
                className="flex-1 py-3 px-4 text-lg bg-transparent focus:outline-none"
                placeholder="What are you looking for?"
              />
            </div>

            {/* Icons */}
            <Link href="/cart" className="text-black">
              <CgShoppingCart className="mr-4 text-2xl hover:text-gray-700 transition-colors duration-200" />
            </Link>


            <Link href="#" className="text-black">
              <CgProfile className="text-2xl hover:text-gray-700 transition-colors duration-200" />
            </Link>
          </nav>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="flex flex-col py-4 space-y-2 lg:hidden">
              <a
                href="#"
                title=""
                className="py-2 text-normal font-normal text-black transition-all duration-200 hover:font-bold hover:border-b-2 hover:shadow-black focus:shadow-outline"
              >
                Home
              </a>
              <a
                href="#"
                title=""
                className="py-2 text-base font-normal text-black transition-all duration-200 hover:font-bold hover:border-b-2 hover:shadow-black focus:shadow-outline"
              >
                Contact
              </a>
              <a
                href="#"
                title=""
                className="py-2 text-base font-normal text-black transition-all duration-200 hover:font-bold hover:border-b-2 hover:shadow-black focus:shadow-outline"
              >
                About
              </a>
              <a
                href="#"
                title=""
                className="py-2 text-base font-normal text-black transition-all duration-200 hover:font-bold hover:border-b-2 hover:shadow-black focus:shadow-outline"
              >
                SignUp
              </a>
            </nav>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
