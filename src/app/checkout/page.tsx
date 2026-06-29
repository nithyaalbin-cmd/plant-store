"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getProduct } from "@/data/getProduct";
import { createOrder } from "@/data/createOrder";

export default function CheckoutPage() {
  const searchParams = useSearchParams();

  const quantity = Number(searchParams.get("quantity")) || 1;

  const [product, setProduct] = useState<any>(null);

  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadProduct() {
      const data = await getProduct();
      setProduct(data);
    }

    loadProduct();
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-semibold text-green-700">
        Loading...
      </div>
    );
  }

  const total = quantity * product.price;

  async function handlePlaceOrder() {
    if (
      customerName.trim() === "" ||
      phone.trim() === "" ||
      address.trim() === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);

    const result = await createOrder({
      customer_name: customerName,
      phone,
      address,
      product_name: product.name,
      quantity,
      total,
    });

    setLoading(false);

    if (result.success) {
      alert("🎉 Order placed successfully!");

      setCustomerName("");
      setPhone("");
      setAddress("");
    } else {
      alert("Something went wrong while placing your order.");
    }
  }

  return (
    <main className="min-h-screen bg-green-50 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-10">

        <h1 className="text-5xl font-bold text-green-700 text-center">
          Checkout
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-10">
          Complete your order
        </p>

        <div className="space-y-6">

          <div>
            <label className="block font-semibold mb-2">
              Customer Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Phone Number
            </label>

            <input
              type="text"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Delivery Address
            </label>

            <textarea
              rows={4}
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

        </div>

        <div className="mt-10 bg-green-100 rounded-2xl p-6">

          <h2 className="text-2xl font-bold mb-6">
            Order Summary
          </h2>

          <div className="flex justify-between mb-3">
            <span>Product</span>
            <span>{product.name}</span>
          </div>

          <div className="flex justify-between mb-3">
            <span>Price</span>
            <span>₹{product.price}</span>
          </div>

          <div className="flex justify-between mb-3">
            <span>Quantity</span>
            <span>{quantity}</span>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between text-3xl font-bold text-green-700">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

        </div>

        <button
          onClick={handlePlaceOrder}
          disabled={loading}
          className="mt-10 w-full bg-green-700 hover:bg-green-800 disabled:bg-gray-400 text-white py-4 rounded-xl text-lg font-semibold transition"
        >
          {loading ? "Placing Order..." : "Place Order"}
        </button>

      </div>
    </main>
  );
}