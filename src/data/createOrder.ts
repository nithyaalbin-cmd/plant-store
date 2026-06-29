import { supabase } from "@/lib/supabase";

type OrderData = {
  customer_name: string;
  phone: string;
  address: string;
  product_name: string;
  quantity: number;
  total: number;
};

export async function createOrder(order: OrderData) {
  const { data, error } = await supabase
    .from("orders")
    .insert([order])
    .select();

  if (error) {
    console.error("Supabase Insert Error:", error);
    return {
      success: false,
      error,
    };
  }

  return {
    success: true,
    data,
  };
}