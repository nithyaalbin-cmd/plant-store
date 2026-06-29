import { supabase } from "@/lib/supabase";

export async function deleteOrder(id: number) {
  const { error } = await supabase
    .from("orders")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Error deleting order:", error);
    return false;
  }

  return true;
}