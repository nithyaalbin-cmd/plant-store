import { supabase } from "@/lib/supabase";

export async function signIn(
  email: string,
  password: string
) {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error(error);
    return false;
  }

  return true;
}