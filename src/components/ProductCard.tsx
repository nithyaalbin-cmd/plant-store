"use client";

import { useState } from "react";
import Link from "next/link";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);

  function increase() {
    setQuantity((prev) => prev + 1);
  }

  function decrease() {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  }

  const total = quantity * product.price;

  return (
    <section id="product" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">

          <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
            🌟 Currently Available
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
            {product.name}
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            {product.description}
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Product Image */}

          <div className="bg-green-50 rounded-3xl shadow-xl aspect-square flex flex-col items-center justify-center">

            <div className="text-8xl md:text-9xl">
              🌳
            </div>

            <p className="mt-6 text-gray-500 text-center">
              Product Image
              <br />
              (We'll replace this later)
            </p>

          </div>

          {/* Product Details */}

          <div>

            <div className="text-yellow-500 text-2xl">
              ★★★★★
            </div>

            <h3 className="mt-4 text-4xl font-bold text-green-700">
              ₹{product.price}
            </h3>

            <p className="text-gray-500 mt-2">
              Price per plant
            </p>

            <div className="mt-10">

              <h4 className="font-semibold text-lg mb-4">
                Quantity
              </h4>

              <div className="flex items-center gap-4">

                <button
                  onClick={decrease}
                  className="w-12 h-12 rounded-xl bg-gray-200 hover:bg-gray-300 text-2xl transition"
                >
                  −
                </button>

                <div className="w-12 text-center text-2xl font-bold">
                  {quantity}
                </div>

                <button
                  onClick={increase}
                  className="w-12 h-12 rounded-xl bg-green-700 hover:bg-green-800 text-white text-2xl transition"
                >
                  +
                </button>

              </div>

            </div>

            <div className="mt-10">

              <p className="text-gray-500">
                Total Amount
              </p>

              <h2 className="text-5xl font-bold text-green-700">
                ₹{total}
              </h2>

            </div>

            <Link href={`/checkout?quantity=${quantity}`}>
              <button className="mt-10 w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-xl text-lg font-semibold transition">
                Buy Now
              </button>
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}