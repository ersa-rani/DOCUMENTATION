import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="relative mt-8 ">
      {/* Overlapping Black Section */}
    <div className="bg-black rounded-2xl text-white py-6 px-4 flex flex-col md:flex-row justify-between items-center ml-20 mr-20">
      <h2 className="text-5xl font-extrabold ml-5 mb-4 md:mb-0">
        STAY UP TO DATE ABOUT <br /> OUR LATEST OFFERS
      </h2>
      <div className="flex-cols p-5">
      <div className="flex items-center md:w-auto">
        <input
          type="email"
          placeholder="Enter your email address"
          className="px-4 py-2 rounded-full w-full md:max-w-sm text-black mb-3"
          aria-label="Email Address"
        />
        </div>
        <button
          className="bg-white text-black font-bold px-6  py-2 rounded-full hover:bg-gray-200"
          aria-label="Subscribe to Newsletter"
        >
          Subscribe to Newsletter
        </button>
        </div>
        </div>
      
   
    <footer className="bg-[#F0F0F0] text-black py-10 ">
      <div className="ml-20 max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 px-4">
  {/* Exclusive Section */}
  <div className="mr-4 mt-0 items-start pr-4">
    <h1 className="font-sans font-extrabold text-[40px] drop-shadow-lg shadow-black mb-4">SHOP.CO</h1>
    <p className="mb-4 text-gray-500 text-[14px]">
      We have clothes that suit your style and which you're proud to wear. From women to men.
    </p>

    <div className="flex space-x-4 mt-6">
      <a href="#" className="hover:text-gray-400">
        <img src="/images/1.svg" alt="Facebook" className="w-6 h-6" />
      </a>
      <a href="#" className="hover:text-gray-400">
        <img src="/images/2.svg" alt="Twitter" className="w-6 h-6" />
      </a>
      <a href="#" className="hover:text-gray-400">
        <img src="/images/3.svg" alt="Instagram" className="w-6 h-6" />
      </a>
      <a href="#" className="hover:text-gray-400">
        <img src="/images/4.svg" alt="LinkedIn" className="w-6 h-6" />
      </a>
    </div>
  </div>
          {/* <form className="flex items-center bg-black border border-white rounded-lg overflow-hidden">
  <input
    type="email"
    placeholder="Enter your email"
    className="w-full px-4 py-2 bg-black text-[#6c6464] focus:outline-none"
  />
  <button
    type="submit"
    className="px-4 py-2 rounded-none "
  >
    <img className="w-4 h-4" src="/images/Vector.png" alt="Submit" />
  </button>
</form> */}

        
        {/* Support Section */}
        <div className="text-gray-500 space-y-2">
          
          <h4 className="text-black text-lg mb-2">COMPANY</h4>
          <ul className="space-y-2 text-[16px]">
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Features</a></li>
            <li><a href="#" className="hover:underline">Works</a></li>
            <li><a href="#" className="hover:underline">Career</a></li>
          
          </ul>
        </div>
        {/* Account Section */}
        <div>
          <h4 className="text-lg mb-2">HELP</h4>
          <ul className="space-y-2 text-gray-500 text-[16px]">
            <li><a href="#" className="hover:underline">Customer Support</a></li>
            <li><a href="#" className="hover:underline">Delivery Details</a></li>
            <li><a href="#" className="hover:underline">Term & Conditions</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>
        {/* Quick Links Section */}
        <div>
          <h4 className="text-lg mb-2">FAQ</h4>
          <ul className="space-y-2 text-gray-500 text-[16px] ">
            <li><a href="#" className="hover:underline">Account</a></li>
            <li><a href="#" className="hover:underline">Manage Deliveries</a></li>
            <li><a href="#" className="hover:underline">Orders</a></li>
            <li><a href="#" className="hover:underline">Payments</a></li>
          </ul>
        </div>
        {/* Download App Section */}
        <div>
          <h4 className="text-lg mb-2">RESOURCES</h4>
          <ul className="space-y-2 text-gray-500  text-[16px]">
            <li><a href="#" className="hover:underline">Free eBooks</a></li>
            <li><a href="#" className="hover:underline">Development Tutorial</a></li>
            <li><a href="#" className="hover:underline">How to - Blog</a></li>
            <li><a href="#" className="hover:underline">Youtube Playlist</a></li>
          </ul>
        </div>
          

      </div>
      {/* Footer Bottom */}
<div className="flex justify-between items-center text-[#6c6464] mt-10 border-t border-gray-700 pt-5 px-20">
  {/* Text on the left */}
  <p>Shop.co © 2000-2023. All Rights Reserved</p>

  {/* Icons on the right */}
  <div className="flex space-x-4">
  <a href="#" className="hover:text-gray-400">
      <img src="/images/Badge.svg" alt="Facebook" className="w-46.61 h-30.03" />
    </a>
    <a href="#" className="hover:text-gray-400">
      <img src="/images/Badge (1).svg" alt="Facebook" className="w-46.61 h-30.03" />
    </a>
    <a href="#" className="hover:text-gray-400">
      <img src="/images/Badge (2).svg" alt="Twitter" className="w-46.61 h-30.03" />
    </a>
    <a href="#" className="hover:text-gray-400">
      <img src="/images/Badge (3).svg" alt="Instagram" className="w-46.61 h-30.03" />
    </a>
    <a href="#" className="hover:text-gray-400">
      <img src="/images/Badge (4).svg" alt="LinkedIn" className="w-46.61 h-30.03" />
    </a>
  </div>
</div>

    </footer>
    </div>
  );
};

export default Footer;
 