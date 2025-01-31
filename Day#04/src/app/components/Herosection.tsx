"use client";
import Image from "next/image";

function Herosection() {
  return (
    <>
      <section className="relative bg-white flex flex-col lg:flex-row h-[80vh]">
        {/* Hero Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Rectangle 2.svg"  // Replace with your image source
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center mt-20 ml-20 min-h-screen px-4 py-12 sm:px-6 lg:px-8 ml-10 text-center lg:text-left">
          <div className="max-w-3xl mx-auto text-black">
            {/* Title */}
            <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-7xl mb-4 ">
              FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
            </h1>
            {/* Subtitle */}
            <p className="text-lg sm:text-xl mb-8 text-gray-500">
              Browse through our diverse range of meticulously crafted garments, designed <br /> to bring out your individuality and cater to your sense of style.
            </p>
            {/* Button */}
            <a
              href="/all-products"
              className="inline-block px-20 py-3 text-lg font-medium text-white bg-black rounded-full shadow-xl hover:bg-gray-100 hover:text-black transition duration-300"
            >
              Shop Now
            </a>
          </div>
        </div>
      </section>  
    </>
  );
};

export default Herosection;
