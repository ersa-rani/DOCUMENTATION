"use client";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { extra } from "@/sanity/lib/queries";
import type { Product } from "@/types/products";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, FC } from "react";

const CASUAL: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts: Product[] = await client.fetch(extra);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl text-black font-extrabold text-center p-4 sm:p-8">
          Casual
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <Link href={`/product/${product._id}`} key={product._id}>
              <div className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200 cursor-pointer">
                {product.image && (
                  <Image
                    src={urlFor(product.image)?.url() || "/placeholder.svg"}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover rounded-md"
                  />
                )}
                <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center items-center mt-8">
          <Link href="/all-products">
            <button className="px-6 py-2 text-base sm:text-lg border rounded-xl text-black hover:bg-black hover:text-white transition-all duration-150 font-bold">
              View All
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CASUAL;