"use client";

import { useEffect, useState } from "react";
import { getProduct } from "@/data/getProduct";
import { Product } from "@/types";

export function useProduct() {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProduct() {
      try {
        const data = await getProduct();

        if (!data) {
          setError("Unable to load product.");
        } else {
          setProduct(data);
        }
      } catch {
        setError("Something went wrong.");
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, []);

  return {
    product,
    loading,
    error,
  };
}