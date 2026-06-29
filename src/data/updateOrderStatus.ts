import { supabase } from "@/lib/supabase";

export async function updateOrderStatus(id: number) {
  const { error } = await supabase
    .from("orders")
    .update({
      status: "Delivered",
    })
    .eq("id", id);

  if (error) {
    console.error("Error updating order:", error);
    return false;
  }

  return true;
}