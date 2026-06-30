"use client";

import { useEffect, useState } from "react";

import { Product } from "@/types";
import { getProduct } from "@/data/getProduct";
import { updateProduct } from "@/data/updateProduct";

export default function AdminProductsPage() {
  const [product, setProduct] = useState<Product | null>(null);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

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
          Loading Product...
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

  async function handleSave() {
    setSaving(true);

    const success = await updateProduct(product);

    setSaving(false);

    if (success) {
      alert("Product updated successfully!");
    } else {
      alert("Failed to update product.");
    }
  }

  return (
    <main className="min-h-screen bg-green-50 py-10 px-6">

      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-green-700 mb-8">
          Product Management
        </h1>

        <div className="space-y-6">

          <div>
            <label className="block font-semibold mb-2">
              Product Name
            </label>

            <input
              value={product.name}
              onChange={(e) =>
                setProduct({
                  ...product,
                  name: e.target.value,
                })
              }
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Price
            </label>

            <input
              type="number"
              value={product.price}
              onChange={(e) =>
                setProduct({
                  ...product,
                  price: Number(e.target.value),
                })
              }
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Description
            </label>

            <textarea
              rows={5}
              value={product.description}
              onChange={(e) =>
                setProduct({
                  ...product,
                  description: e.target.value,
                })
              }
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Rating
            </label>

            <input
              type="number"
              step="0.1"
              value={product.rating}
              onChange={(e) =>
                setProduct({
                  ...product,
                  rating: Number(e.target.value),
                })
              }
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <div className="flex items-center gap-3">

            <input
              type="checkbox"
              checked={product.stock}
              onChange={(e) =>
                setProduct({
                  ...product,
                  stock: e.target.checked,
                })
              }
            />

            <label className="font-semibold">
              Product In Stock
            </label>

          </div>

          <button
            onClick={handleSave}
            disabled={saving}
            className="w-full bg-green-700 hover:bg-green-800 disabled:bg-gray-400 text-white py-4 rounded-xl font-semibold"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>

        </div>

      </div>

    </main>
  );
}