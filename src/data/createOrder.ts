import { supabase } from "@/lib/supabase";

interface CreateOrderData {
  customer_name: string;
  phone: string;

  house_name: string;
  place: string;
  district: string;
  pincode: string;
  landmark: string;

  product_name: string;
  quantity: number;
  total: number;
}

export async function createOrder(order: CreateOrderData) {
  const { error } = await supabase
    .from("orders")
    .insert([
      {
        customer_name: order.customer_name,
        phone: order.phone,

        house_name: order.house_name,
        place: order.place,
        district: order.district,
        pincode: order.pincode,
        landmark: order.landmark,

        product_name: order.product_name,
        quantity: order.quantity,
        total: order.total,

        status: "Pending",
      },
    ]);

  if (error) {
    console.error(error);
    return {
      success: false,
    };
  }

  return {
    success: true,
  };
}