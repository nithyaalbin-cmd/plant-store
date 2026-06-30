"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import { useProduct } from "@/hooks/useProduct";

export default function Home() {
  const { product, loading, error } = useProduct();

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-green-50">
        <h1 className="text-3xl font-bold text-green-700">
          Loading Amma Gardens...
        </h1>
      </main>
    );
  }

  if (error || !product) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-green-50">
        <h1 className="text-2xl font-bold text-red-600">
          Failed to load product.
        </h1>
      </main>
    );
  }

  return (
    <>
      <Navbar />
      <Hero product={product} />
      <ProductCard product={product} />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </>
  );
}