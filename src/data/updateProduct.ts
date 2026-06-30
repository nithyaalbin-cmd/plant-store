import { supabase } from "@/lib/supabase";

interface UpdateProductData {
  id: number;
  name: string;
  price: number;
  description: string;
  stock: boolean;
  rating: number;
}

export async function updateProduct(product: UpdateProductData) {
  const { error } = await supabase
    .from("products")
    .update({
      name: product.name,
      price: product.price,
      description: product.description,
      stock: product.stock,
      rating: product.rating,
    })
    .eq("id", product.id);

  if (error) {
    console.error(error);
    return false;
  }

  return true;
}