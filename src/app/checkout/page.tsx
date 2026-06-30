"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import CheckoutForm from "@/components/CheckoutForm";
import { createOrder } from "@/data/createOrder";
import { getProduct } from "@/data/getProduct";
import { Product } from "@/types";

export default function CheckoutPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const quantity = Number(searchParams.get("quantity")) || 1;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [placingOrder, setPlacingOrder] = useState(false);

  useEffect(() => {
    async function loadProduct() {
      const data = await getProduct();

      if (data) {
        setProduct(data);
      }

      setLoading(false);
    }

    loadProduct();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-green-700">
          Loading...
        </h1>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-red-600">
          Product not found.
        </h1>
      </main>
    );
  }

  async function handleSubmit(formData: {
    customer_name: string;
    phone: string;
    house_name: string;
    place: string;
    district: string;
    pincode: string;
    landmark: string;
  }) {
    setPlacingOrder(true);

    const result = await createOrder({
      ...formData,
      product_name: product.name,
      quantity,
      total: quantity * product.price,
    });

    setPlacingOrder(false);

    if (result.success) {
      router.push("/success");
    } else {
      alert("Failed to place order.");
    }
  }

  return (
    <main className="min-h-screen bg-green-50 py-12 px-6">

      <div className="max-w-3xl mx-auto">

        <CheckoutForm
          productName={product.name}
          quantity={quantity}
          total={quantity * product.price}
          onSubmit={handleSubmit}
        />

        {placingOrder && (
          <p className="text-center mt-6 text-green-700 font-semibold">
            Placing your order...
          </p>
        )}

      </div>

    </main>
  );
}